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
 * Get version for a package by reading its package.json
 * @param {string} packageName - Name of the package
 * @returns {string|null} - Version string or null if not found
 */
function getPackageVersion(packageName) {
  try {
    const packageJsonPath = path.join(__dirname, '..', 'packages', packageName, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
      const packageJson = JSON.parse(packageJsonContent);
      return packageJson.version || null;
    }
  } catch (error) {
    console.warn(`⚠ Could not read version for ${packageName}:`, error.message);
  }
  return null;
}

/**
 * Replace workspace:* dependencies with actual version numbers
 * @param {Object} packageJson - Package.json object to update
 */
function replaceWorkspaceDependencies(packageJson) {
  // Map of package names to their versions
  const packageVersions = {};
  
  // Get versions for all packages
  packages.forEach(packageName => {
    const version = getPackageVersion(packageName);
    if (version) {
      // Map both full name and short name
      const fullName = `@centrodphlibs/${packageName}`;
      packageVersions[fullName] = version;
      packageVersions[packageName] = version;
    }
  });

  /**
   * Replace workspace:* in a dependencies object
   * @param {Object} depsObj - Dependencies object (dependencies, peerDependencies, etc.)
   * @param {string} depType - Type of dependency (for logging)
   */
  function replaceInDependencies(depsObj, depType) {
    if (!depsObj || typeof depsObj !== 'object') {
      return;
    }

    for (const packageName in depsObj) {
      if (depsObj.hasOwnProperty(packageName)) {
        const versionSpec = depsObj[packageName];
        
        if (typeof versionSpec === 'string' && versionSpec === 'workspace:*') {
          // Try to find version for this package
          if (packageVersions[packageName]) {
            depsObj[packageName] = `^${packageVersions[packageName]}`;
            console.log(`  ✓ Replaced ${depType}.${packageName}: workspace:* → ^${packageVersions[packageName]}`);
          } else {
            console.warn(`  ⚠ Could not find version for ${packageName} in ${depType}, keeping workspace:*`);
          }
        }
      }
    }
  }

  // Replace in dependencies, peerDependencies, devDependencies, optionalDependencies
  ['dependencies', 'peerDependencies', 'devDependencies', 'optionalDependencies'].forEach(depType => {
    if (packageJson[depType]) {
      replaceInDependencies(packageJson[depType], depType);
    }
  });
}

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

  // Copy the dist folder contents from packages/{name}/dist/ to dist/packages/{name}/ (root level)
  const sourceDistDir = path.join(packageSourceDir, 'dist');
  
  if (fs.existsSync(sourceDistDir)) {
    console.log(`Copying dist files from ${sourceDistDir} to ${packageDistDir} (root level)`);
    // Copy all files from dist folder to root level of package dist directory
    copyDirectory(sourceDistDir, packageDistDir);
  } else {
    console.warn(`⚠ Dist folder not found: ${sourceDistDir}`);
  }

  // Update package.json to point to root-level files instead of ./dist/
  const packageJsonPath = path.join(packageDistDir, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
      const packageJson = JSON.parse(packageJsonContent);
      
      // Update module, main, types to remove ./dist/ prefix
      if (packageJson.module && packageJson.module.startsWith('./dist/')) {
        packageJson.module = packageJson.module.replace('./dist/', './');
      }
      if (packageJson.main && packageJson.main.startsWith('./dist/')) {
        packageJson.main = packageJson.main.replace('./dist/', './');
      }
      if (packageJson.types && packageJson.types.startsWith('./dist/')) {
        packageJson.types = packageJson.types.replace('./dist/', './');
      }
      
      // Update exports paths
      if (packageJson.exports) {
        if (typeof packageJson.exports === 'object' && packageJson.exports['.']) {
          const mainExport = packageJson.exports['.'];
          if (mainExport.import && mainExport.import.startsWith('./dist/')) {
            mainExport.import = mainExport.import.replace('./dist/', './');
          }
          if (mainExport.require && mainExport.require.startsWith('./dist/')) {
            mainExport.require = mainExport.require.replace('./dist/', './');
          }
          if (mainExport.types && mainExport.types.startsWith('./dist/')) {
            mainExport.types = mainExport.types.replace('./dist/', './');
          }
        }
        // Update style.css export if it exists
        if (packageJson.exports['./style.css']) {
          const stylePath = packageJson.exports['./style.css'];
          if (typeof stylePath === 'string' && stylePath.startsWith('./dist/')) {
            packageJson.exports['./style.css'] = stylePath.replace('./dist/', './');
          }
        }
      }
      
      // Replace workspace:* dependencies with actual version numbers
      replaceWorkspaceDependencies(packageJson);
      
      // Write updated package.json
      fs.writeFileSync(
        packageJsonPath,
        JSON.stringify(packageJson, null, 2) + '\n',
        'utf8'
      );
      console.log(`✓ Updated package.json paths to root level`);
    } catch (error) {
      console.error(`✗ Error updating package.json:`, error.message);
      process.exit(1);
    }
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

