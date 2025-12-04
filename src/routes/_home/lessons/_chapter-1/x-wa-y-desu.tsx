// routes/lessons/x-wa-y-desu.tsx
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/_home/lessons/_chapter-1/x-wa-y-desu")({
  loader: async () => ({
    contentBox: { nextButtonLink: "/lessons/occupations-majors" },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-20">
      {/* Hero */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span class="text-emerald-400">X</span>
          <span class="font-japanese">は</span>
          <span class="text-blue-400">Y</span>
          <span class="font-japanese">です</span> — Your <em>First</em> Japanese
          Sentence Pattern
        </h1>
        <div class="mx-auto mt-5 h-1 w-20 rounded bg-emerald-400" />
        <p class="text-muted-foreground mt-6 text-lg">
          Let's look at how Japanese handles one of the most basic types of
          sentences: stating what something is.
        </p>
      </header>

      {/* Main Content */}
      <main class="mx-auto max-w-3xl space-y-16 px-6 leading-relaxed">
        {/* Comparison: English vs Japanese */}
        <section class="space-y-6">
          <h2 class="text-2xl font-bold">In English vs Japanese</h2>
          <p>
            In <strong>English</strong>, when we want to make a statement about
            something, we:
          </p>
          <ul class="list-inside list-decimal space-y-2">
            <li>
              Explicitly state which thing we're referring to (this/that, I/you,
              etc.)
            </li>
            <li>
              Then, use one of the several conjugations of the verb{" "}
              <strong>to be</strong>.
            </li>
            <li>
              Sometimes, follow it with articles that change depending on the
              next word (a/an).
            </li>
            <li>
              And <em>finally</em>, state the object we’re making a statement
              about.
            </li>
          </ul>

          <div class="rounded-lg bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-6">
            <ul class="space-y-2 text-center text-xl font-medium">
              <li>📙 This is a book.</li>
              <li>🧑‍🎓 I am a student.</li>
              <li>👥 We are friends.</li>
            </ul>
          </div>

          <h3 class="pt-6 text-center text-2xl font-bold italic">
            That's a mess!
          </h3>

          <div class="grid items-start gap-6 md:grid-cols-2">
            <div>
              <h3 class="text-xl font-bold text-emerald-400">
                The Simplicity of Japanese
              </h3>
              <p class="pt-2">
                Japanese, on the other hand, makes things <em>much</em> easier:
              </p>
            </div>
            <div>
              <ul class="space-y-3 text-2xl font-semibold">
                <li class="font-japanese">📙 ほん です。</li>
                <li class="font-japanese">🧑‍🎓 がくせい です。</li>
                <li class="font-japanese">👥 ともだち です。</li>
              </ul>
            </div>
          </div>

          <h3 class="text-center text-2xl font-bold italic">
            Yes! Consistency!
          </h3>
        </section>

        {/* Desu */}
        <section>
          <h2 class="text-2xl font-bold">です (desu)</h2>
          <p class="mt-2">
            In English, we can roughly translate{" "}
            <span class="font-japanese">です</span> as <strong>to be</strong>,
            but it's not quite the same. In Japanese, it adds politeness without
            changing meaning.
          </p>

          <div class="mt-4 flex flex-col-reverse items-center gap-8 sm:flex-row">
            <ul class="list-disc space-y-2 pl-6">
              <li>No need to choose between am/is/are</li>
              <li>Adds politeness to the sentence</li>
              <li>Can often be dropped in casual speech</li>
            </ul>
            <iframe
              src="https://giphy.com/embed/IHnROpQICe4kE"
              width="220"
              height="160"
              class="rounded-lg shadow-lg"
              allowFullScreen
            />
          </div>
        </section>

        {/* English vs Japanese Side Box */}
        <section class="rounded-xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-6">
          <h2 class="text-center text-2xl font-bold">
            Japanese Makes It Simple
          </h2>
          <div class="mt-6 grid gap-6 text-xl md:grid-cols-2">
            <div class="bg-background/70 rounded p-4">
              <h3 class="mb-2 font-bold">In English:</h3>
              📘 This is a book. <br /> 👩‍🎓 I am a student. <br /> 👥 We are
              friends.
            </div>
            <div class="bg-background/70 rounded p-4">
              <h3 class="mb-2 font-bold">In Japanese:</h3>
              <p class="font-japanese">ほん です。</p>
              <p class="font-japanese">がくせい です。</p>
              <p class="font-japanese">ともだち です。</p>
            </div>
          </div>
        </section>

        {/* Technical Note */}
        <section class="font-japanese">
          <p>
            Technically, です is optional (it just makes you sound more polite).
          </p>
          <div class="bg-background/50 mt-4 grid gap-6 rounded-lg p-4 sm:grid-cols-2">
            <div>
              <p class="text-xl">
                ほんです。
                <br /> おもしろい。
              </p>
            </div>
            <div class="text-muted-foreground">
              (That is a) book. <br /> (Something is) interesting.
            </div>
          </div>
        </section>

        {/* Callout: Context */}
        <section class="rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6">
          <h2 class="text-center text-2xl font-bold">Context is Everything</h2>
          <div class="mt-4 space-y-6">
            <div>
              <p class="font-japanese text-xl">がくせい です。</p>
              <p class="text-muted-foreground text-sm">
                Could mean "I am", "You are", or "They are" a student — context
                decides!
              </p>
            </div>
            <div>
              <p class="font-japanese text-xl">ともだち です。</p>
              <p class="text-muted-foreground text-sm">
                Could mean one friend or many friends — context tells us!
              </p>
            </div>
          </div>
        </section>

        {/* Particles */}
        <section>
          <h2 class="text-center text-3xl font-bold">The Role of Particles</h2>
          <p class="mt-4">
            Particles are tiny words that act like grammatical glue, clarifying
            roles of words. One of the most important is{" "}
            <span class="font-japanese">は</span>.
          </p>

          <div class="mt-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6">
            <h2 class="text-center text-2xl font-bold">
              The <span class="font-japanese">は</span> Particle
            </h2>
            <p class="mt-4">
              Think of it as a spotlight — it marks the topic of your sentence.
            </p>
            <div class="bg-background/60 mt-4 rounded p-4">
              <p class="font-japanese text-xl">これは ほんです。</p>
              <p class="text-muted-foreground">As for this, it's a book.</p>
            </div>
          </div>

          <p class="text-muted-foreground mt-4 text-center">
            は is actually pronounced “wa” here. You’ll see it constantly, so
            this soon feels natural.
          </p>
        </section>

        {/* Basic Pattern */}
        <section class="rounded-xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-6">
          <h3 class="text-center text-2xl font-bold">The Basic Pattern</h3>
          <div class="mt-6 space-y-6">
            <div class="bg-background/50 font-japanese rounded p-4 text-center text-xl">
              <span class="text-orange-400">Topic</span>
              <span class="text-sky-400">は</span>
              <span class="text-emerald-500"> Info </span>
              です
            </div>
            <div class="bg-background/50 font-japanese rounded p-4 text-xl">
              私は 学生です。 → As for me, I’m a student.
            </div>
            <div class="bg-background/50 font-japanese rounded p-4 text-xl">
              東京は 大きいです。 → As for Tokyo, it’s big.
            </div>
          </div>
        </section>

        {/* Conversation Example */}
        <section class="rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-6">
          <h3 class="text-center text-2xl font-bold">
            A Conversation About Tokyo
          </h3>
          <div class="mt-6 space-y-6">
            <div class="bg-background/50 font-japanese rounded p-4 text-xl">
              ねえ、東京はどうだった？ <br />
              <span class="text-muted-foreground">Hey, how was Tokyo?</span>
            </div>
            <div class="bg-background/50 font-japanese rounded p-4 text-xl">
              最高だったよ！ <br />
              <span class="text-muted-foreground">It was great!</span>
            </div>
            <div class="bg-background/50 font-japanese rounded p-4 text-xl">
              食べ物は すごくおいしかった。 <br />
              <span class="text-muted-foreground">
                The food was really delicious.
              </span>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section>
          <h2 class="text-2xl font-bold">Additional Resources</h2>
          <YouTubeVideo
            videoId="15ukUhFolU4"
            title="The REAL Most Basic Japanese Sentence Structures"
            credit="ToKini Andy"
          />
          <p class="text-muted-foreground mt-2 text-sm italic">
            *Nihongo Ninja is not affiliated with external channels.
          </p>
        </section>

        {/* Summary */}
        <section class="bg-card/50 border-border rounded-lg border p-6">
          <h2 class="mb-4 text-2xl font-bold">Summary</h2>
          <ul class="list-disc space-y-2 pl-5">
            <li>
              <span class="font-japanese font-bold">です</span> ~ “to be”, but
              mainly adds politeness.
            </li>
            <li>
              Particles are grammatical glue that clarify sentence structure.
            </li>
            <li>
              <span class="font-japanese font-bold">は</span> marks the topic.
            </li>
            <li>Drop the topic + は when obvious from context.</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
