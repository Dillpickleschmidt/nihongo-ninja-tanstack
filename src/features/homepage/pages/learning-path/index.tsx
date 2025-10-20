import { createSignal, createEffect } from "solid-js"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { useQueryClient } from "@tanstack/solid-query"
import { completedModulesQueryOptions } from "@/features/learn-page/query/query-options"
import type { User } from "@supabase/supabase-js"
import type { TextbookIDEnum } from "@/data/types"
import { getChapterContent } from "./utils/getChapterContent"
import { ChapterHeader } from "./components/ChapterHeader"
import { ModuleTilesGrid } from "./components/ModuleTilesGrid"
import { ProgressFooter } from "./components/ProgressFooter"

interface LearningPathPageProps {
  chapterSlug: string
  textbookId: TextbookIDEnum
  onChapterChange?: (chapterSlug: string) => void
  user?: User | null
}

export function LearningPathPage(props: LearningPathPageProps) {
  const queryClient = useQueryClient()
  const [selectedChapterSlug, setSelectedChapterSlug] = createSignal<string>(
    props.chapterSlug,
  )

  // Sync with prop changes from external sources (e.g., Nav2 deck selector)
  createEffect(() => {
    setSelectedChapterSlug(props.chapterSlug)
  })

  const handleChapterChange = (newChapterSlug: string) => {
    setSelectedChapterSlug(newChapterSlug)
    props.onChapterChange?.(newChapterSlug)
  }

  const content = () =>
    getChapterContent(props.textbookId, selectedChapterSlug())

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
    <section class="mx-auto w-full max-w-7xl px-4 pt-4 pb-24 md:pt-24">
      <ChapterHeader
        heading={content().heading}
        description={content().description}
        features={content().features}
        chapterSlug={selectedChapterSlug()}
        textbookId={props.textbookId}
        onChapterChange={handleChapterChange}
      />

      <ModuleTilesGrid
        tiles={content().tiles}
        chapterSlug={selectedChapterSlug()}
        isModuleCompleted={isModuleCompleted}
        firstIncompleteIndex={getFirstIncompleteIndex()}
      />

      <ProgressFooter
        chapterSlug={selectedChapterSlug()}
        textbookId={props.textbookId}
        tiles={content().tiles}
        isModuleCompleted={isModuleCompleted}
        userId={props.user?.id || null}
        queryClient={queryClient}
      />
    </section>
  )
}
