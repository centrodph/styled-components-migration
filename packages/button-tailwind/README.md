# @centrodphlibs/button-tailwind

React button component library using Tailwind CSS utility classes. Provides variants and sizes with zero runtime CSS.

## Installation

```bash
npm install @centrodphlibs/button-tailwind
```

## Prerequisites

This package requires Tailwind CSS to be configured in your project. Make sure to:

1. Install Tailwind CSS: `npm install -D tailwindcss`
2. Configure Tailwind to use `@centrodphlibs/tailwind-theme`:

```js
// tailwind.config.js
import { tailwindConfig } from '@centrodphlibs/tailwind-theme';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@centrodphlibs/button-tailwind/**/*.{js,jsx,ts,tsx}',
  ],
  ...tailwindConfig,
};
```

3. Include Tailwind directives in your CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

```tsx
import { Button } from '@centrodphlibs/button-tailwind';

function App() {
  return (
    <div>
      <Button variant="primary" size="medium" onClick={() => alert('Clicked!')}>
        Primary Button
      </Button>
      <Button variant="secondary" size="large">
        Secondary Button
      </Button>
      <Button variant="outline" size="small">
        Outline Button
      </Button>
      <Button variant="ghost" disabled>
        Ghost Button (Disabled)
      </Button>
    </div>
  );
}
```

## Props

### ButtonProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Click handler |
| `children` | `React.ReactNode` | - | Button content (required) |
| `className` | `string` | - | Additional CSS class name |

## Variants

- **primary**: Solid blue background with white text
- **secondary**: Solid gray background with white text
- **outline**: Transparent background with blue border and text
- **ghost**: Transparent background with blue text, no border

## Sizes

- **small**: Compact padding, 14px font
- **medium**: Default padding, 16px font
- **large**: Larger padding, 18px font

## Running unit tests

Run `nx test button-tailwind` to execute the unit tests via [Vitest](https://vitest.dev/).

