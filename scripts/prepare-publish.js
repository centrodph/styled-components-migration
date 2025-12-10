#!/usr/bin/env node

/**
 * Script to prepare packages for publishing to npm
 * This script copies necessary files (package.json, README.md, .npmignore) 
 * to the dist directories before publishing
 */

const fs = require('fs');
const path = require('path');

/**
 * List of packages to prepare for publishing
 */
const packages = [
  'button-vanilla-extract',
  'button-linaria',
  'button-linaria-styled',
  'button-css-modules',
  'button-tailwind',
  'theme',
  'vanilla-extract-theme',
  'linaria-theme',
  'css-modules-theme',
  'tailwind-theme',
];

/**
 * Copy a file from source to destination
 * @param {string} sourcePath - Source file path
 * @param {string} destPath - Destination file path
 */
function copyFile(sourcePath, destPath) {
  try {
    if (fs.existsSync(sourcePath)) {
      // Ensure destination directory exists
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✓ Copied ${path.basename(sourcePath)} to ${destPath}`);
    } else {
      console.warn(`⚠ File not found: ${sourcePath}`);
    }
  } catch (error) {
    console.error(`✗ Error copying ${sourcePath} to ${destPath}:`, error.message);
    process.exit(1);
  }
}

/**
 * Copy a directory recursively from source to destination
 * @param {string} sourceDir - Source directory path
 * @param {string} destDir - Destination directory path
 */
function copyDirectory(sourceDir, destDir) {
  try {
    if (!fs.existsSync(sourceDir)) {
      console.warn(`⚠ Directory not found: ${sourceDir}`);
      return;
    }

    // Ensure destination directory exists
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Read all files and directories
    const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

    for (const entry of entries) {
      const sourcePath = path.join(sourceDir, entry.name);
      const destPath = path.join(destDir, entry.name);

      if (entry.isDirectory()) {
        // Recursively copy subdirectories
        copyDirectory(sourcePath, destPath);
      } else {
        // Copy files
        copyFile(sourcePath, destPath);
      }
    }
  } catch (error) {
    console.error(`✗ Error copying directory ${sourceDir} to ${destDir}:`, error.message);
    process.exit(1);
  }
}

/**
 * Prepare a single package for publishing
 * @param {string} packageName - Name of the package
 */
function preparePackage(packageName) {
  console.log(`\nPreparing package: ${packageName}`);
  
  const packageSourceDir = path.join(__dirname, '..', 'packages', packageName);
  const packageDistDir = path.join(__dirname, '..', 'dist', 'packages', packageName);
  
  // Files to copy from source to dist
  const filesToCopy = [
    { source: 'package.json', required: true },
    { source: 'README.md', required: false },
    { source: '.npmignore', required: false }
  ];
  
  filesToCopy.forEach(({ source, required }) => {
    const sourcePath = path.join(packageSourceDir, source);
    const destPath = path.join(packageDistDir, source);
    
    if (required || fs.existsSync(sourcePath)) {
      copyFile(sourcePath, destPath);
    }
  });

  // Copy the dist folder contents from packages/{name}/dist/ to dist/packages/{name}/dist/
  const sourceDistDir = path.join(packageSourceDir, 'dist');
  const destDistDir = path.join(packageDistDir, 'dist');
  
  if (fs.existsSync(sourceDistDir)) {
    console.log(`Copying dist folder from ${sourceDistDir} to ${destDistDir}`);
    copyDirectory(sourceDistDir, destDistDir);
  } else {
    console.warn(`⚠ Dist folder not found: ${sourceDistDir}`);
  }
}

/**
 * Main function to prepare all packages
 */
function main() {
  console.log('Preparing packages for npm publishing...\n');
  
  packages.forEach(packageName => {
    preparePackage(packageName);
  });
  
  console.log('\n✓ All packages prepared successfully!');
}

// Run the script
main();

