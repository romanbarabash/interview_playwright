import { expect, test } from "@playwright/test";
import { PageManager } from "./pages/pageManager";


test("Verify Input is Disabled on click Big Blue button", async ({ page }) => {
    const pm = new PageManager(page);

    // navigate to https://uitestingplayground.com/disabledinput
    await pm.disabledInputPg().openPage();

    // click "Enable Edit Field with 5 seconds delay" button
    await pm.disabledInputPg().clickEnableButton();

    // assertion of the Playground input field is diabled
    await expect(pm.disabledInputPg().playgroundInputField).toBeDisabled();
});


test("Verify Big Blue Button Text", async ({ page }) => {
    const pm = new PageManager(page);
    const EXPECTED_TEXT = 'For the Interview purpouses';

    // navigate to https://uitestingplayground.com/textinput
    await pm.textInputPg().openPage();

    // fill in EXPECTED_TEXT and click Big Blue button
    await pm.textInputPg().fillInNewButtonNameInput(EXPECTED_TEXT);
    await pm.textInputPg().clickBlueButton();

    // assertion of the Big Blue button text
    await expect(pm.textInputPg().blueButton).toHaveText(EXPECTED_TEXT);
});


test("Verify warning text on fill in incorrect Login data", async ({ page }) => {
    const pm = new PageManager(page);
    const EXPECTED_USER = 'John Doe';
    const EXPECTED_PASSWORD = '123456';
    const EXPECTED_WARNING = `Invalid password: ${EXPECTED_PASSWORD}`;

    // navigate to https://uitestingplayground.com/sampleapp
    await pm.sampleAppPg().openPage();

    // fill in login data and click Login button
    await pm.sampleAppPg().fillUserName(EXPECTED_USER);
    await pm.sampleAppPg().fillPassword(EXPECTED_PASSWORD);
    await pm.sampleAppPg().clickLoginButton();

    // assertion of the loginStatus warning message text
    await expect(pm.sampleAppPg().loginStatus).toHaveText(EXPECTED_WARNING);
});
