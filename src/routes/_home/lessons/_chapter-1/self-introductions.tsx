// routes/lessons/self-introductions.tsx
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/_home/lessons/_chapter-1/self-introductions")({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/lessons/japanese-names-honorifics",
      },
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* Header */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-5xl font-extrabold tracking-tight">
          <em>Self Introductions</em>
        </h1>
        <div class="mx-auto mb-6 h-1 w-20 rounded bg-emerald-400" />
      </header>

      {/* Main Lesson Content */}
      <main class="mx-auto max-w-3xl space-y-14 px-6 leading-relaxed">
        {/* First-Person Pronouns */}
        <section>
          <h2 class="mb-3 text-center text-2xl font-bold">
            First-Person Pronouns
          </h2>
          <p>
            In Japanese, there are several pronouns that you can use to refer to
            yourself, each with its own nuance and level of formality. Unlike
            English, which primarily uses "I," Japanese pronouns can reflect
            gender, formality, and personal style.
          </p>

          <div class="mt-6">
            <YouTubeVideo
              videoId="MNR0egvK_oQ"
              title="Nuances of Japanese First-Person Pronouns by Kaname Naito, Mar 26 2023"
              credit="Kaname Naito"
            />
          </div>
        </section>

        {/* Individual Pronoun Sections */}
        <PronounSection
          jp="私"
          roman="Watashi"
          furigana="わたし"
          description={[
            {
              label: "Usage",
              text: "Gender-neutral, widely used in formal and informal contexts.",
            },
            {
              label: "Context",
              text: `Generally considered the "default" first-person pronoun in Japanese, suitable for men and women in most situations.`,
            },
            {
              label: "Nuance",
              text: "Neutral and versatile. Men use it in formal settings, while casual contexts might prefer 僕 or 俺.",
            },
          ]}
          story={{
            title: "Introducing yourself",
            characters:
              "You (the learner), Ms. Yamamoto (coworker), new colleague",
            text: `As you greet a new colleague, you say, 「私(わたし)は [your name] です。よろしくお願いします。」 Using わたし shows respect and professionalism.`,
          }}
        />

        <PronounSection
          jp="私"
          roman="Watakushi"
          furigana="わたくし"
          description={[
            {
              label: "Usage",
              text: "Very formal, gender-neutral. (Same kanji as わたし)",
            },
            {
              label: "Context",
              text: "Used in highly formal settings (speeches, ceremonies, speaking to higher status).",
            },
          ]}
          story={{
            title: "Award ceremony",
            characters: "You (recipient), audience",
            text: `On stage, you introduce yourself using わたくし, showing the seriousness and formality of the event.`,
          }}
        />

        <PronounSection
          jp="僕"
          roman="Boku"
          furigana="ぼく"
          description={[
            {
              label: "Usage",
              text: "Informal, typically used by males (or tomboys).",
            },
            {
              label: "Context",
              text: "Boys and men use it in casual or semi-formal contexts. Conveys humility, less formal than わたし.",
            },
          ]}
          story={{
            title: "School club introduction",
            characters: "You (a new member), club members",
            text: `Joining the soccer club, you casually say 「僕は [your name] です」, fitting natural expectations of boys.`,
          }}
        />

        <PronounSection
          jp="俺"
          roman="Ore"
          furigana="おれ"
          description={[
            {
              label: "Usage",
              text: "Very informal, typically used by males (or tomboys).",
            },
            {
              label: "Context",
              text: "Used among close friends or casual settings. Can sound rude if misused, conveys confidence/masculinity.",
            },
          ]}
          story={{
            title: "Gaming night with friends",
            characters: "You (with close friends)",
            text: `Hanging at a game night, you say 「俺が勝つぞ!」 showing confidence and camaraderie.`,
          }}
        />

        <PronounSection
          jp="あたし"
          roman="Atashi"
          description={[
            {
              label: "Usage",
              text: "Informal, typically used by females. Often written in hiragana but shares kanji 私.",
            },
            {
              label: "Context",
              text: "Used casually by women/girls. A softer, more feminine version of わたし.",
            },
          ]}
          story={{
            title: "Café with friends",
            characters: "You (a young woman), friends",
            text: `At a café, you casually introduce yourself with あたし, keeping the mood light and friendly.`,
          }}
        />

        <PronounSection
          jp="うち"
          roman="Uchi"
          description={[
            {
              label: "Usage",
              text: "Used by young women, especially Kansai region.",
            },
            {
              label: "Context",
              text: "Common in Osaka/Kansai. Sounds modest, casual, feminine.",
            },
          ]}
          story={{
            title: "High school after-class chat",
            characters: "You (a female student), classmates",
            text: `Chatting after school, you use うち naturally with friends, common in Kansai speech.`,
          }}
        />

        <PronounSection
          jp="儂"
          roman="Washi"
          furigana="わし"
          description={[
            { label: "Usage", text: "Informal, older men." },
            {
              label: "Context",
              text: "Used mainly by elderly men, Hiroshima dialect, or anime. Conveys wisdom/age.",
            },
          ]}
          story={{
            title: "Telling stories to grandchildren",
            characters: "You (elderly man), grandchildren",
            text: `You begin, 「儂は教師じゃった」, emphasizing your age/authority.`,
          }}
        />

        {/* Plural First-Person */}
        <section>
          <h3 class="text-center text-2xl font-bold">Plural First-Person</h3>
          <ul class="space-y-4 pt-4 text-xl">
            <li>
              <span class="font-japanese font-semibold">私たち</span> – Plural
              of わたし
            </li>
            <li>
              <span class="font-japanese font-semibold">僕たち</span> – Plural
              of ぼく
            </li>
            <li>
              <span class="font-japanese font-semibold">俺たち</span> – Plural
              of おれ
            </li>
            <li>
              <span class="font-japanese font-semibold">あたしたち</span> –
              Plural of あたし
            </li>
            <li>
              <span class="font-japanese font-semibold">うちたち</span> – Plural
              of うち
            </li>
          </ul>
        </section>

        <PronounSection
          jp="我々"
          roman="Wareware"
          furigana="われわれ"
          description={[
            {
              label: "Usage",
              text: "Formal, often in speeches/literary contexts.",
            },
            {
              label: "Context",
              text: "Refers to group with strong sense of unity.",
            },
          ]}
          story={{
            title: "Company announcement",
            characters: "You (rep), employees",
            text: `「我々は excellence を目指します」. Emphasizes group unity/formality.`,
          }}
        />

        {/* Introducing Yourself */}
        <section>
          <h2 class="mb-3 text-center text-3xl font-bold">
            Introducing Yourself
          </h2>

          <YouTubeVideo
            videoId="t1iTJK31UYw"
            title="First-time Greeting in Japanese for Beginners by Kaname Naito, Jun 15 2024"
            credit="Kaname Naito"
            timestamps={[
              { time: 0, label: "First-time Greetings" },
              { time: 256, label: "How to Ask for Someone's Name" },
            ]}
          />

          <p class="mt-6">
            We've learned the <span class="font-bold">X</span>
            <span class="font-japanese">は</span>
            <span class="font-bold">Y</span>
            <span class="font-japanese">です</span> structure. So you can say:
          </p>

          <p class="font-japanese text-center font-semibold">
            私は [Your name] です。
          </p>

          <p class="mt-4">
            But note: Japanese often omits pronouns when obvious from context.
            Overusing 私 can feel redundant. Instead, it’s smoother to just say:
          </p>

          <h4 class="py-4 text-center text-3xl font-bold">
            [your name] + です。
          </h4>

          <p>
            A richer self-introduction includes greetings and やさしい phrases:
          </p>
          <p class="font-japanese text-xl font-semibold">
            こんにちは！はじめまして！ [your name] です。 [info]
            です。どうぞよろしくお願いします。
          </p>

          <ul class="mt-6 list-disc space-y-2 pl-6">
            <li>
              <span class="font-japanese font-bold">こんにちは</span> – Hello
            </li>
            <li>
              <span class="font-japanese font-bold">はじめまして</span> – “Nice
              to meet you”
            </li>
            <li>[Info]です – Add role/hobby (学生です, 趣味は読書です…)</li>
            <li>
              <span class="font-japanese font-bold">
                どうぞよろしくお願いします
              </span>{" "}
              – Polite closure, wishing goodwill.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 class="text-2xl font-bold">Summary</h2>
          <ul class="mt-2 ml-6 list-disc space-y-4">
            <li>
              Multiple pronouns exist — 私 is safe/default, but choose based on
              formality, gender nuance, and context.
            </li>
            <li>[name] + です = simplest intro</li>
            <li>
              Full intro: 「どうも、こんにちは。[name] です。[extra info]
              です。どうぞよろしくお願いします。」
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

/* --- Helper Pronoun Reuse Component --- */
function PronounSection(props: {
  jp: string
  roman: string
  furigana?: string
  description: { label: string; text: string }[]
  story: { title: string; characters: string; text: string }
}) {
  return (
    <section class="mt-12">
      <h3 class="font-japanese text-3xl font-bold">
        {props.furigana ? (
          <Furigana furigana={props.furigana}>{props.jp}</Furigana>
        ) : (
          props.jp
        )}{" "}
        - <span class="font-honk text-4xl">{props.roman}</span>
      </h3>

      <ul class="mt-3 space-y-2">
        {props.description.map((d) => (
          <li>
            <span class="font-bold">{d.label}: </span>
            {d.text}
          </li>
        ))}
      </ul>

      <div class="bg-muted/40 mt-4 rounded-md p-4">
        <h4 class="text-lg font-bold">Story: {props.story.title}</h4>
        <h4 class="text-md mb-2">
          <span class="font-bold">Characters:</span> {props.story.characters}
        </h4>
        <p class="text-sm">{props.story.text}</p>
      </div>
    </section>
  )
}
