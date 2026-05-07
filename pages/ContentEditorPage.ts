import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { RightPanel } from '../components/RightPanel';

export class ContentEditorPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  rightPanel(): RightPanel {
    return new RightPanel(this.page);
  }

  async open(): Promise<void> {
    await this.goto('/content/editor');
  }

  async clickValidate(): Promise<void> {
    await this.rightPanel().clickValidate();
  }

  async expectValidationMessages(expectedMessages: string[]): Promise<void> {
    const messages = this.page.locator('#awe-formContent .publish-validation');

    await expect(messages).toHaveText(
      expect.arrayContaining(expectedMessages)
    );
  }
}
