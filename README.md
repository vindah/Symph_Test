# Playwright Test Automation Project
This repository contains automated tests for both UI and API using Playwright. The project is organized to keep tests maintainable. It includes tests for the following:
- **UI Testing** on [Sauce Demo](https://www.saucedemo.com/)
- **API Testing** using [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
---
##  SETUP

### Prerequisites
Node.js (v20.10.0)
npm (latest is 10.2.1)


Clone the repository and navigate to the project folder:
```bash
git clone (https://github.com/vindah/Symph_Test.git)
cd Symph_Test
```

### Installation

1. Install project dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers(needed for new playwright install only):
   ```bash
   npx playwright install
   ```

### Running Tests
- **Run All Tests
To execute all tests (both API and UI):

```bash

npx playwright test
```

- **Run API Tests Only
To run only the API tests:

```bash
npx playwright test tests/api-tests
```

- **Run UI Tests Only
To run only the UI tests:

```bash
npx playwright test tests/ui-tests
```

- **Run UI Tests in Headed Mode**:
  ```bash
  npx playwright test tests/ui-tests --project=ui --headed
  ```

### Viewing Test Results
Playwright generates HTML reports in the playwright-report directory. To open the report after running tests:

```bash
npx playwright show-report
```
---

## Additional Information
```
Project structure
.
├── .github/workflows
│   └── ci-tests.yml              # GitHub Actions configuration for CI/CD
├── node_modules                  # Node.js dependencies (auto-generated)
├── pages
│   ├── base-page.js              # Base Page Object with common utilities for page interactions/initial navigation
│   ├── inventory-page.js         # Page Object for Inventory Page
│   └── login-page.js             # Page Object for Login Page
├── playwright-report             # Directory for Playwright HTML reports(ignored commit)
├── test-results                  # Directory for storing test artifacts and results(ignored commit)
├── tests
│   ├── api-tests                 # Folder for API test cases
│   │   └── postApiTest.spec.js   # API test for CRUD operations on posts
│   └── ui-tests                  # Folder for UI test cases
│       └── sortInventory.spec.js # UI test for sorting inventory items
├── utils
│   └── credentials.js            # Utility to manage and retrieve credentials
├── .env                           # Environment variables file(usually not committed)
├── .gitignore                     # Git ignore file
├── package-lock.json              # Auto-generated file for locking dependencies
├── package.json                   # Node.js dependencies and scripts
└── playwright.config.js           # Playwright configuration file
```


## GitHub Actions CI/CD

This project uses GitHub Actions for continuous integration. The workflow (ci-tests.yml) is set up to run on any push or pull_request to the main or master branches.

#### Workflow Steps description in the file
- Install Dependencies: Installs Node.js and project dependencies.
- Install Playwright Browsers: Downloads Playwright-supported browsers.
- Run Tests:API + UI
- Upload Reports: Uploads the Playwright HTML report as an artifact.

Running Tests on GitHub Actions

API Tests and UI Tests are run as same job but separate (api-test and ui-test) in parallel.

Artifacts (HTML reports) are uploaded after each job, allowing you to view test results in the GitHub Actions interface.


#### Viewing CI Test Results
1. Go to **Actions** in the GitHub repository.
2. Select the action from list to view result
3. Select the appropriate job (either **API Tests** or **UI Tests**) to view details.
