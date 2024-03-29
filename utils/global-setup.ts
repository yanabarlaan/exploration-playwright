import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // login
  // await page.goto("http://admin-staging.aonewallet.com/signin");
  // await page.waitForTimeout(5000);
  await page.goto("https://practice.automationbro.com/my-account");
  await page.context().storageState({ path: "notLoggedInState.json" });

  await page.locator("#username").fill("practiceuser1");
  await page.locator("#password").fill("PracticePass1!");
  await page.locator('[value="Log in"]').click();
  // // for wallet
  // await page.getByPlaceholder(`Username`).type("admin88");
  // await page.getByPlaceholder(`Password`).type("password");
  // await page.getByRole(`button`, { name: `Signin` }).click();
  // await page.waitForTimeout(5000);
  // save signed-in state to 'loggedInState.json'
  await page.context().storageState({ path: "loggedInState.json" });
  await browser.close();
}

export default globalSetup;
