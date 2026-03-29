import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export const Route = createFileRoute("/lessons/_chapter-6/te-form-connection")({ component: TeFormConnection })

function TeFormConnection() {
  return (
    <div class="mb-32">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Connecting Activities with{" "}
        <span class="font-japanese text-green-500">て</span> Form
      </h1>

      <div class="space-y-6 px-4 sm:px-12 md:px-20">
        <p class="text-lg">
          Want to tell a story in Japanese? The て form is your best friend for
          connecting multiple actions, and is your first step towards creating
          much more sophisticated Japanese sentences. You're graduating
          preschool and entering kindergarden. Let's begin.
        </p>

        <hr class="my-6 border-t" />

        <h3 class="text-xl font-bold">Sequence of Events</h3>
        <p>Use て to list actions in sequence ("I did X and then Y"):</p>

        <div class="mt-4 space-y-3">
          <div>
            <p class="font-japanese text-xl">
              図書館に
              <span class="underline decoration-green-500 underline-offset-4">
                行って
              </span>
              、 本を借ります。
            </p>
            <p class="text-muted-foreground">
              I'll go to the library and borrow books.
            </p>
          </div>

          <div>
            <p class="font-japanese text-xl">
              六時に
              <span class="underline decoration-green-500 underline-offset-4">
                起きて
              </span>
              、 勉強しました。
            </p>
            <p class="text-muted-foreground">I woke up at 6 and studied.</p>
          </div>
        </div>

        <hr class="my-6 border-t" />

        <h3 class="text-xl font-bold">Method/Means</h3>
        <p>Use て to show how an action is done:</p>

        <div class="mt-4">
          <p class="font-japanese text-xl">
            バスに
            <span class="underline decoration-green-500 underline-offset-4">
              乗って
            </span>
            、 会社に行きます。
          </p>
          <p class="text-muted-foreground">I take the bus and go to work.</p>
        </div>
        <div class="mt-4">
          <p class="pb-2 font-bold">You could also say:</p>
          <p class="font-japanese text-lg">バスで会社に行きます。</p>
          <p class="text-muted-foreground">I go to work by bus.</p>
        </div>
        <p class="text-muted-foreground">
          *The first one casually mentions the method, the second emphasizes it.
        </p>

        <hr class="my-6 border-t" />

        <div class="rounded-lg border-2 border-l-4 border-l-yellow-400 p-4">
          <p class="font-bold">⚠️ Important Note:</p>
          <p class="mt-2">
            The tense at the end of the sentence applies to all actions:
          </p>
          <div class="mt-3 space-y-4">
            <div>
              <p class="font-japanese text-xl">
                本を
                <span class="underline decoration-green-500 underline-offset-4">
                  読んで
                </span>
                、
                <span class="underline decoration-green-500 underline-offset-4">
                  書いて
                </span>
                、テストを
                <span class="font-bold">
                  しま
                  <span class="underline decoration-orange-400 underline-offset-4">
                    した
                  </span>
                </span>
                。
              </p>
              <p class="text-sm text-muted-foreground">
                I read, wrote, and took the test (all in the past).
              </p>
            </div>
            <div>
              <p class="font-japanese text-xl">
                学校に
                <span class="underline decoration-green-500 underline-offset-4">
                  行って
                </span>
                、 友だちと
                <span class="underline decoration-green-500 underline-offset-4">
                  会って
                </span>
                、昼ご飯を
                <span class="font-bold">
                  食べま
                  <span class="underline decoration-orange-400 underline-offset-4">
                    す
                  </span>
                </span>
                。
              </p>
              <p class="text-sm text-muted-foreground">
                I'll go to school, meet friends, and eat lunch (all in the
                present/future).
              </p>
            </div>
          </div>
        </div>

        <hr class="my-6 border-t" />

        <div class="rounded-lg border-2 border-red-500/50 p-4">
          <h4 class="text-lg font-semibold">Common Mistake</h4>
          <p class="mt-2">
            Don't use と to connect verbs - it's for nouns only:
          </p>
          <div class="mt-3">
            <p class="font-japanese text-xl">
              <span class="text-base">❌</span> 食べると、寝ます{" "}
              <span class="text-base text-muted-foreground">
                (this means something else entirely which you'll learn in
                Chapter 18)
              </span>
            </p>
            <p class="font-japanese text-xl">
              <span class="pr-1 text-xl font-black text-green-500">✓</span>{" "}
              食べて、寝ます
            </p>
          </div>
        </div>

        <hr class="my-6 border-t" />
      </div>

      <div class="space-y-4 px-10 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>

        <p>How would you say "I'll go to the cafeteria and eat lunch"?</p>
        <SelectText
          answer="食堂に行って、昼ご飯を食べます。"
          a="食堂に行くと、昼ご飯を食べます。"
          b="食堂に行って、昼ご飯を食べます。"
          c="食堂で行って、昼ご飯を食べます。"
          class="text-xl"
        />

        <p>
          You want to say "I take a train to school." How would you express
          this?
        </p>
        <SelectText
          answer="電車に乗って、学校に行きます。"
          a="電車と乗って、学校に行きます。"
          b="電車に乗って、学校に行きます。"
          c="電車で乗る、学校に行きます。"
          class="text-xl"
        />
      </div>
    </div>
  )
}
