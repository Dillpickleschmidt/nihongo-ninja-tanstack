// features/learn-page/context/LearnDataContext.tsx
import { createContext, useContext, type ParentComponent } from "solid-js"
import type { VocabularyItem, Deck, TextbookIDEnum } from "@/data/types"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { DeferredPromise } from "@tanstack/solid-router"
import type { FSRSCardData } from "@/features/supabase/db/fsrs-operations"
import type {
  EnrichedExternalResourceCollection,
  EnrichedLearningPathModule,
} from "../utils/loader-helpers"

export interface LearnPageData {
  activeTextbookId: TextbookIDEnum
  activeDeck: Deck
  chapterVocabulary: VocabularyItem[]
  wordHierarchyData: VocabHierarchy | null
  fsrsProgressData: DeferredPromise<Record<string, FSRSCardData> | null>
  dueFSRSCardsCount: DeferredPromise<number | null>
  lessons: EnrichedLearningPathModule[]
  externalResources: EnrichedExternalResourceCollection
  deferredThumbnails: DeferredPromise<{
    resourceId: string
    thumbnailUrl: string | null
  }>[]
  progressPercentage: number
  struggles: string[]
  historyItems: { name: string; icon: string; amount: number; color: string }[]
}

const LearnPageDataContext = createContext<LearnPageData>()

interface LearnDataProviderProps {
  data: LearnPageData
}

export const LearnDataProvider: ParentComponent<LearnDataProviderProps> = (
  props,
) => {
  return (
    <LearnPageDataContext.Provider value={props.data}>
      {props.children}
    </LearnPageDataContext.Provider>
  )
}

export const useLearnPageData = (): LearnPageData => {
  const context = useContext(LearnPageDataContext)
  if (!context) {
    throw new Error("useLearnData must be used within a LearnDataProvider")
  }
  return context
}
