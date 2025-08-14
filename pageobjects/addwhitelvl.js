import { $, browser } from "@wdio/globals";
import Page from "./page.js";

class WhiteLvl extends Page {
  async addWhiteLvl() {
    // Wait until "Admin Setting" is visible
    const adminSettingBtn = await $('//*[text()="Admin Setting"]');
    await adminSettingBtn.waitForDisplayed({ timeout: 10000 });

    // Click "Admin Setting"
    await adminSettingBtn.click();

    const domainListBtn = await $(
      '//div[@class="cursor-pointer"]//img[@alt="Domain List"]'
    );
    await domainListBtn.waitForDisplayed({ timeout: 10000 });

    // Click "Admin Setting"
    await domainListBtn.click();

    const addDomainBtn = await $('//*[text()="Add Domain"]');
    await addDomainBtn.waitForDisplayed({ timeout: 10000 });

    // Click "Admin Setting"
    await addDomainBtn.click();

    // Wait for the input to be visible
    const nameInput = await $('//input[@name="name"]');
    await nameInput.waitForDisplayed({ timeout: 5000 });

    // Type into the input
    await nameInput.setValue("zgsch");


    const userDomainInput = await $('//input[@name="user_domain"]');
    await userDomainInput.waitForDisplayed({ timeout: 5000 });

    // Type into the input
    await userDomainInput.setValue("localhost:3099");

    const userWebTittle = await $('//input[@name="user_web_title"]');
    await userWebTittle.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await userWebTittle.setValue("zgsch");

    const adminDomain = await $('//input[@name="admin_domain"]');
    await adminDomain.waitForDisplayed({ timeout: 5000 });

    // Type into the input
    await adminDomain.setValue("Zay Global - User Portal");
    const adminWebTittle = await $('//input[@name="admin_web_title"]');
    await adminWebTittle.waitForDisplayed({ timeout: 5000 });

    // Type into the input
    await adminWebTittle.setValue("Zay Global - User Portal");
    await browser.pause(20000);

    const altText = await $('//input[@name="alt_text"]');
    await altText.waitForDisplayed({ timeout: 5000 });

    // Type into the input
    await altText.setValue("Company Logo");
    const Prefix = await $('//input[@name="prefix"]');
    await Prefix.waitForDisplayed({ timeout: 5000 });

    // Type into the input
    await Prefix.setValue("cc");


    const signupUrl = await $('//input[@name="sign_up_url"]');
    await signupUrl.waitForDisplayed({ timeout: 5000 });

    // Type into the input
    await signupUrl.setValue("https://zayglobalsolutions.com/signup");

    const clickOnCreateBtn = await $('//*[text()="Create"]');
    await clickOnCreateBtn.waitForDisplayed({ timeout: 10000 });

    // Click "Admin Setting"
    await clickOnCreateBtn.click();
    await browser.pause(5000); // wait for the page to load
  }
}

export default new WhiteLvl();
