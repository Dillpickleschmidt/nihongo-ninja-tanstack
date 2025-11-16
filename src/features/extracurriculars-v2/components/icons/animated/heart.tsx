import { splitProps } from "solid-js"
import type { JSX } from "solid-js"

interface AnimatedHeartProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string
  strokeWidth?: number
}

export function AnimatedHeart(props: AnimatedHeartProps) {
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
        class={`overflow-visible ${local.class || ""}`}
        {...rest}
      >
        <path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          class="target-animated-icon-heart"
        />
      </svg>
    </>
  )
}
