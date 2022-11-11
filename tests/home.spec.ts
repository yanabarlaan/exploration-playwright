import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";

test.describe("Home", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test("Open HomePage and verify title", async ({ page }) => {
    homePage = new HomePage(page);

    // open url
    //await page.goto("https://practice.automationbro.com/");
    await homePage.navigate();
    // verify title
    await expect(page).toHaveTitle("Practice E-Commerce Site – Automation Bro");
  });

  test.skip("Navigate to About page and verify the title", async ({ page }) => {
    // open url
    await page.goto("https://practice.automationbro.com/about");

    // verify title
    await expect(page).toHaveTitle("About – Practice E-Commerce Site");
  });

  test("Click get started button using CSS Selector", async ({ page }) => {
    //homePage = new HomePage(page);

    // open url
    //await page.goto("https://practice.automationbro.com");
    //await homePage.navigate();

    // click the button
    //await page.locator("#get-started").click();
    await homePage.getStartedBtn.click();

    // verify url has get-started
    await expect(page).toHaveURL(/.*#get-started/);
  });

  test("Verify heading text is visible using text selector", async ({
    page,
  }) => {
    //homePage = new HomePage(page);

    // open url
    //await page.goto("https://practice.automationbro.com");
    //await homePage.navigate();

    // find the text locator
    // const headingText = await page.locator(
    //   "text=Think different. Make different."
    // );
    const headingText = await homePage.headingText;

    // verify heading text is visible
    await expect(headingText).toBeVisible();
  });

  test("Verify home link is enabled using text and css selector", async ({
    page,
  }) => {
    //homePage = new HomePage(page);

    // open url
    //await page.goto("https://practice.automationbro.com");
    //await homePage.navigate();

    // find the home text
    //const homeText = await page.locator("#primary-menu >> text=Home");
    // const homeText = await page.locator("#primary-menu:has-text('Home')");
    const homeText = await homePage.homeLink;

    // verify home text is enabled
    await expect(homeText).toBeEnabled();
  });

  test("Verify search icon is visible using xpath selector", async ({
    page,
  }) => {
    //homePage = new HomePage(page);

    // open url
    // await page.goto("https://practice.automationbro.com");
    //await homePage.navigate();

    // find the search icon
    // const seachIcon = await page.locator(
    //   '//*[@id="header-action"]//*[@class="tg-icon tg-icon-search"]'
    // );
    const seachIcon = await homePage.searchIcon;

    // verify home text is enabled
    await expect(seachIcon).toBeVisible();
  });

  test("Verify text of all nav links", async ({ page }) => {
    //homePage = new HomePage(page);

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    // open url
    // await page.goto("https://practice.automationbro.com");
    //await homePage.navigate();

    // find the nav links
    // const navLinks = page.locator("#primary-menu li[id*=menu]"); //.nth(3);
    //const navLinks = await homePage.navLinks;

    // print out all the links
    // for (const el of await navLinks.elementHandles()) {
    //   console.log(await el.textContent());
    // }

    // verify nav links text
    //await expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    //await expect(await navLinks.textContent()).toEqual(expectedLinks[3]);

    //loop
    // await expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    await expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
  });
});
