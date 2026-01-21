Here are the steps the other person should do to run your Playwright tests from this repo (Windows-friendly):

Prereqs

Install Node.js (LTS is fine). Verify: node -v and npm -v
Get the code

git clone <repo-url>
cd interview_playwright
Install dependencies

npm install
Install Playwright browsers (required on a new machine)

npx playwright install
Optional (more “it just works” on fresh Windows machines): npx playwright install --with-deps
Run the tests

npx playwright test
View the HTML report

Your config is set to open it automatically; manually: npx playwright show-report
