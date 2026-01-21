# Playwright Demo (interview_playwright)

This repo contains end-to-end tests written with [Playwright Test](https://playwright.dev/docs/test-intro).

## Prerequisites

- **Node.js** (LTS recommended)
- **npm** (comes with Node)

Verify:

```bash
node -v
npm -v
```

## Setup

From the repo root:

```bash
npm install
```

Install Playwright browsers (required on a new machine):

```bash
npx playwright install
```

Optional (useful on fresh Windows machines if you hit missing system dependencies):

```bash
npx playwright install --with-deps
```

## Run tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/interviewTest.spec.ts
```

## HTML Report

The HTML report is configured to **open automatically** after each run.

To open the last report manually:

```bash
npx playwright show-report
```

## Troubleshooting

- If `npx` is not recognized:
  - Ensure Node.js is installed
  - Ensure you are running commands from the repo root (the folder containing `package.json`)
- If browsers are missing:
  - Run `npx playwright install`
