import { Show, createSignal } from "solid-js"
import { getChapterStyles } from "@/data/chapter_colors"
import { getModuleIcon } from "@/features/stats-page/loader-helpers"
import { useLearningPath } from "../LearningPathContext"
import type { EnrichedLearningPathModule } from "@/features/stats-page/loader-helpers"
import StartHereSvg from "@/features/homepage/shared/assets/start-here.svg"
import TryThisSvg from "@/features/homepage/shared/assets/try-this.svg"

interface ModuleCardProps {
  module: EnrichedLearningPathModule
  isCompleted: boolean
  shouldBlink?: boolean
}

export function ModuleCard(props: ModuleCardProps) {
  const context = useLearningPath()
  const [isHovered, setIsHovered] = createSignal(false)
  const ModuleIcon = getModuleIcon(props.module.source_type)

  const lessonIndex = () => {
    const lessons = context.modules.data
    if (!lessons) return -1
    return lessons.findIndex((lesson) => lesson.linkTo === props.module.linkTo)
  }

  const firstIncompleteIndex = () => context.getFirstIncompleteIndex()
  const styles = () =>
    getChapterStyles(context.settingsQuery.data!["active-chapter"])

  const shouldShowStartHere = () =>
    lessonIndex() === firstIncompleteIndex() && lessonIndex() === 0
  const shouldShowTryThis = () =>
    lessonIndex() === firstIncompleteIndex() && lessonIndex() > 0

  return (
    <div class="relative">
      <div
        class={`ease-instant-hover-200 rounded-2xl border border-neutral-700/60 p-4 hover:scale-[0.995] ${
          props.isCompleted
            ? `bg-gradient-to-br ${styles().gradient} ring-2 ${styles().ringColor2}`
            : `bg-background/50 ${isHovered() ? `ring-2 ${styles().ringColor1}` : ""}`
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Preview area */}
        <div class="bg-background mb-3 h-32 rounded-xl md:h-40" />

        <div class="flex items-center justify-between">
          <div>
            <p class="text-muted-foreground text-sm">
              {props.module.description}
            </p>
            <div class="flex items-center gap-2">
              <Show
                when={
                  context.settingsQuery.data!["active-learning-path"] !==
                  "getting_started"
                }
              >
                <ModuleIcon size="20px" class={props.module.iconClasses} />
              </Show>
              <h3 class="text-lg font-medium">{props.module.title}</h3>
            </div>
          </div>
          <div>
            <Show when={shouldShowStartHere()}>
              <StartHereSvg class="mr-1 inline-flex h-auto w-32 text-pink-300 saturate-[75%]" />
            </Show>
            <Show when={shouldShowTryThis()}>
              <TryThisSvg class="mr-1 inline-flex h-auto w-28 text-[#d3d3d3]" />
            </Show>
            <span
              class={`relative h-auto rounded-lg px-4 py-2 text-sm ${styles().bgColor} ${styles().textColor}`}
            >
              <Show when={lessonIndex() === firstIncompleteIndex()}>
                <span
                  class={`animate-ring-pulse absolute inset-0 rounded-lg ring ${styles().ringColorBright}`}
                />
              </Show>
              Explore
            </span>
          </div>
        </div>
      </div>

      {/* Ring blink overlay - only shows when blinking */}
      <Show when={props.shouldBlink}>
        <div
          class={`absolute inset-0 rounded-2xl ring-2 ${styles().ringColorBright} animate-ring-blink pointer-events-none`}
        />
      </Show>
    </div>
  )
}
