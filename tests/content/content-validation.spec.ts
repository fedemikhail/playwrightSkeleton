import { test, expect } from '../../fixtures/test.fixture';
import { env } from '../../config/env';

test('validate content editor messages', async ({
  contentEditorPage,
  contentQueries
}) => {
  const rows = await contentQueries.getTvEpisodes(env.airline);

  expect(rows.length).toBeGreaterThan(0);

  await contentEditorPage.open();
  await contentEditorPage.clickValidate();

  await contentEditorPage.expectValidationMessages([
    'Synopsis is required.',
    'Runtime shall be greater than 00:00:00.',
    'Media File is required.'
  ]);
});
