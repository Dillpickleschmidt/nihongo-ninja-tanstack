import { Switch, Match } from "solid-js"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { ModuleStartPage } from "./ModuleStartPage"
import { UserDeckStartPage } from "./UserDeckStartPage"

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
