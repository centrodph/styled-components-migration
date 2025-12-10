/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import linaria from '@linaria/vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

/**
 * Base path for GitHub Pages deployment.
 * Set via environment variable BASE_PATH or defaults to '/' for local development.
 * For GitHub Pages repository root: use '/'
 * For GitHub Pages subdirectory: use '/repository-name/'
 */
const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/app',
  
  /**
   * Base public path when served in development or production.
   * Required for GitHub Pages deployment to handle asset paths correctly.
   */
  base: basePath,
  
  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    vanillaExtractPlugin(),
    linaria({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
    nxViteTsPaths(),
  ],

  build: {
    outDir: '../../dist/packages/app',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/app',
      provider: 'v8',
    },
  },
});

