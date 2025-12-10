#!/usr/bin/env node

/**
 * Script to bump version numbers for all packages before publishing
 * This script increments the patch version (e.g., 0.0.1 -> 0.0.2)
 */

const fs = require('fs');
const path = require('path');

/**
 * List of packages to bump versions for
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
 * Bump version number by incrementing patch version
 * @param {string} version - Current version string (e.g., "0.0.1")
 * @returns {string} - Bumped version string (e.g., "0.0.2")
 */
function bumpVersion(version) {
  const parts = version.split('.');
  if (parts.length !== 3) {
    throw new Error(`Invalid version format: ${version}. Expected format: x.y.z`);
  }

  const major = parseInt(parts[0], 10);
  const minor = parseInt(parts[1], 10);
  const patch = parseInt(parts[2], 10);

  // Increment patch version
  const newPatch = patch + 1;
  return `${major}.${minor}.${newPatch}`;
}

/**
 * Bump version for a single package
 * @param {string} packageName - Name of the package
 */
function bumpPackageVersion(packageName) {
  const packageJsonPath = path.join(__dirname, '..', 'packages', packageName, 'package.json');

  if (!fs.existsSync(packageJsonPath)) {
    console.warn(`⚠ Package.json not found: ${packageJsonPath}`);
    return;
  }

  try {
    // Read package.json
    const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(packageJsonContent);

    // Get current version
    const currentVersion = packageJson.version;
    if (!currentVersion) {
      console.warn(`⚠ No version found in ${packageName}/package.json`);
      return;
    }

    // Bump version
    const newVersion = bumpVersion(currentVersion);
    packageJson.version = newVersion;

    // Write back to file
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + '\n',
      'utf8'
    );

    console.log(`✓ Bumped ${packageName}: ${currentVersion} → ${newVersion}`);
  } catch (error) {
    console.error(`✗ Error bumping version for ${packageName}:`, error.message);
    process.exit(1);
  }
}

/**
 * Main function to bump all package versions
 */
function main() {
  console.log('Bumping package versions...\n');

  packages.forEach(packageName => {
    bumpPackageVersion(packageName);
  });

  console.log('\n✓ All package versions bumped successfully!');
}

// Run the script
main();
