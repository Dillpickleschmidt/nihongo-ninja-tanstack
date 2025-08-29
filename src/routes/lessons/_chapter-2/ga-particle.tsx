// routes/lessons/_chapter-2/ga-particle.tsx
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/lessons/_chapter-2/ga-particle")({
  loader: async () => ({
    contentBox: { nextButtonLink: "/lessons/_chapter-2/dare" },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-12">
      {/* --- Hero --- */}
      <div class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 px-6 py-20">
        <div class="relative text-center">
          <h1 class="mb-4 text-4xl leading-tight font-extrabold text-white">
            New Subjects with the{" "}
            <span class="font-japanese text-green-400">が</span> Particle
          </h1>
          <p class="text-lg text-slate-300">
            Learn the difference between <span class="font-japanese">は</span>{" "}
            (topic) and <span class="font-japanese">が</span> (subject).
          </p>
        </div>
      </div>

      {/* --- Main Content --- */}
      <main class="mx-auto max-w-3xl space-y-16 px-6 py-12 leading-relaxed">
        <section class="space-y-6">
          <p>
            In this lesson, we'll delve into the{" "}
            <span class="font-japanese text-xl">が</span> (ga) particle, its use
            cases, and how it differs from the{" "}
            <span class="font-japanese text-xl">は</span> (wa) particle. You've
            learned how to define <strong class="text-sky-400">topics</strong>{" "}
            with{" "}
            <span class="font-japanese text-xl font-bold text-sky-400">は</span>
            ; now it's time to understand how to define{" "}
            <strong class="text-green-400">subjects</strong> with{" "}
            <span class="font-japanese text-xl font-bold text-green-400">
              が
            </span>
            .
          </p>
          <p>
            First, let's review our understanding of{" "}
            <span class="font-japanese text-xl">は</span>.
          </p>
        </section>

        {/* は particle */}
        <section class="space-y-4">
          <h3 class="text-xl font-bold">
            <span class="font-japanese text-2xl">は</span> (Wa)
          </h3>
          <ul class="list-inside list-disc space-y-2">
            <li>
              <strong>Function: </strong>Marks the{" "}
              <strong class="text-sky-400">topic</strong> of the sentence,
              indicating what the sentence is about, and emphasizing what comes
              after it.
            </li>
            <li>
              <strong>Example: </strong>
              <span class="font-japanese text-xl">
                これ<span class="font-bold text-sky-400">は</span>
                <Furigana furigana={<span class="text-sm">おおき</span>}>
                  大木
                </Furigana>
                <Furigana furigana={<span class="text-sm">いぬ</span>}>
                  犬
                </Furigana>
                です。
              </span>
              {" ->"} As for this,{" "}
              <span class="font-bold italic">it's a big dog.</span>
            </li>
          </ul>
          <p>
            All of the emphasis is placed on{" "}
            <span class="font-bold italic">it's a big dog</span>, while quickly
            indicating that it's <span class="font-japanese text-xl">これ</span>{" "}
            that we're referring to.
          </p>
        </section>

        {/* が particle */}
        <section class="space-y-4">
          <h3 class="text-xl font-bold">
            <span class="font-japanese text-2xl">が</span> (Ga)
          </h3>
          <ul class="list-inside list-disc space-y-2">
            <li>
              <strong>Function: </strong>Marks the{" "}
              <strong class="text-green-400">subject</strong> of the sentence
              (emphasizing the subject).
            </li>
            <li>
              <strong>Example: </strong>
              <span class="font-japanese text-xl">
                これ<span class="font-bold text-green-500">が</span>
                <Furigana furigana={<span class="text-sm">おおき</span>}>
                  大木
                </Furigana>
                <Furigana furigana={<span class="text-sm">いぬ</span>}>
                  犬
                </Furigana>
                です。
              </span>
              {" ->"} As for <span class="font-bold italic">this</span>, it's a
              big dog.
            </li>
          </ul>
          <p>
            The emphasis here is placed on{" "}
            <span class="font-bold italic">this</span>. In this case,{" "}
            <span class="font-japanese text-xl">これ</span> is much more
            important.
          </p>
        </section>

        <section>
          <p class="text-muted-foreground text-base italic">
            *Please note that the above examples are taken from Andy's YouTube
            video where he explains the differences between{" "}
            <span class="font-japanese not-italic">は</span> and{" "}
            <span class="font-japanese not-italic">が</span>. We recommend
            watching his video for further understanding:
          </p>
          <YouTubeVideo
            videoId="ytjRoTwWnzw"
            title="Japanese は and が Particles in 2 Minutes | (WA) vs (GA)"
            credit="ToKini Andy"
          />
          <p class="text-muted-foreground text-sm italic">
            *The comparison aspect of{" "}
            <span class="font-japanese not-italic">は</span> will be covered in
            later chapters.
          </p>
        </section>

        {/* Examples of use */}
        <section class="space-y-4">
          <p>Let's look at another example</p>

          <h3 class="text-xl">
            <span class="font-japanese text-2xl">これはペンです。</span>
            {" ->"} This is a <span class="font-bold italic">pen.</span>
          </h3>
          <p>
            <strong>Context: </strong>Use when you want to introduce “pen” as
            the topic of discussion.
          </p>
          <ul class="ml-6 list-inside list-disc">
            <li>Situation: Showing items one by one in a demonstration.</li>
          </ul>

          <h3 class="text-xl">
            <span class="font-japanese text-2xl">これがペンです。</span>
            {" -> "} <span class="font-bold italic">This</span> is a pen.
          </h3>
          <p>
            <strong>Context: </strong>Use when emphasizing “this” as the
            subject.
          </p>
          <ul class="ml-6 list-inside list-disc">
            <li>
              Situation: Someone searches among many objects; you clarify “this
              one specifically is the pen.”
            </li>
          </ul>

          <p>
            For now, this is enough to get started with{" "}
            <span class="font-japanese">が</span>. For more, see{" "}
            <a
              href="https://8020japanese.com/wa-vs-ga/"
              target="_blank"
              class="text-sky-400 underline"
            >
              this clearer article
            </a>{" "}
            (best revisited in Chapter 3 when verbs/particles are familiar).
          </p>
        </section>

        {/* WH Questions */}
        <section class="space-y-6">
          <h3 class="text-center text-2xl font-bold">
            WH Questions and{" "}
            <span class="font-japanese text-green-500">が</span>
          </h3>
          <p>
            WH-words (who, what, where, when, why, which) like{" "}
            <span class="font-japanese">だれ</span>,{" "}
            <span class="font-japanese">なに</span>,{" "}
            <span class="font-japanese">どこ</span>,{" "}
            <span class="font-japanese">どれ</span>,{" "}
            <span class="font-japanese">どの</span>+noun, etc. are always marked
            by <span class="font-japanese font-bold text-green-500">が</span>{" "}
            when they’re the subject of a sentence.
          </p>

          {/* Incorrect vs Correct */}
          <div class="flex w-full items-center">
            <p class="w-1/4 font-bold text-red-500">Incorrect</p>
            <p class="w-3/4">
              <span class="font-japanese text-xl line-through">
                どれは田中さんのペンですか。
              </span>
            </p>
          </div>
          <div class="flex w-full items-center">
            <p class="w-1/4 font-bold">Correct</p>
            <p class="w-3/4">
              <span class="font-japanese text-xl">
                どれ<span class="font-bold text-green-500">が</span>
                田中さんのペンですか。
              </span>
              {" ->"} Which one is Tanaka’s pen?
            </p>
          </div>

          <ul class="ml-6 list-inside list-disc space-y-2">
            <li>
              This emphasizes{" "}
              <span class="font-japanese font-semibold">どれ</span> (which one)
              as the subject.
            </li>
            <li>
              Example: Standing at a desk with several pens and asking which
              belongs to Tanaka.
            </li>
          </ul>

          {/* Alternative using は */}
          <div class="flex w-full items-center">
            <p class="w-1/4 font-bold">Also Correct</p>
            <p class="w-3/4">
              <span class="font-japanese text-xl">
                田中さんのペン<span class="font-bold text-sky-400">は</span>
                どれですか。
              </span>
              {" ->"} Which one is Tanaka’s pen?
            </p>
          </div>

          <ul class="ml-6 list-inside list-disc space-y-2">
            <li>
              This places 「田中さんのペン」 as the topic. Then asks: among
              these, which one is it?
            </li>
            <li>
              Example: You know one pen belongs to Tanaka; you need to identify
              which.
            </li>
          </ul>
        </section>

        {/* Practice */}
        <PracticeSection />
      </main>
    </div>
  )
}

