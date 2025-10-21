import { Show } from "solid-js"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { completedModulesQueryOptions } from "@/features/learn-page/query/query-options"
import type { User } from "@supabase/supabase-js"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"
import { getChapterContent } from "./utils/getChapterContent"
import { ChapterHeader } from "./components/ChapterHeader"
import { ModuleTilesGrid } from "./components/ModuleTilesGrid"
import { ProgressFooter } from "./components/ProgressFooter"
import { ArrowBigLeft } from "lucide-solid"
import { Button } from "@/components/ui/button"
import type { TextbookIDEnum } from "@/data/types"

interface LearningPathPageProps {
  settingsQuery: UseQueryResult<UserSettings, Error>
  onChapterChange?: (chapterSlug: string) => void
  onBack?: () => void
  user?: User | null
}

export function LearningPathPage(props: LearningPathPageProps) {
  const handleChapterChange = (newChapterSlug: string) => {
    props.onChapterChange?.(newChapterSlug)
  }

  const content = () =>
    getChapterContent(
      props.settingsQuery.data!["active-textbook"] as TextbookIDEnum,
      props.settingsQuery.data!["active-deck"],
    )

  const completedModulesQuery = useCustomQuery(() =>
    completedModulesQueryOptions(props.user?.id || null),
  )

  const isModuleCompleted = (moduleHref: string) =>
    completedModulesQuery.data?.some(
      (module) => module.module_path === moduleHref,
    ) ?? false

  const getFirstIncompleteIndex = () =>
    content().tiles.findIndex((tile) => !isModuleCompleted(tile.href))

  return (
    <section class="mx-auto w-full max-w-7xl px-4 pt-4 pb-24 md:pt-8">
      <div class="flex h-16 items-center pl-4">
        <Show
          when={
            props.settingsQuery.data!["active-textbook"] ===
              "getting_started" && props.onBack
          }
        >
          <Button
            variant="ghost"
            onClick={props.onBack}
            class="h-auto rounded-full border-2 border-white/30 bg-transparent p-1.25 opacity-60 hover:bg-neutral-400/10 [&_svg]:size-auto"
          >
            <ArrowBigLeft class="h-12 w-12 text-white" />
          </Button>
        </Show>
      </div>

      <ChapterHeader
        heading={content().heading}
        description={content().description}
        features={content().features}
        settingsQuery={props.settingsQuery}
        onChapterChange={handleChapterChange}
      />

      <ModuleTilesGrid
        tiles={content().tiles}
        settingsQuery={props.settingsQuery}
        isModuleCompleted={isModuleCompleted}
        firstIncompleteIndex={getFirstIncompleteIndex()}
      />

      <ProgressFooter
        settingsQuery={props.settingsQuery}
        tiles={content().tiles}
        isModuleCompleted={isModuleCompleted}
        userId={props.user?.id || null}
      />
    </section>
  )
}
