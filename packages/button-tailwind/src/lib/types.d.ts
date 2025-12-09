/**
 * Type definitions for Button component
 */
export declare namespace ButtonNamespace {
  /**
   * Button variant types
   */
  export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

  /**
   * Button size types
   */
  export type ButtonSize = 'small' | 'medium' | 'large';

  /**
   * Button component props
   */
  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button variant style
     * @default 'primary'
     */
    variant?: ButtonVariant;

    /**
     * Button size
     * @default 'medium'
     */
    size?: ButtonSize;

    /**
     * Button click handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Whether the button is disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * Button content
     */
    children: React.ReactNode;

    /**
     * Additional CSS class name
     */
    className?: string;
  }
}

