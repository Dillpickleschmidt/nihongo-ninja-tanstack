// ui/practice/DebugPanel.tsx
import { For, Show, createMemo, createSignal } from "solid-js"
import type { RichAnswer } from "../../core/types"
import { removeFurigana } from "../../core/textProcessor"
import {
  FIRST_PERSON_PRONOUNS,
  getPronounDisplayLabel,
} from "../../core/answer-processing/pronouns"
import { groupDebugAnswers } from "./selectors/debugAnswers"

interface DebugPanelProps {
  allAnswers: RichAnswer[] // All acceptedAnswers from ProcessedQuestion
}

interface PronounGroup {
  pronounType: string
  label?: string
  honorificGroups: Map<
    string,
    {
      kanji: RichAnswer[]
      kana: RichAnswer[]
    }
  >
}

const SPACE_REGEX = /\s+/g
const KNOWN_PRONOUNS = FIRST_PERSON_PRONOUNS.map((pronoun) => pronoun.value)

export default function DebugPanel(props: DebugPanelProps) {
  const hierarchicalAnswers = createMemo(() => groupDebugAnswers(props.allAnswers))

  const formatAnswer = (answer: RichAnswer) => {
    return removeFurigana(answer.plain)
      .replace(/\x1F/g, "") // Remove segment separator
      .replace(SPACE_REGEX, "")
  }

  return (
    <div class="border-border bg-card mt-4 rounded-lg border p-4">
      <div class="grid grid-cols-3">
        <div />
        <h3 class="text-muted-foreground mb-3 text-center font-bold">
          All Possible Answers
        </h3>
        <p class="text-right text-xs italic text-neutral-500">
          We may be missing some.
          <br />
          Let us know on Discord!
        </p>
      </div>
      <div class="space-y-6 text-sm">
        <For each={hierarchicalAnswers()}>
          {(sourceGroup) => {
            // Get first answer to show as example
            const firstAnswer =
              props.allAnswers.find(
                (a) => a.sourceAnswerIndex === sourceGroup.sourceAnswerIndex,
              ) ?? props.allAnswers[sourceGroup.sourceAnswerIndex]

            return (
              <div class="space-y-3">
                <div class="text-muted-foreground font-bold">
                  Authored Answer {sourceGroup.sourceAnswerIndex + 1}:{" "}
                  {formatAnswer(firstAnswer)}
                </div>

                <For each={["polite", "casual"] as const}>
                  {(formType) => {
                    const formGroup =
                      formType === "polite"
                        ? sourceGroup.polite
                        : sourceGroup.casual

                    return (
                      <Show when={formGroup.pronounGroups.size > 0}>
                        <DebugFormGroup
                          title={formType === "polite" ? "Polite" : "Casual"}
                          pronounGroups={Array.from(
                            formGroup.pronounGroups.entries(),
                          ).map(([pronounType, group]) => ({
                            pronounType,
                            label: getPronounLabel(pronounType, group),
                            honorificGroups: group.honorificGroups,
                          }))}
                          formatAnswer={formatAnswer}
                        />
                      </Show>
                    )
                  }}
                </For>
              </div>
            )
          }}
        </For>
      </div>
    </div>
  )
}

function DebugFormGroup(props: {
  title: string
  pronounGroups: PronounGroup[]
  formatAnswer: (answer: RichAnswer) => string
}) {
  const [selectedPronoun, setSelectedPronoun] = createSignal(
    props.pronounGroups[0]?.pronounType ?? "none",
  )
  const labeledGroups = createMemo(() =>
    props.pronounGroups.filter((group) => group.label),
  )
  const selectedGroup = createMemo(
    () =>
      props.pronounGroups.find(
        (group) => group.pronounType === selectedPronoun(),
      ) ?? props.pronounGroups[0],
  )

  return (
    <div class="ml-4 space-y-2">
      <div class="text-muted-foreground font-semibold">{props.title} Form:</div>

      <Show when={labeledGroups().length > 1}>
        <div class="flex flex-wrap items-center gap-4">
          <For each={labeledGroups()}>
            {(group) => (
              <button
                type="button"
                class={`text-sm ${
                  selectedPronoun() === group.pronounType
                    ? "text-muted-foreground font-semibold underline decoration-[1.5px] underline-offset-3"
                    : "text-muted-foreground/50 hover:text-muted-foreground"
                }`}
                onClick={() => setSelectedPronoun(group.pronounType)}
              >
                {group.label}
              </button>
            )}
          </For>
        </div>
      </Show>

      <Show when={selectedGroup()}>
        {(group) => (
          <DebugPronounGroup
            group={group()}
            showLabel={labeledGroups().length === 1}
            formatAnswer={props.formatAnswer}
          />
        )}
      </Show>
    </div>
  )
}

function DebugPronounGroup(props: {
  group: PronounGroup
  showLabel: boolean
  formatAnswer: (answer: RichAnswer) => string
}) {
  return (
    <div class="ml-4 space-y-1">
      <Show when={props.showLabel && props.group.label}>
        <div class="text-muted-foreground/80 text-xs">{props.group.label}:</div>
      </Show>

      <For each={Array.from(props.group.honorificGroups.entries())}>
        {([honorificType, honorificGroup]) => (
          <div class="ml-4 space-y-1">
            <Show when={honorificType !== "none"}>
              <div class="text-muted-foreground/60 text-xs">
                {removeFurigana(honorificType)}:
              </div>
            </Show>

            <div class="ml-2 space-y-0.5">
              <For each={honorificGroup.kanji}>
                {(answer) => (
                  <div class="text-muted-foreground/90">
                    {props.formatAnswer(answer)}
                  </div>
                )}
              </For>
              <For each={honorificGroup.kana}>
                {(answer) => (
                  <div class="text-muted-foreground/70 text-xs">
                    {props.formatAnswer(answer)} (kana)
                  </div>
                )}
              </For>
            </div>
          </div>
        )}
      </For>
    </div>
  )
}

function getPronounLabel(
  pronounType: string,
  group: { honorificGroups: PronounGroup["honorificGroups"] },
): string | undefined {
  if (pronounType !== "none") return getPronounDisplayLabel(pronounType)

  const answers = Array.from(group.honorificGroups.values()).flatMap(
    (honorificGroup) => honorificGroup.kanji,
  )
  const pronoun = KNOWN_PRONOUNS.find((candidate) =>
    answers.some((answer) => answer.original.includes(candidate)),
  )
  return pronoun ? getPronounDisplayLabel(pronoun) : undefined
}
