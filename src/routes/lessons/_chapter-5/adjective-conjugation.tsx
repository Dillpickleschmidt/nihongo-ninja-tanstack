import { createFileRoute, Link } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute(
  "/lessons/_chapter-5/adjective-conjugation",
)({
  component: AdjectiveConjugation,
})

function PortraitIcon(props: { src: string; class?: string }) {
  return (
    <img
      src={props.src}
      alt=""
      class={`size-12 rounded-full ring-1 ring-white/10 ${props.class ?? ""}`}
    />
  )
}

function AdjectiveConjugation() {
  return (
    <div class="mb-32">
      <div class="space-y-6 px-4 sm:px-12 md:px-20">
        <div class="mb-6 mt-28 w-full border-b py-6">
          <h1 class="text-center text-4xl font-semibold">
            Japanese Adjectives:{" "}
            <span class="font-japanese text-teal-500">い</span> and{" "}
            <span class="font-japanese text-yellow-500">な</span>
          </h1>
        </div>

        <div class="!mt-9 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6">
          <p>
            Japanese adjectives come in two varieties - each type follows its
            own rules for conjugation and modifying nouns.
          </p>
        </div>

        <div class="!mt-12 w-full space-y-4 rounded-lg bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-yellow-500/10 px-3 py-5 text-center">
          <div class="flex justify-around gap-4 font-japanese text-xl lg:text-2xl">
            <div class="flex flex-col items-start space-y-1">
              <div class="mb-2 w-full text-center font-bold">
                <span class="font-japanese text-teal-400">い</span>-Adjectives
              </div>
              <div>
                寒い<span class="font-medium text-teal-400">です</span>
              </div>
              <div>
                寒<span class="font-medium text-teal-400">くないです</span>
              </div>
              <div>
                寒<span class="font-medium text-teal-400">かったです</span>
              </div>
              <div>
                寒<span class="font-medium text-teal-400">くなかったです</span>
              </div>
            </div>
            <div class="flex flex-col items-start space-y-1">
              <div class="mb-2 w-full text-center font-bold">
                <span class="font-japanese text-yellow-400">な</span>-Adjectives
              </div>
              <div>
                静か<span class="font-medium text-yellow-400">です</span>
              </div>
              <div>
                静か
                <span class="font-medium text-yellow-400">じゃないです</span>
              </div>
              <div>
                静か<span class="font-medium text-yellow-400">でした</span>
              </div>
              <div>
                静か
                <span class="font-medium text-yellow-400">
                  じゃなかったです
                </span>
              </div>
            </div>
          </div>
        </div>

        <YouTubeVideo
          videoId="SAXtJwgj71U"
          title="The Most Common Mistake for Japanese Beginners"
          credit="ToKini Andy"
        />

        <div class="grid gap-6 md:grid-cols-2">
          {/* い-Adjectives section */}
          <div class="rounded-xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-6">
            <h2 class="text-2xl font-bold">
              <span class="text-teal-400">い</span>-Adjectives
            </h2>
            <div class="mt-4 grid grid-cols-3 gap-4 rounded-lg bg-background/60 p-4">
              <div>
                <span class="font-japanese text-xl">高い</span>
                <p class="text-base">tall</p>
              </div>
              <div>
                <span class="font-japanese text-xl">安い</span>
                <p class="text-base">cheap</p>
              </div>
              <div>
                <span class="font-japanese text-xl">寒い</span>
                <p class="text-base">cold</p>
              </div>
            </div>
          </div>

          {/* な-Adjectives section */}
          <div class="rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6">
            <h2 class="text-2xl font-bold">
              <span class="text-yellow-400">な</span>-Adjectives
            </h2>
            <div class="mt-4 grid grid-cols-3 gap-4 rounded-lg bg-background/60 p-4">
              <div>
                <span class="font-japanese text-xl">静か</span>
                <p class="text-base">quiet</p>
              </div>
              <div>
                <span class="font-japanese text-xl">元気</span>
                <p class="text-base">healthy, energetic</p>
              </div>
              <div>
                <span class="font-japanese text-xl">*きれい</span>
                <p class="text-base">beautiful, clean</p>
              </div>
            </div>
            <p class="mt-4 text-base text-muted-foreground">
              Fun fact: many な-adjectives originally come from China/other
              countries.
            </p>
          </div>
        </div>

        {/* Present Tense Section */}
        <div class="space-y-6">
          <h2 class="!mt-12 text-center text-3xl font-bold">
            Present Tense Conjugation
          </h2>

          <div class="grid gap-6 md:grid-cols-2">
            {/* い-Adjectives Present */}
            <div class="rounded-xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-6">
              <h3 class="text-2xl font-bold">
                <span class="text-teal-400">い</span>-Adjectives
              </h3>

              <div class="mt-4 space-y-6">
                <div class="rounded-lg bg-background/60 p-4">
                  <div class="flex items-center">
                    <div class="mr-2 text-3xl font-bold text-red-500">+</div>
                    <div>
                      <strong>Positive:</strong> Just add です (for polite form)
                    </div>
                  </div>
                  <div class="mt-4">
                    <span class="font-japanese text-xl">
                      寒い → 寒い
                      <span class="font-medium text-teal-400">です</span>
                    </span>
                    <p class="text-base">It's cold</p>
                  </div>
                </div>

                <div class="rounded-lg bg-background/60 p-4">
                  <div class="flex items-center">
                    <div class="mr-2 text-3xl font-bold text-red-500">-</div>
                    <div>
                      <strong>Negative:</strong> Replace い with くない
                    </div>
                  </div>
                  <div class="mt-4">
                    <span class="font-japanese text-xl">
                      寒い → 寒
                      <span class="font-medium text-teal-400">くないです</span>
                    </span>
                    <p class="text-base">It's not cold</p>
                  </div>
                  <p class="mt-2 text-base text-muted-foreground">
                    Extra formal:{" "}
                    <span class="font-japanese">寒くありません</span>
                  </p>
                </div>
              </div>
            </div>

            {/* な-Adjectives Present */}
            <div class="rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6">
              <h3 class="text-2xl font-bold">
                <span class="text-yellow-400">な</span>-Adjectives
              </h3>

              <div class="mt-4 space-y-6">
                <div class="rounded-lg bg-background/60 p-4">
                  <div class="flex items-center">
                    <div class="mr-2 text-3xl font-bold text-red-500">+</div>
                    <div>
                      <strong>Positive:</strong> Just add です (for polite form)
                    </div>
                  </div>
                  <div class="mt-4">
                    <span class="font-japanese text-xl">
                      元気 → 元気
                      <span class="font-medium text-yellow-400">です</span>
                    </span>
                    <p class="text-base">I'm healthy</p>
                  </div>
                </div>

                <div class="rounded-lg bg-background/60 p-4">
                  <div class="flex items-center">
                    <div class="mr-2 text-3xl font-bold text-red-500">-</div>
                    <div>
                      <strong>Negative:</strong> Add じゃない
                    </div>
                  </div>
                  <div class="mt-4">
                    <span class="font-japanese text-xl">
                      元気 → 元気
                      <span class="font-medium text-yellow-400">
                        じゃないです
                      </span>
                    </span>
                    <p class="text-base">I'm not healthy</p>
                  </div>
                  <p class="mt-2 text-base text-muted-foreground">
                    Extra formal:{" "}
                    <span class="font-japanese">元気ではありません</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Tense Section */}
        <div class="space-y-6">
          <h2 class="!mt-12 text-center text-3xl font-bold">
            Past Tense Conjugation
          </h2>

          <div class="grid gap-6 md:grid-cols-2">
            {/* い-Adjectives Past */}
            <div class="rounded-xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-6">
              <h3 class="text-2xl font-bold">
                <span class="text-teal-400">い</span>-Adjectives
              </h3>

              <div class="mt-4 space-y-6">
                <div class="rounded-lg bg-background/60 p-4">
                  <div class="flex items-center">
                    <div class="mr-2 text-3xl font-bold text-red-500">+</div>
                    <div>
                      <strong>Positive:</strong> Replace い with かった
                    </div>
                  </div>
                  <div class="mt-4">
                    <span class="font-japanese text-xl">
                      寒い → 寒
                      <span class="font-medium text-teal-400">かったです</span>
                    </span>
                    <p class="text-base">It was cold</p>
                  </div>
                </div>

                <div class="rounded-lg bg-background/60 p-4">
                  <div class="flex items-center">
                    <div class="mr-2 text-3xl font-bold text-red-500">-</div>
                    <div>
                      <strong>Negative:</strong> Replace い with くなかった
                    </div>
                  </div>
                  <div class="mt-4">
                    <span class="font-japanese text-xl">
                      寒い → 寒
                      <span class="font-medium text-teal-400">
                        くなかったです
                      </span>
                    </span>
                    <p class="text-base">It wasn't cold</p>
                  </div>
                  <p class="mt-2 text-base text-muted-foreground">
                    Extra formal:{" "}
                    <span class="font-japanese">寒くありませんでした</span>
                  </p>
                  <p>
                    Another way to think about past tense negative conjugation
                    is to stack the present-negative with the past-positive.
                  </p>
                  <p>
                    (寒い {"->"} 寒
                    <span class="font-medium text-teal-400">くない</span>)
                  </p>
                  <p>
                    Then use the past tense positive rule on the い of{" "}
                    <span class="text-nowrap font-medium text-teal-400">
                      くない
                    </span>
                    :
                  </p>
                  <p>
                    寒くない {"->"} 寒くな
                    <span class="font-medium text-teal-400">かった</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* な-Adjectives Past */}
            <div class="rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6">
              <h3 class="text-2xl font-bold">
                <span class="text-yellow-400">な</span>-Adjectives
              </h3>

              <div class="mt-4 space-y-6">
                <div class="rounded-lg bg-background/60 p-4">
                  <div class="flex items-center">
                    <div class="mr-2 text-3xl font-bold text-red-500">+</div>
                    <div>
                      <strong>Positive:</strong> Replace です with でした
                    </div>
                  </div>
                  <div class="mt-4">
                    <span class="font-japanese text-xl">
                      元気 → 元気
                      <span class="font-medium text-yellow-400">でした</span>
                    </span>
                    <p class="text-base">I was healthy</p>
                  </div>
                </div>

                <div class="rounded-lg bg-background/60 p-4">
                  <div class="flex items-center">
                    <div class="mr-2 text-3xl font-bold text-red-500">-</div>
                    <div>
                      <strong>Negative:</strong> Replace です with
                      じゃなかったです
                    </div>
                  </div>
                  <div class="mt-4">
                    <span class="font-japanese text-xl">
                      元気 → 元気
                      <span class="font-medium text-yellow-400">
                        じゃなかったです
                      </span>
                    </span>
                    <p class="text-base">I wasn't healthy</p>
                  </div>
                  <p class="mt-2 text-base text-muted-foreground">
                    Extra formal:{" "}
                    <span class="font-japanese">元気ではありませんでした</span>
                  </p>
                  <p>
                    Another way to think about past tense negative conjugation
                    is to stack the present-negative with the past-positive.
                  </p>
                  <p>
                    (元気 {"->"} 元気
                    <span class="font-medium text-yellow-400">じゃない</span>)
                  </p>
                  <p>
                    Treat じゃない like an い-adj to use the past tense positive
                    rule on the い of{" "}
                    <span class="text-nowrap font-medium text-teal-400">
                      じゃない
                    </span>
                    :
                  </p>
                  <p>
                    元気じゃない {"->"} 元気じゃな
                    <span class="font-medium text-teal-400">かった</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Warning Boxes */}
        <div class="rounded-lg bg-gradient-to-br from-yellow-500/10 to-red-500/10 p-6">
          <div class="rounded-lg border-l-4 border-l-yellow-400 bg-background/60 p-4">
            <p class="font-bold">
              ⚠️ Not all words ending in い are い-adjectives!
            </p>
            <ul class="mt-2 list-disc space-y-1 pl-6">
              <li>
                <span class="font-japanese">きれい</span> (pretty) -
                な-adjective
              </li>
              <li>
                <span class="font-japanese">嫌い</span> (dislike) - な-adjective
              </li>
            </ul>
            <p class="mt-2">
              You'll just have to memorize which words are い-adjectives and
              which are な-adjectives. If it doesn't end in い, you can at least
              safely say it's not an い-Adjective.
            </p>
          </div>

          <div class="mt-6 rounded-lg bg-background/60 p-4">
            <h3 class="font-bold">Special Note About いい (Good)</h3>
            <p>
              Pro tip: <span class="font-japanese">いい</span> is actually the
              conversational, plain form of{" "}
              <span class="font-japanese">良い</span> (よい). Why does this
              matter? Because all conjugations use よ- as the base:
            </p>
            <ul class="mt-4 list-inside list-disc space-y-1">
              <li>
                Present: <span class="font-japanese">いい / よい</span>{" "}
                <span class="text-3xl text-red-500">-</span> Negative:{" "}
                <span class="font-japanese">よくない</span>
              </li>
              <li>
                Past: <span class="font-japanese">よかった</span>{" "}
                <span class="text-3xl text-red-500">-</span> Negative:{" "}
                <span class="font-japanese">よくなかった</span>
              </li>
            </ul>
            <div class="mt-4">
              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold text-red-500">Incorrect</p>
                <p class="w-3/4">
                  <span class="font-japanese text-xl">
                    天気はいくないです。
                  </span>
                </p>
              </div>
              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold">Correct</p>
                <p class="w-3/4">
                  <span class="font-japanese text-xl">
                    天気は
                    <Furigana furigana={<span class="text-xs">よ</span>}>
                      良
                    </Furigana>
                    くないです。
                  </span>
                  {"->"} The weather isn't good.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 grid gap-6">
          <div class="mr-[5.75rem] rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4">
            <PortraitIcon src="/img/student.png" />
            Why are な-adjectives called な-adjectives? I don't see any なs
            being used!
          </div>

          <div class="ml-24 rounded-2xl bg-gradient-to-br from-green-500/10 to-teal-500/10 p-4">
            <PortraitIcon src="/img/guru.png" class="float-end" />
            <p>
              You'll see in the next lesson where you'll learn to{" "}
              <Link
                to="/lessons/adj-modifying-nouns"
                class="text-sky-400 underline"
              >
                modify nouns
              </Link>{" "}
              with adjectives!
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4 px-10 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the correct answer in each situation*
        </p>

        <p>How would you say "This movie is interesting"?</p>
        <SelectText
          answer="この映画はおもしろいです。"
          a="この映画はおもしろです。"
          b="この映画はおもしろいだ。"
          c="この映画はおもしろいです。"
          d="この映画はおもしろでした。"
          class="text-xl"
        />

        <p>How would you say "That room isn't quiet"?</p>
        <SelectText
          answer="あの部屋は静かじゃないです。"
          a="あの部屋は静かじゃです。"
          b="あの部屋は静かくないです。"
          c="あの部屋は静かじゃないです。"
          d="あの部屋は静かではないです。"
          class="text-xl"
        />

        <p>How would you say "Today is cold"?</p>
        <SelectText
          answer="今日は寒いです。"
          a="今日は寒です。"
          b="今日は寒いだ。"
          c="今日は寒いです。"
          d="今日は寒でした。"
          class="text-xl"
        />

        <p>If something was cold yesterday, how would you say it?</p>
        <SelectText
          answer="寒かったです。"
          a="寒いでした。"
          b="寒かったです。"
          c="寒いました。"
          d="寒でした。"
          class="text-xl"
        />

        <p>How would you say "I'm not busy today"?</p>
        <SelectText
          answer="今日は忙しくないです。"
          a="今日は忙しいじゃないです。"
          b="今日は忙しくないです。"
          c="今日は忙しないです。"
          d="今日は忙しではないです。"
          class="text-xl"
        />

        <p>How would you say "That person wasn't kind"?</p>
        <SelectText
          answer="あの人は親切じゃなかったです。"
          a="あの人は親切くなかったです。"
          b="あの人は親切じゃなかったです。"
          c="あの人は親切でわなかったです。"
          d="あの人は親切ないでした。"
          class="text-xl"
        />

        <p>How would you say "This cake was delicious"?</p>
        <SelectText
          answer="このケーキはおいしかったです。"
          a="このケーキはおいしいでした。"
          b="このケーキはおいしかったです。"
          c="このケーキはおいしでした。"
          d="このケーキはおいしいました。"
          class="text-xl"
        />

        <p>How would you say "Japanese wasn't difficult"?</p>
        <SelectText
          answer="日本語は難しくなかったです。"
          a="日本語は難しいじゃなかったです。"
          b="日本語は難しくなかったです。"
          c="日本語は難しかないです。"
          d="日本語は難しいくないでした。"
          class="text-xl"
        />
      </div>
    </div>
  )
}
