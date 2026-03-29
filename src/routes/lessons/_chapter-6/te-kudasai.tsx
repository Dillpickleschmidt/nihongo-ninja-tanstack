import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export const Route = createFileRoute("/lessons/_chapter-6/te-kudasai")({ component: TeKudasai })

function TeKudasai() {
  return (
    <div class="mb-32">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Making Requests with{" "}
        <span class="font-japanese text-teal-500">てください</span>
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          When you need to ask someone to do something in Japanese - whether
          it's "please sit down", "pass the salt" or "please be quiet" -{" "}
          <span class="font-japanese">てください</span> is your go-to pattern.
          It's the polite equivalent of saying "please do X" in English.
        </p>

        <hr class="my-6 border-t" />

        <h3 class="!mt-9 text-xl font-bold">The Formula</h3>
        <ol class="list-decimal space-y-2 pl-5">
          <li>Take any verb</li>
          <li>Convert it to て form</li>
          <li>Add ください</li>
          <li>That's it!</li>
        </ol>

        <hr class="my-6 border-t" />

        <h3 class="!mt-9 text-xl font-bold">Common Classroom Phrases</h3>
        <p>You'll hear these a lot in Japanese classes:</p>
        <div class="ml-4 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p class="font-japanese text-xl">見てください</p>
            <p class="text-muted-foreground">Please look</p>
          </div>
          <div>
            <p class="font-japanese text-xl">聞いてください</p>
            <p class="text-muted-foreground">Please listen</p>
          </div>
          <div>
            <p class="font-japanese text-xl">読んでください</p>
            <p class="text-muted-foreground">Please read</p>
          </div>
          <div>
            <p class="font-japanese text-xl">書いてください</p>
            <p class="text-muted-foreground">Please write</p>
          </div>
          <div>
            <p class="font-japanese text-xl">教えてください</p>
            <p class="text-muted-foreground">Please teach me/tell me</p>
          </div>
        </div>

        <hr class="my-6 border-t" />

        <h3 class="!mt-9 text-center text-xl font-bold">Example Sentences</h3>
        <ul class="ml-6 list-disc space-y-4">
          <li class="flex justify-between">
            <p class="font-japanese text-xl">ちょっと待ってください。</p>
            <p class="text-muted-foreground">Please wait a moment.</p>
          </li>
          <li class="flex justify-between">
            <p class="font-japanese text-xl">教科書を持ってきてください。</p>
            <p class="text-muted-foreground">Please bring the textbook.</p>
          </li>
          <li class="flex justify-between">
            <p class="font-japanese text-xl">お母さんに電話をしてください。</p>
            <p class="text-muted-foreground">Please call your mother.</p>
          </li>
        </ul>

        <hr class="my-6 border-t" />

        <h3 class="!mt-9 text-xl font-bold">The Art of (Not) Being Polite</h3>
        <p>
          Adding ください makes a request polite... usually. But some verbs are
          inherently confrontational:
        </p>

        <div class="mt-4 space-y-6">
          <div class="rounded-lg border-2 border-border p-4">
            <h4 class="text-lg font-semibold text-amber-600">
              Bonus: Casual Requests
            </h4>
            <p class="mt-2">
              With close friends or family, a bare て form can work as a casual
              request:
            </p>
            <div class="mt-3">
              <p class="font-japanese text-xl">窓を開けて。</p>
              <p class="text-sm text-muted-foreground">Open the window.</p>
              <p class="mt-2 text-sm italic text-red-500">
                Only use this with people you're close to!
              </p>
            </div>
          </div>

          <div class="rounded-lg border border-border p-4">
            <h4 class="text-lg font-semibold">The Politeness Progression</h4>
            <div class="mt-4 space-y-4">
              <div class="space-y-1">
                <p class="font-japanese text-xl">
                  <Furigana furigana={<span class="text-xs">だま</span>}>
                    黙
                  </Furigana>
                  って
                </p>
                <p class="text-sm text-muted-foreground">
                  Shut up (Plain command, quite rude)
                </p>
                <p class="text-xs italic text-muted-foreground">
                  When addressing that one friend who won't stop talking during
                  the movie
                </p>
              </div>

              <div class="space-y-1">
                <p class="font-japanese text-xl">黙ってください</p>
                <p class="text-sm text-muted-foreground">
                  Please shut up (Polite form, but... still pretty rude)
                </p>
                <p class="text-xs italic text-muted-foreground">
                  When addressing that same friend, but now your teacher is
                  watching
                </p>
              </div>

              <p>
                You're not expected to know any of the below yet{" "}
                <span class="text-base text-muted-foreground">
                  (it's turning adjectives into verbs)
                </span>
                , but here's a preview of what's possible:
              </p>

              <div class="space-y-1">
                <p class="font-japanese text-xl">静かにしてください</p>
                <p class="text-sm text-muted-foreground">
                  Please be quiet (Actually polite)
                </p>
                <p class="text-xs italic text-muted-foreground">
                  You're a tired mom that is attempting to control her
                  five-year-old in a library.
                </p>
              </div>

              <div class="space-y-1">
                <p class="font-japanese text-xl">ちょっと静かにしてください</p>
                <p class="text-sm text-muted-foreground">
                  Please be a bit quiet (Even more polite)
                </p>
                <p class="text-xs italic text-muted-foreground">
                  When addressing your upstairs neighbor at 2am
                </p>
              </div>

              <div class="space-y-1">
                <p class="font-japanese text-xl">
                  申し訳ありませんが、静かにしていただけませんでしょうか。
                </p>
                <p class="text-sm text-muted-foreground">
                  I'm terribly sorry, but would you mind being quiet? (Ultra
                  polite, possibly even passive-aggressive) (uses advanced
                  grammar you'll learn later)
                </p>
                <p class="text-xs italic text-muted-foreground">
                  When it's 3am and your upstairs neighbor is still doing
                  jumping jacks
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-6 border-t" />

        <div class="rounded-lg bg-card/50 p-4">
          <h4 class="font-medium">Important:</h4>
          <p class="mt-2">
            For negative requests ("please don't..."), you'll need a different
            grammar pattern that we'll cover later. There's no such thing as:
          </p>
          <p class="font-japanese">❌ ～なくてください</p>
        </div>

        <hr class="my-6 border-t" />

        <div class="rounded-lg bg-card/50 p-4">
          <p class="font-medium">Note:</p>
          <p class="mt-2">
            You <strong>cannot</strong> add から after てください:
          </p>
          <div class="mt-2 space-y-1">
            <p class="font-japanese">
              ❌ 食べてくださいから{" "}
              <span class="text-base text-muted-foreground">
                ("Please eat, therefore..." makes no sense)
              </span>
            </p>
          </div>
          <p class="mt-6">
            You <strong>cannot</strong> add けど after てください:
          </p>
          <div class="mt-2 space-y-1">
            <p class="font-japanese">
              ❌ 座ってくださいけど{" "}
              <span class="text-base text-muted-foreground">
                (you'll want to rephrase to sound more natural)
              </span>
            </p>
            <p>Ex:</p>
            <p class="font-japanese">
              ❌ 座ってくださいけど、静かにしてください。
            </p>
            <p class="font-japanese">
              <span class="pr-1 text-2xl font-black text-green-500">✓</span>{" "}
              座って、静かにしてください。
            </p>
            <p>Or:</p>
            <p class="font-japanese">
              <span class="pr-1 text-2xl font-black text-green-500">✓</span>{" "}
              静かに座ってください
            </p>
          </div>
        </div>

        <hr class="my-6 border-t" />
      </div>

      <div class="space-y-4 px-10 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p>
          Your friend is taking forever to get ready. How would you politely ask
          them to hurry up?
        </p>
        <SelectText
          answer="急いでください。"
          a="急いでください。"
          b="急いでくださいから。"
          c="急いで。"
          d="急ぐください。"
          class="text-xl"
        />

        <p>You want to politely ask your teacher to speak more slowly.</p>
        <SelectText
          answer="ゆっくり話してください。"
          a="ゆっくり話して。"
          b="ゆっくり話すください。"
          c="ゆっくり話してください。"
          d="ゆっくり話してくださいけど。"
          class="text-xl"
        />
      </div>
    </div>
  )
}
