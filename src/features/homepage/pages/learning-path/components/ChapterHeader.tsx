import { ChapterPagination } from "./ChapterPagination"
import { FeatureList } from "./FeatureList"
import ViewingIsEnough from "@/features/homepage/shared/assets/viewing-is-enough.svg"
import type { TextbookIDEnum } from "@/data/types"

interface ChapterHeaderProps {
  heading: string | undefined
  description: string | undefined
  features: string[] | undefined
  chapterSlug: string
  textbookId: TextbookIDEnum
  onChapterChange?: (chapterSlug: string) => void
}

export function ChapterHeader(props: ChapterHeaderProps) {
  return (
    <div class="p-4 md:p-6">
      <div class="mb-4 flex justify-between">
        <h2 class="text-2xl font-semibold md:text-3xl">{props.heading}</h2>
        <ChapterPagination
          currentChapterSlug={props.chapterSlug}
          textbookId={props.textbookId}
          onChapterChange={props.onChapterChange}
        />
      </div>
      <p class="text-muted-foreground mt-4 max-w-3xl">{props.description}</p>
      <div class="flex w-full justify-between">
        <FeatureList features={props.features} />
        <ViewingIsEnough class="-mr-8 -mb-20 h-auto w-68 text-neutral-400" />
      </div>
    </div>
  )
}
