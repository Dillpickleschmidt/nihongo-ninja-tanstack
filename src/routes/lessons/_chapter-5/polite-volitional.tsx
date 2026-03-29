import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import CustomTextArea from "@/components/ui/custom/CustomTextArea"
import Romaji from "@/components/text/Romaji"
import WanakanaWrapper from "@/features/wanakana/WanaKana"

export const Route = createFileRoute(
  "/lessons/_chapter-5/polite-volitional",
)({
  component: PoliteVolitional,
})

function PoliteVolitional() {
  return (
    <div class="mb-32">
      <h1 class="px-6 pb-6 pt-6 text-center text-4xl font-semibold sm:px-12 sm:pt-12 lg:px-28 lg:pt-24">
        Polite Volitional & Suggestions -{" "}
        <span class="text-nowrap font-japanese text-violet-400">ましょう</span>{" "}
        and{" "}
        <span class="text-nowrap font-japanese text-indigo-200">
          ましょうか
        </span>
      </h1>
      <div class="space-y-6 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          You've already learned how to extend an invitation with{" "}
          <span class="font-japanese text-xl font-semibold text-teal-400">
            ませんか
          </span>
          , but what if you want to be a little more suggestive? Introducing{" "}
          <span class="font-japanese text-xl font-semibold text-indigo-200">
            ましょうか
          </span>
          , meaning <span class="font-black">shall we?</span>.
        </p>
        <p class="text-base italic text-muted-foreground">
          There are relevant rap passages at the end of the lesson!
        </p>

        <hr class="my-6 border-t" />

        <h2 class="text-2xl font-bold">
          1. <span class="font-japanese text-indigo-200">ましょうか</span>
        </h2>
        <h3 class="!mt-3 text-center text-2xl font-medium">
          ます Verb Stem +{" "}
          <span class="font-japanese font-semibold text-indigo-200">
            ましょうか
          </span>
        </h3>

        <div class="flex w-full justify-center font-japanese text-xl">
          <div>
            <div>行きます</div>
            <div>行き</div>
            <div>
              行き<span class="font-semibold text-indigo-200">ましょうか</span>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold">Example</h3>
        <p class="!mt-3">
          <span class="font-japanese text-xl">
            映画を見
            <span class="font-semibold text-indigo-200">ましょうか</span>。
          </span>
          {"->"} Shall we go watch a movie?
        </p>

        <hr class="my-6 border-t" />

        <p>
          To compare{" "}
          <span class="font-japanese text-xl font-semibold text-teal-400">
            ませんか
          </span>{" "}
          and <span class="font-semibold text-indigo-200">ましょうか</span>,
          take a look at the following description:
        </p>
        <p>
          In the context of asking someone on a date, デートに行きませんか feels
          slightly more formal and could be better for a first-time invitation,
          while デートに行きましょうか feels more casual and might be better
          used between people who are already somewhat familiar with each other.
        </p>
        <p class="text-base text-muted-foreground">
          Similar to the English counterparts of "would you like to go on a
          date?" and "shall we go on a date?"—one makes sense for a first-time
          invitation, while the other indicates that you're already pretty
          comfortable dating (or maybe you're just really confident).
        </p>

        <hr class="my-6 border-t" />

        <h3 class="text-xl font-bold">More examples</h3>
        <ul class="!mt-3 list-disc space-y-4 pl-6">
          <li class="space-y-2">
            <div class="space-y-1">
              <p>
                <span class="font-japanese text-xl">
                  今晩
                  <Romaji romaji="together">
                    <Furigana furigana={<span class="text-sm">いっしょ</span>}>
                      一緒
                    </Furigana>
                    に
                  </Romaji>
                  食べ
                  <span class="font-semibold text-teal-400">ませんか</span>。
                </span>
                {"->"} Would you like to eat together tonight?
              </p>
              <p class="text-base text-muted-foreground">
                You're thinking about cooking dinner for the family, and you're
                asking your father what he thinks.
              </p>
            </div>
            <div class="space-y-1">
              <p>
                <span class="font-japanese text-xl">
                  じゃあ、一緒に食べ
                  <span class="font-semibold text-indigo-200">ましょうか</span>
                  。
                </span>
                {"->"} Well then, shall we eat together?
              </p>
              <p class="text-base text-muted-foreground">
                Dinner's ready. Everyone usually eats separately, but you're
                feeling a little festive today.
              </p>
            </div>
          </li>
          <li class="space-y-2">
            <div class="space-y-1">
              <p>
                <span class="font-japanese text-xl">
                  コンビニに行き
                  <span class="font-semibold text-teal-400">ませんか</span>。
                </span>
                {"->"} Would you like to go to the convenience store (with me)?
              </p>
              <p class="text-base text-muted-foreground">
                You heard that your colleague wanted to buy some snacks, and you
                happen to be leaving for the convenience store.
              </p>
            </div>
            <div class="space-y-1">
              <p>
                <span class="font-japanese text-xl">
                  コンビニに行き
                  <span class="font-semibold text-indigo-200">ましょうか</span>
                  。
                </span>
                {"->"} Shall we go to the convenience store?
              </p>
              <p class="text-base text-muted-foreground">
                A new coworker looks tired during overtime work, and you want to
                suggest getting coffee together.
              </p>
            </div>
          </li>
        </ul>

        <hr class="my-6 border-t" />

        <h2 class="!mt-9 text-2xl font-bold">
          2. <span class="font-japanese text-violet-400">ましょう</span>
        </h2>
        <p>
          If you don't really want them to decline, drop the か to make it a
          suggestion instead of a question.{" "}
          <span class="font-japanese font-semibold text-violet-400">
            ましょう
          </span>{" "}
          means <span class="font-black">let's</span> (do something).
        </p>

        <h3 class="text-xl font-bold">Examples</h3>
        <ul class="!mt-3 list-disc space-y-4 pl-6">
          <li class="space-y-2">
            <span class="font-japanese text-xl">
              映画を見
              <span class="font-semibold text-violet-400">ましょう</span>。
            </span>
            {"->"} Let's watch a movie.
          </li>
          <li class="space-y-2">
            <span class="font-japanese text-xl">
              <Romaji romaji="together">
                <Furigana furigana={<span class="text-sm">いっしょ</span>}>
                  一緒
                </Furigana>
                に
              </Romaji>
              食べ
              <span class="font-semibold text-violet-400">ましょう</span>。
            </span>
            {"->"} Let's eat together.
          </li>
          <li class="space-y-2">
            <span class="font-japanese text-xl">
              コンビニに行き
              <span class="font-semibold text-violet-400">ましょう</span>。
            </span>
            {"->"} Let's go to the convenience store.
          </li>
        </ul>

        <h2 class="!mt-12 text-center text-2xl font-bold">Rap Passages</h2>
        {/* <p class="!mt-3">Grammar doesn't have to be boring:</p> */}
        <h2 class="font-bold italic">
          Inspired by my unhealthy Chris Turner binge watching:
        </h2>
        <YouTubeVideo
          title="British Rapper's Freestyle skills will SURPRISE you..."
          videoId="l0G757AvCbE"
          credit="Chris Turner
"
        />
        <div class="space-y-2">
          <h3 class="font-bold">Planning a Movie Night</h3>
          <p class="leading-8">
            <span class="font-kite_one text-base font-bold">
              Yo, it's Friday night, what we gonna do?
            </span>{" "}
            <span class="font-japanese text-base text-indigo-200">
              (今晩何をしましょうか？)
            </span>
            <br />
            <span class="font-kite_one text-base font-bold">
              Let's not just sit here, let's watch a movie too
            </span>{" "}
            <span class="font-japanese text-base text-violet-400">
              (映画を見ましょう)
            </span>
            .
            <br />
            <span class="font-kite_one text-base font-bold">
              Forget the usual, let's find something weird,
            </span>
            <br />
            <span class="font-kite_one text-base font-bold">
              Shall we watch a film about a samurai beard?
            </span>{" "}
            <span class="font-japanese text-base text-indigo-200">
              (サムライの髭の映画を見ましょうか？)
            </span>
          </p>
        </div>

        <div class="space-y-2">
          <h3 class="font-bold">Late Night Snack Run</h3>
          <p class="leading-8">
            <span class="font-kite_one text-base font-bold">
              Midnight hunger, can't ignore the call,
            </span>
            <br />
            <span class="font-kite_one text-base font-bold">
              Let's hit the konbini, before we fall
            </span>{" "}
            <span class="font-japanese text-base text-violet-400">
              (コンビニに行きましょう)
            </span>
            .
            <br />
            <span class="font-kite_one text-base font-bold">
              Shall we find the craziest snack in Japan?
            </span>
            <span class="font-japanese text-base text-indigo-200">
              (一番おかしなスナックを見つけましょうか？)
            </span>
            <br />
            <span class="font-kite_one text-base font-bold">
              Let's make our taste buds do a happy dance.
            </span>
          </p>
        </div>

        <div class="space-y-2">
          <h3 class="font-bold">Organizing a Group Dinner</h3>
          <p class="leading-8">
            <span class="font-kite_one text-base font-bold">
              Guys, we're all here, let's not eat alone,
            </span>
            <br />
            <span class="font-kite_one text-base font-bold">
              Shall we dine together, make it a zone?
            </span>{" "}
            <span class="font-japanese text-base text-indigo-200">
              (一緒に食べましょうか？)
            </span>
            <br />
            <span class="font-kite_one text-base font-bold">
              Let's cook something wild, something we've never tried,
            </span>
            <br />
            <span class="font-kite_one text-base font-bold">
              Let's make tonight epic, let's not be shy
            </span>{" "}
            <span class="font-japanese text-base text-violet-400">
              (今夜を盛大にしましょう)
            </span>
            .
          </p>
        </div>

        <p class="leading-relaxed">
          Now, either that was midly amusing and you learned some contexts you
          could use volitional form in, or you{" "}
          <span class="text-xl font-medium">
            suddenly have an urge to jump off a bridge after reading such cringe
          </span>
          . <span class="text-base">Sorry, not sorry :P</span>
        </p>
      </div>
    </div>
  )
}
