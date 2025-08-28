import { createFileRoute, Link } from "@tanstack/solid-router"
import { createMediaQuery } from "@solid-primitives/media"
import { Button } from "@/components/ui/button"
import MinutesChart1 from "@/components/charts/MinutesChart1"
import MinutesChart2 from "@/components/charts/MinutesChart2"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"

export const Route = createFileRoute("/lessons/_chapter-1/minutes")({
  loader: async () => ({
    contentBox: {
      nextButtonLink: "/lessons/_chapter-1/practice/minutes",
    },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const isDesktop = createMediaQuery("(min-width: 1024px)")

  return (
    <div class="mb-32">
      {/* Header */}
      <h1 class="mb-12 px-4 pt-16 text-center text-3xl leading-tight font-medium sm:text-4xl">
        Counting Minutes — <span class="font-japanese">ぷん・ふん</span>
      </h1>

      {/* Two-column layout */}
      <div class="mx-auto grid w-full max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:items-start lg:px-12">
        {/* Left: Minutes 1–10 */}
        <div class="max-w-md">
          <Collapsible
            defaultOpen={isDesktop() ? true : false}
            class="border-border bg-card/70 rounded-xl border shadow backdrop-blur-sm"
          >
            <CollapsibleTrigger class="text-foreground p-4 text-lg font-semibold">
              Minutes 1–10
            </CollapsibleTrigger>
            <CollapsibleContent class="p-4">
              <MinutesChart1 />
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Right: Minutes 11–30 */}
        <div class="max-w-md">
          <Collapsible
            defaultOpen={isDesktop() ? true : false}
            class="border-border bg-card/70 rounded-xl border shadow backdrop-blur-sm"
          >
            <CollapsibleTrigger class="text-foreground p-4 text-lg font-semibold">
              Minutes 11–30
            </CollapsibleTrigger>
            <CollapsibleContent class="p-4">
              <MinutesChart2 />
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      {/* Explanations */}
      <div class="mx-auto mt-20 w-full max-w-3xl space-y-6 px-6 pb-32 lg:px-12">
        <h2 class="text-center text-2xl font-bold">
          Japanese uses <span class="font-japanese">ぷん・ふん</span> for
          counting minutes.
        </h2>

        <div class="flex justify-center">
          <ul class="list-disc space-y-2 pl-6">
            <li>
              Five past twelve →{" "}
              <span class="font-japanese text-xl">じゅうにじごふん</span>
            </li>
            <li>
              4:20 → <span class="font-japanese text-xl">よじにじっぷん</span>
            </li>
            <li>
              7:37 →{" "}
              <span class="font-japanese text-xl">
                しちじさんじゅうななふん
              </span>
            </li>
            <li>
              10:15 →{" "}
              <span class="font-japanese text-xl">じゅうじじゅうごふん</span>
            </li>
          </ul>
        </div>

        <h3 class="!mt-9 text-center font-bold">
          You&apos;ll just have to memorize which minutes from 1–10 use ぷん and
          which use ふん.
        </h3>
        <p class="text-center italic">You&apos;ll get better with practice!</p>
      </div>

      {/* Next Lesson */}
      <div class="fixed right-10 bottom-10">
        <Link to="/lessons/_chapter-1/practice/minutes">
          <Button>Next Lesson →</Button>
        </Link>
      </div>
    </div>
  )
}
