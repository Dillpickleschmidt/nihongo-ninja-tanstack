import { createContext, useContext } from "solid-js"
import {
  createDeckCreationStore,
  type DeckCreationStoreActions,
  type DeckCreationInitialData,
} from "../stores/deck-creation-store"
import type { DeckCreationStore } from "../types/deck-creation-types"

// Context for the deck creation store
const DeckCreationStoreContext = createContext<{
  store: DeckCreationStore
  actions: DeckCreationStoreActions
}>()

export function DeckCreationStoreProvider(props: { 
  children: any
  initialData?: DeckCreationInitialData
}) {
  const storeData = createDeckCreationStore(props.initialData)

  return (
    <DeckCreationStoreContext.Provider value={storeData}>
      {props.children}
    </DeckCreationStoreContext.Provider>
  )
}

export function useDeckCreationStore() {
  const context = useContext(DeckCreationStoreContext)
  if (!context) {
    throw new Error(
      "useDeckCreationStore must be used within a DeckCreationStoreProvider",
    )
  }
  return context
}
