// routes/lessons/japanese-names-honorifics.tsx
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import { Button } from "@/components/ui/button"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute(
  "/_home/lessons/_chapter-1/japanese-names-honorifics",
)({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/lessons/saying-you-in-japanese",
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
          Japanese Names &amp; Honorifics
        </h1>
        <div class="mx-auto mb-6 h-1 w-20 rounded bg-emerald-400" />
        <p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
          This one's really fun because by the end of this lesson, whenever you
          watch something in Japanese, you'll be able to pick up important
          information that simply won't be conveyed in English subs, enriching
          your experience more than those who haven't learned Japanese.
        </p>
      </header>

      {/* MAIN LESSON CONTENT */}
      <main class="mx-auto max-w-3xl space-y-14 px-6 leading-relaxed">
        {/* Structure of Names */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            Structure of Japanese Names
          </h2>
          <p>
            Japanese names typically consist of a family name (surname) followed
            by a given name. This order is the <strong>opposite</strong> of
            Western naming conventions where the given name usually comes first.
          </p>

          <div class="my-6 text-center">
            <h4 class="mb-2 text-xl font-bold">Example:</h4>
            <h3 class="text-2xl">
              <Furigana furigana={<span class="text-sm">たなか</span>}>
                田中
              </Furigana>{" "}
              <Furigana furigana={<span class="text-sm">たろう</span>}>
                太郎
              </Furigana>{" "}
              <span class="text-[1.375rem]">(Tanaka Tarou)</span>
            </h3>
            <p class="text-muted-foreground mt-1">(last—first)</p>
          </div>

          <ul class="space-y-2">
            <li>
              <span class="font-bold">Family Name: </span>
              <span class="font-japanese">田中</span> (Tanaka) - Means{" "}
              <em>within rice fields</em>.
            </li>
            <li>
              <span class="font-bold">Given Name: </span>
              <span class="font-japanese">太郎</span> (Tarou) - Means{" "}
              <em>great son</em>.
            </li>
          </ul>
          <p class="text-muted-foreground mt-3 text-sm italic">
            *Family names often refer to geographical features or parts of
            nature.
          </p>

          <div class="mt-6 text-center">
            <h4 class="mb-3 text-xl font-semibold">
              Foreign names are usually written in katakana and in their native
              order.
            </h4>
            <h4 class="text-lg font-bold">Example:</h4>
            <h3 class="mt-2 text-xl">
              <Furigana furigana={<span class="text-sm">とむ</span>}>
                トム
              </Furigana>
              ・
              <Furigana furigana={<span class="text-sm">くるーず</span>}>
                クルーズ
              </Furigana>{" "}
              <span class="text-lg">(Tom Cruise)</span>
            </h3>
          </div>
        </section>

        {/* Cultural Differences */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            Cultural Differences in Addressing People
          </h2>

          <h4 class="text-xl font-bold">Family Name vs. Given Name</h4>
          <ul class="list-disc space-y-2 pl-6">
            <li>
              <span class="font-bold">In Japan: </span>It is customary to
              address people by their family names rather than their given
              names, especially in formal or new relationships. Using the family
              name with an appropriate honorific shows respect and politeness.
            </li>
            <li>
              <span class="font-bold">In Western Cultures: </span>It is more
              common to use given names, even in formal situations.
            </li>
          </ul>

          <h4 class="mt-6 text-xl font-bold">
            Importance of Using Family Names
          </h4>
          <p>
            <span class="font-bold">Formality and Respect: </span>In Japan,
            addressing someone by their given name without permission is
            considered <strong>very rude and presumptuous</strong>. It implies a
            level of intimacy or familiarity that is not appropriate in most
            social and professional settings.
          </p>

          <h3 class="mt-6 text-center text-2xl font-medium">
            Always use the family name with the appropriate honorific unless you
            have been explicitly invited to use the given name.
          </h3>
        </section>

        {/* HONORIFICS */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            Honorifics: Politeness in Address
          </h2>

          <YouTubeVideo
            videoId="5rOHpkpYMIM"
            title="Re:Zero's Japanese Honorifics (Sama, San, Kun, Chan, Tan, Dono) Explained"
            credit="That Japanese Man Yuta"
          />

          <p class="mt-6">
            Honorifics are suffixes added to names to convey respect, formality,
            and the relationship between the speaker and the person being
            addressed. Here are some common honorifics:
          </p>

          {/* Honorific sections */}
          <HonorificSection
            jp="さん"
            en="San"
            description={[
              {
                label: "Usage",
                text: "Most common honorific, gender-neutral.",
              },
              {
                label: "Context",
                text: 'Used in most polite interactions, similar to "Mr./Ms." in English.',
              },
            ]}
            story={{
              title: "Office setting",
              characters: "You (a new employee), Mr. Tanaka (your colleague)",
              text: `On your first day at the office, you meet Mr. Tanaka, your colleague. You say, "Good morning, Tanaka-san. My name is [Your Name]." Using さん shows respect and politeness, making your introduction smooth and professional.`,
            }}
          />

          <HonorificSection
            jp="ちゃん"
            en="Chan"
            description={[
              {
                label: "Usage",
                text: "Informal, affectionate, typically used for children, close friends, or significant others.",
              },
              {
                label: "Context",
                text: "Conveys endearment and closeness.",
              },
            ]}
            story={{
              title: "Family gathering",
              characters: "You (a family member), little Sakura (your niece)",
              text: `At a family gathering, you say, "Sakura-chan, come here and give me a hug!" Using ちゃん conveys your affection and closeness, making Sakura giggle and run into your arms.`,
            }}
          />

          <div class="border-muted-foreground/20 mt-10 border-t pt-6">
            <h3 class="text-3xl font-bold">
              <Furigana furigana="くん">君</Furigana> -{" "}
              <span class="font-honk text-4xl">Kun</span>
            </h3>
            <YouTubeVideo
              videoId="beRayxTGDKY"
              title="The Japanese honorific くん -kun: How, why, when it is used"
              credit="Kyota Ko"
            />
            <ul class="mt-3 space-y-1">
              <li>
                <span class="font-bold">Usage: </span>Informal, typically used
                for boys and young men.
              </li>
              <li>
                <span class="font-bold">Context: </span>Used among friends,
                classmates, or by superiors addressing male subordinates.
              </li>
            </ul>
            <div class="bg-muted/40 mt-4 rounded-md p-4">
              <h4 class="text-lg font-bold">Story: School setting</h4>
              <h4 class="text-md mb-2">
                <span class="font-bold">Characters:</span> You (a student),
                Tarou (your classmate)
              </h4>
              <p class="text-sm">
                During recess, you say, "Nice shot, Tarou-kun!" Using くん shows
                your friendly supportive relationship.
              </p>
            </div>
          </div>

          <HonorificSection
            jp="先生"
            en="Sensei"
            description={[
              {
                label: "Usage",
                text: "For teachers, doctors, or masters of a craft.",
              },
              {
                label: "Context",
                text: "Conveys respect for expertise and authority.",
              },
            ]}
            story={{
              title: "Classroom setting",
              characters: "You (a student), Mr. Yamada (your teacher)",
              text: `During class, you raise your hand and say, "Yamada-sensei, I have a question." Using 先生 shows respect for Mr. Yamada's knowledge.`,
            }}
          />

          <HonorificSection
            jp="先輩"
            en="Senpai"
            description={[
              {
                label: "Usage",
                text: "For senior colleagues or upperclassmen. Commonly used in both hiragana (せんぱい) and kanji (先輩).",
              },
              {
                label: "Context",
                text: "Shows respect for someone who is more experienced.",
              },
            ]}
            story={{
              title: "Club activity",
              characters: "You (a new club member), Senior Takahashi",
              text: `At your first club meeting, you say, "Takahashi-senpai, can you show me how to use this equipment?" Using せんぱい acknowledges his seniority.`,
            }}
          />

          <HonorificSection
            jp="様"
            en="Sama"
            description={[
              { label: "Usage", text: "Very formal, respectful." },
              {
                label: "Context",
                text: "Used in business settings, for customers, or in very polite contexts.",
              },
            ]}
            story={{
              title: "Customer service",
              characters: "You (a store employee), Ms. Tanaka (a customer)",
              text: `At a boutique, you greet: "Welcome, Tanaka-sama. How can I help today?" Using 様 conveys utmost respect.`,
            }}
          />

          <div class="border-muted-foreground/20 mt-10 border-t pt-6">
            <h3 class="text-3xl font-bold">
              <Furigana furigana="どの">殿</Furigana> -{" "}
              <span class="font-honk text-4xl">Dono</span>
            </h3>
            <YouTubeVideo
              videoId="F6uVxd8nTA8"
              title="What is the Japanese honorific -dono all about?"
              credit="Kyota Ko"
            />
            <ul class="mt-3 space-y-1">
              <li>
                <span class="font-bold">Usage: </span>Very formal, archaic.
              </li>
              <li>
                <span class="font-bold">Context: </span>Not used in modern
                Japanese, but appears in period settings.
              </li>
            </ul>
            <div class="bg-muted/40 mt-4 rounded-md p-4">
              <h4 class="text-lg font-bold">Story: Historical drama</h4>
              <h4 class="text-md mb-2">
                <span class="font-bold">Characters:</span> You (a samurai), Lord
                Oda
              </h4>
              <p class="text-sm">
                In a drama, you kneel and say, "Oda-dono, I am ready to serve."
                Using 殿 conveys period-appropriate formality.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Titles */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            Additional Titles Based on Occupation
          </h2>
          <p>
            In addition to the common honorifics, certain titles are used to
            address people based on their occupation or position. You're not
            expected to memorize these now, but here are some examples:
          </p>
          <ul class="mt-4 space-y-3">
            <li>
              <span class="font-japanese text-xl font-bold">社長</span>{" "}
              (Shachou) - President or CEO of a company
            </li>
            <li class="ml-6">Ex: 田中社長 (Tanaka-shachou)</li>
            <li>
              <span class="font-japanese text-xl font-bold">部長</span> (Buchou)
              - Department manager or head
            </li>
            <li class="ml-6">Ex: 佐藤部長 (Satou-buchou)</li>
            <li>
              <span class="font-japanese text-xl font-bold">課長</span> (Kachou)
              - Section manager
            </li>
            <li class="ml-6">Ex: 鈴木課長 (Suzuki-kachou)</li>
            <li>
              <span class="font-japanese text-xl font-bold">主任</span> (Shunin)
              - Chief of a smaller group
            </li>
            <li class="ml-6">Ex: 山田主任 (Yamada-shunin)</li>
            <li>
              <span class="font-japanese text-xl font-bold">隊長</span>{" "}
              (Taichou) - Captain / leader of a team or unit
            </li>
            <li class="ml-6">Ex: 鈴木隊長 (Suzuki-taichou)</li>
          </ul>
        </section>

        {/* Understanding Context */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            Understanding Context and Nuance
          </h2>
          <p>
            Understanding when and how to use honorifics is key to mastering
            polite Japanese. Here are some guidelines:
          </p>
          <ul class="mt-4 space-y-2">
            <li>
              <span class="font-bold">
                Use さん (San) for general politeness:
              </span>{" "}
              This is the safest honorific. Use it unless you have a specific
              reason to use another.
            </li>
            <li>
              <span class="font-bold">
                Use 先生 (Sensei) for teachers and experts:
              </span>{" "}
              Shows respect for knowledge and expertise.
            </li>
            <li>
              <span class="font-bold">
                Use ちゃん (Chan) and くん (Kun) for informality:
              </span>{" "}
              Among friends, family, or children. ちゃん generally for
              females/kids; くん for boys.
            </li>
            <li>
              <span class="font-bold">
                Use せんぱい (Senpai) in hierarchical contexts:
              </span>{" "}
              For senior classmates or colleagues.
            </li>
            <li>
              <span class="font-bold">Use さま (Sama) for high respect:</span>{" "}
              In business, customer service, or formal settings.
            </li>
            <li class="font-bold underline underline-offset-2">
              Avoid using honorifics for yourself.
            </li>
          </ul>
        </section>

        {/* Practice Section */}
        <section>
          <h2 class="pt-16 !pb-6 text-center text-5xl font-bold">Practice</h2>
          <h4 class="pb-2 text-center text-xl font-bold">
            Put the descriptions in the correct order [wip]
          </h4>
          <div class="flex flex-col gap-4 pb-24 md:flex-row">
            <ul class="font-japanese flex flex-1 flex-col space-y-2 [&>*]:text-xl">
              <Button variant="outline">さん</Button>
              <Button variant="outline">ちゃん</Button>
              <Button variant="outline">くん</Button>
              <Button variant="outline">さま</Button>
              <Button variant="outline">せんせい</Button>
              <Button variant="outline">せんぱい</Button>
            </ul>
            <ul class="flex-1 space-y-2 [&>*]:justify-start [&>*]:text-start [&>*]:text-[1.125rem]">
              <Button variant="outline">
                Used for young boys or male friends
              </Button>
              <Button variant="outline">Used for teachers or doctors</Button>
              <Button variant="outline">
                General polite term, similar to Mr./Ms.
              </Button>
              <Button variant="outline">
                Used for senior colleagues or upperclassmen
              </Button>
              <Button variant="outline">
                Very formal, used in business settings or for customers
              </Button>
              <Button variant="outline">
                Affectionate, used for children or close friends
              </Button>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

/* --- Helper Honorific Section --- */
function HonorificSection(props: {
  jp: string
  en: string
  description: { label: string; text: string }[]
  story: { title: string; characters: string; text: string }
}) {
  return (
    <div class="border-muted-foreground/20 mt-10 border-t pt-6">
      <h3 class="text-3xl font-bold">
        <span class="font-japanese">{props.jp}</span> -{" "}
        <span class="font-honk text-4xl">{props.en}</span>
      </h3>
      <ul class="mt-3 space-y-1">
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
    </div>
  )
}
