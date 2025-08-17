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
    await Prefix.setValue("zx");


    const signupUrl = await $('//input[@name="sign_up_url"]');
    await signupUrl.waitForDisplayed({ timeout: 5000 });

    // Type into the input
    await signupUrl.setValue("https://zayglobalsolutions.com/signup");

    const clickOnCreateBtn = await $('//*[text()="Create"]');
    await clickOnCreateBtn.waitForDisplayed({ timeout: 10000 });

    // Click "Admin Setting"
    await clickOnCreateBtn.click();
    await browser.pause(5000); // wait for the page to load

    await $('(//button[.//img[@alt="add_user"]])[1]').click();
    // Wait for the input to be visible
    const addEmail = await $('//input[@name="email"]');
    await addEmail.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addEmail.setValue('durjoy0@gmail.com');

    const addUsername = await $('//input[@name="username"]');
    await addUsername.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addUsername.setValue('durjoy');

    const addPassword = await $('//input[@name="password"]');
    await addPassword.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addPassword.setValue('Durjoy@123');

    const addConfirmPassword = await $('//input[@name="confirm_password"]');
    await addConfirmPassword.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addConfirmPassword.setValue('Durjoy@123');

    const addUserBtn = await $('//*[text()="Create"]');
    await addUserBtn.waitForDisplayed({ timeout: 10000 });
    // Click "Admin Setting"
    await addUserBtn.click();

    // Wait for the success message to appear
    const successMessage = await $('//*[text()="User created successfully."]');
    await successMessage.waitForDisplayed({ timeout: 10000 });
    // Verify the success message
    const messageText = await successMessage.getText();
    if (messageText === "User created successfully.") {
      console.log("User created successfully.");
    } else {
      console.error("Failed to create user.");
    }

    await $('(//*[text()="White Level"])[1]').click();
    await $('//*[text()="Add Super Admin"]')

    const addsprEmail = await $('//input[@name="email"]');
    await addsprEmail.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addsprEmail.setValue('durjoy0@gmail.com');

    const addsprUsername = await $('//input[@name="username"]');
    await addsprUsername.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addsprUsername.setValue('durjoy');

    const addSprPassword = await $('//input[@name="password"]');
    await addSprPassword.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addSprPassword.setValue('Durjoy@123');

    const addsprConfirmPassword = await $('//input[@name="confirm_password"]');
    await addsprConfirmPassword.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addsprConfirmPassword.setValue('Durjoy@123');

    const addsprUserBtn = await $('//*[text()="Create"]');
    await addsprUserBtn.waitForDisplayed({ timeout: 10000 });
    // Click "Admin Setting"
    await addsprUserBtn.click();
  }
}

export default new WhiteLvl();
