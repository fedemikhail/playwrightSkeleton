import { expect, Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class RightPanel extends BaseComponent {
  constructor(page: Page) {
    super(page, page.locator('#awe-buttonList'));
  }

  private button(name: string): Locator {
    return this.root.getByRole('button', { name, exact: true });
  }

  async waitUntilLoaded(): Promise<void> {
    await expect(this.root).toBeVisible();
  }

  async clickButton(name: string): Promise<void> {
    await this.button(name).click();
  }

  async clickValidate(): Promise<void> {
    await this.clickButton('Validate');
  }

  async clickTranslation(): Promise<void> {
    await this.clickButton('Translation');
  }

  async getButtonNames(): Promise<string[]> {
    return this.root.getByRole('button').allTextContents();
  }

  async hasButton(name: string): Promise<boolean> {
    return await this.button(name).isVisible();
  }
}
