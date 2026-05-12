import { createFileRoute } from "@tanstack/solid-router"
import YouTubeVideo from "@/features/youtube/YouTube"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-0/long-vowels-paused-consonants",
)({

  component: LongVowelsPausedConsonants,
})

function LongVowelsPausedConsonants() {
  return (
    <div class="relative pb-32">
      <LessonHeader
        chapter="Chapter 0 · Foundations"
        title={<>Long Vowels & Paused Consonants</>}
        subtitle="Two small features that can change a word's meaning entirely."
      >
        <OverviewItem>
          How{" "}
          <span class="font-japanese font-semibold text-muted-foreground dark:text-white/60">っ</span>{" "}
          creates a pause before a consonant
        </OverviewItem>
        <OverviewItem>
          How long vowels work (and when{" "}
          <span class="font-japanese font-semibold text-muted-foreground dark:text-white/60">う</span> and{" "}
          <span class="font-japanese font-semibold text-muted-foreground dark:text-white/60">い</span>{" "}
          extend sounds)
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Paused consonants — with vertical text */}
        <div class="flex gap-6">
          <div class="hidden select-none items-center sm:flex">
            <div class="flex gap-3">
              <div class="flex flex-col items-center text-center text-lg font-bold italic leading-snug text-muted-foreground/40 dark:text-white/15">
                {"Consonants".split("").map((c) => (
                  <span>{c}</span>
                ))}
              </div>
              <div class="flex flex-col items-center text-center text-lg font-bold italic leading-snug text-muted-foreground/40 dark:text-white/15">
                {"Paused".split("").map((c) => (
                  <span>{c}</span>
                ))}
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <SectionLabel>Paused consonants (っ)</SectionLabel>
            <div class="space-y-4 leading-relaxed text-foreground/75 dark:text-white/70">
              <p>
                In Japanese, some consonants get held for a beat before
                releasing. You'll hear a brief pause in the middle of the word,
                right before the consonant hits.
              </p>
              <p>
                Take{" "}
                <span class="font-japanese font-semibold text-dynamic-accent">
                  がっこう
                </span>{" "}
                (gakkou, "school"). That small{" "}
                <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                  っ
                </span>{" "}
                before the{" "}
                <span class="font-japanese text-foreground dark:text-white/90">こ</span> creates a
                pause: "gak-kou" — a word with a bit more punch, a bit more{" "}
                <em class="underline">oomph</em>.
              </p>
              <p>
                You write it with a small{" "}
                <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                  っ
                </span>{" "}
                before the consonant character. The{" "}
                <span class="font-japanese text-foreground dark:text-white/90">っ</span> itself isn't
                pronounced — it just holds the silence for one mora.
              </p>
            </div>
          </div>
        </div>

        {/* Long vowels — with vertical text */}
        <div class="flex gap-6">
          <div class="hidden select-none items-center sm:flex">
            <div class="flex gap-3">
              <div class="flex flex-col items-center text-center text-lg font-bold italic leading-snug text-muted-foreground/40 dark:text-white/15">
                {"Vowels".split("").map((c) => (
                  <span>{c}</span>
                ))}
              </div>
              <div class="flex flex-col items-center text-center text-lg font-bold italic leading-snug text-muted-foreground/40 dark:text-white/15">
                {"Long".split("").map((c) => (
                  <span>{c}</span>
                ))}
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <SectionLabel>Long vowels</SectionLabel>
            <div class="space-y-4 leading-relaxed text-foreground/75 dark:text-white/70">
              <p>
                Long vowels stretch a sound for an extra mora. You create one by
                placing the same vowel (or a specific one) right after a kana.
                The two don't get pronounced separately — the vowel just holds
                longer.
              </p>
              <p>
                <span class="font-japanese font-semibold text-dynamic-accent">
                  おばあさん
                </span>{" "}
                (obaasan) means "grandmother." The{" "}
                <span class="font-japanese text-foreground dark:text-white/90">あ</span> after{" "}
                <span class="font-japanese text-foreground dark:text-white/90">ば</span> doesn't add
                a new sound — it just stretches the "a" in{" "}
                <span class="font-japanese text-foreground dark:text-white/90">ば</span> longer:
                "obaaasan." Forget to stretch it and you're saying{" "}
                <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                  おばさん
                </span>{" "}
                (obasan, "aunt") instead, and{" "}
                <em class="text-foreground dark:text-white/90">oh boy</em>, can that lead to some
                awkward family reunions.
              </p>
            </div>
          </div>
        </div>

        {/* Long vowels video */}
        <YouTubeVideo
          videoId="XG-QPpiqn54"
          title="Japanese Long Vowels with Pitch"
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

        {/* o + う and e + い */}
        <div class="space-y-6">
          <div class="space-y-4">
            <SectionLabel>o + う and e + い</SectionLabel>
            <div class="space-y-3 leading-relaxed text-foreground/75 dark:text-white/70">
              <p>
                The "o" sound at the end of characters like{" "}
                <span class="font-japanese text-foreground dark:text-white/90">
                  こ・そ・と・も
                </span>{" "}
                is usually extended with{" "}
                <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                  う
                </span>
                , not{" "}
                <span class="font-japanese text-foreground dark:text-white/90">お</span>.
              </p>
              <p>
                Example:{" "}
                <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                  もう
                </span>{" "}
                → "mō" (already). There's no separate "u" sound — it just
                stretches the "o."
              </p>
              <p>
                The "e" sound works similarly with{" "}
                <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                  い
                </span>
                .
              </p>
              <p>
                Example:{" "}
                <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                  えいが
                </span>{" "}
                → "ēga" (movie). No separate "i" sound — it stretches the "e."
              </p>
              <p>
                These spellings don't add new sounds. They stretch the vowel.
              </p>
            </div>
          </div>
          <AsideBlock>
            <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/40 italic">
              This sounds confusing on paper, but you'll be listening to these
              words as you learn them and you'll very quickly get a feel for this
              without even thinking about it.
            </p>
          </AsideBlock>
        </div>

        {/* ん before な-row */}
        <AsideBlock label="ん before な-row">
          <div class="mt-2 space-y-3 leading-relaxed text-foreground/75 dark:text-white/70">
            <p>
              <span class="font-japanese font-semibold text-foreground dark:text-white/90">ん</span>{" "}
              before{" "}
              <span class="font-japanese text-foreground dark:text-white/90">
                な・に・ぬ・ね・の
              </span>{" "}
              is a common spot where learners accidentally cut the "n" short.
            </p>
            <p>
              <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                こんにちは
              </span>{" "}
              → "kon-ni-chi-wa," not "ko-ni-chi-wa."
            </p>
          </div>
        </AsideBlock>

        {/* Rhythm video */}
        <YouTubeVideo
          videoId="J_HLY0Rss-g"
          title="Japanese Pronunciation: Rhythm"
          credit="Kaname Naito"
        />

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Small{" "}
            <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">っ</span>{" "}
            creates a one-mora pause before a consonant
          </SummaryItem>
          <SummaryItem>
            Long vowels hold a sound for an extra mora
          </SummaryItem>
          <SummaryItem>
            "o" is usually extended with{" "}
            <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">う</span>,
            "e" with{" "}
            <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">い</span>
          </SummaryItem>
          <SummaryItem>
            <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">ん</span>{" "}
            before な-row is its own mora
          </SummaryItem>
        </LessonSummary>

        {/* Sensei wisdom */}
        <div class="flex gap-5">
          <div class="flex flex-col items-center pt-1">
            <Avatar class="size-9 shrink-0 ring-1 ring-border dark:ring-white/10">
              <AvatarImage src="/img/guru.png" alt="sensei" />
            </Avatar>
            <div
              class="mt-3 w-0.5 flex-1 rounded-full"
              style={{
                "background-color":
                  "color-mix(in srgb, var(--dynamic-accent) 50%, transparent)",
              }}
            />
          </div>
          <div>
            <SectionLabel>A note from Sensei</SectionLabel>
            <p class="mt-3 leading-relaxed text-muted-foreground dark:text-white/50 italic">
              Treat double consonants like a hiccup, and long vowels like you're
              lying at the dentist with your mouth open. Practice that, and your
              pronunciation will sound more natural. Probably.
            </p>
          </div>
        </div>

        {/* Congratulations */}
        <div class="space-y-3 text-center">
          <p class="font-japanese text-2xl font-bold text-dynamic-accent">
            おめでとうございます
          </p>
          <p class="text-sm text-muted-foreground dark:text-white/50 italic">
            You now have full coverage of every sound in Japanese.
          </p>
        </div>
      </div>
    </div>
  )
}
