import type { Config } from 'tailwindcss';
import { defaultTheme } from '@centrodphlibs/theme';

/**
 * Tailwind CSS configuration based on @centrodphlibs/theme
 * Extends Tailwind's default theme with custom colors and spacing
 */
export const tailwindConfig: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.primary,
        secondary: defaultTheme.colors.secondary,
        success: defaultTheme.colors.success,
        warning: defaultTheme.colors.warning,
        error: defaultTheme.colors.error,
        info: defaultTheme.colors.info,
        background: defaultTheme.colors.background,
        surface: defaultTheme.colors.surface,
        text: defaultTheme.colors.text,
        'text-secondary': defaultTheme.colors.textSecondary,
        border: defaultTheme.colors.border,
      },
      spacing: {
        s: defaultTheme.spacing.s,
        m: defaultTheme.spacing.m,
        l: defaultTheme.spacing.l,
      },
    },
  },
};

/**
 * Default Tailwind config that can be imported and extended
 */
export default tailwindConfig;

