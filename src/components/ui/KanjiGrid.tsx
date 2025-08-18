// src/components/ui/KanjiGrid.tsx
import { cn } from "@/utils/util"

interface KanjiGridProps {
  size: number
  class?: string
  opacity?: number
}

export function KanjiGrid(props: KanjiGridProps) {
  const opacity = props.opacity ?? 0.3

  return (
    <div
      class={cn("kanji-grid", props.class)}
      style={{
        width: `${props.size}px`,
        height: `${props.size}px`,
      }}
    >
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        class="block"
      >
        <g style={{ opacity }}>
          {/* Vertical center line */}
          <path
            d="M54.5,0 L54.5,109"
            stroke="rgb(163 163 163)"
            stroke-width="0.5"
            stroke-dasharray="3,3"
            fill="none"
          />
          {/* Horizontal center line */}
          <path
            d="M0,54.5 L109,54.5"
            stroke="rgb(163 163 163)"
            stroke-width="0.5"
            stroke-dasharray="3,3"
            fill="none"
          />
        </g>
      </svg>
    </div>
  )
}