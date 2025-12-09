import React from 'react';
import { ButtonNamespace } from './types';
import { buttonBase, buttonVariants, buttonSizes } from './style';

/**
 * Button component with variants and sizes
 * Uses Linaria for zero-runtime CSS-in-JS
 */
export const Button = (props: ButtonNamespace.ButtonProps) => {
  const {
    variant = 'primary',
    size = 'medium',
    disabled = false,
    className = '',
    children,
    ...rest
  } = props;

  /**
   * Combine base, variant, size, and custom className
   */
  const combinedClassName = [
    buttonBase,
    buttonVariants[variant],
    buttonSizes[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={combinedClassName}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

