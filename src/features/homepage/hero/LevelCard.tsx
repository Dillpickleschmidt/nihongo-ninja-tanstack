import { cn } from "@/utils"
import { SmoothCard } from "@/components/SmoothCard"
import { getChapterStyles } from "@/data/chapter_colors"
import { useBreakpoints } from "@/hooks/useBreakpoints"

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
  const chapterSlug = LEVEL_TO_CHAPTER_MAP[props.item.level]
  const styles = getChapterStyles(chapterSlug)
  const bp = useBreakpoints()

  return (
    <button
      class="group cursor-pointer transition-transform duration-150 hover:scale-[1.015]"
      onClick={() => props.onSelect?.(props.item.level)}
    >
      <SmoothCard
        width={bp.md() ? 160 : 140}
        height={bp.md() ? 208 : 140}
        cornerRadius={16}
        border={true}
        borderClass={styles.svgBorderClass}
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
