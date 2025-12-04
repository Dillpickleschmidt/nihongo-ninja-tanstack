import { createSignal } from "solid-js"
import { cn } from "@/utils"
import { SmoothCard } from "@/components/SmoothCard"
import { getChapterStyles } from "@/data/chapter_colors"

const LEVEL_TO_CHAPTER_MAP: Record<string, string> = {
  N5: "n5-introduction",
  N4: "n4-introduction",
  N3: "n3-introduction",
  N2: "n2-introduction",
  N1: "n1-introduction",
}

interface LevelItem {
  level: string
  description: string
}

export interface LevelCardProps {
  item: LevelItem
  onSelect?: (level: string) => void
}

export function LevelCard(props: LevelCardProps) {
  const [isHovered, setIsHovered] = createSignal(false)
  const chapterSlug = LEVEL_TO_CHAPTER_MAP[props.item.level]
  const styles = getChapterStyles(chapterSlug)

  return (
    <button
      class="group cursor-pointer transition-transform duration-150 hover:scale-[1.015]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => props.onSelect?.(props.item.level)}
    >
      <SmoothCard
        width={160}
        height={208}
        cornerRadius={16}
        border={true}
        borderClass={styles.svgBorderClass}
        ring={isHovered()}
        ringClass={cn(
          styles.ringClass,
          "ease-instant-hover-300 hover:opacity-30",
        )}
        class={cn(
          "bg-gradient-to-br shadow-lg shadow-black/30 backdrop-blur-md transition-colors duration-150",
          styles.gradient,
        )}
      >
        <div class="flex h-full flex-col items-center justify-center gap-2">
          <div class={cn("text-4xl font-bold", styles.textColor)}>
            {props.item.level}
          </div>
          <div class="text-sm opacity-70">{props.item.description}</div>
        </div>
      </SmoothCard>
    </button>
  )
}
