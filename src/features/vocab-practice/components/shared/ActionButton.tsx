// vocab-practice/components/shared/ActionButton.tsx
import { JSX } from "solid-js"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"

export function ActionButton(props: {
  children: JSX.Element
  onClick?: () => void
  ref?: HTMLButtonElement | ((el: HTMLButtonElement) => void)
  disabled?: boolean
  variant?: "primary" | "secondary" | "success"
  class?: string
}) {
  const baseClasses =
    "h-12 w-full rounded-xl text-sm sm:text-base font-semibold shadow-md transition-all duration-200 hover:scale-[1.01] focus-visible:ring-2"

  const variantClasses = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-400",
    secondary:
      "bg-background border border-card-foreground text-foreground hover:bg-muted focus-visible:ring-muted-foreground",
    success:
      "bg-green-500/20 text-green-100 border border-green-400/30 hover:bg-green-500/30 focus-visible:ring-green-400",
  }

  return (
    <Button
      ref={props.ref}
      onClick={props.onClick}
      disabled={props.disabled}
      class={cn(
        baseClasses,
        variantClasses[props.variant || "primary"],
        props.class,
      )}
    >
      {props.children}
    </Button>
  )
}
