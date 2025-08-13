// features/vocab-page/center-panel/CenterPanel.tsx
import { Switch, Match, Show } from "solid-js"
import { CenterNavBar, type NavTabId } from "./CenterNavBar"
import { VocabCardsContent } from "./VocabCardsContent"
import { DeckCreationContainer } from "../deck-creation/components/DeckCreationContainer"
import { DeckCreationStoreProvider } from "../deck-creation/context/DeckCreationStoreContext"
import type { DeckCreationInitialData } from "../deck-creation/stores/deck-creation-store"
import { BrowseDecksContent } from "./BrowseDecksContent"
import { OverridesContent } from "./OverridesContent"
import type { VocabBuiltInDeck } from "../types"

interface CenterPanelProps {
  selectedUserDeck: UserDeck | null
  selectedBuiltInDeck?: VocabBuiltInDeck | null
  activeNavTab: NavTabId
  onNavTabChange: (tabId: NavTabId) => void
  folders: DeckFolder[]
  decks: UserDeck[]
  deckEditData?: DeckCreationInitialData | null
  onRefetch?: () => Promise<void>
  onNavigateToDeck?: (deck: UserDeck) => void
}

export function CenterPanel(props: CenterPanelProps) {
  return (
    <div class="flex h-[calc(100vh-65px)] flex-1 flex-col overflow-y-auto">
      <CenterNavBar
        activeTab={props.activeNavTab}
        onTabChange={props.onNavTabChange}
      />
      <div class="flex flex-1 items-center justify-center px-8">
        <Switch>
          <Match when={props.activeNavTab === "vocab-cards"}>
            <VocabCardsContent
              selectedUserDeck={props.selectedUserDeck}
              selectedBuiltInDeck={props.selectedBuiltInDeck}
            />
          </Match>
          <Match when={props.activeNavTab === "deck-builder"}>
            <Show
              when={props.deckEditData}
              keyed
              fallback={
                <DeckCreationStoreProvider initialData={undefined}>
                  <DeckCreationContainer
                    folders={props.folders}
                    decks={props.decks}
                    onRefetch={props.onRefetch}
                    onNavigateToDeck={props.onNavigateToDeck}
                  />
                </DeckCreationStoreProvider>
              }
            >
              {(editData) => (
                <DeckCreationStoreProvider initialData={editData}>
                  <DeckCreationContainer
                    folders={props.folders}
                    decks={props.decks}
                    onRefetch={props.onRefetch}
                    onNavigateToDeck={props.onNavigateToDeck}
                  />
                </DeckCreationStoreProvider>
              )}
            </Show>
          </Match>
          <Match when={props.activeNavTab === "browse-decks"}>
            <BrowseDecksContent />
          </Match>
          <Match when={props.activeNavTab === "overrides"}>
            <OverridesContent />
          </Match>
        </Switch>
      </div>
    </div>
  )
}
