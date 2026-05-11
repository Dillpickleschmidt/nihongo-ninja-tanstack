import { createFileRoute } from "@tanstack/solid-router"
import { For } from "solid-js"
import type { JSX } from "solid-js"

export const Route = createFileRoute("/_home/guides/tools")({
  loader: () => ({
    toc: TOOLS.map((tool) => ({ id: tool.id, title: tool.name })),
  }),
  component: ToolsGuideRoute,
})

type ToolGuide = {
  id: string
  eyebrow: string
  name: string
  description: string
  cards: Array<{
    title: string
    body: string
  }>
}

function ToolsGuideRoute() {
  return (
    <main class="text-white">
      <div class="mx-auto max-w-[1400px] px-6 pt-16 pb-24">
        <header class="mb-14">
          <div class="mb-3 flex items-center gap-3">
            <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-(--landing-accent)">
              Nihongo Ninja · tools overview
            </span>
            <span class="h-px flex-1 bg-gradient-to-r from-(--landing-accent)/35 to-transparent" />
          </div>
          <h1 class="font-excalifont text-4xl sm:text-5xl">
            Six ways to practice with Nihongo Ninja
          </h1>
          <p class="mt-3 max-w-2xl font-excalifont text-white/55">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante venenatis dapibus posuere velit aliquet.
            Curabitur blandit tempus porttitor.
          </p>
        </header>

        <div class="space-y-20">
          <For each={TOOLS}>{(tool) => <ToolSection tool={tool} />}</For>
        </div>
      </div>
    </main>
  )
}

function ToolSection(props: { tool: ToolGuide }) {
  return (
    <section id={props.tool.id} aria-labelledby={`${props.tool.id}-heading`}>
      <div class="mb-7 flex items-end gap-6">
        <div>
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[10px] tracking-[0.2em] text-(--landing-accent)">
              {props.tool.eyebrow}
            </span>
            <h2
              id={`${props.tool.id}-heading`}
              class="font-excalifont text-2xl"
            >
              {props.tool.name}
            </h2>
          </div>
          <p class="max-w-2xl text-sm leading-relaxed text-white/45">
            {props.tool.description}
          </p>
        </div>
        <div class="hidden h-px flex-1 bg-gradient-to-r from-white/10 to-transparent md:block" />
      </div>

      <div class="grid gap-7 md:grid-cols-3">
        <For each={props.tool.cards}>
          {(card) => (
            <GuideCard>
              <div class="absolute inset-x-0 bottom-0 p-4">
                <h3 class="font-semibold transition-colors group-hover:text-dynamic-accent">
                  {card.title}
                </h3>
                <p class="mt-1 text-sm text-white/50">{card.body}</p>
              </div>
            </GuideCard>
          )}
        </For>
      </div>
    </section>
  )
}

function GuideCard(props: { children: JSX.Element }) {
  return (
    <div
      class="group overflow-hidden rounded-[22px] border border-white/5 transition-colors duration-300 hover:border-dynamic-accent/20"
      style={{
        "box-shadow": `
          inset 0 1px 0 rgba(255, 255, 255, 0.12),
          inset 0 -1px 0 rgba(0, 0, 0, 0.55),
          0 1px 0 rgba(255, 255, 255, 0.025),
          0 16px 36px -18px rgba(0, 0, 0, 0.6)
        `,
      }}
    >
      <div class="relative aspect-[16/10] bg-white/2">
        <div
          class="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.012) 38%, transparent 62%)",
          }}
        />
        <div class="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        {props.children}
      </div>
    </div>
  )
}

const LOREM_SHORT = "Lorem ipsum · content TBD"

const TOOLS: ToolGuide[] = [
  {
    id: "learning-path",
    eyebrow: "01",
    name: "Learning Path",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper, curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet, donec ullamcorper nulla non metus auctor fringilla.",
    cards: [
      { title: "What it does", body: LOREM_SHORT },
      { title: "When to use it", body: LOREM_SHORT },
      { title: "Why it helps", body: LOREM_SHORT },
    ],
  },
  {
    id: "sentence-practice",
    eyebrow: "02",
    name: "Sentence Practice",
    description:
      "Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et, maecenas faucibus mollis interdum. Donec sed odio dui, aenean lacinia bibendum nulla sed consectetur.",
    cards: [
      { title: "Write from memory", body: LOREM_SHORT },
      { title: "Get feedback", body: LOREM_SHORT },
      { title: "Build recall", body: LOREM_SHORT },
    ],
  },
  {
    id: "vocabulary-practice",
    eyebrow: "03",
    name: "Vocabulary Practice",
    description:
      "Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis, nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper, etiam porta sem malesuada magna mollis euismod.",
    cards: [
      { title: "Review words", body: LOREM_SHORT },
      { title: "Study decks", body: LOREM_SHORT },
      { title: "Track due items", body: LOREM_SHORT },
    ],
  },
  {
    id: "conjugation-practice",
    eyebrow: "04",
    name: "Conjugation Practice",
    description:
      "Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
    cards: [
      { title: "Choose forms", body: LOREM_SHORT },
      { title: "Drill patterns", body: LOREM_SHORT },
      { title: "Spot mistakes", body: LOREM_SHORT },
    ],
  },
  {
    id: "counter-practice",
    eyebrow: "05",
    name: "Counter Practice",
    description:
      "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus, vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus.",
    cards: [
      { title: "Pick counters", body: LOREM_SHORT },
      { title: "Practice readings", body: LOREM_SHORT },
      { title: "Recognize patterns", body: LOREM_SHORT },
    ],
  },
  {
    id: "kana-practice",
    eyebrow: "06",
    name: "Kana Practice",
    description:
      "Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor, donec ullamcorper nulla non metus auctor fringilla.",
    cards: [
      { title: "Learn symbols", body: LOREM_SHORT },
      { title: "Quiz quickly", body: LOREM_SHORT },
      { title: "Build speed", body: LOREM_SHORT },
    ],
  },
]
