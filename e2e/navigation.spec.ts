import { test, expect } from "@playwright/test";

test.describe("Navbar & Dedicated Pages Routing", () => {
  const routes = [
    { label: "Home", path: "/", expectedHeading: "From Problems to" },
    { label: "About", path: "/about", expectedHeading: "Software Crafted with" },
    { label: "Services", path: "/services", expectedHeading: "Engineered for Purpose." },
    { label: "Projects", path: "/projects", expectedHeading: "Real Systems." },
    { label: "Our Approach", path: "/approach", expectedHeading: "A Structured Process." },
    { label: "Contact", path: "/contact", expectedHeading: "Let's Build" },
  ];

  for (const route of routes) {
    test(`renders dedicated page ${route.path} with valid heading and navbar active indicator`, async ({
      page,
    }) => {
      await page.goto(route.path);

      // Verify page heading
      const heading = page.locator("main h1").first();
      await expect(heading).toContainText(route.expectedHeading);

      // Verify active link in desktop navbar when visible
      const desktopNav = page.locator('nav[aria-label="Primary"]');
      if (await desktopNav.isVisible()) {
        const activeLink = desktopNav.locator(`a[href="${route.path}"]`);
        await expect(activeLink).toHaveAttribute("aria-current", "page");
      }
    });
  }

  test("clicking navbar links navigates seamlessly to separate pages", async ({ page, isMobile }) => {
    await page.addInitScript(() => {
      sessionStorage.setItem("adotshelor_intro_seen", "true");
    });
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    if (!isMobile) {
      // Desktop navigation flow
      const desktopNav = page.locator('header nav[aria-label="Primary"]');
      await expect(desktopNav).toBeVisible();

      // Click About
      await desktopNav.locator('a[href="/about"]').click();
      await expect(page).toHaveURL("/about", { timeout: 15000 });
      await expect(page.locator("main h1").first()).toContainText("Software Crafted with", { timeout: 10000 });

      // Click Services
      await page.locator('header nav[aria-label="Primary"] a[href="/services"]').first().click();
      await expect(page).toHaveURL("/services", { timeout: 15000 });
      await expect(page.locator("main h1").first()).toContainText("Engineered for Purpose.", { timeout: 10000 });

      // Click Projects
      await page.locator('header nav[aria-label="Primary"] a[href="/projects"]').first().click();
      await expect(page).toHaveURL("/projects", { timeout: 15000 });
      await expect(page.locator("main h1").first()).toContainText("Real Systems.", { timeout: 10000 });
    } else {
      // Mobile drawer navigation flow
      const burger = page.locator('button[aria-label="Open menu"]');
      await expect(burger).toBeVisible({ timeout: 10000 });
      await burger.click({ force: true });

      // Click About in mobile menu
      const mobileAbout = page.locator('[data-testid="mobile-menu"] a[href="/about"]');
      await expect(mobileAbout).toBeVisible({ timeout: 5000 });
      await page.waitForTimeout(300);
      await mobileAbout.click({ force: true });
      await expect(page).toHaveURL("/about", { timeout: 15000 });
      await expect(page.locator("main h1").first()).toContainText("Software Crafted with", { timeout: 10000 });
    }
  });
});
