// features/vocab-practice/pages/start/UserDeckStartPage.tsx
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  userDeckInfoQueryOptions,
  userDeckVocabularyQueryOptions,
  userDeckHierarchyQueryOptions,
} from "@/query/query-options"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { useStartPageLogic } from "./hooks/useStartPageLogic"
import { StartPageLayout } from "./StartPageLayout"

export function UserDeckStartPage() {
  const { deckId, mode, activeService, settingsQuery, queryClient } =
    useVocabPracticeContext()

  const deckInfoQuery = useCustomQuery(() => userDeckInfoQueryOptions(deckId!))

  const deckVocabularyQuery = useCustomQuery(() =>
    userDeckVocabularyQueryOptions(deckId!),
  )

  const deckHierarchyQuery = useCustomQuery(() => {
    const vocabData = deckVocabularyQuery.data
    if (!vocabData) {
      return {
        queryKey: ["disabled-deck-hierarchy"] as const,
        queryFn: () =>
          Promise.resolve({ vocabulary: [], kanji: [], radicals: [] }),
        enabled: false,
      }
    }

    return userDeckHierarchyQueryOptions(
      deckId!,
      vocabData,
      mode,
      settingsQuery.data!["override-settings"],
      activeService() !== "local",
    )
  })

  const logic = useStartPageLogic({
    queries: {
      vocabularyQuery: deckVocabularyQuery,
      hierarchyQuery: deckHierarchyQuery,
      metadataQuery: deckInfoQuery,
    },
    getDeckName: () => deckInfoQuery.data?.deck_name || "Loading...",
    onStart: async () => {
      const vocab = deckVocabularyQuery.data!

      await queryClient.ensureQueryData(
        userDeckHierarchyQueryOptions(
          deckId!,
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
