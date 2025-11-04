import { ChapterPagination } from "./ChapterPagination"
import { FeatureList } from "./FeatureList"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"

interface ChapterHeaderProps {
  heading: string | undefined
  description: string | undefined
  features: string[] | undefined
  settingsQuery: UseQueryResult<UserSettings, Error>
  onChapterChange?: (chapterSlug: string) => void
  firstIncompleteHref?: string
}

export function ChapterHeader(props: ChapterHeaderProps) {
  return (
    <div class="p-4 md:p-6">
      <div class="mb-5">
        <div class="float-right">
          <ChapterPagination
            settingsQuery={props.settingsQuery}
            onChapterChange={props.onChapterChange}
            firstIncompleteHref={props.firstIncompleteHref}
          />
        </div>
        <h2 class="text-3xl font-semibold">{props.heading}</h2>
      </div>
      <p class="text-muted-foreground clear-both max-w-3xl">
        {props.description}
      </p>
      <FeatureList features={props.features} />
    </div>
  )
}
