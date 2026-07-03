# Ehsan Afzal - Portfolio

A modern, dark-themed professional portfolio website built for a backend-focused full-stack developer.

## Tech Stack
- **Framework:** React 18
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

## Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

## Production Build & GitHub Pages Deployment

The website is fully static and configured for deployment on GitHub Pages (`<username>.github.io`).

### 1. Build the Project

Run the following command to generate the production-ready static files:
```bash
npm run build
```
This will create a `dist` folder containing all the optimized static assets (HTML, CSS, JS).

### 2. Deployment Instructions

There are two primary ways to deploy to GitHub Pages:

#### Option A: Using the `gh-pages` npm package (Recommended)

1. Install the `gh-pages` package as a dev dependency:
   ```bash
   npm install -D gh-pages
   ```
2. Open `package.json` and add the following scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run the deploy script:
   ```bash
   npm run deploy
   ```
This will automatically build your app and push the `dist` folder to a `gh-pages` branch on your GitHub repository. In your GitHub repository settings, under the **Pages** section, ensure the source is set to the `gh-pages` branch.

#### Option B: GitHub Actions

You can automate the deployment using GitHub Actions. Create a `.github/workflows/deploy.yml` file in your repository:

```yaml
name: Deploy static content to Pages

on:
  push:
    branches: ['main']

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
When you push code to the `main` branch, this action will automatically build your app and deploy the `dist` folder to GitHub Pages.

---
**Note:** The `vite.config.js` is set with `base: './'` to ensure relative paths for static assets work seamlessly on GitHub Pages.
