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
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

const SET_ID = "genki_1_ch0_greetings-common-expressions"

export const Route = createFileRoute(
  "/lessons/_chapter-0/common-expressions",
)({
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(
      convexQuery(api.api.vocabulary.getBySets, { setIds: [SET_ID] }),
    )
    return { maxWidth: "max-w-5xl" }
  },
  component: CommonExpressions,
})

function CommonExpressions() {
  const vocabQuery = useQuery(() =>
    convexQuery(api.api.vocabulary.getBySets, { setIds: [SET_ID] }),
  )

  const vocabItems = createMemo(() => {
    const data = vocabQuery.data
    if (!data) return undefined
    return (data[SET_ID] ?? []).slice(10)
  })

  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 right-6 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:right-8 sm:text-[11rem]">
        済
      </span>

      <div class="mx-auto max-w-3xl">
        <LessonHeader
          chapter="Chapter 0 · Foundations"
          title={<>Common Expressions</>}
          subtitle="Meals, apologies, introductions, and more."
        >
          <OverviewItem>すみません and its many uses</OverviewItem>
          <OverviewItem>Daily life expressions</OverviewItem>
          <OverviewItem>Meeting someone new</OverviewItem>
        </LessonHeader>
      </div>

      <div class="space-y-14">
        <div class="mx-auto max-w-3xl px-8">
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Greetings get you through the door. These expressions get you
            through the rest of the day: meals, apologies, meeting someone
            new, coming and going.
          </p>
        </div>

        {/* First vocab card */}
        <div class="space-y-4 px-8">
          <p class="text-center text-sm italic text-muted-foreground dark:text-white/40">
            Click on the examples to hear the words actually being used!
          </p>
          <Show when={vocabItems() !== undefined}>
            <For each={vocabItems()?.slice(0, 1)}>
              {(item, index) => (
                <VocabularyCard item={item} index={index()} />
              )}
            </For>
          </Show>
        </div>

        {/* すみません explanation */}
        <div class="mx-auto max-w-3xl space-y-6 px-8 leading-relaxed text-foreground/75 dark:text-white/70">
          <p>
            <strong class="text-foreground dark:text-white/90">As an Apology:</strong>{" "}
            <span class="font-japanese">すみません</span> is a light, polite
            apology—for example, if you bump into someone. Alternatively,{" "}
            <span class="font-japanese text-nowrap">ごめんなさい</span> is a
            direct "I'm sorry," while{" "}
            <span class="font-japanese">すみません</span> is closer to "Excuse
            my rudeness." <span class="font-japanese">すみません</span> is
            more commonly used, so we recommend starting with it until you're
            more comfortable with the language.
          </p>
          <p>
            <strong class="text-foreground dark:text-white/90">Getting Attention:</strong> It's also
            used to politely call someone, like a waiter or when asking
            directions. Starting with{" "}
            <span class="font-japanese">あのう、すみません</span> ("Umm,
            excuse me…") is common in public spaces.
          </p>
          <p>
            <strong class="text-foreground dark:text-white/90">Expressing Gratitude:</strong>{" "}
            <span class="font-japanese">すみません</span> can mean both "thank
            you" and "sorry," especially when someone helps you. It carries
            gratitude along with a light apology, showing awareness of the
            other person's trouble.
          </p>
          <p>
            <strong class="text-foreground dark:text-white/90">
              Indirectness & Frequency:
            </strong>{" "}
            Japanese culture values humility and indirect communication.{" "}
            <span class="font-japanese">すみません</span> softens requests,
            apologies, and thanks all at once, which is why you'll hear it
            constantly in daily life.
          </p>
          <p>
            Think of <span class="font-japanese">すみません</span> as the
            Swiss Army knife of Japanese: it's "sorry," "excuse me," and
            "thanks" rolled together. When unsure what to say, this phrase is
            the duct tape of conversation—keeping things smooth, polite, and
            friendly!
          </p>
        </div>

        {/* Remaining vocab cards */}
        <Show when={vocabItems() !== undefined}>
          <div class="space-y-4 px-8">
            <For each={vocabItems()?.slice(1)}>
              {(item, index) => (
                <VocabularyCard item={item} index={index() + 1} />
              )}
            </For>
          </div>
        </Show>

        {/* Practice */}
        <div class="mx-auto max-w-3xl space-y-5 px-8">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You're leaving for school and say goodbye to your family. What
                do you say?
              </p>
              <MultipleChoiceText
                answer="いってきます"
                a="いただきます"
                b="いってきます"
                c="ただいま"
                d="おやすみなさい"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You just got back home from work. You open the door and say,
                '__________.'
              </p>
              <MultipleChoiceText
                answer="ただいま"
                a="いってきます"
                b="いただきます"
                c="ただいま"
                d="すみません"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                It's late at night and you're about to go to bed. How do you
                wish your roommate a good night?
              </p>
              <MultipleChoiceText
                answer="おやすみなさい"
                a="おやすみなさい"
                b="いってらっしゃい"
                c="ごちそうさまでした"
                d="よろしく おねがいします"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You say 'ごちそうさまでした' after finishing a meal to express
                gratitude.
              </p>
              <MultipleChoiceText answer="True" a="True" b="False" />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You meet someone for the first time and say 'はじめまして'. Is
                this correct?
              </p>
              <MultipleChoiceText answer="Yes" a="Yes" b="No" />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Your friend is leaving for a trip. You say:
              </p>
              <MultipleChoiceText
                answer="いってらっしゃい"
                a="ただいま"
                b="いってらっしゃい"
                c="いただきます"
                d="おかえりなさい"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You accidentally step on someone's foot in a crowded train. You
                quickly say:
              </p>
              <MultipleChoiceText
                answer="すみません"
                a="いいえ"
                b="すみません"
                c="おやすみなさい"
                d="いただきます"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You're at a Japanese pet cafe, and a mischievous cat decides to
                jump onto your table. The cafe staff rushes over and asks if the
                cat is yours. You laugh and respond:
              </p>
              <MultipleChoiceText
                answer="いいえ"
                a="おかえりなさい"
                b="すみません"
                c="いいえ"
                d="いただきます"
              />
              <p class="text-sm text-muted-foreground dark:text-white/40">
                Explanation: In this situation,{" "}
                <span class="font-japanese">いいえ</span> ("no") is the correct
                and polite way to clarify that the cat is not yours. The other
                options would create amusingly absurd responses, like welcoming
                the cat home with{" "}
                <span class="font-japanese">おかえりなさい</span>, or even
                thanking the cat for delivering itself as food (いただきます)!
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div class="mx-auto max-w-3xl px-8">
          <LessonSummary>
            <SummaryItem>
              すみません covers both "sorry" and "excuse me"
            </SummaryItem>
            <SummaryItem>
              いってきます / いってらっしゃい for leaving and seeing someone off
            </SummaryItem>
            <SummaryItem>
              いただきます / ごちそうさまでした before and after meals
            </SummaryItem>
            <SummaryItem>
              はじめまして / よろしくおねがいします when meeting someone new
            </SummaryItem>
          </LessonSummary>
        </div>
      </div>
    </div>
  )
}
