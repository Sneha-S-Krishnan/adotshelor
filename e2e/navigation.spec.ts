import { test, expect } from "@playwright/test";

test.describe("Single Page Smooth Navigation & Section Anchors", () => {
  test("homepage renders all core sections with valid anchor targets", async ({ page }) => {
    await page.addInitScript(() => {
      sessionStorage.setItem("adotshelor_intro_seen", "true");
    });
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    // Verify all primary sections exist
    const sections = ["home", "services", "approach", "projects", "about", "contact"];
    for (const id of sections) {
      const section = page.locator(`section#${id}`);
      await expect(section).toBeAttached();
    }
  });

  test("clicking navbar links scrolls smoothly to target sections", async ({ page }) => {
    await page.addInitScript(() => {
      sessionStorage.setItem("adotshelor_intro_seen", "true");
    });
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    // Click Services anchor
    const servicesLink = page.locator('a[href="#services"]').first();
    await expect(servicesLink).toBeVisible();
    await servicesLink.click();

    // Verify Services section is visible in viewport
    const servicesSection = page.locator("section#services");
    await expect(servicesSection).toBeInViewport();

    // Click Contact anchor
    const contactLink = page.locator('a[href="#contact"]').first();
    await expect(contactLink).toBeVisible();
    await contactLink.click();

    // Verify Contact section is visible in viewport
    const contactSection = page.locator("section#contact");
    await expect(contactSection).toBeInViewport();
  });
});
