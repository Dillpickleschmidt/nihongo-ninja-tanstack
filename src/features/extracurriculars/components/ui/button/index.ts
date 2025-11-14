import { Button as DefaultButton, buttonVariants } from '@/components/ui/button'
import type { ButtonProps as DefaultButtonProps } from '@/components/ui/button'
import type { VariantProps } from 'class-variance-authority'

// Re-export the base button and variants
export { DefaultButton as Button, buttonVariants }
export type { DefaultButtonProps as ButtonProps }

// Icon size constants for button variants
export const iconSizes = {
  xs: '0.6rem',
  sm: '0.7rem',
  default: '0.8rem',
  lg: '1.2rem',
  icon: '1rem',
  'icon-sm': '0.7rem'
}
