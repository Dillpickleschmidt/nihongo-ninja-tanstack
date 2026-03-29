import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export const Route = createFileRoute("/lessons/_chapter-6/kara")({ component: Kara })

function Kara() {
  return (
    <div class="mb-32">
      <div class="space-y-6 px-4 sm:px-12 md:px-20">
        <div class="mb-6 mt-28 w-full border-b py-6">
          <h1 class="text-center text-4xl font-semibold">
            Expressing Reasons with{" "}
            <span class="font-japanese text-orange-500">から</span>
          </h1>
        </div>
        <div class="rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6">
          <p>
            Remember だから from Chapter 1? The{" "}
            <span class="font-japanese font-medium text-orange-500">から</span>{" "}
            particle works similarly but is smoother and more flexible. While
            だから always comes at the start of a new sentence, から can be used
            in the middle to join two sentences into one smooth sentence. It can
            also be used at the end, giving you more natural ways to express
            your reasoning.
          </p>
        </div>

        <div class="rounded-lg bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-6">
          <h2 class="text-center text-2xl font-bold">The Core Pattern</h2>
          <div class="mt-4 rounded-lg bg-background/60 p-4">
            <div class="flex items-center justify-center space-x-4">
              <p class="font-japanese text-xl">
                X <span class="font-medium text-orange-500">から</span> Y
              </p>
              <span class="font-bold">=</span>
              <p>X, so Y</p>
            </div>
            <p class="mt-2 text-center text-muted-foreground">
              When you see から joining two parts of a sentence, think of it as
              "so" - it's connecting a reason to what happens because of it.
            </p>
          </div>

          <div class="mt-6">
            <p class="font-bold">Before (with だから, weird):</p>
            <div class="mt-2 rounded-lg bg-background/60 p-4">
              <p class="font-japanese text-xl">
                タクシーは高いです。
                <span class="font-medium text-orange-500">だから</span>
                、バスに乗りましょう。
              </p>
              <p class="mt-2 text-base text-muted-foreground">
                Taxis are expensive. Therefore, let's take the bus.
              </p>
            </div>
          </div>

          <div class="mt-6">
            <p class="font-bold">After (with から, smooth!):</p>
            <div class="mt-2 rounded-lg bg-background/60 p-4">
              <p class="font-japanese text-xl">
                タクシーは高いです
                <span class="font-medium text-orange-500">から</span>
                、バスに乗りましょう。
              </p>
              <p class="mt-2 text-base text-muted-foreground">
                Taxis are expensive, so let's take the bus.
              </p>
            </div>
          </div>

          <div class="mt-6">
            <p class="font-semibold">More Examples:</p>
            <div class="mt-2 space-y-4">
              <div class="rounded-lg bg-background/60 p-4">
                <p class="font-japanese text-xl">
                  あしたテストがあります
                  <span class="font-medium text-orange-500">から</span>
                  、今晩勉強します。
                </p>
                <p class="mt-2 text-base text-muted-foreground">
                  We have a test tomorrow, so I will study tonight.
                </p>
              </div>

              <div class="rounded-lg bg-background/60 p-4">
                <p class="font-japanese text-xl">
                  頭が痛いです
                  <span class="font-medium text-orange-500">から</span>
                  、早く寝ます。
                </p>
                <p class="mt-2 text-base text-muted-foreground">
                  I have a headache, so I'll go to bed early.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-6">
          <h2 class="text-center text-2xl font-bold">Alternative Pattern</h2>
          <p class="mt-4 text-lg">
            You can also split it into two sentences, with から at the end of
            your reason:
          </p>

          <div class="mt-4 rounded-lg bg-background/60 p-4">
            <p class="font-japanese text-xl">
              バスに乗りましょう。タクシーは高いです
              <span class="font-medium text-orange-500">から</span>。
            </p>
            <p class="mt-2 text-base text-muted-foreground">
              Let's take the bus. (Because taxis are expensive)
            </p>
            <p class="mt-2 text-sm italic text-muted-foreground">
              This pattern is more conversational, like adding the reason as an
              afterthought.
            </p>
          </div>

          <div class="mt-6">
            <p class="font-semibold">More Examples:</p>
            <div class="mt-2 space-y-4">
              <div class="rounded-lg bg-background/60 p-4">
                <p class="font-japanese text-xl">
                  今晩勉強します。あしたテストがあります
                  <span class="font-medium text-orange-500">から</span>。
                </p>
                <p class="mt-2 text-base text-muted-foreground">
                  I will study tonight. (Because we have a test tomorrow)
                </p>
              </div>

              <div class="rounded-lg bg-background/60 p-4">
                <p class="font-japanese text-xl">
                  早く寝ます。頭が痛いです
                  <span class="font-medium text-orange-500">から</span>。
                </p>
                <p class="mt-2 text-base text-muted-foreground">
                  I'll go to bed early. (Because I have a headache)
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 class="py-6 text-center text-2xl">
          <span class="font-medium text-orange-500">から</span> is always
          attached to the <u>end</u> of the <u>reason clause</u>, just like
          particles are attached to the end of their respective words.
        </h3>
        <p class="text-base text-muted-foreground">
          Ex. You wouldn't say 水飲みますを. を must be paired with 水.
        </p>

        <div class="rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6">
          <h2 class="text-center text-2xl font-bold">Common Mistakes</h2>
          <p class="mt-4">
            Don't switch the cause and effect - keep them in logical order:
          </p>

          <div class="mt-4 space-y-4">
            <div class="rounded-lg bg-background/60 p-4">
              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold text-red-500">Incorrect</p>
                <p class="w-3/4">
                  <span class="font-japanese text-xl">
                    勉強します
                    <span class="font-medium text-orange-500">から</span>
                    、テストがあります。
                  </span>
                </p>
              </div>
              <p class="mb-2 text-sm text-muted-foreground">
                This says "I study, so there's a test."
              </p>

              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold">Correct</p>
                <p class="w-3/4">
                  <span class="font-japanese text-xl">
                    テストがあります
                    <span class="font-medium text-orange-500">から</span>
                    、勉強します。
                  </span>
                </p>
              </div>
              <p class="mb-2 text-sm text-muted-foreground">
                This says "I have a test, so I study."
              </p>

              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold">Also Correct</p>
                <p class="w-3/4">
                  <span class="font-japanese text-xl">
                    勉強します。テストがあります
                    <span class="font-medium text-orange-500">から</span>。
                  </span>
                </p>
              </div>
              <p class="mb-2 text-sm text-muted-foreground">
                This says "I study. (Because there's a test)"
              </p>
              <p class="mt-2 text-sm text-muted-foreground">
                *The test is the reason why you study, not the other way around!
              </p>
            </div>

            <div class="rounded-lg bg-background/60 p-4">
              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold text-red-500">Incorrect</p>
                <p class="w-3/4">
                  <span class="font-japanese text-xl">
                    病院に行きます
                    <span class="font-medium text-orange-500">から</span>
                    、頭が痛いです。
                  </span>
                </p>
              </div>
              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold">Correct</p>
                <p class="w-3/4">
                  <span class="font-japanese text-xl">
                    頭が痛いです
                    <span class="font-medium text-orange-500">から</span>
                    、病院に行きます。
                  </span>
                </p>
              </div>
              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold">Also Correct</p>
                <p class="w-3/4">
                  <span class="font-japanese text-xl">
                    病院に行きます。頭が痛いです
                    <span class="font-medium text-orange-500">から</span>。
                  </span>
                </p>
              </div>
              <p class="mt-2 text-sm text-muted-foreground">
                *The headache is the reason for going to the hospital, not vice
                versa!
              </p>
            </div>

            <p class="text-sm italic text-muted-foreground">
              Remember: The first part (before から) should explain WHY you're
              doing the second part.
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4 px-10 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the correct answers*
        </p>

        <div>
          <p>Which is correct for "It's hot, so I opened the window"?</p>
          <SelectText
            answer="暑いから、窓を開けました。"
            a="暑い。窓を開けましたから。"
            b="暑いから、窓を開けました。"
            c="窓を開けましたから、暑いです。"
            class="text-xl"
          />
        </div>
      </div>
    </div>
  )
}
