// features/dashboard/components/SmoothCard.tsx
import { getSvgPath } from "figma-squircle"
import { JSX } from "solid-js"

interface SmoothCardProps {
  width: number
  height: number
  cornerRadius?: number
  cornerSmoothing?: number
  class?: string
  style?: JSX.CSSProperties
  children: any
}

export function SmoothCard(props: SmoothCardProps) {
  const svgPath = getSvgPath({
    width: props.width,
    height: props.height,
    cornerRadius: props.cornerRadius || 20,
    cornerSmoothing: props.cornerSmoothing || 1,
    preserveSmoothing: true,
  })

  const combinedStyle = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    "clip-path": `path('${svgPath}')`,
    ...props.style,
  }

  return (
    <div style={combinedStyle} class={`bg-card ${props.class || ""}`}>
      {props.children}
    </div>
  )
}
