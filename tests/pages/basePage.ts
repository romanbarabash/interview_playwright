import { Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForTimeoutInSeconds(timeoutInSec: number) {
    await this.page.waitForTimeout(timeoutInSec * 1000);
  }
}
