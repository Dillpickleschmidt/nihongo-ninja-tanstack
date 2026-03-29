import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export const Route = createFileRoute("/lessons/_chapter-4/to-particle")({
  component: ToParticle,
})

function ToParticle() {
  return (
    <div class="mb-32">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        The <span class="font-japanese text-purple-500">と</span> Particle:
        Connecting Nouns & Doing Things Together
      </h1>
      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          In Japanese, the <span class="font-japanese text-xl">と</span>{" "}
          particle has several uses, but today we'll focus on two essential
          functions: connecting nouns (like "<strong>and</strong>") and
          indicating who you do something <strong>with</strong>.
        </p>

        <h3 class="!mt-9 text-xl font-bold">
          1. Connecting Nouns with{" "}
          <span class="font-japanese text-xl text-purple-500">と</span>
        </h3>
        <p>
          When connecting nouns, <span class="font-japanese text-xl">と</span>{" "}
          works like "<strong>and</strong>" in English. You put it after each
          item except the last one:
        </p>

        <div class="space-y-4 rounded-lg border-2 border-border p-4 text-center">
          <div>
            <p class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">ねこ</span>}>
                猫
              </Furigana>
              <span class="text-purple-500">と</span>
              <Furigana furigana={<span class="text-sm">いぬ</span>}>
                犬
              </Furigana>
              がいます。
            </p>
            <p class="text-base">I have a cat and dog.</p>
          </div>
        </div>

        <p>
          You can connect more than 2 nouns with{" "}
          <span class="font-japanese text-xl">と</span> as well. Just keep
          adding <span class="font-japanese text-xl">と</span> after each item
          to create a list:
        </p>

        <div class="space-y-4 rounded-lg border-2 border-border p-4">
          <div>
            <p class="font-japanese text-xl">
              パン<span class="text-purple-500">と</span>バター
              <span class="text-purple-500">と</span>ジャムを買いました。
            </p>
            <p class="text-base">I bought bread, butter, and jam.</p>
          </div>
          <div>
            <p class="font-japanese text-xl">
              ケーキ<span class="text-purple-500">と</span>クッキー
              <span class="text-purple-500">と</span>チョコレートは高いです。
            </p>
            <p class="text-base">Cake, cookies, and chocolate are expensive.</p>
          </div>
        </div>

        <h3 class="!mt-12 text-xl font-bold">
          2. Doing Things Together with{" "}
          <span class="font-japanese text-xl text-purple-500">と</span>
        </h3>
        <p>
          When <span class="font-japanese text-xl">と</span> means "
          <strong>with</strong>," it indicates that both parties are equally
          involved in the action:
        </p>

        <div class="space-y-4 rounded-lg border-2 border-border p-4">
          <div>
            <p class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">じょうし</span>}>
                上司
              </Furigana>
              <span class="text-purple-500">と</span>ビールを
              <Furigana furigana={<span class="text-sm">の</span>}>飲</Furigana>
              みます。
            </p>
            <p class="text-base">I drink beer with my boss.</p>
            <p class="text-sm italic text-muted-foreground">
              (Both people willingly participate... hopefully)
            </p>
          </div>
          <div>
            <p class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">かのじょ</span>}>
                彼女
              </Furigana>
              <span class="text-purple-500">と</span>
              <Furigana furigana={<span class="text-sm">けんか</span>}>
                喧嘩
              </Furigana>
              しました。
            </p>
            <p class="text-base">I had a fight with my girlfriend.</p>
            <p class="text-sm italic text-muted-foreground">
              (Both actively participated in the argument)
            </p>
          </div>
          <div>
            <p class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">ともだち</span>}>
                友達
              </Furigana>
              <span class="text-purple-500">と</span>
              <Furigana furigana={<span class="text-sm">いっしょ</span>}>
                一緒
              </Furigana>
              に
              <Furigana furigana={<span class="text-sm">しゅくだい</span>}>
                宿題
              </Furigana>
              をしました。
            </p>
            <p class="text-base">I did homework together with my friend.</p>
            <p class="text-sm italic text-muted-foreground">
              (reality: copied each other's answers while panicking about the
              deadline on the following day)
            </p>
          </div>
        </div>

        <h3 class="!mt-9 text-center text-xl font-bold">
          Using <span class="font-japanese">と一緒に</span> (Together With)
        </h3>

        <p>
          While と by itself can mean doing something with someone, adding
          一緒に (いっしょに) emphasizes that you're doing it together. Think of
          it as the difference between "with" and "together with":
        </p>

        <div class="space-y-4 rounded-lg border-2 border-border p-4">
          <div>
            <p class="font-japanese text-xl">田中さんと勉強します。</p>
            <p class="text-base">I'll study with Tanaka.</p>
          </div>
          <div>
            <p class="font-japanese text-xl">
              田中さんと
              <Furigana furigana={<span class="text-sm">いっしょ</span>}>
                一緒
              </Furigana>
              に勉強します。
            </p>
            <p class="text-base">I'll study together with Tanaka.</p>
            <p class="text-sm italic text-muted-foreground">
              (Emphasizes you're studying as a group/pair rather than just
              happening to study at the same time/place)
            </p>
          </div>
        </div>

        <p class="text-base italic text-muted-foreground">
          *Note: Both versions are correct and commonly used. Adding 一緒に just
          puts more emphasis on the "togetherness" of the action.
        </p>

        <h3 class="!mt-9 text-center text-xl font-bold">
          Comparing{" "}
          <span class="font-japanese text-xl text-purple-500">と</span> and{" "}
          <span class="font-japanese text-xl text-green-500">に</span>
        </h3>
        <div class="space-y-4 rounded-lg border-2 border-border p-4">
          <div>
            <p class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">せんぱい</span>}>
                先輩
              </Furigana>
              <span class="text-purple-500">と</span>
              <Furigana furigana={<span class="text-sm">はな</span>}>
                話
              </Furigana>
              します。
            </p>
            <p class="text-base">
              I'll talk <u>with</u> my senior (mutual conversation)
            </p>
          </div>
          <div>
            <p class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">せんぱい</span>}>
                先輩
              </Furigana>
              <span class="text-green-500">に</span>
              <Furigana furigana={<span class="text-sm">はな</span>}>
                話
              </Furigana>
              します。
            </p>
            <p class="text-base">
              I'll talk <u>to</u> my senior (one-sided, like reporting
              something)
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the most natural particle for each situation*
        </p>

        <p>
          You're ordering at a café. How would you say "Coffee and milk please"?
        </p>
        <SelectText
          answer="コーヒーと牛乳をください。"
          a="コーヒーと牛乳をください。"
          b="コーヒーに牛乳をください。"
          c="コーヒーも牛乳をください。"
          class="text-xl"
        />

        <p>
          Your friend asks who you're going to the concert with. How would you
          say "I'm going with Tanaka"?
        </p>
        <SelectText
          answer="田中さんと行きます。"
          a="田中さんに行きます。"
          b="田中さんと行きます。"
          c="田中さんで行きます。"
          class="text-xl"
        />

        <p>
          You're planning a study session. How would you say "I'll study with
          Yuki and Mari"?
        </p>
        <SelectText
          answer="ゆきさんとまりさんと勉強します。"
          a="ゆきさんとまりさんに勉強します。"
          b="ゆきさんとまりさんと勉強します。"
          c="ゆきさんにまりさんに勉強します。"
          class="text-xl"
        />

        <p>
          You're telling a friend about your weekend plans. How would you say
          "I'll watch a movie with my sister"?
        </p>
        <SelectText
          answer="姉と映画を見ます。"
          a="姉に映画を見ます。"
          b="姉と映画を見ます。"
          c="姉で映画を見ます。"
          class="text-xl"
        />

        <p>
          You want to say that you talked with both Tanaka and Yamada. Which is
          correct?
        </p>
        <SelectText
          answer="田中さんと山田さんと話しました。"
          a="田中さんと山田さんを話しました。"
          b="田中さんと山田さんと話しました。"
          c="田中さんと山田さんに話しました。"
          class="text-xl"
        />

        <p>
          How would you say "I watched a movie with my friend and my younger
          brother"?
        </p>
        <SelectText
          answer="友達と弟と映画を見ました。"
          a="友達と弟は映画を見ました。"
          b="友達と弟を映画を見ました。"
          c="友達と弟と映画を見ました。"
          class="text-xl"
        />
      </div>
    </div>
  )
}