function PracticeSection() {
  return (
    <section class="space-y-6">
      <h3 class="text-center text-3xl font-bold">Practice</h3>
      <p class="text-muted-foreground text-center text-base italic">
        *There may be more than 1 correct answer*
      </p>

      <div class="space-y-4">
        <p>
          You are showing your friend different items in your room. How would
          you say "This is a pen"?
        </p>
        <SelectText
          answer="これはペンです。"
          a="これはペンです。"
          b="これがペンです。"
          class="text-xl"
        />

        <p>
          Your friend is looking for their notebook among several on the table.
          How would you say "This one's your notebook"?
        </p>
        <SelectText
          answer="これが[name]のノートです。"
          a="これは[name]のノートです。"
          b="これが[name]のノートです。"
          class="text-xl"
        />

        <p>Someone asks, "Who has this?" How would you say "Taro has it"?</p>
        <SelectText
          answer="たろうがもっています。"
          a="たろうはもっています。"
          b="たろうがもっています。"
          class="text-xl"
        />

        <p>Which sentence(s) correctly ask(s), "What is that?"</p>
        <p class="text-muted-foreground !my-0 text-base">
          *<span class="font-japanese">何</span> {"->"} なん・なに
        </p>
        <SelectText
          answer="それは何ですか。"
          a="何がそれですか。"
          b="何はそれですか。"
          c="それは何ですか。"
          d="それが何ですか。"
          class="text-xl"
        />

        <p>
          Choose the correct sentence(s) to ask, "Which one is Takashi's
          notebook?"
        </p>
        <SelectText
          answer={[
            "隆さんのノートはどれですか。",
            "どれが隆さんのノートですか。",
          ]}
          a="隆さんのノートはどれですか。"
          b="どれは隆さんのノートですか。"
          c="どれが隆さんのノートですか。"
          d="隆さんのノートがどれですか。"
          class="text-xl"
        />
      </div>
    </section>
  )
}
