import type { Metadata } from "next";
import { site } from "@/lib/content";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Technical Lead`,
    template: `%s · ${site.name}`,
  },
  description: site.seoDescription,
  openGraph: {
    title: `${site.name} — Technical Lead`,
    description: site.seoDescription,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Technical Lead`,
    description: site.seoDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full">
        <ThemeProvider>
          <LanguageProvider>
            <div className="mx-auto flex max-w-2xl flex-col px-6">
              <a
                href="#main-content"
                className="sr-only rounded-md bg-background px-3 py-2 text-sm text-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
              >
                Skip to main content
              </a>
              <SiteHeader />
              <main id="main-content">{children}</main>
              <SiteFooter />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
