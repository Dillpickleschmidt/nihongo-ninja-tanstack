import { createFileRoute } from "@tanstack/solid-router"
import { createMemo, For, Show } from "solid-js"
import { useQuery } from "@tanstack/solid-query"
import { convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import MultipleChoiceText from "@/components/text/MultipleChoiceText"
import { VocabularyCard } from "@/features/vocab-page/pages/main/components/deck-view/VocabularyCard"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

const SET_ID = "genki_1_ch0_greetings-common-expressions"

export const Route = createFileRoute("/lessons/_chapter-0/greetings")({
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(
      convexQuery(api.api.vocabulary.getBySets, { setIds: [SET_ID] }),
    )
    return { maxWidth: "max-w-5xl" }
  },
  component: Greetings,
})

function Greetings() {
  const vocabQuery = useQuery(() =>
    convexQuery(api.api.vocabulary.getBySets, { setIds: [SET_ID] }),
  )

  const vocabItems = createMemo(() => {
    const data = vocabQuery.data
    if (!data) return undefined
    return (data[SET_ID] ?? []).slice(0, 10)
  })

  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 right-6 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:right-8 sm:text-[11rem]">
        挨
      </span>

      <div class="mx-auto max-w-3xl">
        <LessonHeader
          chapter="Chapter 0 · Foundations"
          title={<>Greetings</>}
          subtitle="The phrases you'll use every single day."
        >
          <OverviewItem>Time-of-day greetings</OverviewItem>
          <OverviewItem>Thank you and goodbye</OverviewItem>
          <OverviewItem>Casual vs. polite forms</OverviewItem>
        </LessonHeader>
      </div>

      <div class="space-y-14">
        <div class="mx-auto max-w-3xl px-8">
          <p class="leading-relaxed text-white/70">
            Before grammar, before sentence structure, before any of
            that, you need greetings. These ten phrases cover every
            "hello" and "goodbye" situation you'll run into.
          </p>
        </div>

        {/* Vocabulary cards */}
        <div class="space-y-4 px-8">
          <p class="text-center text-sm italic text-white/40">
            Click on the examples to hear the words actually being used!
          </p>
          <Show when={vocabItems() !== undefined}>
            <For each={vocabItems()}>
              {(item, index) => (
                <VocabularyCard item={item} index={index()} />
              )}
            </For>
          </Show>
        </div>

        <div class="mx-auto max-w-3xl px-8">
          <p class="leading-relaxed text-white/70">
            As with any language, the context and your relationship with the
            person you're speaking to will guide which phrase is most
            appropriate.
          </p>
        </div>

        {/* Practice */}
        <div class="mx-auto max-w-3xl space-y-5 px-8">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                You run into a friend in the morning on your way to the store.
                How do you greet them?
              </p>
              <MultipleChoiceText
                answer="おはようございます"
                a="こんにちは"
                b="こんばんは"
                c="おはようございます"
                d="じゃあね"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                Which greeting would you use when leaving a casual meet-up with
                friends in the afternoon?
              </p>
              <MultipleChoiceText
                answer="じゃあね"
                a="ありがとう"
                b="おはよう"
                c="じゃあね"
                d="さようなら"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                You say{" "}
                <span class="font-japanese text-lg font-semibold text-white/90">
                  こんばんは
                </span>{" "}
                to your teacher at 9 AM. Is this correct?
              </p>
              <MultipleChoiceText answer="No" a="Yes" b="No" />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                You've just finished a group project and want to thank everyone
                for their hard work. You say:
              </p>
              <MultipleChoiceText
                answer="ありがとうございます"
                a="ありがとう"
                b="ありがとうございます"
                c="またね"
                d="さようなら"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                It's 8 PM and you're entering a restaurant. The staff greets
                you. You reply with:
              </p>
              <MultipleChoiceText
                answer="こんばんは"
                a="おはようございます"
                b="こんばんは"
                c="こんにちは"
                d="じゃあね"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                <span class="font-japanese text-lg font-semibold text-white/90">
                  おはよう
                </span>{" "}
                is a formal way to say good morning.
              </p>
              <MultipleChoiceText answer="False" a="True" b="False" />
            </div>
          </div>
        </div>

        {/* Summary */}
        <div class="mx-auto max-w-3xl px-8">
          <LessonSummary>
            <SummaryItem>
              Time-of-day greetings: おはよう (morning), こんにちは (afternoon),
              こんばんは (evening)
            </SummaryItem>
            <SummaryItem>
              Add ございます for polite forms (おはようございます,
              ありがとうございます)
            </SummaryItem>
            <SummaryItem>
              Casual goodbyes: じゃあね / またね — formal: さようなら
            </SummaryItem>
            <SummaryItem>
              Context matters: who you're talking to determines the form you use
            </SummaryItem>
          </LessonSummary>
        </div>
      </div>
    </div>
  )
}
