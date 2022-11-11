import { test, expect } from "@playwright/test";
import ContactPage from "../pages/contact.page";
import Chance from "chance";

const chance = new Chance();
const chanceEmail = chance.email({ domain: "hov-qa.com" });
const chanceName = chance.name();
const chancePhone = chance.phone();
const chanceMessage = chance.word({ syllables: 4 });

test.describe("Contact", () => {
  let contactPage: ContactPage;

  test("Fill contact form and verify sucess message", async ({ page }) => {
    contactPage = new ContactPage(page);

    // // open the page
    await contactPage.navigate();
    // await page.goto("https://practice.automationbro.com/contact/");

    // await page.pause();

    // // fill out the input fields
    await contactPage.submitForm(
      chanceName,
      chanceEmail,
      chancePhone,
      chanceMessage
    );
    // await page.getByLabel("Name *").fill(`Sample Name`);
    // //await page.locator(`.contact-name input`).fill(`Sample Name`);
    // await page.locator(`.contact-email input`).fill(`hovsqa@gmail.com`);
    // await page.locator(`.contact-phone input`).fill(`1234569`);
    // await page.locator(`.contact-message textarea`).fill(`Sample text message`);

    // // add a soft assertion
    // await expect
    //   .soft(page.locator(".contact-message textarea"))
    //   .toHaveText("Fail test message");

    // // click submit
    // await page.locator("button[type=submit]").click();

    // expect(test.info().errors.length).toBeLessThan(1);

    // verify success message
    await expect(contactPage.successTxt).toHaveText(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
    // const successAlert = page.locator('div[role="alert"]');
    // await expect(successAlert).toHaveText(
    //   "Thanks for contacting us! We will be in touch with you shortly"
    // );
  });
});
