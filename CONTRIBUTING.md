# Contributing

Thanks for taking a look! This is a small, friendly project — contributions are welcome, whether it's a bug fix, a new theme flavor, docs, or an accessibility improvement.

## Ground rules

- Be kind. This is a beginner-friendly repo; questions are always fine.
- Keep it minimal. The whole point of this template is that it stays small and easy to read.

## Getting set up

```bash
git clone https://github.com/<you>/catppuccin-portfolio.git
cd catppuccin-portfolio
pnpm install
pnpm dev
```

## Before opening a PR

```bash
pnpm lint      # must pass
pnpm test      # unit tests must pass
pnpm test:e2e  # end-to-end tests must pass
pnpm build     # must succeed
```

- Keep PRs focused — one change per PR.
- If you're changing behavior or UI, a short before/after note (or screenshot) helps a lot.
- Personal content lives in `lib/content.ts`; please don't hardcode copy elsewhere.

## Ideas that would be great

- More Catppuccin flavors (Frappé, Mocha) as easy presets
- Additional languages in `dict`
- Small accessibility or performance wins

## Questions?

Open an issue — happy to help, even if it's your first open-source contribution. 💚
