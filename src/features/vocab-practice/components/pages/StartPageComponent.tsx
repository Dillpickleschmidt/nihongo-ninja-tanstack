// features/vocab-practice/components/pages/StartPageComponent.tsx
import { Switch, Match } from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { ModuleStartPage } from "./start-page/components/ModuleStartPage"
import { UserDeckStartPage } from "./start-page/components/UserDeckStartPage"

export default function StartPageComponent() {
  const { moduleId, deckId } = useVocabPracticeContext()

  return (
    <Switch>
      <Match when={moduleId}>
        <ModuleStartPage />
      </Match>
      <Match when={deckId}>
        <UserDeckStartPage />
      </Match>
    </Switch>
  )
}
