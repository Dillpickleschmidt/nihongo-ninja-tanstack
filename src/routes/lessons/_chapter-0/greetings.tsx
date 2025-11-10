import { createFileRoute, Link } from "@tanstack/solid-router"
import { For, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { getVocabularyForModule } from "@/data/utils/vocab"
import MultipleChoiceText from "@/components/text/MultipleChoiceText"
import { VocabularyCard } from "@/features/vocab-page/pages/main/components/VocabularyCard"

export const Route = createFileRoute("/lessons/_chapter-0/greetings")({
  loader: async () => {
    const vocabItems = await getVocabularyForModule(
      "genki_1_ch0_greetings-common-expressions",
    ).then((items) => items.slice(0, 10))
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
          Now that you're familiar with the basics, let's dive into some common
          Japanese greetings. These phrases will be your first steps into
          conversational Japanese, and they're essential for everyday
          interactions.
        </h2>
        <p class="text-muted-foreground text-center text-sm italic">
          Click on the examples to hear the words actually being used!
        </p>
      </div>
      <Show when={vocabItems}>
        <For each={vocabItems}>
          {(item, index) => <VocabularyCard item={item} index={index()} />}
        </For>
      </Show>
      <div class="mt-12 flex flex-col items-center">
        <div class="max-w-3xl">
          <p>
            As with any language, the context and your relationship with the
            person you're speaking to will guide which phrase is most
            appropriate.
          </p>
          {/* Practice */}
          <div class="space-y-4 pt-32 text-lg">
            <h3 class="text-center text-4xl font-bold">Practice</h3>
            {/* <p>
          Match the following greetings with the appropriate time of day
          (Morning, Afternoon, Evening, Leaving):
        </p>
        <div class="pl-10 font-japanese text-[1.55rem]">
          <p>{"a) ありがとう"}</p>
          <p>{"b) おはようございます"}</p>
          <p>{"c) こんばんは"}</p>
          <p>{"d) またね"}</p>
        </div> */}

            <p>
              You run into a friend in the morning while walking to the store.
              How do you greet them?
            </p>
            <MultipleChoiceText
              answer="おはようございます"
              a="こんにちは"
              b="こんばんは"
              c="おはようございます"
              d="じゃあね"
            />
            <p>
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
            <p>
              You say{" "}
              <span class="font-japanese text-xl font-medium">こんばんは</span>{" "}
              to your teacher at 9 AM. Is this correct?
            </p>
            <MultipleChoiceText answer="No" a="Yes" b="No" />
            <p>
              You've just finished a group project and want to thank everyone
              for their hard work. You say, '___________.
            </p>
            <MultipleChoiceText
              answer="ありがとうございます"
              a="ありがとう"
              b="ありがとうございます"
              c="またね"
              d="さようなら"
            />
            <p>
              It's 8 PM and you are entering a restaurant. The staff greets you.
              You reply with:
            </p>
            <MultipleChoiceText
              answer="こんばんは"
              a="おはようございます"
              b="こんばんは"
              c="こんにちは"
              d="じゃあね"
            />
            <p>
              <span class="font-japanese text-xl font-medium">おはよう</span> is
              a formal way to say good morning.
            </p>
            <MultipleChoiceText answer="False" a="True" b="False" />
          </div>
        </div>
      </div>

      <div class="absolute right-16 bottom-16">
        <Link to={"/lessons/common-expressions"}>
          <Button class="hover:cursor-pointer">Next Lesson {"->"}</Button>
        </Link>
      </div>
    </div>
  )
}
