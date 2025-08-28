import { createFileRoute } from "@tanstack/solid-router"
import { createMediaQuery } from "@solid-primitives/media"
import Romaji from "@/components/text/Romaji"
import Numbers10 from "@/components/charts/Numbers10"
import Numbers100 from "@/components/charts/Numbers100"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"

export const Route = createFileRoute("/lessons/_chapter-0/numbers-0-100")({
  loader: async () => ({
    contentBox: {
      nextButtonLink: "/lessons/hiragana",
      size: "lg",
    },
  }),
  component: JapaneseNumbers,
})

function JapaneseNumbers() {
  const isDesktop = createMediaQuery("(min-width: 1024px)")
  return (
    <div class="mb-32">
      {/* Page Header */}
      <h1 class="mb-12 px-4 pt-16 text-center text-3xl leading-tight font-medium sm:text-4xl">
        Let&apos;s learn the basic numbers.
      </h1>

      {/* Responsive grid */}
      <div class="mx-auto grid w-full max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:items-start lg:px-12">
        {/* Left: Numbers 1–10 */}
        <div class="max-w-md">
          <Collapsible
            defaultOpen={isDesktop() ? true : false}
            class="border-border bg-card/70 rounded-xl border shadow backdrop-blur-sm"
          >
            <CollapsibleTrigger class="text-foreground p-4 text-lg font-semibold">
              Numbers 1–10
            </CollapsibleTrigger>
            <CollapsibleContent class="p-4">
              <Numbers10 />
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Right: Explanations */}
        <div class="text-foreground space-y-10 leading-relaxed">
          <p>
            You&apos;ll notice that numbers 4, 7, and 9 have two options.
            Japanese speakers use either, but some are more common in different
            contexts. For example <span class="text-primary">く</span> is common
            in <span class="italic">months</span> (九月「くがつ」 = September),
            and <span class="text-primary">しち</span> appears in dates (七月
            「しちがつ」 = July). Knowing both is important.
          </p>

          <p>
            Just like most languages, 1–10 are essential. But unlike English,
            there are no unique words for eleven, twelve, twenty, thirty, etc.
            Instead, Japanese builds numbers in <strong>formulas</strong>:
          </p>

          <div class="bg-muted/30 border-border rounded-md border p-4 text-sm">
            <p>
              <strong>Formula for 11–19:</strong> じゅう + [ones digit]
            </p>
            <p>
              <strong>Formula for 20–99:</strong> [tens digit] + じゅう + [ones
              digit]
            </p>
          </div>

          <NumberExample
            explanation='To make eleven, you combine "ten" + "one" →'
            parts={[
              <Romaji romaji="juu">じゅう</Romaji>,
              <span class="text-orange-400">
                <Romaji romaji="ichi">いち</Romaji>
              </span>,
            ]}
          />

          <NumberExample
            explanation='To make twenty, you combine "two" + "ten" →'
            parts={[
              <span class="text-red-400">
                <Romaji romaji="ni">に</Romaji>
              </span>,
              <Romaji romaji="juu">じゅう</Romaji>,
            ]}
          />

          <NumberExample
            explanation='To make twenty-one, you combine "two" + "ten" + "one" →'
            parts={[
              <span class="text-red-400">
                <Romaji romaji="ni">に</Romaji>
              </span>,
              <Romaji romaji="juu">じゅう</Romaji>,
              <span class="text-orange-400">
                <Romaji romaji="ichi">いち</Romaji>
              </span>,
            ]}
          />

          <NumberExample
            explanation='To make sixty-nine, you combine "six" + "ten" + "nine" →'
            parts={[
              <span class="text-red-400">
                <Romaji romaji="roku">ろく</Romaji>
              </span>,
              <Romaji romaji="juu">じゅう</Romaji>,
              <span class="text-orange-400">
                <Romaji romaji="kyuu">きゅう</Romaji>
              </span>,
            ]}
          />

          {/* Practice Prompt */}
          <div class="mt-10 text-center">
            <h3 class="mb-2 text-2xl font-semibold">
              Think you can say 98? Give it a try!
            </h3>
            <Collapsible>
              <CollapsibleTrigger class="text-muted-foreground py-1.5 text-sm">
                Show Answer
              </CollapsibleTrigger>
              <CollapsibleContent class="mt-2">
                <div class="flex justify-center gap-2 text-xl">
                  <Romaji romaji="kyuu">きゅう</Romaji>
                  <Romaji romaji="juu">じゅう</Romaji>
                  <Romaji romaji="hachi">はち</Romaji>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>

      {/* Numbers 0–100 chart */}
      <div class="mt-16 px-4 md:px-20">
        <Numbers100 />
      </div>
    </div>
  )
}

function NumberExample(props: { explanation: string; parts: JSX.Element[] }) {
  return (
    <div>
      <p class="text-center">{props.explanation}</p>
      <div class="mt-2 flex justify-center gap-1 text-2xl sm:text-3xl">
        {props.parts.map((p) => p)}
      </div>
    </div>
  )
}
