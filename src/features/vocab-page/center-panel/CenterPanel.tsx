// features/vocab-page/center-panel/CenterPanel.tsx
import { Switch, Match } from "solid-js"
import { CenterNavBar, type NavTabId } from "./CenterNavBar"
import { VocabCardsContent } from "./VocabCardsContent"
import { DeckBuilderContent } from "./DeckBuilderContent"
import { BrowseDecksContent } from "./BrowseDecksContent"
import { OverridesContent } from "./OverridesContent"

interface CenterPanelProps {
  selectedUserDeck: UserDeck | null
  activeNavTab: NavTabId
  onNavTabChange: (tabId: NavTabId) => void
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
            <VocabCardsContent selectedUserDeck={props.selectedUserDeck} />
          </Match>
          <Match when={props.activeNavTab === "deck-builder"}>
            <DeckBuilderContent />
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
