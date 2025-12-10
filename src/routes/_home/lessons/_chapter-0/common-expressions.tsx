// routes/lessons/_chapter-0/common-expressions
import { createFileRoute } from "@tanstack/solid-router"
import { For, Show } from "solid-js"
import { convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import MultipleChoiceText from "@/components/text/MultipleChoiceText"
import { VocabularyCard } from "@/features/vocab-page/pages/main/components/deck-view/VocabularyCard"

export const Route = createFileRoute("/_home/lessons/_chapter-0/common-expressions")({
  loader: async () => {
    const setId = "genki_1_ch0_greetings-common-expressions"
    const { queryFn } = convexQuery(api.api.vocabulary.getBySets, { setIds: [setId] })
    const result = await queryFn()
    const vocabItems = (result[setId] ?? []).slice(10)
    return {
      vocabItems,
      contentBox: {
        nextButtonLink:
          "/vocab?import=genki_1_ch0_greetings-common-expressions",
      },
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { vocabItems } = Route.useLoaderData()()
  return (
    <div class="mb-32 space-y-6 px-6">
      <div class="mx-auto max-w-2xl">
        <h2 class="pt-12 pb-6 text-2xl lg:pt-20">
          Welcome to your next lesson on common expressions. We've got a lot to
          talk about. This one will be well worth your time. Good luck!
        </h2>
        <p class="text-muted-foreground text-center text-sm italic">
          Click on the examples to hear the words actually being used!
        </p>
      </div>
      <Show when={vocabItems}>
        <For each={vocabItems.slice(0, 1)}>
          {(item, index) => <VocabularyCard item={item} index={index()} />}
        </For>
      </Show>
      <div class="mt-12 flex flex-col items-center">
        <div class="max-w-3xl">
          <div class="space-y-6">
            <p>
              <strong>As an Apology:</strong>{" "}
              <span class="font-japanese">すみません</span> is a light, polite
              apology—for example, if you bump into someone. Alternatively,{" "}
              <span class="font-japanese text-nowrap">ごめんなさい</span> is a
              direct "I’m sorry," while{" "}
              <span class="font-japanese">すみません</span> is closer to "Excuse
              my rudeness." <span class="font-japanese">すみません</span> is
              more commonly used, so we recommend starting with it until you're
              more comfortable with the language.
            </p>
            <p>
              <strong>Getting Attention:</strong> It’s also used to politely
              call someone, like a waiter or when asking directions. Starting
              with <span class="font-japanese">あのう、すみません</span> ("Umm,
              excuse me…") is common in public spaces.
            </p>
            <p>
              <strong>Expressing Gratitude:</strong>{" "}
              <span class="font-japanese">すみません</span> can mean both "thank
              you" and "sorry," especially when someone helps you. It carries
              gratitude along with a light apology, showing awareness of the
              other person’s trouble.
            </p>
            <p>
              <strong>Indirectness & Frequency:</strong> Japanese culture values
              humility and indirect communication.{" "}
              <span class="font-japanese">すみません</span> softens requests,
              apologies, and thanks all at once, which is why you’ll hear it
              constantly in daily life.
            </p>
          </div>
          <p>
            Think of <span class="font-japanese">すみません</span> as the Swiss
            Army knife of Japanese: it’s "sorry," "excuse me," and "thanks"
            rolled together. When unsure what to say, this phrase is the duct
            tape of conversation—keeping things smooth, polite, and friendly!
          </p>
        </div>
      </div>

      <Show when={vocabItems}>
        <For each={vocabItems.slice(1)}>
          {(item, index) => <VocabularyCard item={item} index={index() + 1} />}
        </For>
      </Show>

      <div class="mt-12 flex flex-col items-center">
        <div class="max-w-3xl">
          {/* Practice */}
          <div class="space-y-4 pt-32 text-lg">
            <h3 class="text-center text-4xl font-bold">Practice</h3>
            <p>
              You're leaving for school and say goodbye to your family. What do
              you say?
            </p>
            <MultipleChoiceText
              answer="いってきます"
              a="いただきます"
              b="いってきます"
              c="ただいま"
              d="おやすみなさい"
            />
            <p>
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
            <p>
              It's late at night and you're about to go to bed. How do you wish
              your roommate a good night?
            </p>
            <MultipleChoiceText
              answer="おやすみなさい"
              a="おやすみなさい"
              b="いってらっしゃい"
              c="ごちそうさまでした"
              d="よろしく おねがいします"
            />
            <p>
              You say 'ごちそうさまでした' after finishing a meal to express
              gratitude.
            </p>
            <MultipleChoiceText answer="True" a="True" b="False" />
            <p>
              You meet someone for the first time and say 'はじめまして'. Is
              this correct?
            </p>
            <MultipleChoiceText answer="Yes" a="Yes" b="No" />
            <p>Your friend is leaving for a trip. You say:</p>
            <MultipleChoiceText
              answer="いってらっしゃい"
              a="ただいま"
              b="いってらっしゃい"
              c="いただきます"
              d="おかえりなさい"
            />
            <p>
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
            <p>
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
            <p class="text-muted-foreground text-base">
              Explanation: In this situation,{" "}
              <span class="font-japanese">いいえ</span> ("no") is the correct
              and polite way to clarify that the cat is not yours. The other
              options would create amusingly absurd responses, like welcoming
              the cat home with{" "}
              <span class="font-japanese">おかえりなさい</span>, or even
              thanking the cat for delivering itself as food (いただきます)! 😾
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
