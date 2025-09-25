import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import CustomTextArea from "@/components/ui/custom/CustomTextArea"
import Romaji from "@/components/text/Romaji"
import WanakanaWrapper from "@/features/wanakana/WanaKana"

export const Route = createFileRoute("/lessons/_chapter-3/polite-invitations")({
  loader: async () => ({
    contentBox: { nextButtonLink: "/lessons/_chapter-3/next-lesson" },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* --- Consistent Header --- */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Polite Invitations with{" "}
          <span class="font-japanese text-teal-400">ませんか</span>
        </h1>
        <div class="mx-auto mb-6 h-1 w-20 rounded bg-emerald-400" />
      </header>

      <main class="mx-auto max-w-3xl space-y-16 px-6 leading-relaxed">
        {/* Intro & Structure */}
        <section class="space-y-6">
          <p>
            In Japanese, one common way to make polite invitations is by using
            the <span class="font-japanese text-xl">ませんか</span> form. This
            form is polite and sounds softer than directly asking someone to do
            something.
          </p>

          <h2 class="text-2xl font-bold">Structure</h2>
          <h3 class="!mt-3 text-center text-2xl font-medium">
            Verb (negative <span class="font-japanese">ます</span> form) +{" "}
            <span class="font-japanese">か</span>
          </h3>

          <h3 class="text-xl font-bold">Example</h3>
          <p class="!mt-3">
            <span class="font-japanese text-xl">
              映画を見<span class="text-teal-400">ませんか</span>。
            </span>{" "}
            {"->"} Would you like to watch a movie?
          </p>

          <p>
            This form essentially means "Won't you...?" or "Why don't we...?" in
            English. It's a polite way to suggest doing something together.
          </p>

          <h3 class="text-xl font-bold">More examples</h3>
          <ul class="!mt-3 list-inside list-disc space-y-2">
            <li>
              <span class="font-japanese text-xl">
                <Romaji romaji="together">
                  <Furigana furigana={<span class="text-sm">いっしょ</span>}>
                    一緒
                  </Furigana>
                  に
                </Romaji>
                食べ<span class="text-teal-400">ませんか</span>。
              </span>{" "}
              {"->"} Would you like to eat together?
            </li>
            <li>
              <span class="font-japanese text-xl">
                デートに行き<span class="text-teal-400">ませんか</span>。
              </span>{" "}
              {"->"} Would you like to go on a date?
            </li>
          </ul>
        </section>

        {/* Accepting an Invitation */}
        <section class="space-y-6">
          <h2 class="text-2xl font-bold">Accepting an Invitation</h2>
          <p>
            To accept an invitation, you can use{" "}
            <span class="font-japanese text-xl">いいです</span> with particles
            like <span class="font-japanese text-xl">ね</span> or{" "}
            <span class="font-japanese text-xl">よ</span> for emphasis:
          </p>

          <div class="mt-2 ml-4">
            <p class="font-japanese text-xl">
              A: 映画を見<span class="text-teal-400">ませんか</span>。
            </p>
            <p class="font-japanese text-xl">
              B: はい、いいです<span class="text-yellow-400">ね</span>。 /
              いいです
              <span class="text-green-600">よ</span>。
            </p>
          </div>

          <p>
            Literally, the adjective{" "}
            <span class="font-japanese text-xl font-medium">いい</span> means{" "}
            <strong>good</strong> or <strong>fine</strong>. It's an extremely
            versatile word in Japanese and can be used in many contexts.
          </p>
          <p>
            When used to accept an invitation, it's a polite way to say "That
            sounds good" or "I'm fine with that."
          </p>

          <p class="text-center italic">
            Here's a more thorough explanation of using{" "}
            <span class="font-japanese not-italic">いいですよ</span>.
          </p>

          <YouTubeVideo
            videoId="5s04gJYRPM4"
            title="How to Use いいですよ"
            credit="Kaname Naito"
          />
          <YouTubeVideo
            videoId="T1FfatXVH_U"
            title="How to Use いい"
            credit="Kaname Naito"
          />

          <p class="text-muted-foreground text-base italic">
            *You may occasionally see this word in some form of{" "}
            <span class="font-japanese text-lg not-italic">
              <Furigana furigana={<span class="text-sm">よ</span>}>良</Furigana>
              い
            </span>
            . <span class="font-japanese text-lg not-italic">いい</span> is the
            colloquial form of{" "}
            <span class="font-japanese text-lg not-italic">良い</span>, and
            you'll almost never see{" "}
            <span class="font-japanese text-lg not-italic">良い</span> used by
            itself. However, when conjugated (e.g.{" "}
            <span class="font-japanese text-lg not-italic">よかった</span>), it{" "}
            <strong>always</strong> uses the{" "}
            <span class="font-japanese text-lg not-italic">よい</span> form as
            its stem. More in Chapter 5.
          </p>
        </section>

        {/* Declining an Invitation */}
        <DecliningSection />

        {/* Practice */}
        <PracticeSection />

        <section>
          <p class="text-muted-foreground italic">
            Remember, when using{" "}
            <span class="font-japanese not-italic">ませんか</span> for
            invitations, it's polite and leaves room for the other person to
            decline if they wish. It's a great way to suggest activities without
            being too pushy!
          </p>
        </section>
      </main>
    </div>
  )
}

function DecliningSection() {
  return (
    <section class="space-y-8">
      <h2 class="text-2xl font-bold">Declining an Invitation</h2>
      <p>
        In Japanese culture, directly refusing an invitation can be seen as
        impolite. Instead, people often use indirect methods to decline. Two of
        the most common words for this are{" "}
        <span class="font-japanese text-xl">ちょっと</span> and{" "}
        <span class="font-japanese text-xl">大丈夫</span>.
      </p>

      {/* --- ちょっと --- */}
      <h3 class="text-3xl font-medium">
        <span class="font-japanese">ちょっと</span>
      </h3>
      <ul class="list-inside list-disc space-y-2">
        <li>Literal meaning: a little / slightly</li>
        <li>Usage 1: Describing a small amount or short duration</li>
        <li>Usage 2: Indirect refusal</li>
        <li>Usage 3: Getting someone’s attention politely</li>
        <li>Usage 4: “Wait a minute”</li>
      </ul>

      {/* Story 1 */}
      <div>
        <h4 class="text-xl font-bold">
          <em>Story 1:</em> Describing an amount
        </h4>
        <h4 class="text-lg font-medium">Characters: You, shopkeeper</h4>
        <p class="mt-3">
          You're at a local market eyeing some strawberries. The shopkeeper
          asks. You reply:{" "}
          <span class="font-japanese">
            はい、<span class="text-orange-500">ちょっと</span>だけください。
          </span>{" "}
          (Yes, just a little please.)
        </p>
      </div>

      {/* Story 2 */}
      <div>
        <h4 class="text-xl font-bold">
          <em>Story 2:</em> Declining an invitation
        </h4>
        <h4 class="text-lg font-medium">Characters: You & Yuki</h4>
        <p class="mt-3">
          After class Yuki asks:{" "}
          <span class="font-japanese">
            映画を見<span class="text-teal-400">ませんか</span>
          </span>{" "}
          (Want to watch a movie?) You respond:{" "}
          <span class="font-japanese">
            あ、今日は<span class="text-orange-500">ちょっと</span>...
          </span>{" "}
          (Ah, today’s a bit…). Yuki understands your polite refusal.
        </p>
      </div>

      {/* Story 3 */}
      <div>
        <h4 class="text-xl font-bold">
          <em>Story 3:</em> Getting attention
        </h4>
        <h4 class="text-lg font-medium">Characters: You & stranger</h4>
        <p class="mt-3">
          You’re lost and ask politely:{" "}
          <span class="font-japanese">
            すみません、<span class="text-orange-500">ちょっと</span>
            いいですか。
          </span>{" "}
          (Excuse me, do you have a moment?)
        </p>
      </div>

      {/* Story 4 */}
      <div>
        <h4 class="text-xl font-bold">
          <em>Story 4:</em> Wait a minute
        </h4>
        <h4 class="text-lg font-medium">Characters: You & your boss</h4>
        <div class="font-japanese mt-3 ml-4 text-xl">
          <p>
            <span class="font-bold">Boss:</span> 仕事、命賭けでやってくれ。
          </p>
          <p>(I need you to do this job like your life depends on it.)</p>
          <p>
            <span class="font-bold">You:</span> はい、分かりました。
            <span class="text-orange-500">ちょっと</span>まって。
          </p>
          <p>(Yes, I understand. Wait a moment.)</p>
          <p>
            <span class="font-bold">You:</span> じゃあ、遺書を書いてきます。
          </p>
          <p>(I’ll go write my will then.)</p>
        </div>
      </div>

      {/* --- 大丈夫 --- */}
      <h3 class="text-3xl font-medium">
        <span class="font-japanese">
          <Furigana furigana={<span class="text-sm">だいじょうぶ</span>}>
            大丈夫
          </Furigana>
        </span>
      </h3>
      <ul class="list-inside list-disc space-y-2">
        <li>Literal meaning: OK / all right</li>
        <li>Usage 1: Asking if someone is fine</li>
        <li>Usage 2: Confirming acceptability</li>
        <li>Usage 3: Polite refusal</li>
      </ul>

      {/* Story 1 */}
      <div>
        <h4 class="text-xl font-bold">
          <em>Story 1:</em> Checking on someone
        </h4>
        <h4 class="text-lg font-medium">Characters: You & elderly person</h4>
        <p class="mt-3">
          Someone stumbles, you ask:{" "}
          <span class="font-japanese">
            <span class="text-green-500">大丈夫</span>ですか。
          </span>{" "}
          (Are you OK?)
        </p>
      </div>

      {/* Story 2 */}
      <div>
        <h4 class="text-xl font-bold">
          <em>Story 2:</em> Confirming acceptability
        </h4>
        <h4 class="text-lg font-medium">Characters: You & waiter</h4>
        <p class="mt-3">
          Your first choice isn’t available. Waiter suggests another dish. You
          say:{" "}
          <span class="font-japanese">
            はい、それで<span class="text-green-500">大丈夫</span>です。
          </span>{" "}
          (Yes, that’s fine.)
        </p>
      </div>

      {/* Story 3 */}
      <div>
        <h4 class="text-xl font-bold">
          <em>Story 3:</em> Declining politely
        </h4>
        <h4 class="text-lg font-medium">Characters: You & Hiroshi</h4>
        <p class="mt-3">
          Hiroshi invites you:{" "}
          <span class="font-japanese">
            一緒に食べ<span class="text-teal-400">ませんか</span>
          </span>{" "}
          You reply:{" "}
          <span class="font-japanese">
            ありがとうございます。でも、
            <span class="text-green-500">大丈夫</span>です。
          </span>{" "}
          (Thanks, but I’m fine.)
        </p>
      </div>

      <p class="!mt-12 font-bold">
        Both <span class="font-japanese">ちょっと</span> and{" "}
        <span class="font-japanese">大丈夫</span> are very versatile. You’ll
        hear them everywhere in conversation.
      </p>
    </section>
  )
}

function PracticeSection() {
  return (
    <section class="space-y-8 leading-8">
      <h2 class="!mt-12 text-center text-3xl font-bold">Practice</h2>

      <ol class="list-inside list-decimal space-y-6">
        <li>
          <strong>Create an invitation:</strong>
          <p class="mt-1">
            Invite your classmate,{" "}
            <span class="font-japanese">
              <Furigana furigana={<span class="text-sm">さとう</span>}>
                佐藤
              </Furigana>
              さん
            </span>
            , to play tennis tonight.
          </p>
          <WanakanaWrapper enabled={true} watch="">
            <CustomTextArea
              spacing={14}
              class="font-japanese mt-2 h-28 w-full resize-none text-xl"
            />
          </WanakanaWrapper>
        </li>

        <li>
          <strong>Respond to an invitation:</strong>
          <p class="mt-2">
            Your classmate has invited you for lunch tomorrow. How would you
            respond?
          </p>
          <ol class="mt-2 list-[lower-alpha] space-y-3">
            <li>
              Accepting:
              <WanakanaWrapper enabled={true} watch="">
                <CustomTextArea
                  spacing={14}
                  class="font-japanese mt-2 h-28 w-full resize-none text-xl"
                />
              </WanakanaWrapper>
            </li>
            <li>
              Declining politely and suggesting an alternative:
              <WanakanaWrapper enabled={true} watch="">
                <CustomTextArea
                  spacing={14}
                  class="font-japanese mt-2 h-28 w-full resize-none text-xl"
                />
              </WanakanaWrapper>
            </li>
          </ol>
        </li>
      </ol>
    </section>
  )
}
