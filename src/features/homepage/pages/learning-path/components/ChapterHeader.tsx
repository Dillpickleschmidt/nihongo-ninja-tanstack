import { For } from "solid-js"
import { ChapterPagination } from "./ChapterPagination"
import { useLearningPath } from "../LearningPathContext"

interface ChapterHeaderProps {
  onChapterChange: (chapterSlug: string) => void
}

export function ChapterHeader(props: ChapterHeaderProps) {
  const context = useLearningPath()

  return (
    <div class="p-4 md:p-6">
      <div class="mb-5">
        <div class="float-right">
          <ChapterPagination onChapterChange={props.onChapterChange} />
        </div>
        <h2 class="text-3xl font-semibold">
          {context.learningPathData()?.heading}
        </h2>
      </div>
      <p class="text-muted-foreground clear-both max-w-3xl">
        {context.learningPathData()?.description}
      </p>
      {/* Feature List - Inline merged from FeatureList component */}
      <ul class="text-muted-foreground mt-4 space-y-2 text-sm">
        <For each={context.learningPathData()?.features || []}>
          {(feature) => (
            <li class="flex items-center gap-2">
              <span class="bg-primary h-1.5 w-1.5 rounded-full" />
              {feature}
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}
