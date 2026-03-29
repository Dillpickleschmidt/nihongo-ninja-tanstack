import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export const Route = createFileRoute("/lessons/_chapter-6/dame")({ component: Dame })

function Dame() {
  return (
    <div class="mb-32">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        <span class="font-japanese text-red-400">だめ</span> - No Good
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          てはいけません is well and good and all, but its use is fairly
          limited, and sometimes you just want something more versatile. For
          that, we have{" "}
          <span class="font-japanese font-medium text-red-400">だめ</span>!
        </p>

        <hr class="my-6 border-t" />

        <h3 class="!mt-9 text-xl font-bold">What Does だめ Mean?</h3>
        <p>
          The word だめ is typically written in hiragana as だめ, or in katakana
          as <span class="text-nowrap">ダメ</span>, or occasionally in kanji as
          駄目, though the hiragana/katakana forms are both far more common. Its
          meanings include:
        </p>
        <ul class="list-inside list-disc">
          <li>No good</li>
          <li>Not allowed</li>
          <li>Impossible</li>
          <li>Useless</li>
          <li>Hopeless</li>
        </ul>
        <p>Its meaning depends on the context in which it is used.</p>

        <hr class="my-6 border-t" />

        <h2 class="!mt-9 text-center text-2xl font-bold">Basic Uses of だめ</h2>
        <ul class="space-y-4">
          <li class="ml-6 list-decimal">
            <div class="space-y-2">
              <h4 class="inline-flex font-bold">
                To Say Something Is Not Allowed
              </h4>
              <p class="font-semibold">Structure:</p>
              <ul class="list-inside list-disc">
                <li class="font-japanese text-xl">
                  [Action] + は + だめです。
                </li>
              </ul>

              <p class="font-semibold">Examples:</p>
              <ul class="list-inside list-disc space-y-2">
                <li class="flex items-center justify-between">
                  <p class="font-japanese text-xl">
                    ここでタバコを吸ってはだめです。
                  </p>
                  <p class="text-muted-foreground">
                    Smoking is not allowed here.
                  </p>
                </li>
                <li class="flex items-center justify-between">
                  <p class="font-japanese text-xl">
                    今、テレビを見てはだめです。
                  </p>
                  <p class="text-muted-foreground">
                    You must not watch TV now.
                  </p>
                </li>
              </ul>
            </div>
          </li>

          <li class="ml-6 list-decimal">
            <div class="space-y-2">
              <h4 class="inline-flex font-bold">
                To Say Something Is No Good or Useless
              </h4>
              <p class="font-semibold">Structure:</p>
              <ul class="list-inside list-disc">
                <li class="font-japanese text-xl">[Thing] + は + だめです。</li>
              </ul>

              <p class="font-semibold">Examples:</p>
              <ul class="list-inside list-disc space-y-2">
                <li class="flex items-center justify-between">
                  <p class="font-japanese text-xl">このペンはだめです。</p>
                  <p class="text-muted-foreground">This pen doesn’t work.</p>
                </li>
                <li class="flex items-center justify-between">
                  <p class="font-japanese text-xl">この建物はもうだめです。</p>
                  <p class="text-muted-foreground">
                    This building is no good anymore.
                  </p>
                </li>
              </ul>
            </div>
          </li>

          <li class="ml-6 list-decimal">
            <div class="space-y-2">
              <h4 class="inline-flex font-bold">
                To Say Someone Shouldn’t Do Something
              </h4>
              <p class="font-semibold">Examples:</p>
              <ul class="list-inside list-disc space-y-2">
                <li class="flex items-center justify-between">
                  <p class="font-japanese text-xl">だめ！それは食べないで！</p>
                  <p class="text-muted-foreground">No! Don’t eat that!</p>
                </li>
                <li class="flex items-center justify-between">
                  <p class="font-japanese text-xl">だめですよ！</p>
                  <p class="text-muted-foreground">No, you can't!</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <h2 class="!mt-9 text-center text-2xl font-bold">Fun example</h2>
        <div class="space-y-2">
          <p class="font-bold">
            POV: You're at a fancy restaurant with your 6-year-old for some
            reason:
          </p>
          <div class="ml-4 space-y-2">
            <p class="font-japanese text-xl">A: このスープを指で食べます！</p>
            <p class="ml-8 text-base">
              I'm going to eat this soup with my fingers!
            </p>
            <p class="font-japanese text-xl">
              B: いやいや、だめです。
              <Furigana furigana={<span class="text-xs">ぜったい</span>}>
                絶対
              </Furigana>
              だめです！
            </p>
            <p class="ml-8 text-base">
              No no, don't do that. Absolutely not allowed!
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the correct answers*
        </p>
      </div>
    </div>
  )
}
