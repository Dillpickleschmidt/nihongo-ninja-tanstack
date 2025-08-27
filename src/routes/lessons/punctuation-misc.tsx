import { createFileRoute } from "@tanstack/solid-router"
import { ChatBubble } from "@/components/ChatBubble"
import { ChatAttachment } from "@/components/ChatAttachment"

export const Route = createFileRoute("/lessons/punctuation-misc")({
  loader: async () => ({
    contentBox: {
      nextButtonLink: "/lessons/greetings",
    },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* Hero */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Japanese Punctuation & Spacing
        </h1>
        <div class="mx-auto mb-5 h-1 w-16 rounded bg-fuchsia-400" />
        <p class="text-muted-foreground text-lg">
          Japanese writing doesn’t use uppercase or lowercase, and it treats
          punctuation differently from English. Periods are circles, question
          marks are optional, and spaces between words are almost unheard of. In
          this lesson, we’ll learn the essentials of how punctuation and spacing
          work in Japanese.
        </p>
      </header>

      <main class="mx-auto max-w-3xl space-y-16 px-6">
        {/* Upper/lowercase */}
        <section class="space-y-6">
          <h2 class="text-center text-2xl font-semibold">
            No Uppercase or Lowercase!
          </h2>
          <ChatBubble
            speaker="student"
            text="Sensei, I've been learning about Hiragana, but I have some questions about other parts of Japanese writing. What can you tell me about uppercase and lowercase letters in Japanese?"
          />
          <ChatBubble
            speaker="sensei"
            text={
              <p>
                <span class="font-light italic">
                  *without looking up from his precise brushwork*
                </span>{" "}
                Japanese is a language of elegant simplicity in some aspects.
                Unlike English, Japanese does not distinguish between uppercase
                and lowercase letters. Each character stands proudly on its own,
                without needing to change form.
              </p>
            }
          />
        </section>

        {/* Punctuation */}
        <section class="space-y-6">
          <h2 class="text-center text-2xl font-semibold">Punctuation</h2>
          <ChatBubble
            speaker="student"
            text="What about punctuation, like question marks and periods?"
          />
          <ChatBubble
            speaker="sensei"
            text="Ah, punctuation—the tiny marks that guide our understanding. In Japanese, we do use question marks and periods, but their usage can be a bit different. The question mark (？) is used sparingly, often in informal writing or to add emphasis. In more formal contexts, the sentence-ending particle か (ka) usually signals a question."
          />

          <div class="rounded-md border border-blue-700/40 bg-blue-900/20 p-4 leading-relaxed text-blue-200">
            <p>
              Japanese speakers use <span class="font-japanese">か</span> to
              indicate questions in polite and formal contexts. In casual
              settings, they might drop <span class="font-japanese">か</span>{" "}
              and rely on intonation, which is written with a question mark
              (？). Or they might use both!{" "}
              <span class="text-sm">(informal contexts only).</span>
            </p>
          </div>

          <ChatBubble
            speaker="student"
            text="Oh, that's weird. I'll have to get used to that."
          />

          <ChatBubble
            speaker="student"
            text="So, what about periods? Surely, they use those... right Sensei?"
          />
          <ChatBubble
            speaker="sensei"
            text='Indeed. The humble period (。) in Japanese is called "句点" (kuten). It’s used at the end of a sentence, just like in English, but instead of a solid dot it appears as a small hollow circle.'
          />
        </section>

        {/* No Spaces */}
        <section class="space-y-6">
          <h2 class="text-center text-2xl font-semibold">No Spaces!</h2>
          <ChatBubble
            speaker="student"
            text="Do Japanese sentences have spaces between words like in English?"
          />
          <ChatBubble
            speaker="sensei"
            text={
              <div class="space-y-4">
                <p>
                  <span class="font-light italic">
                    *eye twitching slightly*
                  </span>{" "}
                  Oh, spaces... <em>*nervous laughter*</em> Let me tell you
                  about spaces. Or rather, the complete and total ABSENCE of
                  spaces! That’s right — Japanese doesn’t use ANY spaces between
                  words!
                </p>
                <p>
                  Do you have ANY idea how many hours I spent trying to get this
                  website to understand where one word ends and another begins?!
                  The computer just stares at an endless stream of characters
                  like some kind of confused tourist!
                </p>
                <p>
                  <em>*takes deep breath*</em>
                </p>
              </div>
            }
          />
          <ChatBubble
            speaker="sensei"
            text={
              <div class="space-y-4">
                <p>
                  Traditional Japanese writing flows continuously, like a river.
                  A river that occasionally turns into a waterfall that makes
                  web developers question their life choices.{" "}
                  <em>*adjusts collar*</em> But I digress...
                </p>
                <p>
                  Modern Japanese sometimes uses spaces in children’s books or
                  learning materials to help with readability. Which would have
                  made my life SO much easier!
                </p>
                <p>
                  <em>*composes self*</em>
                </p>
                <p>Not that I’m bitter about it or anything.</p>
              </div>
            }
          />

          <div class="rounded-md border border-blue-700/40 bg-blue-900/20 p-4 text-sm leading-relaxed text-blue-200">
            <p>
              Japanese doesn't use spaces between words. However, when typing,
              you'll notice that punctuation marks like{" "}
              <span class="font-japanese">。</span> and{" "}
              <span class="font-japanese">、</span> have built‑in spacing to
              separate sentences. Additionally, Japanese characters are
              double‑width, which means punctuation marks take up more space,
              appearing as <span class="font-japanese">？</span> and{" "}
              <span class="font-japanese">！</span>.
            </p>
          </div>

          <ChatBubble speaker="student" text="That sounds... challenging." />
          <ChatBubble
            speaker="sensei"
            text="It takes some adjustment, but regular practice will train your eyes to recognize the natural boundaries in Japanese writing just as easily as in English."
          />
          <ChatBubble
            speaker="sensei"
            text="We're going to learn some cool tricks to help with that in future lessons."
          />
        </section>
      </main>
    </div>
  )
}
