// ui/practice/PracticeContainer.tsx
import { Show, createEffect, createSignal } from "solid-js"
import { PracticeProvider, usePracticeStore } from "../../store/PracticeContext"
import PromptDisplay from "./PromptDisplay"
import AnswerInput from "./AnswerInput"
import ProgressDisplay from "./ProgressDisplay"
import ResultDisplay from "./ResultDisplay"
import DifficultySelector from "./DifficultySelector"
import FillInBlankInput from "./FillInBlankInput"
import { DebugPanel } from "../common/DebugPanel"
import { EasyModeDebugPanel } from "../common/EasyModeDebugPanel"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import { getWidthForCategory } from "./PosHintDisplay"
import { Button } from "@/components/ui/button"
interface PracticeContainerProps {
  path: string
  moduleId: string
}

function PracticeContent(props: PracticeContainerProps) {
  const { store, actions } = usePracticeStore()
  const [isCollapsibleOpen, setIsCollapsibleOpen] = createSignal(false)
  const [showLegend, setShowLegend] = createSignal(true)

  createEffect(() => {
    if (props.path !== store.path) {
      actions.loadQuestions(props.path)
    }
  })

  createEffect(() => {
    if (store.effectiveDifficulty === "easy" && store.checkResult?.isCorrect) {
      setIsCollapsibleOpen(true)
    }
  })

  return (
    <>
      <Show when={showLegend()}>
        <HintLegend />
      </Show>
      <div class="relative mx-auto max-w-2xl space-y-4 px-4 pt-12 pb-32 lg:pt-24">
        <DifficultySelector class="flex justify-end" />
        <Show
          when={!store.isLoading}
          fallback={<div>Loading questions...</div>}
        >
          <Show
            when={store.questions[store.currentQuestionIndex]}
            fallback={<div>No questions available for {props.path}</div>}
          >
            <PromptDisplay
              question={store.questions[store.currentQuestionIndex]!}
            />

            <Show
              when={store.effectiveDifficulty === "easy"}
              fallback={
                <AnswerInput
                  showLegend={showLegend}
                  setShowLegend={setShowLegend}
                />
              }
            >
              <FillInBlankInput
                segments={
                  store.rawQuestions[store.currentQuestionIndex]!.answers[0]
                    .segments
                }
              />
            </Show>

            <ProgressDisplay
              attempted={store.currentQuestionIndex + 1}
              total={store.questions.length}
            />
            <Show when={store.showResult}>
              <ResultDisplay />

              <Collapsible
                class="mt-8 flex flex-col items-center"
                open={isCollapsibleOpen()}
                onOpenChange={setIsCollapsibleOpen}
              >
                <CollapsibleTrigger class="w-fit rounded-full px-4 py-1.5 text-xs">
                  Show all possible
                </CollapsibleTrigger>
                <CollapsibleContent class="w-full">
                  <Show
                    when={store.effectiveDifficulty === "easy"}
                    fallback={
                      <DebugPanel
                        question={store.questions[store.currentQuestionIndex]!}
                      />
                    }
                  >
                    <EasyModeDebugPanel
                      question={store.questions[store.currentQuestionIndex]!}
                      rawSegments={
                        store.rawQuestions[store.currentQuestionIndex]!
                          .answers[0].segments
                      }
                    />
                  </Show>
                </CollapsibleContent>
              </Collapsible>
            </Show>
          </Show>
        </Show>

        <Show when={store.error}>
          <div class="text-red-600">Error loading questions: {store.error}</div>
        </Show>
      </div>
    </>
  )
}

function HintLegend() {
  const orangeWidth = getWidthForCategory("orange")
  const greenWidth = getWidthForCategory("green")
  const blueWidth = getWidthForCategory("blue")
  const orangeContent = () => "　".repeat(orangeWidth)
  const greenContent = () => "　".repeat(greenWidth)
  const blueContent = () => "　".repeat(blueWidth)

  return (
    <div class="bg-card-foreground/10 text-muted-foreground/70 ease-instant-hover-100 fixed right-0 bottom-16 flex h-46 w-44 flex-col items-start gap-1 rounded-tl border p-4 font-semibold backdrop-blur-md lg:top-[40vh] lg:rounded-l">
      <div>
        <span class="mr-2 inline-block rounded-md bg-amber-400 px-1 text-base">
          {orangeContent()}
        </span>
        <label class="text-sm">
          Nouns & <span class="whitespace-nowrap">な-Adjectives</span>
        </label>
      </div>
      <div>
        <span class="mr-2 inline-block rounded-md bg-green-400 px-1 text-base">
          {greenContent()}
        </span>
        <label class="text-sm">
          Verbs & <span class="whitespace-nowrap">い-Adjectives</span>
        </label>
      </div>
      <div>
        <span class="mr-2 inline-block rounded-md bg-teal-400 px-1 text-base">
          {blueContent()}
        </span>
        <label class="text-sm">Particles, Copulas, etc.</label>
      </div>
    </div>
  )
}

export default function PracticeContainer(props: PracticeContainerProps) {
  return (
    <PracticeProvider moduleId={props.moduleId}>
      <PracticeContent {...props} />
    </PracticeProvider>
  )
}
