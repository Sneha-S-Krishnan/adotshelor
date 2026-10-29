import { test, expect } from "@playwright/test";

test.describe("Hero Section & Video Loop Integrity", () => {
  test("homepage loads and video loop hero element is preserved", async ({ page }) => {
    await page.goto("/");

    // Verify main headline is visible
    const headline = page.locator("h1.hero__title");
    await expect(headline).toBeVisible();
    await expect(headline).toContainText("From Problems to");

    // Verify the video loop hero element
    const video = page.locator("video.hero__video");
    await expect(video).toBeAttached();

    // Verify critical video loop attributes to ensure loop hero is intact
    await expect(video).toHaveAttribute("src", "/hero-loop.mp4");
    await expect(video).toHaveAttribute("loop", "");
    await expect(video).toHaveAttribute("autoplay", "");
    await expect(video).toHaveAttribute("muted", "");

    // Verify primary hero action links
    const ctaPrimary = page.locator("a.hero__go");
    await expect(ctaPrimary).toHaveAttribute("href", "/contact");

    const ctaSecondary = page.locator("a.hero__secondary");
    await expect(ctaSecondary).toHaveAttribute("href", "/projects");
  });
});

