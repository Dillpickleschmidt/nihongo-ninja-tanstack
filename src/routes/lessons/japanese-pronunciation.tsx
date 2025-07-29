import { createFileRoute } from "@tanstack/solid-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/lessons/japanese-pronunciation")({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/lessons/writing-systems",
      },
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-8">
      {/* Hero Section */}
      <div class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 px-4 py-16">
        <div class="absolute inset-0 bg-[url('/img/grid.svg')] opacity-10"></div>
        <div class="relative text-center">
          <h1 class="mb-4 text-4xl leading-tight font-bold text-white">
            Japanese Pronunciation:{" "}
            <span class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Easier Than You Think
            </span>
          </h1>
          <p class="text-lg leading-relaxed text-slate-300">
            Unlike English, Japanese pronunciation follows clear, consistent
            rules that work the same way every time.
          </p>
        </div>
      </div>

      <div class="space-y-8 px-4 py-8">
        {/* Introduction Dialogue */}
        <div class="bg-card/50 border-border rounded-lg border p-5 shadow-lg">
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <Avatar class="flex-shrink-0">
                <AvatarImage src="/img/student.png" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div class="flex-1 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                <p class="text-sm">
                  Japanese just seems so different from English. Learning
                  pronunciation seems like it's going to be a huge challenge.
                </p>
              </div>
            </div>
            <div class="flex items-start justify-end gap-4">
              <div class="max-w-md flex-1 rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                <p class="text-sm">
                  <em class="text-blue-600 dark:text-blue-400">
                    *sipping tea with suspicious intensity*
                  </em>{" "}
                  Actually, it's one of the easiest parts! If you can speak
                  English, you already know how to make almost every Japanese
                  sound. The real advantage is consistency—once you learn how to
                  pronounce something, it works that way every time.
                </p>
              </div>
              <Avatar class="flex-shrink-0">
                <AvatarImage src="/img/guru.png" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* English vs Japanese Comparison */}
        <div class="border-border rounded-lg border bg-gradient-to-br from-red-500/10 to-orange-500/5 p-6 shadow-lg">
          <h3 class="mb-4 text-lg font-semibold text-orange-500">
            Why Japanese is Actually Easier
          </h3>
          <div class="text-muted-foreground space-y-3 text-sm leading-relaxed">
            <p>
              Think about English for a moment. How do you pronounce "read"?
              Well, it depends—are we talking about present tense or past tense?
              What about "though," "through," "rough," and "cough"? English
              spelling is famously chaotic.
            </p>
            <p>
              Japanese takes the opposite approach. Every character represents
              the same sound, every single time. No exceptions, no surprises.
            </p>
          </div>
        </div>

        {/* Five Vowels Section */}
        <div class="bg-card/50 border-border rounded-lg border p-6 shadow-lg">
          <h3 class="mb-4 text-lg font-semibold">
            The Foundation: Five Pure Vowels
          </h3>
          <p class="text-muted-foreground mb-6">
            Everything in Japanese pronunciation builds from just five vowel
            sounds:
          </p>

          <div class="font-japanese my-8 flex w-full justify-center text-2xl font-medium">
            <ul class="space-y-3">
              <li>
                あ a -{" "}
                <span class="text-xl">
                  <em>
                    <span class="text-2xl font-extrabold">AH</span>HH!!
                  </em>
                </span>
              </li>
              <li>
                い i -{" "}
                <span class="text-xl">
                  <em>
                    eur<span class="text-2xl font-semibold">ea</span>ka!
                  </em>
                </span>
              </li>
              <li>
                う u -{" "}
                <span class="text-xl">
                  g<span class="text-2xl font-semibold">👀</span>se 🪿
                </span>
              </li>
              <li>
                え e -{" "}
                <span class="text-xl">
                  <span class="text-2xl font-semibold">e</span>lephant 🐘
                </span>
              </li>
              <li>
                お o -{" "}
                <span class="text-xl">
                  d<span class="text-2xl font-semibold">o</span>nut 🍩
                </span>
              </li>
            </ul>
          </div>
          <p class="text-muted-foreground text-center text-xs">
            *Note the rounded shapes of Hiragana characters.*
          </p>
        </div>

        {/* Building Syllables */}
        <div class="bg-card/50 border-border rounded-lg border p-6 shadow-lg">
          <h3 class="mb-4 text-lg font-semibold">Building Syllables</h3>
          <p class="text-muted-foreground mb-6">
            Japanese builds syllables by combining consonants with vowels in
            predictable patterns.
          </p>

          <div class="space-y-6">
            <div class="text-center">
              <p class="mb-3 text-base">
                Take the consonant <span class="font-bold">k</span>:
              </p>
              <div class="font-japanese bg-background/50 rounded-lg p-4 text-xl font-medium">
                <p>か (ka) • き (ki) • く (ku) • け (ke) • こ (ko)</p>
              </div>
            </div>

            <div class="text-center">
              <p class="mb-3 text-base">
                Or the consonant <span class="font-bold">s</span>:
              </p>
              <div class="font-japanese bg-background/50 rounded-lg p-4 text-xl font-medium">
                <p>さ (sa) • し (shi) • す (su) • せ (se) • そ (so)</p>
              </div>
              <p class="text-muted-foreground mt-2 text-xs">
                *Note: "shi" is a slight exception, but it's nothing you can't
                handle.
              </p>
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <div class="border-border rounded-lg border bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-6 shadow-lg">
          <h3 class="mb-4 text-lg font-semibold text-green-500">
            Try It Yourself
          </h3>
          <div class="text-muted-foreground space-y-3 leading-relaxed">
            <p>
              Let's practice with a real word:{" "}
              <span class="font-japanese text-lg font-medium">ねこ (neko)</span>
              , which means "cat."
            </p>
            <p>
              Break it down: ne + ko. Use the "e" sound from "pet" (or elephant)
              and the "o" sound from "coat" (or donut). Put them together
              smoothly: "neh-koh."
            </p>
            <p>
              Congratulations—you just pronounced your first Japanese word! And
              trust me, you already sound better than most Japanese speakers
              attempting English:
            </p>
          </div>

          <div class="mt-6 flex w-full justify-center">
            <div class="w-full max-w-96">
              <YouTubeVideo
                videoId="vQFaPMth2kw"
                title="Japanese Characters Speaking Engrish in Anime"
                credit="Tamako Sensei"
              />
            </div>
          </div>
        </div>

        {/* The Big Revelation */}
        <div class="bg-card/50 border-border space-y-6 rounded-lg border p-5 shadow-lg">
          <div class="flex items-start justify-end gap-4">
            <div class="max-w-md flex-1 rounded-lg bg-purple-100 p-3 dark:bg-purple-900/30">
              <p class="text-sm">
                <em class="text-purple-600 dark:text-purple-400">
                  *laughing maniacally*
                </em>{" "}
                UNLIMITED PHONETIC POWER!{" "}
                <em>*lightning crackles around their teacup*</em> DO YOU REALIZE
                HOW POWERFUL THIS KNOWLEDGE IS? <em>*straightens robes*</em> I
                mean... here's the beautiful part: Japanese has roughly 100
                basic sound combinations, while English juggles around 250
                unique sounds with <em>thousands</em> of spelling variations.
              </p>
            </div>
            <Avatar class="flex-shrink-0">
              <AvatarImage src="/img/guru.png" />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
          </div>
          <div class="flex items-start gap-4">
            <Avatar class="flex-shrink-0">
              <AvatarImage src="/img/student.png" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div class="flex-1 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
              <p class="text-sm">
                That's actually really encouraging!{" "}
                <span class="text-muted-foreground">
                  (Though I'm slightly concerned about your mental state...)
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div class="border-border rounded-lg border bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-6 shadow-lg">
          <h3 class="mb-4 text-lg font-semibold text-blue-500">Key Takeaway</h3>
          <div class="text-muted-foreground space-y-3 leading-relaxed">
            <p>
              Your tongue can already handle Japanese—it's just a matter of
              learning the patterns. Once you learn hiragana and katakana (which
              we'll cover next), you'll be able to pronounce any Japanese word
              correctly just by reading it.
            </p>
            <p class="text-foreground font-medium">
              No guessing, no memorizing exceptions—just consistent, logical
              pronunciation every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
