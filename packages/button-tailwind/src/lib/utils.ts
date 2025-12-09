/**
 * Utility function to combine class names
 * Similar to clsx or classnames libraries
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

