// routes/guides/srs.tsx
import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/guides/srs")({
  loader: () => ({
    toc: [
      { id: "traditional-srs", title: "Why Traditional SRS Can Feel Limiting" },
      { id: "our-approach", title: "Our Approach: Let Practice Count" },
      { id: "the-result", title: "The Result" },
      { id: "same-science", title: "Same Science, Different Experience" },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mx-auto max-w-3xl space-y-12 pt-16 pb-24">
      {/* Intro */}
      <header class="text-center">
        <h1 class="mb-4 text-3xl font-bold">Our Spaced Repetition System</h1>
        <p class="text-muted-foreground text-lg">
          We use the same research-backed science as Anki, but designed so that
          your study activities naturally reinforce your memory.
        </p>
      </header>

      {/* Problem */}
      <section id="traditional-srs">
        <h2 class="mb-3 text-2xl font-semibold">
          Why Traditional SRS Can Feel Limiting
        </h2>
        <p class="text-muted-foreground text-base leading-relaxed">
          Spaced repetition is one of the most effective tools for long-term
          retention. Systems like Anki are excellent at scheduling reviews, but
          they often rely on one activity: <strong>flashcards</strong>.
        </p>
        <p class="text-muted-foreground mt-4 text-base leading-relaxed">
          While flashcards are useful, repeating the same cards every day can
          start to feel monotonous and disconnected from real learning.
        </p>
      </section>

      {/* Approach */}
      <section id="our-approach">
        <h2 class="mb-3 text-2xl font-semibold">
          Our Approach: Let Practice Count
        </h2>
        <p class="text-muted-foreground mb-4 text-base">
          Instead of only tracking flashcard reviews, Nihongo Ninja records
          progress across many kinds of practice. This means your study time is
          more varied, but still contributes to the same memory schedule.
        </p>
        <ul class="text-muted-foreground list-inside list-disc space-y-2 text-base">
          <li>
            Practice activities like multiple-choice questions and written
            answers count as review.
          </li>
          <li>
            When you take a test, any words that appear are also updated in your
            review schedule.
          </li>
          <li>
            Reading through lessons, seeing vocabulary in context, or even
            sentence mining all strengthen memory naturally.
          </li>
        </ul>
      </section>

      {/* Result */}
      <section id="the-result">
        <h2 class="mb-3 text-2xl font-semibold">The Result</h2>
        <p class="text-muted-foreground mb-4 text-base">
          Because your practice is spread across multiple activities, you don’t
          need to review as many flashcards. In fact, you’ll usually end up
          doing <strong>about half as many dedicated reviews</strong> as you
          would in a traditional system.
        </p>
        <div class="rounded-md border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/20">
          <p class="text-base text-green-800 dark:text-green-200">
            The repetition is still there, but it’s built into the way you
            actually study.
          </p>
        </div>
      </section>

      {/* Science */}
      <section id="same-science">
        <h2 class="mb-3 text-2xl font-semibold">
          Same Science, Different Experience
        </h2>
        <p class="text-muted-foreground text-base leading-relaxed">
          Behind the scenes, we use the same FSRS v6 (Free Spaced Repetition
          Scheduler) algorithm that Anki and some other systems use.
        </p>
        <p class="text-muted-foreground mt-4 text-base leading-relaxed">
          The difference is in how it’s applied: instead of only counting
          flashcard reviews,{" "}
          <strong>all your study activities feed into the same schedule</strong>
          , reinforcing knowledge at the right time without extra effort.
        </p>
      </section>

      {/* Closing */}
      <footer class="border-t pt-8 text-center">
        <p class="text-muted-foreground text-base italic">
          In short: you still get the proven benefits of spaced repetition, but
          in a way that feels integrated into your learning rather than separate
          from it.
        </p>
      </footer>
    </div>
  )
}
