// routes/lessons/_chapter-2/katakana.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import YouTubeVideo from "@/features/youtube/YouTube"
import { ChatBubble } from "@/components/ChatBubble"
import { ChatAttachment } from "@/components/ChatAttachment"
import KanaChart from "@/components/charts/KanaChart"

export const Route = createFileRoute("/_home/lessons/_chapter-2/katakana")({
  loader: async () => ({
    contentBox: { nextButtonLink: "/lessons/_chapter-2/practice/katakana" },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-12">
      {/* --- Hero --- */}
      <div class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 px-6 py-20">
        <div class="absolute inset-0 flex items-center justify-center opacity-20">
          <img
            src="/img/chapter-2/katakana/ア.png"
            alt="ア character"
            class="h-40 w-40 opacity-50"
          />
        </div>
        <div class="relative text-center">
          <h1 class="mb-4 text-4xl leading-tight font-extrabold text-white">
            Katakana: The{" "}
            <span class="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Energetic
            </span>{" "}
            Sibling of Hiragana
          </h1>
          <p class="text-lg text-slate-300">
            Master the angular script used for loanwords, foreign names,
            onomatopoeia, and emphasis.
          </p>
        </div>
      </div>

      {/* --- Main Content --- */}
      <main class="mx-auto max-w-3xl space-y-16 px-6 py-12">
        {/* Resources */}
        <ResourceSection />

        {/* What is Katakana */}
        <section class="space-y-6 text-lg leading-relaxed">
          <div class="text-center">
            <h2 class="mb-4 text-3xl font-bold">What is Katakana?</h2>
            <div class="mx-auto h-1 w-24 bg-gradient-to-r from-red-400 to-orange-400" />
          </div>

          <p>
            Katakana is one of the three main scripts used in Japanese writing,
            along with Hiragana and Kanji. It is primarily used for{" "}
            <strong class="text-red-400">foreign words</strong>,{" "}
            <strong class="text-red-400">loanwords</strong>, and{" "}
            <strong class="text-red-400">onomatopoeia</strong>, and sometimes
            for <strong class="text-red-400">emphasis</strong>, similar to
            italics in English. Katakana characters have the same sounds as
            their Hiragana counterparts but are distinct in appearance with
            sharp, angular shapes.
          </p>
          <p>
            There are a total of <strong class="text-red-400">46</strong>{" "}
            Katakana characters, each representing a specific sound.
          </p>

          <div class="font-japanese flex w-full justify-center text-3xl font-semibold">
            <ul class="flex w-full max-w-md justify-evenly">
              <li>ア a</li>
              <li>イ i</li>
              <li>ウ u</li>
              <li>エ e</li>
              <li>オ o</li>
            </ul>
          </div>
          <p class="text-center italic">It's just like Hiragana!</p>

          <p>
            Here's a chart containing all 46 Katakana characters with their
            pronunciations.
          </p>
          <div class="mt-12 flex flex-col items-center">
            <KanaChart type="katakana" />
          </div>
        </section>

        {/* Unique Aspects */}
        <section class="space-y-12">
          <div class="text-center">
            <h2 class="mb-4 text-3xl font-bold">Unique Aspects of Katakana</h2>
            <div class="mx-auto h-1 w-24 bg-gradient-to-r from-red-400 to-orange-400" />
          </div>

          {/* Long vowels */}
          <div>
            <h3 class="text-xl font-bold">Extending the vowel (long vowel)</h3>
            <p>
              When you need to extend a vowel sound, use a dash{" "}
              <span class="font-japanese">ー</span> in horizontal writing or a
              vertical line <span class="font-japanese">｜</span> in vertical
              writing.
            </p>
            <table class="mt-4 w-full table-fixed">
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <Avatar class="mx-auto h-12 w-12">
                      <AvatarImage
                        src="/img/chapter-2/katakana/old-computer.png"
                        alt="computer"
                      />
                      <AvatarFallback>💻</AvatarFallback>
                    </Avatar>
                  </td>
                  <td>
                    <Avatar class="mx-auto h-12 w-12">
                      <AvatarImage
                        src="/img/chapter-2/katakana/harvard-logo.png"
                        alt="harvard"
                      />
                      <AvatarFallback>H</AvatarFallback>
                    </Avatar>
                  </td>
                  <td>
                    <Avatar class="mx-auto h-12 w-12">
                      <AvatarImage
                        src="/img/chapter-2/katakana/mary.png"
                        alt="mary"
                      />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                  </td>
                </tr>
                <tr>
                  <td class="text-center font-semibold">Examples:</td>
                  <td class="text-center">
                    <Romaji romaji="compuutaa">コンピューター</Romaji>
                  </td>
                  <td class="text-center">
                    <Romaji romaji="haabaado">ハーバード</Romaji>
                  </td>
                  <td class="text-center">
                    <Romaji romaji="mearii">メアリー</Romaji>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Character + y */}
          <div>
            <h3 class="text-xl font-bold">Character + y + vowel</h3>
            <p>
              Japanese often combines characters with little{" "}
              <span class="font-bold">ya</span>,{" "}
              <span class="font-bold">yu</span>, and{" "}
              <span class="font-bold">yo</span> sounds, allowing for more
              accurate representation of sounds found in foreign words.
            </p>
            <div class="mt-3 space-y-2">
              <p>
                <span class="font-japanese text-xl">
                  <Romaji romaji="nyuuyōku">ニューヨーク</Romaji>
                </span>{" "}
                {"->"} New York
              </p>
              <p>
                <span class="font-japanese text-xl">
                  <Romaji romaji="shyatsu">シャツ</Romaji>
                </span>{" "}
                {"->"} shirt
              </p>
            </div>
          </div>

          {/* シ vs ツ and ン vs ソ */}
          <div>
            <h3 class="text-xl font-bold">シ vs. ツ and ン vs. ソ</h3>
            <ul class="mb-8 list-inside list-disc space-y-2">
              <li>
                In Katakana, <span class="font-japanese text-xl">シ</span> (shi)
                and <span class="font-japanese text-xl">ツ</span> (tsu) look
                very similar but have slightly different stroke orientations.{" "}
                <span class="font-japanese text-xl">シ</span> (shi) has flatter
                strokes, while the strokes in{" "}
                <span class="font-japanese text-xl">ツ</span> (tsu) are more
                vertical.
              </li>

              <div class="my-4 flex justify-center">
                <Avatar class="h-16 w-16">
                  <AvatarImage
                    src="/img/shocked-child.png"
                    alt="shocked-person"
                  />
                  <AvatarFallback>?!</AvatarFallback>
                </Avatar>
                <p class="font-japanese ml-2">？？</p>
              </div>

              <li>
                You'll notice that the curved lines of{" "}
                <span class="font-japanese text-xl">シ</span> and{" "}
                <span class="font-japanese text-xl">ン</span> don't go all the
                way to the top of the character, while the curved lines of{" "}
                <span class="font-japanese text-xl">ツ</span> and{" "}
                <span class="font-japanese text-xl">ソ</span> do.{" "}
                <span class="font-semibold text-red-400 italic">
                  This is the biggest difference!
                </span>
              </li>
              <li>
                When handwritten, the long curved line of{" "}
                <span class="font-japanese text-xl">シ</span> is written from
                the bottom up, while{" "}
                <span class="font-japanese text-xl">ツ</span> is written from
                top to bottom.
              </li>
              <li>
                <span class="font-japanese text-xl">ン</span> (n) and{" "}
                <span class="font-japanese text-xl">ソ</span> (so) are similar.{" "}
                <span class="font-japanese text-xl">ン</span> (n) is also
                flatter while <span class="font-japanese text-xl">ソ</span> (so)
                is more vertical.
              </li>
            </ul>

            <ChatBubble
              speaker="sensei"
              text="It certainly takes a bit of reading exposure to get used to these subtle differences, but context usually makes the correct character obvious."
            />
          </div>

          {/* Double consonants */}
          <div>
            <h3 class="text-xl font-bold">
              Double Consonants—small <span class="font-japanese">ッ</span>
            </h3>
            <p>
              Just like in Hiragana, Katakana uses the small{" "}
              <span class="font-japanese">ッ</span> to mark doubled consonants.
            </p>
            <table class="!mt-6 w-full">
              <tbody>
                <tr>
                  <td class="font-semibold">Compare:</td>
                  <td>
                    <span class="font-japanese text-xl">
                      <Romaji romaji="ruuku">
                        ル<span class="text-orange-400">ー</span>ク
                      </Romaji>
                    </span>{" "}
                    {"->"} Luke
                  </td>
                  <td>
                    <span class="font-japanese text-xl">
                      <Romaji romaji="maaku">
                        マ<span class="text-orange-400">ー</span>ク
                      </Romaji>
                    </span>{" "}
                    {"->"} Mark
                  </td>
                  <td>
                    <span class="font-japanese text-xl">
                      <Romaji romaji="meekaa">
                        メ<span class="text-orange-400">ー</span>カ
                        <span class="text-orange-400">ー</span>
                      </Romaji>
                    </span>{" "}
                    {"->"} Maker
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <span class="font-japanese text-xl">
                      <Romaji romaji="rukku">
                        ル<span class="text-sky-400">ッ</span>ク
                      </Romaji>
                    </span>{" "}
                    {"->"} Look
                  </td>
                  <td>
                    <span class="font-japanese text-xl">
                      <Romaji romaji="makku">
                        マ<span class="text-sky-400">ッ</span>ク
                      </Romaji>
                    </span>{" "}
                    {"->"} Mac
                  </td>
                  <td>
                    <span class="font-japanese text-xl">
                      <Romaji romaji="mekka">
                        メ<span class="text-sky-400">ッ</span>カ
                      </Romaji>
                    </span>{" "}
                    {"->"} Mecca
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Dakuten */}
          <div>
            <h3 class="text-xl font-bold">Dakuten & Handakuten</h3>
            <p>Just like Hiragana, add diacritics to change sounds:</p>
            <div class="font-japanese mt-3 flex justify-around text-2xl font-medium">
              <p>カ → ガ</p>
              <p>シ → ジ</p>
              <p>タ → ダ</p>
              <p>ハ → バ</p>
              <p>ハ → パ</p>
            </div>
          </div>
        </section>

        {/* Dialogue: Student / Sensei */}
        <section class="space-y-8">
          <ChatBubble
            speaker="student"
            text={
              <>
                <Furigana furigana="がくせい">学生</Furigana>: I'm finally
                coming to grips with Hiragana, and{" "}
                <span class="font-medium italic">
                  now you expect me to learn Katakana?
                </span>
              </>
            }
          />
          <ChatBubble
            speaker="sensei"
            text={
              <>
                <Furigana furigana="せんせい">先生</Furigana>: Indeed, young
                apprentice. But learning Katakana is{" "}
                <span class="font-bold italic">much</span> easier once you've
                learned Hiragana. They share the same sounds—think of it like a
                funky new font!
              </>
            }
          />
        </section>

        {/* PDF attachment */}
        <section class="space-y-6">
          <ChatAttachment speaker="sensei">
            <a
              href="https://files.tofugu.com/articles/japanese/2022-08-23-learn-katakana-book-pdf/learn-katakana-book-by-tofugu.pdf"
              target="_blank"
              class="block font-semibold hover:underline"
            >
              📄 Tofugu's Learn Katakana PDF
            </a>
            <p class="mt-1 text-xs opacity-90">
              Similar to their Hiragana book: mnemonics + practice sheets. Print
              it or use on your tablet.
            </p>
          </ChatAttachment>
        </section>

        {/* Closing Dialogue */}
        <section class="space-y-8">
          <ChatBubble
            speaker="student"
            text={
              <>
                <Furigana furigana="がくせい">学生</Furigana>: Thanks{" "}
                <Furigana furigana="せんせい">先生</Furigana>, I'll give it a
                shot! Is there anything else I should know?
              </>
            }
          />
          <ChatBubble
            speaker="sensei"
            text={
              <>
                <Furigana furigana="せんせい">先生</Furigana>: One note—we won’t
                add <span class="font-semibold italic">furigana</span> for
                Katakana characters in this chapter. Use a chart if you’re
                stuck, and memorize them early.
              </>
            }
          />
        </section>

        <div class="flex justify-center">
          <Avatar class="h-14 w-14">
            <AvatarImage src="/img/guru.png" alt="guru" />
            <AvatarFallback>🧙</AvatarFallback>
          </Avatar>
        </div>

        {/* Video */}
        <YouTubeVideo
          videoId="wtcMGycmDjc"
          title="When to use hiragana, katakana, and kanji"
          credit="Komei's Channel"
        />
      </main>
    </div>
  )
}

function ResourceSection() {
  return (
    <section class="border-border bg-card/50 space-y-3 rounded-lg border p-6">
      <h3 class="text-lg font-semibold">Essential Resources</h3>
      <ul class="space-y-2">
        <li>
          <a
            class="text-sky-400 hover:underline"
            href="https://files.tofugu.com/articles/japanese/2022-08-23-learn-katakana-book-pdf/learn-katakana-book-by-tofugu.pdf"
            target="_blank"
          >
            Tofugu's Learn Katakana PDF
          </a>
        </li>
        <li>
          <a
            class="text-sky-400 hover:underline"
            href="https://learnjapanese.moe/img/hiragana_katakana_LARGE.png"
            target="_blank"
          >
            Hiragana & Katakana Chart by IREAL
          </a>
        </li>
      </ul>
    </section>
  )
}
