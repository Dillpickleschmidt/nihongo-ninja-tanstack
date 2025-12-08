// routes/lessons/questions-ka.tsx
import { createFileRoute } from "@tanstack/solid-router"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/_home/lessons/_chapter-1/questions-with-ka")({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/lessons/the-no-particle",
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
          Forming Questions With The{" "}
          <span class="font-japanese text-red-500">か</span> Particle
        </h1>
        <div class="mx-auto mb-6 h-1 w-20 rounded bg-emerald-400" />
      </header>

      <main class="mx-auto max-w-3xl space-y-14 px-6 leading-relaxed">
        {/* Intro Video */}
        <YouTubeVideo
          videoId="_bG8RWRAaJM"
          title="か (ka) #9 Ultimate Japanese Particle Guide"
          credit="JapanesePod101.com"
          startTime={7}
        />

        {/* INTRODUCTION */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">Introduction</h2>
          <p>
            The <span class="font-japanese">か</span> particle is a crucial
            element in Japanese grammar, primarily used to form questions,
            though it has other uses as well. Understanding how to use{" "}
            <span class="font-japanese">か</span> will help you ask and
            understand questions in Japanese, enhancing your conversational
            skills.
          </p>
        </section>

        {/* YES/NO QUESTIONS */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            Forming Yes/No Questions
          </h2>
          <p>
            To form a yes/no question in Japanese, simply add{" "}
            <span class="font-japanese text-xl">か</span> to the end of a
            statement.
          </p>
          <ul class="my-4 ml-6 list-disc space-y-2">
            <li>
              <span class="font-bold">Statement: </span>
              <span class="font-japanese text-xl font-bold">
                がくせいです。
              </span>{" "}
              - <span class="text-muted-foreground">(I am)</span> a student.
            </li>
            <li>
              <span class="font-bold">Question: </span>
              <span class="font-japanese text-xl font-bold">
                がくせいです<span class="text-red-500">か</span>。
              </span>{" "}
              - Are <span class="text-muted-foreground">(you)</span> a student?
            </li>
          </ul>
          <p class="text-muted-foreground text-sm italic">
            Notice that in Japanese, it is not customary to use a question mark
            when the <span class="font-japanese">か</span> particle is present,
            though it is sometimes used in casual writing for clarity.
          </p>
        </section>

        {/* QUESTION WORDS */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            Question Words
          </h2>
          <p>
            In addition to yes/no questions, Japanese questions often use
            specific question words, such as:
          </p>
          <div class="flex justify-center py-4">
            <ul class="list-disc space-y-1 text-xl">
              <li>
                <span class="font-japanese text-2xl font-semibold">なん</span>{" "}
                or{" "}
                <span class="font-japanese text-2xl font-semibold">なに</span> -
                what
              </li>
              <li>
                <span class="font-japanese text-2xl font-semibold">どこ</span> -
                where
              </li>
              <li>
                <span class="font-japanese text-2xl font-semibold">だれ</span> -
                who
              </li>
              <li>
                <span class="font-japanese text-2xl font-semibold">いつ</span> -
                when
              </li>
              <li>
                <span class="font-japanese text-2xl font-semibold">どう</span> -
                how
              </li>
              <li>
                <span class="font-japanese text-2xl font-semibold">なぜ</span> -
                why
              </li>
            </ul>
          </div>
          <p>
            These question words are typically followed by{" "}
            <span class="font-japanese text-xl">か</span> to form a complete
            question.
          </p>
          <p class="mt-2 italic">
            In this lesson, we'll focus on using{" "}
            <span class="font-japanese text-xl not-italic">なん・なに</span>{" "}
            with the <span class="font-japanese text-xl not-italic">か</span>{" "}
            particle.
          </p>

          <div class="mt-6">
            <p class="font-bold">Example:</p>
            <ul class="ml-6 list-disc">
              <li>
                <span class="font-japanese text-xl">
                  せんこうはなんですか。
                </span>
                <ul class="ml-6 list-disc">
                  <li>
                    <span class="font-japanese">せんこう</span> - major
                  </li>
                  <li>
                    <span class="font-japanese">は</span> - topic particle
                  </li>
                  <li>
                    <span class="font-japanese">なん</span> - what
                  </li>
                  <li>
                    <span class="font-japanese">です</span> - is
                  </li>
                  <li>
                    <span class="font-japanese">か</span> - question particle
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <p class="mt-4">
            Literally:{" "}
            <span class="font-bold">As for your major, what is it?</span>
          </p>

          <p class="mt-4 font-bold">Responses:</p>
          <ul class="ml-6 list-disc space-y-1">
            <li>
              <span class="font-japanese text-xl">せんこうはえいごです。</span>{" "}
              - My major is English.
            </li>
            <li>
              Or just: <span class="font-japanese text-xl">えいごです。</span> -
              It's English.
            </li>
          </ul>
        </section>

        {/* なん vs なに */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            <span class="font-japanese text-sky-500">なん</span> vs{" "}
            <span class="font-japanese text-sky-500">なに</span>
          </h2>
          <h2 class="font-japanese text-center text-3xl text-sky-500">何</h2>
          <p class="mt-4">
            Both forms mean <span class="font-bold italic">"what"</span> and
            share <span class="font-japanese text-xl text-sky-500">何</span>,
            but are used in slightly different contexts:
          </p>

          <div class="mt-6 space-y-2">
            <h3 class="font-japanese text-2xl font-bold text-sky-500">なに</h3>
            <ul class="ml-6 list-disc">
              <li>Stands on its own.</li>
              <li>
                Example:{" "}
                <span class="font-japanese text-xl">なにをしますか。</span> -
                What will you do?
              </li>
            </ul>
          </div>

          <div class="mt-6 space-y-2">
            <h3 class="font-japanese text-2xl font-bold text-sky-500">なん</h3>
            <ul class="ml-6 list-disc">
              <li>
                Before words beginning with d / n / t sounds, and with counters.
              </li>
              <li>
                Example: <span class="font-japanese text-xl">なんですか。</span>{" "}
                - What is it?
              </li>
            </ul>
          </div>

          <div class="mt-6">
            <h3 class="mb-2 text-xl font-bold">Quick Tips</h3>
            <ul class="ml-6 list-disc space-y-1">
              <li>Use なん before d, n, t sounds, and counters.</li>
              <li>Use なに in other cases.</li>
              <li>
                Don’t overthink — you’ll naturally pick it up with practice.
              </li>
            </ul>
          </div>
        </section>

        {/* Example Sentences */}
        <section>
          <h2 class="mb-6 text-center text-2xl font-semibold">
            か Example Sentences
          </h2>
          <ExampleQA
            q="いまなんじですか。"
            a="くじです。"
            gloss="It is nine o’clock."
            title="What time is it now?"
          />
          <ExampleQA
            q="ゆきさんはなんさいですか。"
            a="じゅうきゅうさいです。"
            gloss="I’m nineteen years old."
            title="How old are you, Yuki?"
          />
          <ExampleQA
            q="なんねんせいですか。"
            a="にねんせいです。"
            gloss="I’m a sophomore."
            title="What year are you in college?"
          />
          <ExampleQA
            q="でんわばんごうはなんばんですか。"
            a="はちろくななごさんぜろきゅうです。"
            gloss="It is 867-5309."
            title="What is your telephone number?"
          />
        </section>

        {/* Non-Question Uses */}
        <section>
          <h2 class="mb-6 text-center text-2xl font-semibold">
            Non-Question Uses of{" "}
            <span class="font-japanese text-red-500">か</span>
          </h2>
          <ul class="ml-6 list-disc space-y-6">
            <li>
              <h4 class="mb-2 font-bold">Saying “or”:</h4>
              <p>
                日本人か韓国人 - Japanese or Korean. Here, か works like “or.”
              </p>
            </li>
            <li>
              <h4 class="mb-2 font-bold">Expressing Surprise / Uncertainty:</h4>
              <p>
                そうですか - “Is that so?” / “Oh, really?” with nuance of mild
                surprise.
              </p>
            </li>
            <li>
              <h4 class="mb-2 font-bold">Polite Confirmations:</h4>
              <p>
                そうですね。- That’s right. <br />
                そうですか。- I see. / Is that so? Indicates attentiveness.
              </p>
            </li>
          </ul>
        </section>

        {/* Intonation */}
        <section>
          <h2 class="mb-6 text-center text-2xl font-semibold">Intonation</h2>
          <p>
            Intonation plays a crucial role with{" "}
            <span class="font-japanese">か</span>. Rising or falling tones can
            change whether you are seeking information, politely confirming, or
            showing realization.
          </p>

          <h3 class="mt-6 text-center text-xl font-semibold">
            Rising Intonation (<span class="text-yellow-400">↑</span>)
          </h3>
          <p>
            Rising intonation is often used in direct questions, especially when
            seeking new information or confirmation — just like in English.
          </p>
          <ul class="mt-4 ml-6 list-disc space-y-4">
            <li>
              <h4 class="mb-1 font-bold">Example 1:</h4>
              <p>
                Q: <span class="font-japanese text-xl">いまなんじですか。</span>{" "}
                – What time is it now?{" "}
              </p>
              <p>
                A: <span class="font-japanese text-xl">くじです。</span> – It is
                nine o’clock.
              </p>
            </li>
            <li>
              <h4 class="mb-1 font-bold">Example 2:</h4>
              <p>
                Q:{" "}
                <span class="font-japanese text-xl">
                  さとうさんはがくせいですか。
                </span>{" "}
                – Are you (Satou) a student?{" "}
              </p>
              <p>
                A:{" "}
                <span class="font-japanese text-xl">はい、がくせいです。</span>{" "}
                – Yes, I am a student.
              </p>
            </li>
          </ul>

          <h3 class="mt-10 text-center text-xl font-semibold">
            Falling Intonation (<span class="text-indigo-400">↓</span>)
          </h3>
          <p>
            Falling intonation is more common when confirming information you
            just heard, showing realization, or mild surprise.
          </p>
          <ul class="mt-4 ml-6 list-disc space-y-4">
            <li>
              <h4 class="mb-1 font-bold">Example 1:</h4>
              <p>
                A:{" "}
                <span class="font-japanese text-xl">
                  あのう、いまなんじですか。
                </span>{" "}
                – Excuse me, what time is it?
              </p>
              <p>
                B: <span class="font-japanese text-xl">いま、１０じです。</span>{" "}
                – Right now it’s 10 o’clock.
              </p>
              <p>
                A:{" "}
                <span class="font-japanese text-xl">
                  あ、１０じですか。ありがとうございます。
                </span>{" "}
                – Oh, it’s 10 o’clock. Thank you.
              </p>
            </li>
            <li>
              <h4 class="mb-1 font-bold">Example 2:</h4>
              <p>
                A:{" "}
                <span class="font-japanese text-xl">はじめまして。Aです。</span>{" "}
                – Nice to meet you. I’m A.
              </p>
              <p>
                B:{" "}
                <span class="font-japanese text-xl">
                  ああ、Aさんですか。はじめまして。Bです。
                </span>{" "}
                – Oh, you’re A? Nice to meet you. I’m B.
              </p>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section>
          <h2 class="pt-10 text-center text-2xl font-semibold">Conclusion</h2>
          <p class="mt-4">
            Mastering the use of the{" "}
            <span class="font-japanese text-red-500">か</span> particle is
            essential for forming questions naturally in Japanese. It shapes
            statements into yes/no questions, works with question words, conveys
            polite confirmations, and even substitutes for "or". Intonation adds
            an extra layer to the meaning. Once you practice listening and using
            it yourself, か will quickly feel like second nature.
          </p>
        </section>
      </main>
    </div>
  )
}

/* --- Reusable component for Q/A examples --- */
function ExampleQA(props: {
  q: string
  a: string
  gloss: string
  title: string
}) {
  return (
    <div class="mb-6">
      <h4 class="mb-1 font-bold">{props.title}</h4>
      <ul class="ml-6 list-disc space-y-1">
        <li>
          A: <span class="font-japanese text-xl">{props.q}</span>
        </li>
        <li>
          B: <span class="font-japanese text-xl">{props.a}</span> –{" "}
          {props.gloss}
        </li>
      </ul>
    </div>
  )
}
