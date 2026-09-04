"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import { dict, type Locale } from "@/lib/i18n";

const KEY = "lang";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function readStored(): Locale {
  return localStorage.getItem(KEY) === "pt" ? "pt" : "en";
}

function writeStored(lang: Locale) {
  localStorage.setItem(KEY, lang);
  listeners.forEach((cb) => cb());
}

type LanguageContextValue = {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: (typeof dict)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore<Locale>(
    subscribe,
    readStored,
    () => "en",
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Locale) => writeStored(next), []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
