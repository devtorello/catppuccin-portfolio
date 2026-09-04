# catppuccin-portfolio

A minimal, bilingual developer portfolio built with the [Catppuccin](https://catppuccin.com) palette — Latte in light mode, Macchiato in dark. Fast, static, and easy to make your own.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Catppuccin](https://img.shields.io/badge/theme-Catppuccin-cba6f7)
![License: MIT](https://img.shields.io/badge/license-MIT-40A02B)

**Live demo:** [vitorello.dev](https://vitorello.dev)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdevtorello%2Fcatppuccin-portfolio)

![Portfolio preview](https://vitorello.dev/opengraph-image)

| Light — Catppuccin Latte | Dark — Catppuccin Macchiato |
|:---:|:---:|
| ![Light mode](./docs/screenshot-light.png) | ![Dark mode](./docs/screenshot-dark.png) |

## Features

- 🎨 **Catppuccin theming** — Latte (light) + Macchiato (dark), one accent + highlight
- 🌗 **Light / dark toggle** — system-aware, remembers your choice (`next-themes`)
- 🌐 **Bilingual** — English / Portuguese toggle, all copy in one dictionary
- ✍️ **MDX blog** — drop a `.mdx` file in `content/writing/`, it just appears
- 🖼️ **Dynamic OG image** — generated with `next/og`, no design tool needed
- 🔎 **SEO ready** — sitemap, robots, Open Graph, favicon, all generated
- ⚡ **Static & fast** — Next.js 16 App Router + Tailwind CSS v4

## Tech stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · next-themes · next-mdx-remote

## Getting started

```bash
git clone https://github.com/devtorello/catppuccin-portfolio.git
cd catppuccin-portfolio
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000).

## Make it yours

Almost everything lives in a few files. Edit these and you have your own site:

| What | Where |
|------|-------|
| **All text** — name, company, links, SEO, and every bit of copy (EN + PT) | **`lib/content.ts`** — one file, fully commented |
| **Your photo** | `public/avatar.jpeg` (see note below) |
| **Colors / theme** | `app/globals.css` — swap the Catppuccin flavors or your own palette |
| **OG share image** | `app/opengraph-image.tsx` — text, colors, layout |
| **Favicon** | `app/icon.tsx` — the letter and color |
| **Blog posts** | `content/writing/*.mdx` — copy `_template.mdx` to start |

> Start with **`lib/content.ts`** — it opens with a checklist and every section is labeled.

### One language only?

Prefer a single language? In `lib/content.ts`, keep just the `en` (or `pt`) block in `dict`, and remove the `LanguageToggle` from `components/site-header.tsx`.

### About the photo

This repo keeps the owner's personal photo **out of git** (`public/avatar.jpeg` is in `.gitignore`) and ships it to production via the Vercel CLI (`.vercelignore` re-includes it). You have two options:

- **Commit your photo** (simplest): remove the `public/avatar.jpeg` line from `.gitignore`, delete `.vercelignore`, and deploy with Vercel's Git integration for automatic deploys.
- **Keep it private** (like this repo): leave the ignores as-is, keep `public/avatar.jpeg` locally, and deploy with `vercel --prod`.

Don't want a photo at all? Remove the `<Image>` block at the top of `components/home-content.tsx`.

## Deploy

Deploy on [Vercel](https://vercel.com) — import the repo (or run `vercel --prod`). Add your custom domain in the project settings and point a DNS `A` record at `76.76.21.21`.

## Credits

- [Catppuccin](https://catppuccin.com) for the palette 💚
- [Next.js](https://nextjs.org) · [Tailwind CSS](https://tailwindcss.com)

## License

[MIT](./LICENSE) — do whatever you like. A link back is appreciated but not required.
