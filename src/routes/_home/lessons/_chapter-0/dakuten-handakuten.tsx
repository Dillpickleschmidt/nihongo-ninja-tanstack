// routes/lessons/_chapter-0/dakuten-handakuten.tsx

import { createFileRoute } from "@tanstack/solid-router"
import KanaChart from "@/components/charts/KanaChart"
import { ChatBubble } from "@/components/ChatBubble"

export const Route = createFileRoute(
  "/_home/lessons/_chapter-0/dakuten-handakuten",
)({
  loader: async () => ({
    contentBox: { nextButtonLink: "/vocab?import=dakuten-handakuten" },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* Header */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Dakuten & Handakuten
        </h1>
        <div class="mx-auto mb-5 h-1 w-16 rounded bg-fuchsia-400"></div>
        <p class="text-muted-foreground mb-6 text-lg">
          Two small marks —{" "}
          <span class="font-japanese font-semibold">◌゙ </span> (dakuten) and{" "}
          <span class="font-japanese font-semibold">◌゚ </span> (handakuten) —
          add new sounds to Japanese. Let’s see how they change the kana.
        </p>
      </header>

      <main class="mx-auto max-w-3xl space-y-12 px-6 leading-relaxed">
        {/* Intro */}
        <p>
          You’ve mastered the base sounds of Hiragana. Now it’s time to see how{" "}
          <strong>dakuten</strong> and <strong>handakuten</strong> expand those
          sounds. With just two simple marks, dozens of new combinations appear.
        </p>

        {/* Dakuten */}
        <section class="space-y-6">
          <h2 class="mb-3 text-2xl font-semibold">Dakuten ◌゙ </h2>
          <p class="mb-6">
            Dakuten are two small strokes, like quotation marks, written at the
            top‑right of a kana. They make the sound voiced — often a little
            more <strong>muffled</strong> or <strong>dampened</strong> compared
            to the sharper base form.
          </p>

          <ChatBubble
            speaker="sensei"
            text="For example, 'k' sounds turn into 'g' sounds when you add dakuten."
          />

          {/* K vs G */}
          <div>
            <h3 class="text-muted-foreground mb-3 text-lg font-medium">
              K → G
            </h3>
            <TwoRowChart
              top={[
                ["か", "ka"],
                ["き", "ki"],
                ["く", "ku"],
                ["け", "ke"],
                ["こ", "ko"],
              ]}
              bottom={[
                ["が", "ga"],
                ["ぎ", "gi"],
                ["ぐ", "gu"],
                ["げ", "ge"],
                ["ご", "go"],
              ]}
            />
          </div>

          <ChatBubble speaker="sensei" text="It's similar for 'S' → 'Z'" />

          {/* S vs Z */}
          <div>
            <h3 class="text-muted-foreground mb-3 text-lg font-medium">
              S → Z
            </h3>
            <TwoRowChart
              top={[
                ["さ", "sa"],
                ["し", "shi*"],
                ["す", "su"],
                ["せ", "se"],
                ["そ", "so"],
              ]}
              bottom={[
                ["ざ", "za"],
                ["じ", "ji"],
                ["ず", "zu"],
                ["ぜ", "ze"],
                ["ぞ", "zo"],
              ]}
            />
          </div>

          {/* Full Dakuten chart */}
          <div class="mt-12">
            <h3 class="mb-3 text-lg font-medium">Full Dakuten Chart</h3>
            <KanaChart type="dakuten" />
          </div>
          <p class="text-muted-foreground mt-4 text-sm">
            * Yes, ぢ is pronounced the same as じ and づ like ず, but they’re
            rarely used.
          </p>
        </section>

        {/* Handakuten */}
        <section class="space-y-6">
          <h2 class="mb-3 text-2xl font-semibold">Handakuten ◌゚ </h2>
          <p>
            Handakuten are small circles that only apply to the{" "}
            <span class="font-japanese">は</span>-row. They turn the “h” sounds
            into crisp “p” sounds.
          </p>

          <ChatBubble
            speaker="student"
            text="So は (ha) turns into ぱ (pa) just by adding a circle?"
          />
          <ChatBubble speaker="sensei" text="Yep." />

          <div>
            <h3 class="mb-3 text-lg font-medium">Full Handakuten Chart</h3>
            <KanaChart type="handakuten" />
          </div>
        </section>

        <section class="space-y-6">
          <ChatBubble
            speaker="student"
            text="Why do these tiny mark variations exist? I can barely see them!"
          />
          <ChatBubble
            speaker="sensei"
            text="Well, variety is
            the spice of life 🌶️. More importantly, they let Japanese expand its
            range of sounds without inventing completely new kana."
          />
          <ChatBubble
            speaker="sensei"
            text={
              <>
                Approach dakuten and handakuten with the enthusiasm of a student
                who proudly thought they’d mastered Hiragana—until Japanese
                tapped them on the shoulder and said,{" "}
                <em>"Not so fast, Squidward."</em>
              </>
            }
          />
        </section>

        {/* Wrap-up */}
        {/* <section class="space-y-3 text-center"> */}
        {/*   <p class="font-japanese text-3xl font-semibold">がんばって！</p> */}
        {/*   <p class="text-muted-foreground mt-2 text-lg">Do your best 😀</p> */}
        {/* </section> */}
        <p class="text-muted-foreground text-center text-sm italic">
          In the next lesson, you'll mix and match these to create even more
          unique sounds.
        </p>
      </main>
    </div>
  )
}

/* Helper for hardcoded 2-row demonstration */
function TwoRowChart(props: {
  top: [string, string][]
  bottom: [string, string][]
}) {
  return (
    <div
      class="grid gap-2 pr-5"
      style="grid-template-columns: repeat(5, minmax(64px, 1fr));"
    >
      {props.top.map(([jp, romaji]) => (
        <SyllableTile jp={jp} romaji={romaji} />
      ))}
      {props.bottom.map(([jp, romaji]) => (
        <SyllableTile jp={jp} romaji={romaji} />
      ))}
    </div>
  )
}

function SyllableTile(props: { jp: string; romaji: string }) {
  return (
    <div class="bg-card/50 text-foreground rounded-md p-3 text-center">
      <p class="font-japanese text-2xl">{props.jp}</p>
      <p class="text-muted-foreground text-xs">{props.romaji}</p>
    </div>
  )
}
