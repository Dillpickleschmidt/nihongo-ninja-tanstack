import { For, Show, type JSX, onMount, onCleanup } from "solid-js"
import { Link } from "@tanstack/solid-router"
import {
  getInitialAnimationStyles,
  observeElementForAnimation,
} from "@/utils/animations"
import { Button3D } from "@/components/Button3D"
import { QuickAccessCards } from "./QuickAccessCards"
import { JlptPagination } from "./JlptPagination"
import { SSRMediaQuery } from "~/components/SSRMediaQuery"

const LEVEL_EXTRAS: Record<string, (() => JSX.Element) | null> = {
  N5: () => (
    <>
      Also check out our{" "}
      <Link to="/discover" class="text-sky-400 hover:underline">Discover</Link>{" "}
      section and{" "}
      <Link to="." class="text-sky-400 hover:underline">Browser Extension</Link>{" "}
      for sentence mining with grammar explanations.
    </>
  ),
  N4: () => (
    <>
      Check out our{" "}
      <Link to="." class="text-sky-400 hover:underline">Browser Extension</Link>{" "}
      for sentence mining with grammar explanations.
    </>
  ),
  N3: null,
  N2: null,
  N1: null,
}

const LEVEL_DATA: Record<string, { title: string; description: string; features: string[] }> = {
  N5: {
    title: "Beautiful tools. Engaging content.",
    description:
      "Most beginner resources overcomplicate grammar. Finding engaging content at your level feels impossible. We've simplified it: curated YouTube from teachers who actually explain well, clear lessons, and interactive practice from day one. Learn Japanese with great resources from across the web.",
    features: [
      "Interactive hiragana & katakana quizzes",
      "Free lessons ordered to match Genki + curated YouTube videos",
      "Spaced repetition from the start",
    ],
  },
  N4: {
    title: "Learn what you actually care about",
    description:
      "You're tired of textbook phrases that nobody actually says. Build vocabulary around what you care about—anime, games, whatever keeps you motivated. Master the conjugations you'll actually hear. When you're ready, the browser extension is already set up and waiting. No PhD in software required.",
    features: [
      "Conjugation practice (11 different forms)",
      "Custom vocabulary decks for your interests",
      "Grammar + vocabulary spaced repetition",
    ],
  },
  N3: {
    title: "Start watching what you love",
    description:
      "You're tired of pausing every sentence. Pick the anime or show you've been wanting to watch, and we'll show you exactly what stands between you and understanding it. Not generic lessons—a custom learning path built for that specific content. Grammar becomes your unlock key instead of a chore.",
    features: [
      "Generate custom learning paths for any show",
      "Grammar-focused spaced repetition (unique!)",
      "Browser extension for sentence-mining with grammar explanations",
    ],
  },
  N2: {
    title: "Pick any content. We'll show you what to learn.",
    description:
      "You know what you want to watch next. We'll analyze exactly what you need to learn for it. Already using Anki or WaniKani? Keep using them—import your data, switch platforms anytime. You've outgrown rigid systems. Time for tools that respect how you actually learn.",
    features: [
      "Show/movie learning path generator",
      "Switch between Anki, WaniKani, JPDB anytime",
      "Import your existing review data",
    ],
  },
  N1: {
    title: "Complete toolkit. Complete flexibility.",
    description:
      "You're past needing hand-holding. Full dictionary access, every SRS platform connected, the extension's most advanced features, learning paths for any content no matter how niche. The complete toolkit with zero restrictions. Learn what you want, how you want.",
    features: [
      "Full dictionary integration (Jotoba + WaniKani)",
      "All SRS platforms connected seamlessly",
      "Generate custom kanji practice sheets",
    ],
  },
}

const LEVEL_BUTTON_COLORS: Record<string, { top: string; bottom: string }> = {
  N5: { top: "rgb(220,220,203)", bottom: "rgb(183,183,158)" },
  N4: { top: "rgb(45,160,210)", bottom: "rgb(30,125,180)" },
  N3: { top: "rgb(135,100,210)", bottom: "rgb(115,70,200)" },
  N2: { top: "rgb(220,155,45)", bottom: "rgb(195,125,35)" },
  N1: { top: "rgb(220,85,105)", bottom: "rgb(200,55,80)" },
}

interface ToolsSectionProps {
  selectedLevel: string
  onLevelChange: (level: string) => void
}

export function ToolsSection(props: ToolsSectionProps) {
  let ref: HTMLDivElement | undefined

  onMount(() => {
    if (ref) {
      const cleanup = observeElementForAnimation(ref, {
        initialPosition: "down",
        noExit: true,
        // screenBottomOffset: 30,
        // screenTopOffset: 30,
      })
      onCleanup(cleanup)
    }
  })

  const levelData = () => LEVEL_DATA[props.selectedLevel]

  return (
    <Show when={levelData()}>
      <div
        ref={ref}
        class="pt-12 pb-32 md:pb-12 px-4 md:px-6"
        style={getInitialAnimationStyles("down")}
      >
        <h2 class="text-3xl h-16 md:h-auto font-semibold">{levelData()?.title}</h2>
        <p class="mt-5 h-44 sm:h-32 md:h-28 xl:h-24 text-neutral-300 max-w-4xl">
          {levelData()?.description}
        </p>
        <ul class="text-zinc-300 space-y-2 text-sm">
          <For each={levelData()?.features || []}>
            {(feature) => (
              <li class="flex items-center gap-2">
                <span class="bg-primary h-1.5 w-1.5 rounded-full" />
                {feature}
              </li>
            )}
          </For>
        </ul>
        <div class="my-6 flex justify-between items-center">
          <SSRMediaQuery showFrom="md">
            <div />
          </SSRMediaQuery>
          <p class="italic text-lg md:pl-24 font-medium md:text-center">Try some of our tools made for you</p>
          <JlptPagination selectedLevel={props.selectedLevel} onLevelChange={props.onLevelChange} />
        </div>
        <QuickAccessCards selectedLevel={props.selectedLevel} />
        <div class="space-y-3 mt-20 text-sm text-neutral-300">
          <Show when={LEVEL_EXTRAS[props.selectedLevel]}>
            <p>{LEVEL_EXTRAS[props.selectedLevel]!()}</p>
          </Show>
          <p>
            You may also be interested in how our{" "}
            <Link to="." class="text-sky-400 hover:underline">spaced-repetition system</Link>{" "}
            works, or how you can continue using{" "}
            <Link to="." class="text-sky-400 hover:underline">Anki alongside Nihongo Ninja</Link>.
          </p>
        </div>

        {/* Learning Path CTA */}
        <div class="mt-16 text-center">
          <p class="text-neutral-300 max-w-2xl mx-auto mb-8">
            When you're ready, create a personalized learning path following your favorite textbook's order, with all the vocabulary and grammar you need—or build one around the media you want to understand.
          </p>
          <div class="flex justify-center">
            <Button3D colors={LEVEL_BUTTON_COLORS[props.selectedLevel]}>
              Dive in!
            </Button3D>
          </div>
        </div>
      </div>
    </Show>
  )
}
