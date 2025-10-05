import { Switch, Match } from "solid-js"
import type { MobileContentView } from "@/features/learn-page/context/LearnPageContext"
import { LearningPathSection } from "../content/LearningPathSection"
import { FeaturedContent } from "../content/FeaturedContent"
import { WordHierarchy } from "../content/WordHierarchy"
import { StrugglesContent } from "../content/StrugglesContent"
import { HistoryContent } from "../content/HistoryContent"

interface MobileContentRendererProps {
  activeView: () => MobileContentView
}

export function MobileContentRenderer(props: MobileContentRendererProps) {
  return (
    <Switch fallback={<LearningPathSection variant="mobile" />}>
      <Match when={props.activeView() === "learning-path"}>
        <LearningPathSection variant="mobile" />
      </Match>

      <Match when={props.activeView() === "featured-content"}>
        <FeaturedContent variant="mobile" />
      </Match>

      <Match when={props.activeView() === "your-progress"}>
        <WordHierarchy variant="mobile" />
      </Match>

      <Match when={props.activeView() === "your-struggles"}>
        <StrugglesContent variant="mobile" />
      </Match>

      <Match when={props.activeView() === "your-history"}>
        <HistoryContent variant="mobile" />
      </Match>
    </Switch>
  )
}
