import { type JSX, For, onMount, onCleanup } from "solid-js"
import { Link } from "@tanstack/solid-router"
import {
  getInitialAnimationStyles,
  observeElementForAnimation,
} from "@/utils/animations"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"

interface Feature {
  title: string
  description: () => JSX.Element
}

const FEATURES: Feature[] = [
  {
    title: "No paid ecosystem lock-in",
    description: () => (
      <>
        <div>
          Great free tools like Anki, Yomitan, and ASBPlayer already exist,
          though they can be tricky to set up. We streamline them and build
          additional features on top to make the learning experience better.{" "}
          <span class="font-bold">
            If anything here overlaps with these tools, it's free.
          </span>{" "}
          If you prefer to use those tools instead, no problemo—you can pick
          and choose.
        </div>
        <div class="mt-3 text-sm italic text-muted-foreground">
          Nihongo Ninja's source-code is also publicly available and
          self-hostable.
        </div>
      </>
    ),
  },
  {
    title: "Your favorite media become your roadmap",
    description: () => (
      <>
        Learn from content you actually want to watch—not beginner materials.{" "}
        <span class="font-bold">
          Set up custom learning paths tailored to the exact episode, movie, or
          series you care about.
        </span>
      </>
    ),
  },
  {
    title: "Three pillars, one system",
    description: () => (
      <>
        Spaced repetition for{" "}
        <span class="font-bold">vocabulary, grammar, and kanji</span>—tracked
        together in one system. Your progress compounds as each area reinforces
        the others.
      </>
    ),
  },
  {
    title: "Watch, write, conjugate—nothing goes to waste",
    description: () => (
      <>
        Every activity feeds your memory schedule—not just flashcards.{" "}
        <span class="font-bold">
          Watch a show, write sentences, practice conjugations.
        </span>{" "}
        It all gets tracked so no effort is wasted.
      </>
    ),
  },
  {
    title: "Keep using Anki (or don't)",
    description: () => (
      <>
        <span class="font-bold">
          Everything here works alongside Anki if that's what you prefer.
        </span>{" "}
        Keep what's already working for you, or use Nihongo Ninja's built-in
        system if you just want an easy setup (you could even import your Anki
        data if you prefer the convenience of having everything in one place).
      </>
    ),
  },
  {
    title: "A browser extension for serious immersion",
    description: () => (
      <>
        Combines the best ideas from tools like Yomitan and ASBPlayer with
        features you won't find elsewhere:{" "}
        <span class="font-bold">
          inline grammar pattern recognition, persistent popups for unknown
          words, tools to hide English subs, cleaner visuals, and smarter text
          segmentation, and more.
        </span>{" "}
        All with first-party integration into Nihongo Ninja's vocab and grammar
        reviews.
      </>
    ),
  },
]

const REASONS = [
  {
    title: "The vocabulary problem",
    content:
      "Anki felt too slow for cramming 60+ words before an exam. I'd get the same cards wrong over and over, taking a week to learn what I needed in 5 days. Then I discovered Quizlet's paid Learn feature and everything clicked—but after a week of not practicing, it all vanished. That's when I realized...",
  },
  {
    title: "The feedback problem",
    content:
      "Waiting 3 days for corrected homework killed any motivation to learn from mistakes. Half the page marked in red, every time. I was aware of the compounding problem but couldn't bring myself to do fix mistakes I made days before. Then I stumbled on Steven Kraft's site and...",
  },
  {
    title: "The content problem",
    content:
      "Great beginner-friendly material exists. I'm talking genuinely interesting stuff I'd watch without lowering my standards because it's \"for learning.\" But for every one of those, there are 100 resources that are boring or just not what a college student would watch in their free time. Finding the good ones took hours of dedicated searching, and almost always...",
  },
  {
    title: "The ecosystem problem",
    content:
      "Japanese has a huge community of developers making learning tools. And yet the ecosystem felt completely scattered. Most tools worked on my laptop but not my phone or iPad, which meant...",
  },
]

function WhyIBuiltThis() {
  return (
    <div>
      <Collapsible>
        <CollapsibleTrigger class="py-2 text-base cursor-pointer hover:bg-accent/60">
          <span class="text-lg text-start">
            See why Nihongo Ninja was created and why it could help you too
          </span>
        </CollapsibleTrigger>
        <CollapsibleContent class="pt-4">
          <div class="space-y-6">
            <For each={REASONS}>
              {(reason, index) => (
                <div>
                  <h3 class="mb-2 font-semibold">
                    {index() + 1}. {reason.title}
                  </h3>
                  <p class="text-foreground/80 text-sm leading-relaxed">
                    {reason.content}{" "}
                    <Link
                      to="."
                      class="text-muted-foreground hover:underline decoration-[1.5px] underline-offset-3"
                    >
                      See more
                    </Link>
                  </p>
                </div>
              )}
            </For>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

function FeaturesAccordion() {
  return (
    <Accordion multiple class="w-full">
      <For each={FEATURES}>
        {(point, index) => (
          <AccordionItem value={`item-${index()}`}>
            <AccordionTrigger>
              <span><span class="text-sm text-pink-300 mr-1.5">{index() + 1}.</span> {point.title}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div class="text-foreground/80 leading-relaxed">
                {point.description()}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
      </For>
    </Accordion>
  )
}

export function FeaturesSection() {
  let ref: HTMLDivElement | undefined

  onMount(() => {
    if (ref) {
      const cleanup = observeElementForAnimation(ref, {
        initialPosition: "down",
        noExit: true,
        screenBottomOffset: 30,
        screenTopOffset: 30,
      })
      onCleanup(cleanup)
    }
  })

  return (
    <div
      ref={ref}
      id="features"
      class="snap-start mx-auto max-w-6xl py-12 px-4 md:px-6"
      style={getInitialAnimationStyles("down")}
    >
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <WhyIBuiltThis />
        <FeaturesAccordion />
      </div>
    </div>
  )
}
