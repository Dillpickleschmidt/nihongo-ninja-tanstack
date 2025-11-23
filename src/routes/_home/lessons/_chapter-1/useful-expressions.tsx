// routes/lessons/useful-expressions.tsx
import { createFileRoute, Link } from "@tanstack/solid-router"
import { For, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { getVocabularyForModule } from "@/data/utils/vocab"
import MultipleChoiceText from "@/components/text/MultipleChoiceText"
import { VocabularyCard } from "@/features/vocab-page/pages/main/components/VocabularyCard"

export const Route = createFileRoute("/_home/lessons/_chapter-1/useful-expressions")({
  loader: async () => {
    const vocabItems = await getVocabularyForModule(
      "genki_1_ch1_useful-expressions",
    )
    console.log(vocabItems)
    return {
      vocabItems,
      contentBox: {
        nextButtonLink: "/vocab?import=genki_1_ch1_useful-expressions",
      },
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { vocabItems } = Route.useLoaderData()()

  return (
    <div class="mb-32 space-y-6 px-6">
      {/* Lesson Intro */}
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="pt-12 pb-6 text-4xl font-extrabold lg:pt-20">
          Useful Expressions
        </h1>
        <p class="text-muted-foreground text-sm italic">
          Core classroom and daily expressions that will help you follow along
          and respond naturally in Japanese.
        </p>
      </div>

      {/* Vocab Cards */}
      <Show when={vocabItems}>
        <For each={vocabItems}>
          {(item, index) => <VocabularyCard item={item} index={index()} />}
        </For>
      </Show>

      {/* Practice Section */}
      <div class="mt-16 flex flex-col items-center">
        <div class="max-w-3xl space-y-6">
          <h3 class="text-center text-4xl font-bold">Practice</h3>
          <div class="space-y-8 text-lg leading-8">
            <p>
              What does <span class="font-japanese">わかりましたか。</span>{" "}
              mean?
            </p>
            <MultipleChoiceText
              answer="Do you understand?"
              a="Do you understand?"
              b="Please say it slowly."
              c="I have a question."
              d="Excuse me."
            />

            <p>
              Your teacher explains something and you want to say you
              understood. How do you respond?
            </p>
            <MultipleChoiceText
              answer="わかりました。"
              a="はじめまして。"
              b="どうぞよろしくおねがいします。"
              c="わかりました。"
              d="ちょっとまってください。"
            />

            <p>
              You didn't understand a word your friend said. What do you say to
              let them know?
            </p>
            <MultipleChoiceText
              answer="わかりません。"
              a="おなまえは？"
              b="きいてください。"
              c="もういちどいってください。"
              d="わかりません。"
            />

            <p>
              You are having trouble keeping up and need someone to speak more
              slowly. What do you request?
            </p>
            <MultipleChoiceText
              answer="もうちょっとゆっくりおねがいします。"
              a="かいてください。"
              b="もうちょっとゆっくりおねがいします。"
              c="１０ぺージをみてください。"
              d="しつれいします。"
            />

            <p>How do you ask someone to repeat what they just said?</p>
            <MultipleChoiceText
              answer="もういちどいってください。"
              a="わかりましたか。"
              b="あのう、すみません。"
              c="せんせい。"
              d="もういちどいってください。"
            />

            <p>
              You need a moment and want someone to wait. What phrase do you
              use?
            </p>
            <MultipleChoiceText
              answer="ちょっとまってください。"
              a="わかりません。"
              b="おなまえは？"
              c="もうちょっとゆっくりおねがいします。"
              d="ちょっとまってください。"
            />

            <p>Which phrase means "Please listen"?</p>
            <MultipleChoiceText
              answer="きいてください。"
              a="きいてください。"
              b="もうちょっとゆっくりおねがいします。"
              c="どうぞよろしくおねがいします。"
              d="どうもありがとうございます。"
            />

            <p>
              You are looking at a textbook and want someone to turn to a page.
              What do you tell them?
            </p>
            <MultipleChoiceText
              answer="１０ぺージをみてください。"
              a="しつもんがあります。"
              b="もういちどおねがいします。"
              c="しつれいします。"
              d="１０ぺージをみてください。"
            />

            <p>
              You meet someone for the first time and want to introduce
              yourself. What is the appropriate greeting?
            </p>
            <MultipleChoiceText
              answer="はじめまして。"
              a="すみませんが、えいごでいいですか。"
              b="はじめまして。"
              c="どうぞよろしくおねがいします。"
              d="ゆっくりいってください。"
            />

            <p>How do you tell someone where you are from in Japanese?</p>
            <MultipleChoiceText
              answer="しゅっしんは[your hometown]です。"
              a="しゅっしんは[your hometown]です。"
              b="せんせい。"
              c="もういちどいってください。"
              d="おなまえは？"
            />

            <p>
              You're about to leave your Japanese teacher's office. What should
              you say before you exit?
            </p>
            <MultipleChoiceText
              answer="しつれいします。"
              a="しつれいします。"
              b="わかりましたか。"
              c="もういちどいってください。"
              d="どうもありがとうございます。"
            />

            <p>
              You didn’t understand what your teacher just said. How do you ask
              them to repeat?
            </p>
            <MultipleChoiceText
              answer="もういちどおねがいします。"
              a="どうぞよろしくおねがいします。"
              b="もうちょっとゆっくりおねがいします。"
              c="もういちどおねがいします。"
              d="すみませんが、えいごでいいですか。"
            />

            <p>How do you say "Teacher" in Japanese?</p>
            <MultipleChoiceText
              answer="せんせい"
              a="せんせい"
              b="しつもん"
              c="おなまえ"
              d="しつれい"
            />

            <p>
              You're meeting new coworkers. What's a good phrase to end your
              introduction?
            </p>
            <MultipleChoiceText
              answer="どうぞよろしくおねがいします。"
              a="はじめまして。"
              b="しつれいします。"
              c="どうぞよろしくおねがいします。"
              d="わかりましたか。"
            />

            <p>
              Your <span class="font-japanese">せんせい</span> said{" "}
              <span class="font-japanese">かいてください</span> today while
              staring right at you! What did she mean?
            </p>
            <MultipleChoiceText
              answer="Please write"
              a="Please listen."
              b="Please write."
              c="Please ask."
              d="Please wake up."
            />

            <p>
              How do you politely get someone's attention by saying "Excuse me"?
            </p>
            <MultipleChoiceText
              answer="あのう、すみません。"
              a="あのう、すみません。"
              b="おなまえは？"
              c="せんせい"
              d="どうもありがとうございます。"
            />

            <p>
              You want to tell someone your name. How do you say "I am [your
              name]"?
            </p>
            <MultipleChoiceText
              answer="[your name]です。"
              a="[your name] せんせい。"
              b="どうぞよろしくおねがいします。"
              c="[your name]です。"
              d="おなまえは？"
            />

            <p>
              You’re a bad uncle who forgot the stroller was on a hill, and a
              samaritan saved it! How do you thank them?
            </p>
            <MultipleChoiceText
              answer="どうもありがとうございます。"
              a="どうもありがとうございます。"
              b="すみませんが、えいごでいいですか。"
              c="わかりましたか。"
              d="ちょっとまってください。"
            />

            <p>
              You have a question in class. How do you say "I have a question"?
            </p>
            <MultipleChoiceText
              answer="しつもんがあります。"
              a="おなまえは？"
              b="わかりましたか。"
              c="しつもんがあります。"
              d="ゆっくりいってください。"
            />
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div class="absolute right-16 bottom-16">
        <Link to="/vocab?import=genki_1_ch1_useful-expressions">
          <Button class="hover:cursor-pointer">Next Lesson →</Button>
        </Link>
      </div>
    </div>
  )
}
