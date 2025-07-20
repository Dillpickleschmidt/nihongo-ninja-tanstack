// features/dashboard/context/DashboardDataContext.tsx
import { createContext, useContext, type ParentComponent } from "solid-js"
import type { VocabularyItem, Deck, DeckSource } from "@/data/types"
import type { FullHierarchyData } from "@/data/wanikani/types"
import type { DeferredPromise } from "@tanstack/solid-router"
import type { FSRSCardData } from "@/features/supabase/db/utils"

export interface DashboardData {
  wordHierarchyData: FullHierarchyData | null
  vocabularyItems: VocabularyItem[]
  progressData: DeferredPromise<Record<string, FSRSCardData> | null>
  dueFSRSCardsCount: DeferredPromise<number | null>
  currentDeck: Deck
  deckSources: DeckSource[]
  totalLessonCount: number
}

const DashboardDataContext = createContext<DashboardData>()

interface DashboardDataProviderProps {
  data: DashboardData
}

export const DashboardDataProvider: ParentComponent<
  DashboardDataProviderProps
> = (props) => {
  return (
    <DashboardDataContext.Provider value={props.data}>
      {props.children}
    </DashboardDataContext.Provider>
  )
}

export const useDashboardData = (): DashboardData => {
  const context = useContext(DashboardDataContext)
  if (!context) {
    throw new Error(
      "useDashboardData must be used within a DashboardDataProvider",
    )
  }
  return context
}
