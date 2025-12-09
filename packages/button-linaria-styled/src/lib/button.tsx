import React from 'react';
import { styled } from 'linaria/react';
import { ButtonNamespace } from './types';
import { themeTokens } from '@centrodphlibs/linaria-theme';

/**
 * Styled button component using Linaria's styled function
 * Uses data attributes for variant and size to apply conditional styles
 */
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  outline: none;
  text-decoration: none;
  user-select: none;

  &:focus {
    outline: 2px solid ${themeTokens.colors.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Primary variant */
  &[data-variant='primary'] {
    background-color: ${themeTokens.colors.primary};
    color: ${themeTokens.colors.background};

    &:hover:not(:disabled) {
      background-color: ${themeTokens.colors.secondary};
    }

    &:active:not(:disabled) {
      background-color: ${themeTokens.colors.textSecondary};
    }
  }

  /* Secondary variant */
  &[data-variant='secondary'] {
    background-color: ${themeTokens.colors.secondary};
    color: ${themeTokens.colors.background};

    &:hover:not(:disabled) {
      background-color: ${themeTokens.colors.textSecondary};
    }

    &:active:not(:disabled) {
      background-color: ${themeTokens.colors.border};
    }
  }

  /* Outline variant */
  &[data-variant='outline'] {
    background-color: transparent;
    color: ${themeTokens.colors.primary};
    border: 2px solid ${themeTokens.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${themeTokens.colors.surface};
    }

    &:active:not(:disabled) {
      background-color: ${themeTokens.colors.border};
    }
  }

  /* Ghost variant */
  &[data-variant='ghost'] {
    background-color: transparent;
    color: ${themeTokens.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${themeTokens.colors.surface};
    }

    &:active:not(:disabled) {
      background-color: ${themeTokens.colors.border};
    }
  }

  /* Small size */
  &[data-size='small'] {
    padding: ${themeTokens.spacing.m} ${themeTokens.spacing.l};
    font-size: 14px;
    min-height: 32px;
  }

  /* Medium size */
  &[data-size='medium'] {
    padding: ${themeTokens.spacing.l} calc(${themeTokens.spacing.l} * 5);
    font-size: 16px;
    min-height: 40px;
  }

  /* Large size */
  &[data-size='large'] {
    padding: calc(${themeTokens.spacing.l} * 2.3) calc(${themeTokens.spacing.l} * 4.7);
    font-size: 18px;
    min-height: 48px;
  }
`;

/**
 * Button component with variants and sizes
 * Uses Linaria's styled function for zero-runtime CSS-in-JS
 */
export const Button = (props: ButtonNamespace.ButtonProps) => {
  const {
    variant = 'primary',
    size = 'medium',
    children,
    ...rest
  } = props;

  return (
    <StyledButton
      data-variant={variant}
      data-size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

