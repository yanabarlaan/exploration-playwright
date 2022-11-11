import { test, expect } from "@playwright/test";

test.describe("My Account", () => {
  //test.describe.serial("My Account", () => {
  // test.beforeEach(async ({ page }) => {
  //   await page.goto("/my-account");
  //   await page.locator("#username").fill("practiceuser1");
  //   await page.locator("#password").fill("PracticePass1!");
  //   await page.locator('[value="Log in"]').click();
  //   await expect(page.locator('a:has-text("Logout")')).toBeVisible();
  // });

  //let page: Page;
  // test.beforeAll(async ({ browser }) => {
  //   page = await browser.newPage();
  //   await page.goto("/my-account");
  //   await page.locator("#username").fill("practiceuser1");
  //   await page.locator("#password").fill("PracticePass1!");
  //   await page.locator('[value="Log in"]').click();
  //   await expect(page.locator('a:has-text("Logout")')).toBeVisible();
  // });

  // Remove the page block if you use describe.serial and beforeAll hooks
  test("Access Orders", async ({ page }) => {
    await page.goto("/my-account");
    await page.locator(`li a[href*='orders']`).click();
    await expect(page).toHaveURL(/.*orders/);
    // const successAlert = page.locator('li[role="menuitem"]').nth(1);
    // await expect(successAlert).toHaveText("Dashboard", { timeout: 10000 });
    // await page.waitForTimeout(50000);
  });

  test("Access Downloads", async ({ page }) => {
    await page.goto("/my-account");
    await page.locator(`li a[href*='downloads']`).click();
    await expect(page).toHaveURL(/.*downloads/);
  });

  test.describe("Account Page", () => {
    test.use({ storageState: "notLoggedInState.json" });

    test("Verify login and register is visible", async ({ page }) => {
      await page.goto("/my-account");
      await expect(page.locator('form[class*="login"]')).toBeVisible();
      await expect(page.locator('form[class*="register"]')).toBeVisible();
    });
  });
});
