import { createFileRoute } from "@tanstack/solid-router"
import { ChatBubble } from "@/components/ChatBubble"

export const Route = createFileRoute(
  "/lessons/_chapter-0/punctuation-misc",
)({
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
          Japanese doesn't use uppercase or lowercase, periods are circles,
          question marks are optional, and spaces between words barely exist.
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
            text="Wait, Japanese doesn't have capital letters?"
          />
          <ChatBubble
            speaker="sensei"
            text={
              <p>
                <span class="font-light italic">
                  *without looking up from his brushwork*
                </span>{" "}
                Nope. No uppercase, no lowercase. Each character has one form.
                That's it.
              </p>
            }
          />
        </section>

        {/* Punctuation */}
        <section class="space-y-6">
          <h2 class="text-center text-2xl font-semibold">Punctuation</h2>
          <ChatBubble
            speaker="student"
            text="What about question marks and periods?"
          />
          <ChatBubble
            speaker="sensei"
            text={
              <p>
                <span class="font-light italic">*flips page*</span> Question
                marks are used sparingly...
              </p>
            }
          />
          <ChatBubble speaker="student" text="...Sensei?" />
          <ChatBubble
            speaker="sensei"
            text="Typically, the particle か at the end of a sentence signals a question. The question mark (？) shows up more in casual writing."
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
            text={
              <p>
                <span class="font-light italic">*sighs*</span> The period in
                Japanese is called 句点 (kuten). Works the same as English, but
                instead of a solid dot, it's a small hollow circle (。).
              </p>
            }
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
                  spaces! That's right — Japanese doesn't use ANY spaces between
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
                  A river that flows straight through the gates of hell, past
                  the screaming souls of web developers, and into the ninth
                  circle where most Japanese language tool developers have given
                  up and are just hardcoding everything.{" "}
                  <em>*adjusts collar*</em> But I digress...
                </p>
                <p>
                  Modern Japanese sometimes uses spaces in children's books or
                  learning materials to help with readability. Which would have
                  made my life SO much easier!
                </p>
                <p>
                  <em>*composes self*</em>
                </p>
                <p>Not that I'm bitter about it or anything.</p>
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
            text="We're going to learn some cool tricks to help with that in future lessons."
          />
        </section>
      </main>
    </div>
  )
}
