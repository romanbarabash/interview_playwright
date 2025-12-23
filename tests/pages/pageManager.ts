import { Page, expect } from "@playwright/test";
import { TextInputPage } from "./textInputPage";
import { DisabledInputPage } from "./disabledInputPage";
import { SampleAppPage } from "./sampleAppPage";


export class PageManager {
  private readonly page: Page;

  private textInputPage: TextInputPage;
  private disabledInputPage: DisabledInputPage;
  private sampleAppPage: SampleAppPage;

  constructor(page: Page) {
    this.page = page;
    this.textInputPage = new TextInputPage(this.page);
    this.disabledInputPage = new DisabledInputPage(this.page);
    this.sampleAppPage = new SampleAppPage(this.page);
  }

  textInputPg() {
    return this.textInputPage;
  }

  disabledInputPg() {
    return this.disabledInputPage;
  }

  sampleAppPg() {
    return this.sampleAppPage;
  }
}
