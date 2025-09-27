// routes/lessons/_chapter-3/negative-masu-con
import { createFileRoute } from "@tanstack/solid-router"
import Romaji from "@/components/text/Romaji"
import NegativeMasuPractice from "@/features/routes-misc/chapter-3/negative-masu-conj/NegativeMasuPractice"

export const Route = createFileRoute("/lessons/_chapter-3/negative-masu-conj")({
  loader: async () => ({
    contentBox: {
      nextButtonLink: "/learn/chapter-3/practice/masu-conjugation",
    },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* Header (simple Chapter 2 style) */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          <strong>Negative</strong>{" "}
          <span class="font-japanese text-emerald-500">ます</span> Form
        </h1>
        <div class="mx-auto mb-5 h-1 w-16 rounded bg-emerald-500" />
        <p class="text-muted-foreground text-lg">
          Building on your knowledge of <span class="font-japanese">ます</span>{" "}
          stems, you can easily form the negative by attaching{" "}
          <span class="font-japanese text-indigo-400">ません</span>.
        </p>
      </header>

      <main class="mx-auto max-w-3xl space-y-12 px-6 leading-relaxed">
        {/* Intro & Examples */}
        <section>
          <p>
            Now that you know how to make{" "}
            <span class="font-japanese text-xl font-semibold text-emerald-500">
              ます
            </span>{" "}
            stems with godan, ichidan, and irregular verbs, you can easily make
            the negative forms. All you have to do is add{" "}
            <span class="font-japanese text-xl font-semibold text-indigo-400">
              ません
            </span>{" "}
            to the stem.
          </p>

          <h2 class="mt-8 text-center text-2xl font-bold">Examples</h2>

          <div class="mt-6 space-y-4 text-center text-xl">
            <p>
              <span class="font-bold">Example: </span>
              <span class="font-japanese text-2xl">
                <Romaji romaji="To drink">飲む</Romaji>
              </span>{" "}
              → <span class="font-japanese text-2xl">飲み</span> →{" "}
              <span class="font-japanese text-2xl">
                <Romaji romaji="(I) don't drink">
                  飲み<span class="font-semibold text-indigo-400">ません</span>
                </Romaji>
              </span>
            </p>

            <p>
              <span class="font-bold">Example: </span>
              <span class="font-japanese text-2xl">
                <Romaji romaji="To eat">食べる</Romaji>
              </span>{" "}
              → <span class="font-japanese text-2xl">食べ</span> →{" "}
              <span class="font-japanese text-2xl">
                <Romaji romaji="(I) don't eat">
                  食べ<span class="font-semibold text-indigo-400">ません</span>
                </Romaji>
              </span>
            </p>
          </div>
        </section>

        {/* Practice */}
        <section>
          <h2 class="text-center text-3xl font-bold">Practice</h2>
          <p class="mt-4">
            Conjugate the following verbs into their negative{" "}
            <span class="font-japanese text-xl font-semibold text-emerald-500">
              ます
            </span>{" "}
            form, <span class="font-bold">using kanji</span>.
          </p>
          <p class="text-muted-foreground mt-1 text-base italic">
            *From this lesson onwards, we’ll expect you to write using kanji
            just as Japanese people would unless otherwise specified.
          </p>
          <NegativeMasuPractice />
        </section>
      </main>
    </div>
  )
}
