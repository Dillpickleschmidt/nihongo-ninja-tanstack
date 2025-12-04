import { splitProps } from "solid-js"
import type { JSX } from "solid-js"

interface AnimatedBookmarkProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string
  strokeWidth?: number
}

export function AnimatedBookmark(props: AnimatedBookmarkProps) {
  const [local, rest] = splitProps(props, [
    "color",
    "size",
    "strokeWidth",
    "fill",
    "class",
  ])

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={local.size || 24}
        height={local.size || 24}
        viewBox="0 0 24 24"
        fill={local.fill || "none"}
        stroke={local.color || "currentColor"}
        stroke-width={local.strokeWidth || 2}
        stroke-linecap="round"
        stroke-linejoin="round"
        class={`target-animated-icon-bookmark overflow-visible ${local.class || ""}`}
        {...rest}
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>
    </>
  )
}
