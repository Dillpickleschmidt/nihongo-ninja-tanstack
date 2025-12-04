// features/vocab-practice/pages/start/ModuleStartPage.tsx
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { vocabModuleAllQueryOptions } from "@/query/query-options"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { useStartPageLogic } from "./hooks/useStartPageLogic"
import { StartPageLayout } from "./StartPageLayout"
import { getModuleTitleFromPath } from "@/data/utils/modules"

export function ModuleStartPage() {
  const { moduleId, mode, activeService, prerequisitesEnabled, queryClient } =
    useVocabPracticeContext()

  // Combined query for vocabulary + hierarchy + kanji/radicals
  const moduleAllQuery = useCustomQuery(() =>
    vocabModuleAllQueryOptions(
      moduleId!,
      mode,
      activeService() !== "local",
      prerequisitesEnabled(),
    ),
  )

  const logic = useStartPageLogic({
    moduleAllQuery,
    getDeckName: () => getModuleTitleFromPath(moduleId!) as string,
    onStart: async () => {
      await queryClient.ensureQueryData(
        vocabModuleAllQueryOptions(
          moduleId!,
          mode,
          activeService() !== "local",
          prerequisitesEnabled(),
        ),
      )
    },
  })

  return <StartPageLayout logic={logic} deckName={logic.getDeckName()} />
}
