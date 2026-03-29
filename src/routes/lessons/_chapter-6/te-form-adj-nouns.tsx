import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/lessons/_chapter-6/te-form-adj-nouns")({ component: TeFormAdjNouns })

function TeFormAdjNouns() {
  return (
    <div class="mb-32">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Adjectives & Nouns -{" "}
        <span class="font-japanese text-green-500">て</span>-Form
      </h1>

      <div class="space-y-6 px-4 sm:px-12 md:px-20">
        <div class="rounded-lg bg-card/50 p-6">
          <p class="text-lg">
            Remember how we combined verbs with て form? Like:
          </p>
          <p class="mt-2 font-japanese text-xl">
            ビールを
            <span class="underline decoration-green-500 underline-offset-4">
              飲んで
            </span>
            、ラーメンを
            <span class="underline decoration-green-500 underline-offset-4">
              食べて
            </span>
            、 あまりお金がありません。
          </p>
          <p class="text-muted-foreground">
            (I drink beer, eat ramen, and don't have much money)
          </p>
        </div>

        <p class="text-lg">
          Well, now you can do the same thing with adjectives and nouns! Time to
          level up your description game.
        </p>

        <YouTubeVideo
          videoId="RCR0N55l600"
          title="【How to connect adjectives】Japanese くて/で"
          credit="Miku Real Japanese"
        />

        <div class="grid gap-6 md:grid-cols-2">
          {/* い Adjectives Card */}
          <div class="rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/15 p-6">
            <h3 class="text-xl font-bold">い Adjectives</h3>
            <p class="mt-2">Drop い, Add くて</p>

            <div class="mt-4 space-y-3">
              <div class="rounded-lg bg-background/60 p-3">
                <p class="font-japanese text-xl">安い → 安くて</p>
                <div class="mt-2 text-sm">
                  <p>
                    この店のカレーは
                    <span class="font-japanese">安くて、おいしいです</span>。
                  </p>
                  <p class="text-muted-foreground">
                    This shop's curry is cheap and delicious. (Perfect for broke
                    students)
                  </p>
                </div>
              </div>

              <div class="rounded-lg bg-background/60 p-3">
                <p class="font-japanese text-xl">いい → よくて</p>
                <div class="mt-2 text-sm">
                  <p>
                    先生はやさしくて、よくて、
                    <span class="line-through">単位をくれます</span>。
                  </p>
                  <p class="text-muted-foreground">
                    The teacher is kind and good and{" "}
                    <span class="line-through">gives passing grades</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* な Adjectives Card */}
          <div class="rounded-xl bg-gradient-to-br from-green-500/15 to-teal-500/15 p-6">
            <h3 class="text-xl font-bold">な Adjectives</h3>
            <p class="mt-2">Drop な, Add で</p>

            <div class="mt-4 space-y-3">
              <div class="rounded-lg bg-background/60 p-3">
                <p class="font-japanese text-xl">静か(な) → 静かで</p>
                <div class="mt-2 text-sm">
                  <p>
                    図書館は
                    <span class="font-japanese">静かで、涼しいです</span>。
                  </p>
                  <p class="text-muted-foreground">
                    The library is quiet and cool. (Perfect for napping... I
                    mean, studying)
                  </p>
                </div>
              </div>

              <div class="rounded-lg bg-background/60 p-3">
                <p class="font-japanese text-xl">元気(な) → 元気で</p>
                <div class="mt-2 text-sm">
                  <p>
                    友だちは
                    <span class="font-japanese">元気で、うるさいです</span>。
                  </p>
                  <p class="text-muted-foreground">
                    My friend is energetic and noisy. (Usually at 3 AM)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nouns Card */}
          <div class="col-span-full rounded-xl bg-gradient-to-br from-orange-500/15 to-red-500/15 p-6">
            <h3 class="text-xl font-bold">Nouns + です</h3>
            <p class="mt-2">Drop です, Add で</p>

            <div class="mt-4 space-y-3">
              <div class="rounded-lg bg-background/60 p-3">
                <p class="font-japanese text-xl">学生です → 学生で</p>
                <div class="mt-2 text-sm">
                  <p>
                    私は
                    <span class="font-japanese">学生で、お金がありません</span>
                    。
                  </p>
                  <p class="text-muted-foreground">
                    I'm a student and I have no money. (A universal truth)
                  </p>
                </div>
              </div>

              <div class="rounded-lg bg-background/60 p-3">
                <p class="font-japanese text-xl">日本人です → 日本人で</p>
                <div class="mt-2 text-sm">
                  <p>
                    山田先生は
                    <span class="font-japanese">
                      日本人で、とても厳しいです
                    </span>
                    。
                  </p>
                  <p class="text-muted-foreground">
                    Professor Yamada is Japanese and very strict. (RIP your
                    grades)
                  </p>
                </div>
              </div>

              <p class="text-muted-foreground">
                *You're going to notice that very often, nouns behave the same
                as な adjectives like they do here.
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-card/50 p-6">
          <h3 class="text-xl font-bold">Pro Tips</h3>
          <ul class="mt-4 list-disc space-y-2 pl-5">
            <li>
              The last adjective sets the tense for everything{" "}
              <span class="text-base text-muted-foreground">(like verbs)</span>:
              <p class="mt-1 font-japanese text-lg">
                テストは難しくて、よくなかったです。
              </p>
              <p class="text-sm text-muted-foreground">
                The test was difficult and (the result) wasn't good. (Story of
                my life)
              </p>
            </li>
            <li>
              You can chain multiple adjectives:
              <p class="mt-1 font-japanese text-lg">
                この部屋は小さくて、古くて、高くて、最悪です。
              </p>
              <p class="text-sm text-muted-foreground">
                This room is small, old, expensive, and the worst.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="space-y-4 px-10 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p>
          How would you complain that your professor is strict and their tests
          are difficult?
        </p>
        <SelectText
          answer="先生は厳しくて、テストは難しいです。"
          a="先生は厳しいで、テストは難しいです。"
          b="先生は厳しくて、テストは難しいです。"
          c="先生が厳しくて、テストが難しいです。"
          class="text-xl"
        />
      </div>
    </div>
  )
}
