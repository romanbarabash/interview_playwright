import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

/**
 * Represents the Disabled Input page.
 */
export class DisabledInputPage extends BasePage {
    readonly page: Page;
    readonly playgroundInputField: Locator;
    readonly enableButton: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;

        this.playgroundInputField = this.page.locator("#blueField");
        this.enableButton = this.page.locator("#enableButton");
    }

    async openPage() {
        await this.page.goto("https://uitestingplayground.com/disabledinput");
    }

    async clickEnableButton() {
        await this.enableButton.click();
    }
}
