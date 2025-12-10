import { defaultTheme } from '@centrodphlibs/theme';

/**
 * Theme tokens for Tailwind CSS
 * Provides direct access to theme values for use in components
 */
export const themeTokens = {
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
    textSecondary: defaultTheme.colors.textSecondary,
    border: defaultTheme.colors.border,
  },
  spacing: {
    s: defaultTheme.spacing.s,
    m: defaultTheme.spacing.m,
    l: defaultTheme.spacing.l,
  },
};


