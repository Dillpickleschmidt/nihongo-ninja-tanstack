import { Show } from "solid-js"
import type { Doc } from "../../../../../convex/_generated/dataModel"
import DifficultySelector from "./DifficultySelector"
import ProgressDisplay from "./ProgressDisplay"
import PracticeSession from "./PracticeSession"

interface PracticeContainerProps {
  questions: Doc<"sentencePracticeQuestions">[] | undefined
}

export default function PracticeContainer(props: PracticeContainerProps) {
  return (
    <div class="mx-auto flex w-full max-w-3xl flex-col gap-2 pt-4 [--sentence-practice-action:rgb(202,138,4)] md:gap-4 dark:[--sentence-practice-action:rgb(245,158,11)]">
      <div class="flex w-full items-center">
        <ProgressDisplay />
        <DifficultySelector />
      </div>

      <Show
        when={props.questions}
        fallback={
          <div class="py-8 text-center text-muted-foreground dark:text-white/40">
            Loading questions...
          </div>
        }
      >
        {(questions) => <PracticeSession questions={questions()} />}
      </Show>
    </div>
  )
}
