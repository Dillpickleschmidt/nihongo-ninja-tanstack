import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import Romaji from "@/components/text/Romaji"

export const Route = createFileRoute("/lessons/_chapter-6/te-mo-ii-desu")({ component: TeMoIiDesu })

function TeMoIiDesu() {
  return (
    <div class="mb-32">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Asking Permission with{" "}
        <span class="font-japanese text-teal-400">てもいいです</span>
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          <span class="font-japanese text-xl">てもいいです</span> has two main
          uses: as a statement meaning "it's okay to..." or "you can...", and as
          a question meaning "may I...?" or "is it okay if...?". It's one of the
          most common ways to both give and ask for permission in Japanese.
        </p>

        <div class="!mt-9 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6">
          <h3 class="text-xl font-bold">Basic Pattern</h3>
          <p class="text-center font-japanese text-xl">
            Verb (て-form) + もいいです
          </p>
        </div>

        <div class="!mt-12 w-full space-y-4 rounded-lg bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-yellow-500/10 px-3 py-5 text-center">
          <div class="flex justify-around gap-4 font-japanese text-xl lg:text-2xl">
            <div class="flex flex-col items-start space-y-4">
              <div class="mb-2 w-full text-center font-bold">
                Statement Form
              </div>
              <div class="mt-4 w-full rounded-lg bg-background/60 p-4">
                これを食べて
                <span class="font-medium text-teal-400">もいいです</span>
                <p class="mt-1 font-inter text-base">It's okay to eat this.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-6 text-xl md:grid-cols-2">
          {/* Question Form */}
          <div class="rounded-xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-6">
            <div class="mb-2 w-full text-center text-2xl font-bold">
              Question Form
            </div>
            <div class="flex flex-col items-start space-y-4">
              <div class="mt-4 w-full rounded-lg bg-background/60 p-4">
                食べて
                <span class="font-medium text-yellow-400">もいいですか</span>
                <p class="mt-1 font-inter text-base">May I eat this?</p>
              </div>
              <p class="mt-4 text-base text-muted-foreground">
                You just add か.
              </p>
            </div>
          </div>

          {/* More Polite Question Form */}
          <div class="rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6">
            <div class="mb-2 w-full text-center text-2xl font-bold">
              More Polite Question Form
            </div>
            <div class="flex flex-col items-start space-y-4">
              <div class="mt-4 w-full rounded-lg bg-background/60 p-4">
                食べて
                <span class="font-medium text-purple-400">
                  もいいでしょうか
                </span>
                <p class="mt-1 font-inter text-base">
                  Would it be alright if I eat this?
                </p>
              </div>
              <p class="mt-4 text-base text-muted-foreground">
                Replace です with でしょうか.
              </p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold">Common Examples</h3>
        <div class="space-y-4 rounded-lg border-2 border-border p-4">
          <div>
            <p class="font-japanese text-xl">食べてもいいですか。</p>
            <p class="text-base">May I eat this?</p>
          </div>
          <div>
            <p class="font-japanese text-xl">
              ここで写真を撮ってもいいですか。
            </p>
            <p class="text-base">May I take photos here?</p>
          </div>
          <div>
            <p class="font-japanese text-xl">トイレに行ってもいいですか。</p>
            <p class="text-base">May I go to the bathroom?</p>
          </div>
        </div>

        <h3 class="text-xl font-bold">How to Respond</h3>
        <p>When someone asks for permission:</p>

        <div class="space-y-4 rounded-lg border-2 border-border p-4">
          <div>
            <p class="font-bold">Giving Permission:</p>
            <div class="ml-4 space-y-2">
              <div>
                <p class="font-japanese text-xl">はい、いいですよ。</p>
                <p class="text-base">Yes, that's fine.</p>
              </div>
              <div>
                <p class="font-japanese text-xl">どうぞ。</p>
                <p class="text-base">Please go ahead.</p>
              </div>
            </div>
          </div>

          <div>
            <p class="font-bold">Indirectly Declining:</p>
            <div class="ml-4 space-y-2">
              <div>
                <p class="font-japanese text-xl">すみません、ちょっと...</p>
                <p class="text-base">Sorry, um...</p>
              </div>
              <div>
                <p class="font-japanese text-xl">ちょっと難しいです。</p>
                <p class="text-base">That's a bit difficult...</p>
              </div>
            </div>
          </div>
        </div>

        <p>
          For directly saying "<strong>you may not</strong>," see the next
          lesson.
        </p>

        <h3 class="text-xl font-bold">Important Grammar Notes</h3>

        <div class="rounded-lg bg-card/50 p-4">
          <p class="font-medium">Common Mistakes to Avoid:</p>
          <p class="mt-2">
            The て-form must be part of a verb - you can't use it by itself or
            attach it directly to nouns or other particles.
          </p>

          <div class="mt-4 space-y-4">
            <div>
              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold text-red-500">Incorrect</p>
                <p class="w-3/4 font-japanese text-xl">
                  トイレにてもいいです。
                </p>
              </div>
              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold">Correct</p>
                <p class="w-3/4 font-japanese text-xl">
                  トイレに行ってもいいです。
                </p>
              </div>
              <p class="text-sm text-muted-foreground">
                *You need the actual verb 行く in て-form
              </p>
            </div>

            <div>
              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold text-red-500">Incorrect</p>
                <p class="w-3/4 font-japanese text-xl">電車にもいいです。</p>
              </div>
              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold">Correct</p>
                <p class="w-3/4 font-japanese text-xl">
                  電車に乗ってもいいです。
                </p>
              </div>
              <p class="text-sm text-muted-foreground">
                *You need a verb like 乗る in て-form
              </p>
            </div>

            <div>
              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold text-red-500">Incorrect</p>
                <p class="w-3/4 font-japanese text-xl">ここてもいいです。</p>
              </div>
              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold">Correct</p>
                <p class="w-3/4 font-japanese text-xl">
                  ここに座ってもいいです。
                </p>
              </div>
              <p class="text-sm text-muted-foreground">
                *You need a verb like 座る in て-form
              </p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold">
          Extra Polite Version: てもいいでしょうか
        </h3>
        <p>
          When you need to be extra polite (like asking your professor or boss),
          use <span class="font-japanese text-xl">てもいいでしょうか</span>{" "}
          instead:
        </p>

        <div class="space-y-4 rounded-lg border-2 border-border p-4">
          <div>
            <p class="font-japanese text-xl">
              先生、質問してもいいでしょうか。
            </p>
            <p class="text-base">Professor, may I ask a question?</p>
          </div>
          <div>
            <p class="font-japanese text-xl">明日休んでもいいでしょうか。</p>
            <p class="text-base">Would it be alright if I take tomorrow off?</p>
          </div>
        </div>

        <h3 class="text-xl font-bold">Real Life Examples</h3>
        <div class="space-y-6">
          <div>
            <p class="font-bold">At a Temple:</p>
            <div class="ml-4 space-y-2">
              <p class="font-japanese text-xl">
                A: すみません、中に入ってもいいでしょうか。
              </p>
              <p class="ml-8 text-base">
                Excuse me, would it be alright to enter?
              </p>
              <p class="font-japanese text-xl">B: はい、どうぞ。</p>
              <p class="ml-8 text-base">Yes, please do.</p>
            </div>
          </div>

          <div>
            <p class="font-bold">During Class:</p>
            <div class="ml-4 space-y-2">
              <p class="font-japanese text-xl">A: 窓を開けてもいいですか。</p>
              <p class="ml-8 text-base">May I open the window?</p>
              <p class="font-japanese text-xl">B: はい、いいですよ。</p>
              <p class="ml-8 text-base">Yes, that's fine.</p>
            </div>
          </div>

          <div>
            <p class="font-bold">At a Fancy Restaurant:</p>
            <div class="ml-4 space-y-2">
              <p class="font-japanese text-xl">
                A: このステーキを手で食べてもいいですか。
              </p>
              <p class="ml-8 text-base">May I eat this steak with my hands?</p>
              <p class="font-japanese text-xl">B: えっと、それは...</p>
              <p class="ml-8 text-base">
                Uh, that would be...{" "}
                <span class="text-muted-foreground">(weird)</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the correct way to ask for permission in each situation*
        </p>

        <p>
          You want to take a photo in a museum. How would you ask if it's
          allowed?
        </p>
        <SelectText
          answer="写真を撮ってもいいですか。"
          a="写真てもいいですか。"
          b="写真を撮ってもいいですか。"
          c="写真もいいですか。"
          d="撮るてもいいですか。"
          class="text-xl"
        />

        <p>
          You're meeting with your professor and want to ask a question very
          politely.
        </p>
        <SelectText
          answer="質問してもいいでしょうか。"
          a="質問していいです。"
          b="質問てもいいでしょうか。"
          c="質問してもいいでしょうか。"
          d="質問もいいでしょうか。"
          class="text-xl"
        />

        <p>
          Your friend asks to borrow your pen. How would you give permission?
        </p>
        <SelectText
          answer={["はい、いいですよ。", "どうぞ。"]}
          a="はい、いいですよ。"
          b="どうぞ。"
          c="ペンてもいいです。"
          d="はい、ペンもいいです。"
          class="text-xl"
        />
      </div>
    </div>
  )
}
