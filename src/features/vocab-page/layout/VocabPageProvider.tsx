// features/vocab-page/layout/VocabPageProvider.tsx
import { createContext, useContext, ParentComponent } from "solid-js"
import { useVocabPageState } from "../hooks/useVocabPageState"
import type { User } from "@supabase/supabase-js"
import type { FoldersAndDecksData } from "@/features/supabase/db/folder"

type VocabPageState = ReturnType<typeof useVocabPageState>

const VocabPageContext = createContext<VocabPageState | undefined>()

interface VocabPageProviderProps {
  foldersAndDecksPromise: Promise<FoldersAndDecksData>
  user: User | null
}

export const VocabPageProvider: ParentComponent<VocabPageProviderProps> = (
  props,
) => {
  const state = useVocabPageState(props.foldersAndDecksPromise, props.user)

  return (
    <VocabPageContext.Provider value={state}>
      {props.children}
    </VocabPageContext.Provider>
  )
}

export function useVocabPageContext() {
  const context = useContext(VocabPageContext)
  if (!context) {
    throw new Error(
      "useVocabPageContext must be used within a VocabPageProvider",
    )
  }
  return context
}
