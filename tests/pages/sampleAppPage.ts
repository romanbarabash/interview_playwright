import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

/**
 * Represents the Sample App login page.
 */
export class SampleAppPage extends BasePage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loginStatus: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;

        this.userNameInput = this.page.locator("input[name='UserName']");
        this.passwordInput = this.page.locator("input[name='Password']");
        this.loginButton = this.page.locator("#login");
        this.loginStatus = this.page.locator("#loginstatus");
    }

    async openPage() {
        await this.page.goto("https://uitestingplayground.com/sampleapp");
    }

    async fillUserName(userName: string) {
        await this.userNameInput.click();
        await this.userNameInput.fill(userName);
    }

    async fillPassword(password: string) {
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}
