# @centrodphlibs/button-linaria-styled

React button component library using Linaria's `styled` function for zero-runtime CSS-in-JS styling. Provides compile-time CSS extraction with variants and sizes.

## Installation

```bash
npm install @centrodphlibs/button-linaria-styled
```

## Usage

Import the component and **manually import the CSS file**:

```tsx
import { Button } from '@centrodphlibs/button-linaria-styled';
import '@centrodphlibs/button-linaria-styled/style.css'; // Required!

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

- **small**: Compact padding (6px 12px), 14px font
- **medium**: Default padding (10px 20px), 16px font
- **large**: Larger padding (14px 28px), 18px font

## Running unit tests

Run `nx test button-linaria-styled` to execute the unit tests via [Vitest](https://vitest.dev/).

