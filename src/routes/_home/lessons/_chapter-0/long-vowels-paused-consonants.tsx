import { createFileRoute } from "@tanstack/solid-router"
import YouTubeVideo from "@/features/youtube/YouTube"
import { ChatBubble } from "@/components/ChatBubble"
import { ChatAttachment } from "@/components/ChatAttachment"

export const Route = createFileRoute(
  "/_home/lessons/_chapter-0/long-vowels-paused-consonants",
)({
  loader: async () => ({
    contentBox: {
      nextButtonLink: "/lessons/practice/all-hiragana-quiz",
    },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* Header */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Paused Consonants & Long Vowels
        </h1>
        <div class="mx-auto mb-5 h-1 w-16 rounded bg-fuchsia-400" />
        <p class="text-muted-foreground text-lg">
          Two small features of Japanese pronunciation that can change a word's
          meaning entirely.
        </p>
      </header>

      <div class="mx-auto max-w-3xl space-y-6 px-6 pt-4">
        <h3 class="font-semibold">
          Paused Consonants (<span class="font-japanese">促音</span>, Sokuon)
        </h3>
        <div class="flex flex-row justify-center">
          <ul class="![&>*]:py-0 pr-4 pl-2 text-center text-xl leading-7 font-bold">
            <li>C</li>
            <li>o</li>
            <li>n</li>
            <li>s</li>
            <li>o</li>
            <li>n</li>
            <li>a</li>
            <li>n</li>
            <li>t</li>
            <li>s</li>
          </ul>
          <ul class="![&>*]:py-0 pr-6 text-center text-xl leading-7 font-bold">
            <li>D</li>
            <li>o</li>
            <li>u</li>
            <li>b</li>
            <li>l</li>
            <li>e</li>
          </ul>
          <div>
            <p>
              In Japanese, some consonants get held for a beat before releasing.
              You'll hear a brief pause in the middle of the word, right before
              the consonant hits.
            </p>
            <br />
            <p>
              Take &quot;
              <span class="font-japanese font-semibold">がっこう</span> (gakkou
              - school).&quot; Without the double 'k', it would just be a boring
              old 'gakou.' But with that extra 'k', it's 'gak-kou' — a word
              with a bit more punch, a bit more{" "}
              <span>
                <u>
                  <em>oomph</em>
                </u>
                .
              </span>
            </p>
          </div>
        </div>
        <p class="-mt-4 text-center text-xl font-semibold">
          Use a little っ before the consonant character to make it a double
          consonant.
        </p>
        <h3 class="pt-8 text-center font-semibold">
          Long Vowels (<span class="font-japanese">長音</span>, chōon)
        </h3>
        <div>
          <YouTubeVideo
            videoId="XG-QPpiqn54"
            title="Japanese Long Vowels with Pitch ーうん-ううん／いね-いいね／おばさん-おばあさん, Oct 17 2020"
            timestamps={[
              { label: "Intro", time: 0 },
              { label: "Pronunciation", time: 38 },
              { label: "あ vs. ああ", time: 90 },
              { label: "い vs. いい", time: 152 },
              { label: "う vs. うう", time: 173 },
              { label: "Pronouncing Yes/No", time: 185 },
              { label: "え vs. ええ", time: 264 },
              { label: "お vs. おお", time: 309 },
              { label: "Practice", time: 350 },
              { label: "Review Test 1", time: 526 },
              { label: "Review Test 2", time: 634 },
            ]}
            credit="Speak Japanese Naturally"
          />
        </div>
        <div class="flex flex-row justify-center pb-0!">
          <div class="![&>*]:py-0 pr-4 pl-2 text-center text-xl leading-7 font-bold">
            <p>V</p>
            <p>o</p>
            <p>w</p>
            <p>e</p>
            <p>l</p>
            <p>s</p>
          </div>
          <div class="![&>*]:py-0 pr-6 text-center text-xl leading-7 font-bold">
            <p>L</p>
            <p>o</p>
            <p>n</p>
            <p>g</p>
          </div>
          <div>
            <p>
              Long vowels stretch a sound longer. Getting the length wrong can
              change the word.
            </p>
            <br />
            <p>
              Consider &quot;お<u>ばあ</u>さん (o<u>baa</u>san -
              grandmother).&quot; Cut the long 'a' short and you get{" "}
              <span class="text-nowrap">
                &quot;お<u>ば</u>
                さん
              </span>{" "}
              (o<u>ba</u>san - aunt),&quot; and <em>oh boy</em>, can that
              lead to some awkward family reunions.
            </p>
          </div>
        </div>

        <section class="space-y-6 pt-8">
          {/* Long vowels note */}
          <h3 class="text-center font-semibold">
            Special Note:{" "}
            <span class="text-xl underline">
              o + <span class="font-japanese">う</span>
            </span>{" "}
            and{" "}
            <span class="text-xl underline">
              e + <span class="font-japanese">い</span>
            </span>
          </h3>

          <div class="rounded-md border border-blue-700/40 bg-blue-900/20 p-4 leading-relaxed text-blue-200">
            <p>
              The <strong>"o"</strong> vowel sound at the end of characters like{" "}
              <span class="font-japanese">こ・そ・と・も</span>, etc. is
              extended with <span class="font-japanese">う</span>.
              <br />
              Example: <span class="font-japanese">もう</span> → <code>mō</code>
              , meaning "already" (note: no separate "u" sound).
            </p>

            <p class="mt-3">
              The <strong>"eh"</strong> vowel sound is extended with{" "}
              <span class="font-japanese">い</span>.
              <br />
              Example: <span class="font-japanese">えいが</span> →{" "}
              <code>ēiga</code>, meaning "movie" (note: no separate "i" sound).
            </p>
          </div>

          <ChatBubble
            speaker="sensei"
            text="These spellings don't add new syllables — they simply stretch the vowel sound."
          />

          {/* N Section */}
          <h3 class="pt-8 text-center font-semibold">
            Special Note: <span class="font-japanese text-xl">ん</span>
          </h3>

          <div class="rounded-md border border-blue-700/40 bg-blue-900/20 p-4 text-sm leading-relaxed text-blue-200">
            <p>
              If a Japanese word contains a single "n" followed by{" "}
              <span class="font-japanese">な・に・ぬ・ね・の</span>, you
              shouldn't combine the "n" with the next character.
            </p>

            <p class="mt-3">
              Example: <span class="font-japanese">こんにちは</span> →{" "}
              <code>konnichiwa</code>, <em>not</em> "ko nichiwa."
            </p>

            <p class="mt-3">
              Think of it like double letters in English, but even more distinct
              and important — compare "hello" vs "helo."
            </p>
          </div>

          <p class="mt-6 text-center">
            ✅{" "}
            <span class="font-japanese text-xl font-semibold">kon'nichiwa</span>
            <br />❌ ko nichiwa
          </p>
        </section>
        <p>
          These timing differences are small but they can change a word's
          meaning entirely. You'll get more comfortable as you listen and
          practice.
        </p>

        {/* Bonus */}
        <h3 class="pt-6! pb-0! text-center text-2xl font-semibold">
          Bonus: Japanese Rhythm & Moras
        </h3>
        <div>
          <YouTubeVideo
            videoId="J_HLY0Rss-g"
            title="Japanese Pronunciation: Rhythm by Kaname Naito, Nov 21 2022"
          />
        </div>

        <ChatBubble
          speaker="student"
          text="So just length or pause can totally change what I'm saying?"
        />
        <ChatBubble
          speaker="sensei"
          text="Exactly. Japanese speakers pick up on these differences immediately."
        />
        <ChatAttachment speaker="sensei">
          <p class="text-sm leading-relaxed italic">
            Treat double consonants like a hiccup, and long vowels like you're
            laying down at the dentist with your mouth open. Practice that, and
            your pronunciation will sound more natural. Probably.
          </p>
        </ChatAttachment>
        <section class="space-y-3 pt-8 text-center">
          <h3 class="text-2xl font-bold">
            おめでとうございます → <span>Congratulations</span> 🎉
          </h3>
          <p class="text-muted-foreground italic">
            You now have full coverage of every sound in Japanese.
          </p>
        </section>
      </div>
    </div>
  )
}
