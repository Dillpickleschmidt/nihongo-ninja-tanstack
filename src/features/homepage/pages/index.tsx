import { createSignal, Show, Switch, Match } from "solid-js"
import { JlptPage } from "./jlpt"
import { LearningPathPage } from "./learning-path"

type PageType = "jlpt" | "learning-path"

interface HomepageProps {
  initialPage?: PageType
}

export function HomepagePages(props: HomepageProps) {
  const [currentPage, setCurrentPage] = createSignal<PageType>(
    props.initialPage ?? "jlpt",
  )
  const [selectedLevel, setSelectedLevel] = createSignal<string>("N5")

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level)
    setCurrentPage("learning-path")
  }

  return (
    <Switch>
      <Match when={currentPage() === "jlpt"}>
        <JlptPage onLevelSelect={handleLevelSelect} />
      </Match>
      <Match when={currentPage() === "learning-path"}>
        <LearningPathPage
          initialLevel={selectedLevel()}
          onLevelChange={setSelectedLevel}
        />
      </Match>
    </Switch>
  )
}
