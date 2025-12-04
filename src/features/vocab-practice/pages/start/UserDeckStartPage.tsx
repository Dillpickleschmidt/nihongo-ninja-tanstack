// features/vocab-practice/pages/start/UserDeckStartPage.tsx
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  userDeckInfoQueryOptions,
  userDeckVocabularyQueryOptions,
  userDeckAllQueryOptions,
} from "@/query/query-options"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { useStartPageLogic } from "./hooks/useStartPageLogic"
import { StartPageLayout } from "./StartPageLayout"

export function UserDeckStartPage() {
  const { deckId, mode, activeService, prerequisitesEnabled, queryClient } =
    useVocabPracticeContext()

  const deckInfoQuery = useCustomQuery(() => userDeckInfoQueryOptions(deckId!))

  // Fetch vocabulary first
  const deckVocabularyQuery = useCustomQuery(() =>
    userDeckVocabularyQueryOptions(deckId!),
  )

  // Combined query depends on vocabulary being available
  const deckAllQuery = useCustomQuery(() => {
    const vocabData = deckVocabularyQuery.data
    if (!vocabData) {
      return {
        queryKey: ["disabled-deck-all"] as const,
        queryFn: () => Promise.resolve(null),
        enabled: false,
      }
    }

    return userDeckAllQueryOptions(
      deckId!,
      vocabData,
      mode,
      activeService() !== "local",
      prerequisitesEnabled(),
    )
  })

  const logic = useStartPageLogic({
    moduleAllQuery: deckAllQuery,
    metadataQuery: deckInfoQuery,
    getDeckName: () => deckInfoQuery.data?.deck_name || "Loading...",
    onStart: async () => {
      const vocab = await queryClient.ensureQueryData(
        userDeckVocabularyQueryOptions(deckId!),
      )

      await queryClient.ensureQueryData(
        userDeckAllQueryOptions(
          deckId!,
          vocab,
          mode,
          activeService() !== "local",
          prerequisitesEnabled(),
        ),
      )
    },
  })

  return <StartPageLayout logic={logic} deckName={logic.getDeckName()} />
}
