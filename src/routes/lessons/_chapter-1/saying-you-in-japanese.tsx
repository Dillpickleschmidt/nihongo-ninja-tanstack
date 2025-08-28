// routes/lessons/saying-you-in-japanese.tsx
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute(
  "/lessons/_chapter-1/saying-you-in-japanese",
)({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/lessons/useful-expressions",
      },
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* HEADER */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Saying &quot;You&quot; in Japanese
        </h1>
        <div class="mx-auto mb-6 h-1 w-20 rounded bg-emerald-400" />
      </header>

      {/* MAIN LESSON CONTENT */}
      <main class="mx-auto max-w-3xl space-y-14 px-6 leading-relaxed">
        {/* Opening section */}
        <section>
          <p>
            In Japanese, addressing someone as &quot;you&quot; is quite nuanced
            and <span class="font-bold">often avoided</span>. Unlike English,
            where &quot;you&quot; is universal, using direct pronouns in
            Japanese can come across as{" "}
            <span class="font-bold">rude or overly direct</span>. Instead,
            Japanese speakers prefer using names and titles, which convey
            respect.
          </p>
        </section>

        {/* Video: Saying "You" */}
        <section>
          <YouTubeVideo
            videoId="8KTvBdGt_vg"
            title="Saying 'You' in Japanese by Kaname Naito, Nov 12 2023"
            credit="Kaname Naito"
          />
        </section>

        {/* Names Instead of "You" */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            Using Names and Titles Instead of &quot;You&quot;
          </h2>
          <p>
            Japanese speakers frequently use the person&apos;s name with an
            appropriate honorific or title, especially in formal or polite
            settings. This practice is more respectful and avoids the directness
            that can sometimes be considered impolite in Japanese culture.
          </p>
        </section>

        {/* Pronouns */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            Second-Person Pronouns You Might&apos;ve Heard
          </h2>
          <p class="italic">
            The following second-person pronouns should not be used unless
            you&apos;ve reached a near-native level of Japanese speaking ability
            and can fully grasp the situations in which they would be
            appropriate.
          </p>

          {/* Anata */}
          <PronounBlock
            jp="あなた"
            romaji="Anata"
            usage="General term for 'you,' that often sounds rude except in specific cases."
            context="While okay in some contexts, あなた can sound overly familiar or even rude if used too frequently or inappropriately, especially with strangers or superiors. Better to use a name once you know it."
            example="あなたは学生ですか。"
            translation="Are you a student?"
          />

          {/* Kimi */}
          <PronounBlock
            jp={
              <Furigana furigana={<span class="text-sm">きみ</span>}>
                君
              </Furigana>
            }
            romaji="Kimi"
            usage="Informal term for 'you.' Often used by men toward someone younger/lower status, or by women for children or close friends."
            context="Can sound affectionate or condescending depending on context. More common casually, but risky with strangers or superiors."
            example="君はどう思う？"
            translation="What do you think?"
          />

          {/* Omae */}
          <PronounBlock
            jp={
              <>
                お
                <Furigana furigana={<span class="text-sm">まえ</span>}>
                  前
                </Furigana>
              </>
            }
            romaji="Omae"
            usage="Very informal and direct term, often used by men."
            context="Can sound rude or aggressive if misused. Okay with very close friends or confrontations. Extremely rude toward strangers/superiors."
            example="お前は何をしているんだ？"
            translation="What the hell are you doing?"
          />

          {/* Temee */}
          <PronounBlock
            jp="てめえ"
            romaji="Temee"
            usage="Extremely informal, confrontational, often heard in anime for dramatic effect."
            context="Highly disrespectful/aggressive. Avoid completely in real-life speech; mostly for fights or fiction."
            example="てめえ、覚悟しろ！"
            translation="Get ready, you bastard!"
          />

          {/* Kisama */}
          <PronounBlock
            jp={
              <Furigana furigana={<span class="text-sm">きさま</span>}>
                貴様
              </Furigana>
            }
            romaji="Kisama"
            usage="Archaic and very rude."
            context="Almost always insulting/confrontational. Not used in polite modern Japanese. Avoid unless in historical media or deliberately offensive."
            example="貴様、許さん！"
            translation="I won't forgive you [offensive]."
          />

          {/* Anata-sama */}
          <PronounBlock
            jp={
              <>
                あなた
                <Furigana furigana={<span class="text-sm">さま</span>}>
                  様
                </Furigana>
              </>
            }
            romaji="Anata-sama"
            usage="Very respectful honorific form."
            context="Used in very polite, deferential contexts (e.g. customer service). Conveys high respect."
            example="あなた様のお名前は？"
            translation="What is your name, sir/madam?"
          />
        </section>

        {/* Unknown name */}
        <section>
          <h3 class="pt-6 text-center text-2xl font-bold">
            But what if you don’t know their name?
          </h3>
          <YouTubeVideo
            videoId="t1iTJK31UYw"
            title="First-time Greeting in Japanese for Beginners by Kaname Naito, Jun 15 2024"
            startTime={256}
            credit="Kaname Naito"
            timestamps={[
              { time: 0, label: "First-time Greetings" },
              { time: 256, label: "How to Ask for Someone's Name" },
            ]}
          />

          <h4 class="font-japanese pt-6 text-center text-3xl font-medium">
            <Furigana furigana={<span>しつれい</span>}>失礼</Furigana>ですが、お
            <Furigana furigana={<span>なまえ</span>}>名前</Furigana>は？
          </h4>
          <ul class="mt-4 ml-6 list-disc space-y-2">
            <li>
              <span class="font-japanese text-xl font-bold">失礼です - </span>
              Literally “rude” → means “Excuse me / pardon me.”
            </li>
            <li>
              <span class="font-japanese text-xl font-bold">が - </span>
              “but”{" "}
              <span class="text-muted-foreground text-sm">
                (we’ll revisit later)
              </span>
            </li>
            <li>
              <span class="font-japanese text-xl font-bold">お - </span>
              Polite prefix
            </li>
            <li>
              <span class="font-japanese text-xl font-bold">名前 - </span>
              “Name”
            </li>
            <li>
              <span class="font-japanese text-xl font-bold">は？ - </span>
              Topic particle
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

/* --- Helper Pronoun Section Component --- */
function PronounBlock(props: {
  jp: any
  romaji: string
  usage: string
  context: string
  example: string
  translation: string
}) {
  return (
    <div class="border-muted-foreground/20 mt-8 border-t pt-5">
      <h3 class="mb-2 text-xl font-bold">
        <span class="font-japanese text-xl">{props.jp}</span> ({props.romaji})
      </h3>
      <ul class="ml-4 list-disc space-y-2">
        <li>
          <span class="font-bold">Usage: </span> {props.usage}
        </li>
        <li>
          <span class="font-bold">Context: </span> {props.context}
        </li>
        <li>
          <span class="font-bold">Example Usage: </span>
          <span class="font-japanese ml-1 text-xl">{props.example}</span> —{" "}
          {props.translation}
        </li>
      </ul>
    </div>
  )
}
