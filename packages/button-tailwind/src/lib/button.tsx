import React from 'react';
import { ButtonNamespace } from './types';
import { cn } from './utils';

/**
 * Button component with variants and sizes
 * Uses Tailwind CSS utility classes for styling
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
   * Base button classes
   */
  const baseClasses = 'inline-flex items-center justify-center border-none rounded cursor-pointer font-medium transition-all duration-200 outline-none no-underline select-none focus:outline-2 focus:outline-solid focus:outline-primary focus:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

  /**
   * Variant classes
   */
  const variantClasses = {
    primary: 'bg-primary text-background hover:bg-secondary active:bg-text-secondary disabled:hover:bg-primary',
    secondary: 'bg-secondary text-background hover:bg-text-secondary active:bg-border disabled:hover:bg-secondary',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-surface active:bg-border disabled:hover:bg-transparent',
    ghost: 'bg-transparent text-primary hover:bg-surface active:bg-border disabled:hover:bg-transparent',
  };

  /**
   * Size classes
   */
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm min-h-[32px]',
    medium: 'px-5 py-2.5 text-base min-h-[40px]',
    large: 'px-7 py-3.5 text-lg min-h-[48px]',
  };

  const combinedClassName = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

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

