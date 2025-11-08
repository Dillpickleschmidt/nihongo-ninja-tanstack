import { For, Show, createMemo } from "solid-js"
import { ChapterPagination } from "./ChapterPagination"
import { useLearningPath } from "../LearningPathContext"

export function ChapterHeader() {
  const context = useLearningPath()

  const learningPathData = createMemo(() => {
    const chaps = context.chapters.data
    if (!chaps) return undefined
    return chaps.find(
      (ch) => ch.slug === context.settingsQuery.data!["active-chapter"],
    )
  })

  return (
    <Show
      when={
        learningPathData() &&
        !context.chapters.isPending &&
        !context.chapters.isError
      }
    >
      <div class="px-4 pt-4 md:px-6 md:pt-6">
        <div class="mb-5">
          <div class="float-right">
            <ChapterPagination />
          </div>
          <h2 class="text-3xl font-semibold">{learningPathData()?.title}</h2>
        </div>
        <p class="text-muted-foreground clear-both max-w-3xl">
          {learningPathData()?.description}
        </p>
        {/* Feature List - Inline merged from FeatureList component */}
        <ul class="text-muted-foreground mt-4 space-y-2 text-sm">
          <For each={learningPathData()?.features || []}>
            {(feature) => (
              <li class="flex items-center gap-2">
                <span class="bg-primary h-1.5 w-1.5 rounded-full" />
                {feature}
              </li>
            )}
          </For>
        </ul>
      </div>
    </Show>
  )
}
