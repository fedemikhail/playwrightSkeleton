# Playwright Framework

## Install

npm ci
npx playwright install

## Run tests

npm test

## Run headed

npm run test:headed

## Show report

npm run report

## Rules

- Tests should not use raw locators.
- Pages expose business actions.
- Components encapsulate reusable UI sections.
- SQL should live only in db/queries.
- Environment values come from config/env.ts.
