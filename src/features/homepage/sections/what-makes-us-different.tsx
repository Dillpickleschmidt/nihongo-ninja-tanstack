import { createSignal } from "solid-js"
import { ChevronDown } from "lucide-solid"
import { VocabCardDemo } from "../components/vocab-card-demo"

export function WhatMakesUsDifferent() {
  const [expanded, setExpanded] = createSignal(false)

  return (
    <section class="relative pt-14 pb-20 lg:pt-24 lg:pb-32">
      <div class="mx-auto max-w-3xl px-6">
        <h2 class="mb-12 text-center text-3xl font-bold lg:text-4xl">
          What makes us{" "}
          <span class="text-transparent bg-clip-text bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end)">
            different?
          </span>
        </h2>

        <div class="relative">
          <div
            class="overflow-hidden transition-[max-height] duration-700 ease-in-out"
            style={{ "max-height": expanded() ? "3000px" : "405px" }}
          >
            <div class="space-y-6 text-lg leading-relaxed text-white/70">
              <p>
                Many courses have very decent information to teach, but most
                lack good practice material, if any. They'll hand you worksheets
                and tell you to start writing, or put you in some weird
                arbitrary practice system that doesn't align with reality or
                your interests. Other apps like Duolingo have instant feedback
                but you're mostly dragging premade boxes around, not actually
                producing Japanese on your own. Nihongo Ninja gives you the best
                of each: you write from scratch and get instant feedback,
                without dumbing anything down.
              </p>

              <p>
                Nihongo Ninja follows the Genki textbook{" "}
                <span class="text-base text-white/40">
                  (the one most American universities use)
                </span>{" "}
                so if you ever want to take a class, find a tutor, or use other
                Genki-based resources, everything lines up. You're not stuck in
                one system.
              </p>

              <p>
                Textbooks are also missing something important: real, natural
                Japanese speech. Finding listening material on your own takes
                forever, and most beginner content is either the wrong level or
                painfully boring. Over time, I've curated a personal collection
                of engaging materials matched to your skill level and placed
                them right where they belong. By the way,{" "}
                <span class="underline">every single vocabulary word</span> has
                multiple{" "}
                <span class="text-base text-white/40">(sometimes dozens)</span>{" "}
                of short recordings used in context, sampled from Japanese
                dramas and anime, with pictures attached.
              </p>

              <VocabCardDemo />

              <p>
                You may also be used to boring, monotonous spaced-repetition
                systems that only track vocabulary. Nihongo Ninja also schedules
                grammar and sentence reviews, so you conjugate, write full
                sentences, and practice vocab all on the same schedule. Seeing
                words in different contexts helps them stick faster, and you end
                up repeating things less.
              </p>

              <p>
                There are many great free and open-source tools for learning
                Japanese (Anki, Yomitan, ASBPlayer, and more). Every tool on
                Nihongo Ninja is also free to use. The only paid part is the
                built-in spaced repetition, which is just there for the
                convenience of no setup. But if you'd rather use Anki{" "}
                <span class="text-base text-white/40">
                  (totally get it, I was a broke college student too)
                </span>
                , there's free built-in support for it and you still get the
                full experience.
              </p>
            </div>
          </div>

          {!expanded() && (
            <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0b0d] to-transparent pointer-events-none" />
          )}
        </div>

        <div class="mt-4 text-center">
          <button
            class="inline-flex items-center gap-1 text-sm text-white/40 hover:text-white/60 transition-colors cursor-pointer"
            onClick={() => setExpanded(!expanded())}
          >
            {expanded() ? "Show less" : "Show more"}
            <ChevronDown
              class={`size-3.5 transition-transform duration-300 ${expanded() ? "-rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
