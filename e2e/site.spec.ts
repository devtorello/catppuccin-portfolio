import { test, expect } from "@playwright/test";
import { site } from "../lib/content";

test("home renders the hero", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Grab a coffee.", level: 1 }),
  ).toBeVisible();
  await expect(
    page.getByText(/still can't stay out of the codebase/),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "What working with me looks like" }),
  ).toBeVisible();
});

test("language toggle switches EN <-> PT", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "PT", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Pega um café.", level: 1 }),
  ).toBeVisible();
  await page.getByRole("button", { name: "EN", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Grab a coffee.", level: 1 }),
  ).toBeVisible();
});

test("theme toggle switches to dark", async ({ page }) => {
  await page.goto("/");
  const html = page.locator("html");
  await expect(html).toHaveClass(/light/); // system = light in this project
  await page.getByRole("button", { name: "Toggle theme" }).click();
  await expect(html).toHaveClass(/dark/);
});

test("primary links point to the right places", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /Get in touch/ })).toHaveAttribute(
    "href",
    /^mailto:/,
  );
  await expect(
    page.getByRole("link", { name: "GitHub" }).first(),
  ).toHaveAttribute("href", /github\.com/);
});

test("optional 'Working at' section respects the flag", async ({ page }) => {
  await page.goto("/");
  const cta = page.getByRole("link", { name: /See open roles/ });
  if (site.showWorkingAt) {
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", site.careers);
  } else {
    await expect(cta).toHaveCount(0);
  }
});

test("writing page shows the empty state", async ({ page }) => {
  await page.goto("/writing");
  await expect(page.getByText("No posts yet.")).toBeVisible();
});

test("SEO + asset endpoints respond 200", async ({ request }) => {
  for (const path of [
    "/sitemap.xml",
    "/robots.txt",
    "/opengraph-image",
    "/icon",
  ]) {
    const res = await request.get(path);
    expect(res.status(), path).toBe(200);
  }
});
