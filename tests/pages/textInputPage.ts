import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

/**
 * Represents the Text Input page.
 */
export class TextInputPage extends BasePage {
    readonly page: Page;
    readonly newButtonNameInput: Locator;
    readonly blueButton: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;

        this.newButtonNameInput = this.page.getByPlaceholder("MyButton");
        this.blueButton = this.page.locator(".btn.btn-primary");
    }

    async openPage() {
        await this.page.goto("https://uitestingplayground.com/textinput");
    }

    async fillInNewButtonNameInput(name: string) {
        await this.newButtonNameInput.click();
        await this.newButtonNameInput.fill(name);
    }

    async clickBlueButton() {
        await this.blueButton.focus();
    }


}
