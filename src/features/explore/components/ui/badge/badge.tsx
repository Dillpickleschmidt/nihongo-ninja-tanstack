// features/explore/components/ui/badge/badge.tsx
import { cva } from "class-variance-authority"
import { splitProps, type JSX } from "solid-js"
import { Dynamic } from "solid-js/web"
import { cn } from "@/utils"

const badgeVariants = cva(
  "focus:ring-ring inline-flex select-none items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-transparent shadow",
        secondary: "bg-secondary text-secondary-foreground border-transparent",
        destructive:
          "bg-destructive text-destructive-foreground border-transparent shadow",
        outline: "text-foreground",
        success:
          "bg-[#21b959] text-primary-foreground border-transparent shadow",
        warning:
          "bg-[#eab308] text-primary-foreground border-transparent shadow",
        error: "bg-[#bf2c2c] text-primary-foreground border-transparent shadow",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "success"
  | "warning"
  | "error"

interface BadgeProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  href?: string
}

export function Badge(props: BadgeProps) {
  const [local, others] = splitProps(props, ["class", "variant", "href"])

  const element = local.href ? "a" : "span"

  return (
    <Dynamic
      component={element}
      href={local.href}
      class={cn(badgeVariants({ variant: local.variant }), local.class)}
      {...others}
    />
  )
}

export { badgeVariants }
export type { BadgeVariant }
