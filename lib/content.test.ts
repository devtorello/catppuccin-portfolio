import { describe, it, expect } from "vitest";
import { site, tools, dict, type Locale } from "./content";

const locales: Locale[] = ["en", "pt"];

// Recursively collect the "shape" (nested key paths) of an object, treating
// arrays as leaves so we compare structure without depending on list length.
function keyPaths(value: unknown, prefix = ""): string[] {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.entries(value).flatMap(([k, v]) => keyPaths(v, `${prefix}.${k}`));
  }
  return [prefix];
}

function leafStrings(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(leafStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(leafStrings);
  return [String(value)];
}

describe("site metadata", () => {
  it("has the required fields", () => {
    expect(site.name).toBeTruthy();
    expect(site.company).toBeTruthy();
    expect(site.url).toMatch(/^https?:\/\//);
    expect(site.careers).toMatch(/^https?:\/\//);
    expect(site.seoDescription.length).toBeGreaterThan(20);
  });

  it("has valid social links", () => {
    expect(site.socials.email).toMatch(/^mailto:/);
    expect(site.socials.github).toMatch(/^https:\/\/github\.com\//);
    expect(site.socials.linkedin).toMatch(/^https:\/\/(www\.)?linkedin\.com\//);
  });
});

describe("tools", () => {
  it("is a non-empty separated list", () => {
    expect(tools.split("·").length).toBeGreaterThan(2);
  });
});

describe("i18n dictionary", () => {
  it("ships exactly the expected locales", () => {
    expect(Object.keys(dict).sort()).toEqual(["en", "pt"]);
  });

  it("has identical key structure across locales", () => {
    const en = new Set(keyPaths(dict.en));
    const pt = new Set(keyPaths(dict.pt));
    expect([...en].sort()).toEqual([...pt].sort());
  });

  it("keeps list sections the same length across locales", () => {
    expect(dict.en.expertise.items.length).toBe(dict.pt.expertise.items.length);
    expect(dict.en.certifications.items.length).toBe(dict.pt.certifications.items.length);
    expect(dict.en.languages.items.length).toBe(dict.pt.languages.items.length);
  });

  it("has no empty strings in any locale", () => {
    for (const loc of locales) {
      for (const s of leafStrings(dict[loc])) {
        expect(s.trim()).not.toBe("");
      }
    }
  });
});
