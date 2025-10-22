import { Show, createSignal } from "solid-js"
import { getChapterStyles } from "@/data/chapter_colors"
import { getModuleIcon } from "@/features/learn-page/utils/loader-helpers"
import StartHereSvg from "@/features/homepage/shared/assets/start-here.svg"
import TryThisSvg from "@/features/homepage/shared/assets/try-this.svg"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"

interface PreviewTileProps {
  title: string
  description?: string
  moduleType: string
  iconClasses: string
  chapterSlug: string
  index: number
  href: string
  isCompleted: boolean
  firstIncompleteIndex: number
  settingsQuery: UseQueryResult<UserSettings, Error>
}

export function PreviewTile(props: PreviewTileProps) {
  const styles = () => getChapterStyles(props.chapterSlug)
  const [isHovered, setIsHovered] = createSignal(false)
  const ModuleIcon = getModuleIcon(props.moduleType)

  const shouldShowStartHere = () =>
    props.index === props.firstIncompleteIndex && props.index === 0
  const shouldShowTryThis = () =>
    props.index === props.firstIncompleteIndex && props.index > 0

  return (
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
          <p class="text-muted-foreground text-sm">{props.description}</p>
          <div class="flex items-center gap-2">
            <Show
              when={
                props.settingsQuery.data!["active-textbook"] !==
                  "getting_started"
              }
            >
              <ModuleIcon size="20px" class={props.iconClasses} />
            </Show>
            <h3 class="text-lg font-medium">{props.title}</h3>
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
            <Show when={props.index === props.firstIncompleteIndex}>
              <span
                class={`animate-ring-pulse absolute inset-0 rounded-lg ring ${styles().ringColorBright}`}
              />
            </Show>
            Explore
          </span>
        </div>
      </div>
    </div>
  )
}
