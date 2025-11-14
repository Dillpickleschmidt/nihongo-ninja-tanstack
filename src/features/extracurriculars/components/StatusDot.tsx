import { Component, JSX } from 'solid-js'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../utils'

const dotVariants = cva(
  'inline-flex w-[0.55rem] h-[0.55rem] me-1 bg-blue-600 rounded-full',
  {
    variants: {
      variant: {
        CURRENT: 'bg-[rgb(61,180,242)]',
        PLANNING: 'bg-[rgb(247,154,99)]',
        COMPLETED: 'bg-[rgb(123,213,85)]',
        PAUSED: 'bg-[rgb(250,122,122)]',
        REPEATING: 'bg-[#3baeea]',
        DROPPED: 'bg-[rgb(232,93,117)]'
      }
    },
    defaultVariants: {
      variant: 'CURRENT'
    }
  }
)

type StatusDotVariant = VariantProps<typeof dotVariants>['variant']

interface StatusDotProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  variant?: StatusDotVariant
}

const StatusDot: Component<StatusDotProps> = (props) => {
  const { variant = 'CURRENT', class: className, ...rest } = props

  return <span class={cn(dotVariants({ variant }), className)} {...rest} />
}

export default StatusDot
export { StatusDot }
export type { StatusDotProps }
