import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'
import { motion } from 'framer-motion'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button visual variant
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'

  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * Icon to display (before or after text)
   */
  icon?: ReactNode

  /**
   * Icon position relative to children
   */
  iconPosition?: 'left' | 'right'

  /**
   * Loading state - shows spinner and disables button
   */
  loading?: boolean

  /**
   * Full width button
   */
  fullWidth?: boolean

  /**
   * Button content
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Button Component
 *
 * A flexible, accessible button component with multiple variants and sizes.
 * Follows the design system tokens and supports icons, loading states, and animations.
 *
 * @example
 * <Button variant="primary" size="lg" icon={<FaRocket />} iconPosition="right">
 *   Get Started
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      loading = false,
      fullWidth = false,
      disabled,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    // Variant classes
    const variantClasses = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline',
      ghost: 'btn-ghost',
      danger: 'btn-danger',
    }

    // Size classes
    const sizeClasses = {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
    }

    // Combine classes
    const buttonClasses = [
      'btn',
      variantClasses[variant],
      sizeClasses[size],
      fullWidth && 'w-full',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    // Loading spinner
    const Spinner = () => (
      <svg
        className="animate-spin h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    )

    return (
      <motion.button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        {...props}
      >
        {loading && <Spinner />}
        {!loading && icon && iconPosition === 'left' && icon}
        {children}
        {!loading && icon && iconPosition === 'right' && icon}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
