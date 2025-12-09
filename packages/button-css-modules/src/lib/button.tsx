import React from 'react';
import { ButtonNamespace } from './types';
import styles from './button.module.css';

/**
 * Button component with variants and sizes
 * Uses CSS modules for scoped styling
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
   * Combine base button class, variant, size, and custom className
   */
  const combinedClassName = [
    styles.button,
    styles[variant],
    styles[size],
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

