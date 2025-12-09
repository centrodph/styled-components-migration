import React from 'react';
import { ButtonNamespace } from './types';
import { buttonVariants, buttonSizes } from './button.css';
import { utilities } from '@centrodphlibs/vanilla-extract-theme';

/**
 * Higher-order component that adds padding and margin utilities to a component
 * @param Component - The component or HTML element to wrap
 * @returns A component that accepts p and m props and applies corresponding utility classes
 */
const withStyles = function (Component: React.ComponentType<React.HTMLAttributes<HTMLElement>> | string) {
  return function (props: ButtonNamespace.ButtonProps) {
    const { p = undefined, m = undefined, className = '', ...rest } = props;
    
    // Build array of class names, filtering out undefined values
    const classNames = [
      className,
      p && utilities[`p${p.toUpperCase()}` as keyof typeof utilities],
      m && utilities[`m${m.toUpperCase()}` as keyof typeof utilities],
    ].filter(Boolean);
    
    // Join class names with space separator
    const aggregatedClassName = classNames.join(' ');
    
    return <Component {...rest} className={aggregatedClassName} />;
  };
};

const Ds = {
  div: withStyles('div'),
  button: withStyles('button'),
};

/**
 * Button component with variants and sizes
 * Uses vanilla-extract for type-safe styling
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
   * Combine variant, size, and custom className
   */
  const combinedClassName = [
    buttonVariants[variant],
    buttonSizes[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Ds.button
      className={combinedClassName}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Ds.button>
  );
};

export default Button;
