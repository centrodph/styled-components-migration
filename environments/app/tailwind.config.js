import { tailwindConfig } from '@centrodphlibs/tailwind-theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/button-tailwind/src/**/*.{js,ts,jsx,tsx}',
  ],
  ...tailwindConfig,
};

