import { createFileRoute } from "@tanstack/solid-router"
import { ChatBubble } from "@/components/ChatBubble"
import { ChatAttachment } from "@/components/ChatAttachment"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/lessons/_chapter-3/kanji")({
  loader: async () => ({
    contentBox: {
      nextButtonLink: "/lessons/_chapter-3/kanji-radicals",
    },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* Hero Header */}
      <div class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900/40 to-slate-900 px-6 py-20">
        <div class="absolute inset-0 flex items-center justify-center opacity-10">
          <img
            src="/img/chapter-3/kanji/kanji-inverted.png"
            alt="Kanji"
            class="h-40 w-40 lg:h-52 lg:w-52"
          />
        </div>
        <div class="relative text-center">
          <h1 class="mb-4 text-4xl leading-tight font-extrabold text-white lg:text-5xl">
            A Whole New World—{" "}
            <span class="bg-gradient-to-r from-indigo-300 to-indigo-500 bg-clip-text text-transparent">
              Kanji
            </span>
          </h1>
          <p class="mx-auto max-w-2xl text-lg text-indigo-200">
            Ancient symbols of meaning. At first overwhelming, but mastered step
            by step, they unlock the true depth of Japanese literacy.
          </p>
        </div>
      </div>

      {/* Main */}
      <main class="mx-auto max-w-3xl space-y-16 px-6 py-12 leading-relaxed">
        <p class="text-muted-foreground mt-6 italic">
          *Note for <strong>Nihongo Ninja</strong> learners: If you've been
          following along step-by-step, you should have already started
          practicing kanji on <strong>jpdb.io</strong>. Even if you've been
          practicing, we'd still recommend reading through this lesson to get a
          better understanding of what kanji are and how they work.
        </p>

        {/* Opening Dialogue */}
        <ChatBubble
          speaker="student"
          class="bg-indigo-500/60 text-indigo-50 saturate-[75%]"
          text="Wise せんせい, I've been seeing these kanji characters floating
            around. They look so complicated... I'm not sure where to even
            start."
        />
        <ChatBubble
          speaker="sensei"
          class="bg-indigo-500 text-indigo-50 saturate-[75%]"
          text="Ah, young grasshopper, Kanji hold the wisdom of ancient times,
            predating even my generation. But fear not, for I shall guide you
            through their mysteries as my elders had done for me."
        />

        <h2 class="mb-4 text-center text-3xl font-bold">What are Kanji?</h2>

        <YouTubeVideo
          videoId="RKWrWRFyfYo"
          title="Japanese Kanji 101 (and How I'd Learn Kanji Starting Over)"
          credit="ToKini Andy"
        />

        <p class="!mt-4">
          Kanji are characters that originated in China and were brought to
          Japan over 1,500 years ago. Each Kanji is a logogram, meaning it
          represents a standalone meaning, as opposed to a sound like English
          characters.
        </p>
        <div class="flex justify-center text-2xl">
          <div>
            <p>
              <span class="font-japanese text-3xl">日</span> {"->"} sun
            </p>
            <p>
              <span class="font-japanese text-3xl">木</span> {"->"} tree
            </p>
            <p>
              <span class="font-japanese text-3xl">犬</span> {"->"} dog
            </p>
          </div>
        </div>

        {/* How Many Kanji */}
        <p>
          <span class="font-extrabold">Student:</span> How many Kanji are there,
          great sage?
        </p>
        <p>
          <span class="font-extrabold">Sensei:</span> There are about 50,000
          kanji characters in total, but don't panic! 🥴 The Japanese government
          has designated 2,136 kanji as "commonly used" (
          <span class="font-japanese">常用漢字</span> - jōyō kanji), and those
          are 99% of what you'll see in magazines and newspapers.
        </p>

        <ChatAttachment
          speaker="sensei"
          class="bg-indigo-500 text-indigo-50 saturate-[75%]"
        >
          <h3 class="mb-2 font-bold">
            Here's a breakdown of what Japanese students are expected to know:
          </h3>
          <ul class="list-inside list-disc space-y-2">
            <li>
              <strong>Elementary school: </strong>1,026 kanji (
              <span class="font-japanese">学年別漢字配当表</span>)
            </li>
            <li>
              <strong>Secondary school: </strong>Additional kanji to reach 2,136
              jōyō kanji
            </li>
            <li>
              <strong>University entrance exams: </strong>About 2,500 kanji
            </li>
          </ul>
        </ChatAttachment>

        {/* Creation */}
        <p>
          <span class="font-extrabold">Student:</span> How were Kanji created?
        </p>
        <p>
          <span class="font-extrabold">Sensei:</span> Kanji can be divided into
          four types based on their formation:
        </p>
        <ol class="mt-3 ml-9 list-decimal space-y-2">
          <li>
            <strong>Pictograms:</strong> 木 (tree), 日 (sun), 山 (mountain)
          </li>
          <li>
            <strong>Simple ideograms:</strong> 上 (up), 下 (down), 中 (middle)
          </li>
          <li>
            <strong>Compound ideograms:</strong> 林 (forest) = two 木 (tree)
          </li>
          <li>
            <strong>Phonetic-ideographic:</strong> one element for meaning, one
            hinting at sound
          </li>
        </ol>

        {/* Reading */}
        <p>
          <span class="font-extrabold">Student:</span> How do I <em>read</em>{" "}
          them?
        </p>
        <p>
          <span class="font-extrabold">Sensei:</span> Well, since you asked,
          there are <em>technically</em> two ways to read kanji, but there's
          also a third option that's much easier to remember:
        </p>
        <ol class="mt-3 ml-9 list-decimal space-y-2">
          <li>
            <strong>On-yomi (音読み):</strong> Chinese-derived readings
          </li>
          <li>
            <strong>Kun-yomi (訓読み):</strong> Native Japanese readings
          </li>
        </ol>
        <p class="mt-3">
          For example, the kanji <span class="font-japanese">山</span>{" "}
          (mountain) can be read as:
        </p>
        <ul class="mt-3 ml-9 list-disc space-y-2">
          <li>
            On-yomi: <span class="font-japanese text-xl">サン</span> (san),{" "}
            <span class="font-japanese text-xl">セン</span> (sen)
          </li>
          <li>
            Kun-yomi: <span class="font-japanese text-xl">やま</span> (yama)
          </li>
        </ul>
        <p class="text-muted-foreground mt-3 text-base italic">
          *There are also <strong>name</strong> readings which are unique
          readings for peoples' names.
        </p>
        <p class="mt-3">
          In many cases, a single kanji will have <strong>multiple</strong>{" "}
          on-yomi and kun-yomi readings.
        </p>
        <p class="mt-3 text-base italic">
          You will see these whenever you look up a kanji in a dictionary.
        </p>

        {/* Reassurance */}
        <ChatBubble
          speaker="student"
          class="bg-indigo-500/60 text-indigo-50 saturate-[75%]"
          text="Let me get this straight... Not only do I have to remember
            thousands of characters, but I also have to remember multiple
            readings for each character? 😨"
        />

        <h3 class="text-center text-3xl font-bold italic">No!</h3>
        <p class="mt-4">
          In fact, we recommend you{" "}
          <span class="italic underline">
            forget about the on-yomi/kun-yomi readings
          </span>
          . Instead, focus on learning <strong>vocabulary</strong> and the{" "}
          English <strong>meanings</strong> of the kanji you come across,
          exactly as you've been doing on <strong>jpdb</strong>.
        </p>
        <div class="mt-4">
          <strong>Think about it like this: </strong>In English, there are at
          least a dozen (maybe more) ways to pronounce the letter{" "}
          <span class="font-black">a</span>:
          <ul class="mt-3 ml-9 list-disc space-y-2">
            <li>A = /æ/ - Apple, Fantastic, Back, Track, Exactly</li>
            <li>A = /e/ - Any, Many, Said, Says, Thames</li>
            <li>A = /ɒ/ - What, Watch, Want, Was, Wash, Yacht</li>
            <li>A = /eɪ/ - Able, Age, Page, Paper, Day, Date, Stay</li>
            <li>A = /eə/ - Air, Share, Care, Spare, Stare, Rare</li>
          </ul>
          <p class="mt-4 text-center italic">The list goes on...</p>
          <p class="mt-2">
            But do you memorize each pronunciation of{" "}
            <span class="font-black">a</span> in isolation?{" "}
            <strong>Absolutely not.</strong> You learn the <em>vocabulary</em>{" "}
            and pick up the different pronunciations of{" "}
            <span class="font-black">a</span> as you go along. We believe the
            same goes for kanji readings. Focus on vocabulary and the meanings
            of the kanji you're learning, and you'll naturally pick up the
            readings over time.
          </p>
        </div>
      </main>
    </div>
  )
}
