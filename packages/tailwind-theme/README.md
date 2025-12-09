# @centrodphlibs/tailwind-theme

Tailwind CSS theme configuration package based on `@centrodphlibs/theme`. Provides Tailwind config and theme tokens for use with Tailwind CSS.

## Installation

```bash
npm install @centrodphlibs/tailwind-theme
```

## Usage

### Extend Tailwind Config

In your `tailwind.config.js` or `tailwind.config.ts`:

```js
import { tailwindConfig } from '@centrodphlibs/tailwind-theme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  ...tailwindConfig,
};
```

### Use Theme Tokens

```ts
import { themeTokens } from '@centrodphlibs/tailwind-theme';

console.log(themeTokens.colors.primary); // '#0b21b4'
console.log(themeTokens.spacing.m); // '4px'
```

## Theme Colors

- `primary`: Primary brand color
- `secondary`: Secondary color
- `success`: Success state color
- `warning`: Warning state color
- `error`: Error state color
- `info`: Info state color
- `background`: Background color
- `surface`: Surface color
- `text`: Primary text color
- `text-secondary`: Secondary text color
- `border`: Border color

## Spacing

- `s`: Small spacing (2px)
- `m`: Medium spacing (4px)
- `l`: Large spacing (6px)

## Running unit tests

Run `nx test tailwind-theme` to execute the unit tests via [Vitest](https://vitest.dev/).

