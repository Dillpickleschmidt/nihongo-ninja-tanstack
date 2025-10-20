import { createSignal, For } from "solid-js"
import { cn } from "@/utils"
import { SmoothCard } from "@/features/learn-page/components/shared/SmoothCard"
import { getChapterStyles } from "@/data/chapter_colors"
import { WelcomeSection } from "./WelcomeSection"

const LEVEL_TO_CHAPTER_MAP: Record<string, string> = {
  N5: "getting_started_n5",
  N4: "getting_started_n4",
  N3: "getting_started_n3",
  N2: "getting_started_n2",
  N1: "getting_started_n1",
}

interface LevelItem {
  level: string
  description: string
}

interface LevelSelectionProps {
  onSelect?: (level: string) => void
}

const JLPT_LEVELS: LevelItem[] = [
  { level: "N5", description: "Beginner" },
  { level: "N4", description: "Upper Beginner" },
  { level: "N3", description: "Intermediate" },
  { level: "N2", description: "Upper Intermediate" },
  { level: "N1", description: "Advanced / Fluent" },
]

export function LevelSelection(props: LevelSelectionProps) {
  return (
    <div class="relative h-[calc(100vh-64px)] w-screen overflow-hidden">
      <WelcomeSection />

      {/* JLPT Level Cards */}
      <div class="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <For each={JLPT_LEVELS}>
          {(item) => <LevelCard item={item} onSelect={props.onSelect} />}
        </For>
      </div>

      <div class="absolute bottom-4 w-full px-6 text-right text-sm opacity-50">
        <p>
          Don't worry, there's no additional questions asking for your email or
          anything :)
        </p>
      </div>
    </div>
  )
}

function LevelCard(props: {
  item: LevelItem
  onSelect?: (level: string) => void
}) {
  const [isHovered, setIsHovered] = createSignal(false)
  const chapterId = LEVEL_TO_CHAPTER_MAP[props.item.level]
  const styles = getChapterStyles(chapterId)

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
