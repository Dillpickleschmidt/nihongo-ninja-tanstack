// features/vocab-practice/components/pages/start-page/components/ModuleStartPage.tsx
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  practiceHierarchyQueryOptions,
  moduleVocabularyQueryOptions,
} from "@/features/vocab-practice/query/query-options"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { useStartPageLogic } from "./hooks/useStartPageLogic"
import { StartPageLayout } from "./StartPageLayout"
import { getModuleTitleFromPath } from "@/data/utils/vocab"

export function ModuleStartPage() {
  const { moduleId, mode, activeService, settingsQuery, queryClient } =
    useVocabPracticeContext()

  const vocabularyQuery = useCustomQuery(() =>
    moduleVocabularyQueryOptions(moduleId!),
  )

  const hierarchyQuery = useCustomQuery(() => {
    const vocabData = vocabularyQuery.data
    if (!vocabData) {
      return {
        queryKey: ["disabled-module-hierarchy"] as const,
        queryFn: () =>
          Promise.resolve({ vocabulary: [], kanji: [], radicals: [] }),
        enabled: false,
      }
    }

    return practiceHierarchyQueryOptions(
      moduleId!,
      vocabData,
      mode,
      settingsQuery.data!["override-settings"],
      activeService() !== "local",
    )
  })

  const logic = useStartPageLogic({
    queries: {
      vocabularyQuery,
      hierarchyQuery,
    },
    getDeckName: () => getModuleTitleFromPath(moduleId!) as string, // assumes route returned 404 if moduleId is invalid
    onStart: async () => {
      const vocab = await queryClient.ensureQueryData(
        moduleVocabularyQueryOptions(moduleId!),
      )

      await queryClient.ensureQueryData(
        practiceHierarchyQueryOptions(
          moduleId!,
          vocab,
          mode,
          settingsQuery.data!["override-settings"],
          activeService() !== "local",
        ),
      )
    },
  })

  return <StartPageLayout logic={logic} deckName={logic.getDeckName()} />
}
