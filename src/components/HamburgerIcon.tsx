import { cn } from "@/utils"

interface HamburgerIconProps {
  size?: "sm" | "md"
  class?: string
}

export function HamburgerIcon(props: HamburgerIconProps) {
  const sizeClass = props.size === "sm" ? "h-5 w-5" : "h-6 w-6"

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={cn(sizeClass, props.class)}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}
