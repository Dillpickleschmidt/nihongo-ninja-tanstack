import { createSignal } from "solid-js"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { completedModulesQueryOptions } from "@/features/learn-page/query/query-options"
import type { User } from "@supabase/supabase-js"
import { getChapterContent } from "./utils/getChapterContent"
import { ChapterHeader } from "./components/ChapterHeader"
import { ModuleTilesGrid } from "./components/ModuleTilesGrid"
import { ProgressFooter } from "./components/ProgressFooter"

interface LearningPathPageProps {
  initialChapterId: string
  textbookId: string
  onChapterChange?: (chapterId: string) => void
  user?: User | null
}

export function LearningPathPage(props: LearningPathPageProps) {
  const [chapterId, setChapterId] = createSignal<string>(props.initialChapterId)

  const handleChapterChange = (newChapterId: string) => {
    setChapterId(newChapterId)
    props.onChapterChange?.(newChapterId)
  }

  const content = () => getChapterContent(props.textbookId, chapterId())

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
        chapterId={chapterId()}
        onChapterChange={handleChapterChange}
      />

      <ModuleTilesGrid
        tiles={content().tiles}
        chapterId={chapterId()}
        isModuleCompleted={isModuleCompleted}
        firstIncompleteIndex={getFirstIncompleteIndex()}
      />

      <ProgressFooter
        chapterId={chapterId()}
        textbookId={props.textbookId}
        tiles={content().tiles}
        isModuleCompleted={isModuleCompleted}
      />
    </section>
  )
}
