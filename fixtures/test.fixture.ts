import { test as base } from '@playwright/test';
import { DbClient } from '../db/dbClient';
import { ContentQueries } from '../db/queries/content.queries';
import { ContentEditorPage } from '../pages/ContentEditorPage';
import { LoginPage } from '../pages/LoginPage';

type Fixtures = {
  db: DbClient;
  contentQueries: ContentQueries;
  loginPage: LoginPage;
  contentEditorPage: ContentEditorPage;
};

export const test = base.extend<Fixtures>({
  db: async ({}, use) => {
    const db = new DbClient();
    await use(db);
    await db.close();
  },

  contentQueries: async ({ db }, use) => {
    await use(new ContentQueries(db));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  contentEditorPage: async ({ page }, use) => {
    await use(new ContentEditorPage(page));
  }
});

export { expect } from '@playwright/test';
