# GitHub Pages Deployment Guide

This document explains how to deploy the `environments/app` application to GitHub Pages.

## Prerequisites

1. A GitHub repository with GitHub Pages enabled
2. GitHub Actions enabled for your repository
3. Node.js and pnpm installed locally (for testing)

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Configure Base Path (if needed)

The application is configured to deploy to the repository root by default (`BASE_PATH=/`).

If you need to deploy to a subdirectory (e.g., `https://username.github.io/repository-name/`):

1. Update the `BASE_PATH` environment variable in `.github/workflows/deploy-gh-pages.yml`:
   ```yaml
   env:
     BASE_PATH: /repository-name/
   ```

2. Replace `repository-name` with your actual repository name

### 3. Deploy

The deployment happens automatically when you push to the `main` branch. You can also trigger it manually:

1. Go to **Actions** tab in your GitHub repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Local Testing

To test the production build locally before deploying:

```bash
# Build all dependencies
pnpm run build:all

# Build the app
cd environments/app
BASE_PATH=/ pnpm run build

# Preview the build
pnpm run preview
```

## Troubleshooting

### Assets not loading correctly

- Ensure the `BASE_PATH` in the workflow matches your GitHub Pages URL structure
- Check that `vite.config.ts` has the `base` configuration set correctly

### Build fails

- Ensure all dependencies are built first (`pnpm run build:all`)
- Check that Node.js version matches `.nvmrc`
- Verify pnpm lockfile is up to date

### 404 errors on page refresh

- This is normal for SPAs on GitHub Pages
- GitHub Pages should handle this automatically, but if not, ensure you're using the `gh-pages` branch deployment method

## Workflow Details

The GitHub Actions workflow (`deploy-gh-pages.yml`) performs the following steps:

1. Checks out the repository code
2. Sets up Node.js using the version specified in `.nvmrc`
3. Installs dependencies using pnpm
4. Builds all package dependencies
5. Builds the application with the configured base path
6. Uploads the build artifacts
7. Deploys to GitHub Pages

## Customization

### Change deployment branch

Edit `.github/workflows/deploy-gh-pages.yml` and modify:

```yaml
on:
  push:
    branches:
      - your-branch-name
```

### Change build output directory

If you need to change where the build artifacts are located, update:

1. `vite.config.ts` → `build.outDir`
2. `.github/workflows/deploy-gh-pages.yml` → `upload-pages-artifact` path
