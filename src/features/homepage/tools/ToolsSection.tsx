import { For, Show, type JSX, onMount, onCleanup } from "solid-js"
import { Link } from "@tanstack/solid-router"
import {
  getInitialAnimationStyles,
  observeElementForAnimation,
} from "@/utils/animations"
import { chapters } from "@/data/chapters"
import { Button3D } from "@/components/Button3D"
import { QuickAccessCards } from "./QuickAccessCards"
import { JlptPagination } from "./JlptPagination"
import { SSRMediaQuery } from "~/components/SSRMediaQuery"

const LEVEL_BUTTON_COLORS: Record<string, { top: string; bottom: string }> = {
  N5: { top: "rgb(220,220,203)", bottom: "rgb(183,183,158)" },
  N4: { top: "rgb(45,160,210)", bottom: "rgb(30,125,180)" },
  N3: { top: "rgb(135,100,210)", bottom: "rgb(115,70,200)" },
  N2: { top: "rgb(220,155,45)", bottom: "rgb(195,125,35)" },
  N1: { top: "rgb(220,85,105)", bottom: "rgb(200,55,80)" },
}

const LEVEL_TO_CHAPTER_MAP: Record<string, string> = {
  N5: "n5-introduction",
  N4: "n4-introduction",
  N3: "n3-introduction",
  N2: "n2-introduction",
  N1: "n1-introduction",
}

const LEVEL_EXTRAS: Record<string, (() => JSX.Element) | null> = {
  N5: () => (
    <>
      Also check out our{" "}
      <Link to="/discover" class="text-sky-400 hover:underline">Discover</Link>{" "}
      section and{" "}
      <Link to="/extension" class="text-sky-400 hover:underline">Browser Extension</Link>{" "}
      for sentence mining with grammar explanations.
    </>
  ),
  N4: () => (
    <>
      Check out our{" "}
      <Link to="/extension" class="text-sky-400 hover:underline">Browser Extension</Link>{" "}
      for sentence mining with grammar explanations.
    </>
  ),
  N3: null,
  N2: null,
  N1: null,
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

  const chapterData = () => {
    const chapterSlug = LEVEL_TO_CHAPTER_MAP[props.selectedLevel]
    return chapters.getting_started[chapterSlug]
  }

  return (
    <Show when={chapterData()}>
      <div
        ref={ref}
        class="pt-12 pb-32 md:pb-12 px-4 md:px-6"
        style={getInitialAnimationStyles("down")}
      >
        <h2 class="text-3xl h-16 md:h-auto font-semibold">{chapterData()?.title}</h2>
        <p class="mt-5 h-44 sm:h-32 md:h-28 xl:h-24 text-neutral-300 max-w-4xl">
          {chapterData()?.description}
        </p>
        <ul class="text-zinc-300 space-y-2 text-sm">
          <For each={chapterData()?.features || []}>
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
            <Link to="/guides/srs" class="text-sky-400 hover:underline">spaced-repetition system</Link>{" "}
            works, or how you can continue using{" "}
            <Link to="/guides/anki" class="text-sky-400 hover:underline">Anki alongside Nihongo Ninja</Link>.
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
