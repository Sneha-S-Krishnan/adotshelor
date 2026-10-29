import { test, expect } from "@playwright/test";

test.describe("Contact Page & Inquiry Flow", () => {
  test("renders contact page and validates required fields", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.locator("h1")).toContainText("Let's Build");

    // Form inputs
    const nameInput = page.locator("#name");
    const emailInput = page.locator("#email");
    const subjectInput = page.locator("#subject");
    const messageInput = page.locator("#message");
    const submitBtn = page.locator('button[type="submit"]');

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(subjectInput).toBeVisible();
    await expect(messageInput).toBeVisible();
    await expect(submitBtn).toBeVisible();

    // Verify service interest buttons
    const problemBtn = page.locator('button:has-text("Problem Solving")');
    await expect(problemBtn).toBeVisible();
    await problemBtn.click();

    // Fill out form
    await nameInput.fill("Automated Test Engineer");
    await emailInput.fill("test@example.com");
    await subjectInput.fill("E2E Test Inquiry");
    await messageInput.fill("This is an automated verification of the contact form submission.");

    // Submit inquiry
    await submitBtn.click();

    // Verify response feedback alert appears
    const feedback = page.locator("text=Thank you");
    await expect(feedback).toBeVisible({ timeout: 10000 });
  });
});

