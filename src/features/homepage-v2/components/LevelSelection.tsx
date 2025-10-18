import { createSignal } from "solid-js"
import { SmoothCard } from "@/features/learn-page/components/shared/SmoothCard"
import { cn } from "@/utils"

interface LevelItem {
  level: string
  description: string
}

interface LevelSelectionProps {
  onSelect?: (level: string) => void
}

const jlptLevels: LevelItem[] = [
  { level: "N5", description: "Beginner" },
  { level: "N4", description: "Upper Beginner" },
  { level: "N3", description: "Intermediate" },
  { level: "N2", description: "Upper Intermediate" },
  { level: "N1", description: "Advanced / Fluent" },
]

const getLevelStyles = (level: string) => {
  switch (level) {
    case "N5":
      return {
        gradient: "from-emerald-400/5 to-emerald-600/10",
        textColor: "text-emerald-400",
        borderClass: "stroke-emerald-400/35 [stroke-width:0.75]",
        ringClass: "stroke-emerald-400 [stroke-width:2]",
      }
    case "N4":
      return {
        gradient: "from-sky-400/5 to-sky-600/10",
        textColor: "text-sky-400",
        borderClass: "stroke-sky-400/35 [stroke-width:0.75]",
        ringClass: "stroke-sky-400 [stroke-width:2]",
      }
    case "N3":
      return {
        gradient: "from-violet-400/5 to-violet-600/10",
        textColor: "text-violet-400",
        borderClass: "stroke-violet-400/35 [stroke-width:0.75]",
        ringClass: "stroke-violet-400 [stroke-width:2]",
      }
    case "N2":
      return {
        gradient: "from-amber-400/5 to-amber-600/10",
        textColor: "text-amber-400",
        borderClass: "stroke-amber-400/35 [stroke-width:0.75]",
        ringClass: "stroke-amber-400 [stroke-width:2]",
      }
    case "N1":
      return {
        gradient: "from-rose-400/5 to-rose-600/10",
        textColor: "text-rose-400",
        borderClass: "stroke-rose-400/35 [stroke-width:0.75]",
        ringClass: "stroke-rose-400 [stroke-width:2]",
      }
    default:
      return {
        gradient: "from-gray-400/5 to-gray-600/10",
        textColor: "text-gray-400",
        borderClass: "stroke-gray-400/35 [stroke-width:0.75]",
        ringClass: "stroke-gray-400 [stroke-width:2]",
      }
  }
}

const LevelCard = (props: {
  item: LevelItem
  onSelect?: (level: string) => void
}) => {
  const [isHovered, setIsHovered] = createSignal(false)
  const styles = getLevelStyles(props.item.level)

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
        borderClass={styles.borderClass}
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

export function LevelSelection(props: LevelSelectionProps) {
  return (
    <div class="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {jlptLevels.map((item) => (
        <LevelCard item={item} onSelect={props.onSelect} />
      ))}
    </div>
  )
}
