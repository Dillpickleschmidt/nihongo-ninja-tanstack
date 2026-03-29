import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export const Route = createFileRoute("/lessons/_chapter-5/suki-kirai")({
  component: SukiKirai,
})

function SukiKirai() {
  return (
    <div class="mb-32">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        <span class="font-japanese text-green-400">好き</span> and{" "}
        <span class="font-japanese text-red-400">嫌い</span> - Special Cases
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          In Japanese, most adjectives simply describe things (like{" "}
          <span class="font-japanese text-xl">静か</span>/quiet). However,{" "}
          <span class="font-japanese text-xl">好き</span> (like) and{" "}
          <span class="font-japanese text-xl">嫌い</span> (dislike) are special,
          requiring both someone who feels the emotion and something that
          emotion is directed towards.
        </p>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <p class="text-2xl">
            <span class="text-xl font-light">(person)</span> は{" "}
            <span class="text-xl font-light">(thing)</span> が{" "}
            <span class="text-nowrap font-medium text-green-400">好き</span>・
            <span class="text-nowrap font-medium text-red-400">嫌い</span>
            です
          </p>
          <p class="mx-4 text-xl">
            <span class="text-lg font-light">(person)</span> likes/dislikes{" "}
            <span class="text-lg font-light">(thing)</span>
          </p>
          <p class="text-base text-muted-foreground">
            Literally: "As for (person), (thing) is likeable/unlikeable"
          </p>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">Basic Usage</h3>
        <div class="w-full space-y-2 text-center">
          <p class="font-japanese text-2xl">
            <span class="text-muted-foreground">(私は)</span>音楽が
            <span class="font-bold text-green-400">好き</span>です。
          </p>
          <p class="text-lg">I like music.</p>
          <p class="pt-2 font-japanese text-2xl">
            弟は野菜が<span class="font-bold text-red-400">嫌い</span>です。
          </p>
          <p class="text-lg">My little brother dislikes vegetables.</p>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">Particle Usage</h3>
        <p>Normal statements use が:</p>
        <div class="space-y-2">
          <p class="font-japanese text-xl">
            <span class="text-muted-foreground">(私は)</span>音楽が好きです。
          </p>
          <p class="text-lg">I like music</p>
        </div>

        <p class="mt-4">
          When contrasting likes/dislikes (for the same person), use は:
        </p>
        <div class="space-y-2">
          <p class="font-japanese text-xl">
            <span class="text-muted-foreground">(私は)</span>
            スポーツは好きですが、勉強はきらいです。
          </p>
          <p class="text-lg">I like sports, but I hate studying</p>
        </div>
        <p class="text-base italic text-muted-foreground">
          *We'll cover more about using は for comparisons in the next lesson
        </p>

        <h3 class="!mt-9 text-center text-xl font-bold">
          な Noun Modification
        </h3>
        <p>
          When describing nouns directly, 好き and 嫌い act like any other
          な-adjective. And like always, don't forget to use な to connect them
          to nouns:
        </p>
        <div>
          <div class="flex w-full items-center justify-between">
            <p class="w-1/2 font-japanese text-xl">A: 今何聴いてるの？</p>
            <p class="w-1/2 text-right text-muted-foreground">
              What are you listening to now?
            </p>
          </div>
          <div class="flex w-full items-center justify-between">
            <p class="w-1/2 font-japanese text-xl">
              B: 私の好きな音楽、クラシック。
            </p>
            <p class="w-1/2 text-right text-muted-foreground">
              My favorite music, classical.
            </p>
          </div>

          <div class="mt-6 flex w-full items-center justify-between">
            <p class="w-1/2 font-japanese text-xl">A: 妹さん、何が嫌い？</p>
            <p class="w-1/2 text-right text-muted-foreground">
              What does your sister dislike?
            </p>
          </div>
          <div class="flex w-full items-center justify-between">
            <p class="w-1/2 font-japanese text-xl">
              B: 妹の嫌いな食べ物はトマト。
            </p>
            <p class="w-1/2 text-right text-muted-foreground">
              My sister's least favorite food is tomato.
            </p>
          </div>
        </div>

        <h3 class="!mt-9 text-center text-xl font-bold">Adding Intensity</h3>
        <p>Add 大 (だい) to express stronger feelings:</p>
        <div class="space-y-2">
          <p class="font-japanese text-xl">
            <Furigana furigana={<span>じょうし</span>}>上司</Furigana>は
            <Furigana furigana={<span>ざんぎょう</span>}>残業</Furigana>が
            <span class="text-green-400">大好き</span>ですが、 私はお金が
            <span class="text-green-400">大好き</span>です。
          </p>
          <p class="text-lg">My boss loves overtime, but I love money.</p>
        </div>
        <p>
          嫌い already has a pretty strong sense of dislike, and can sometimes
          be translated as "hate" without 大. Therefore, adding 大 would be
          reserved for things that you absolutely detest.
        </p>

        <h3 class="!mt-9 text-center text-xl font-bold">Being Neutral</h3>
        <div class="space-y-2">
          <p class="font-japanese text-xl">
            好き<span class="underline underline-offset-2">でも</span>きらい
            <span class="underline underline-offset-2">でもない</span>です。
          </p>
          <p class="text-lg">I neither like nor dislike it.</p>
        </div>

        <p class="text-center text-xl font-bold">Cultural Note</p>
        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5">
          <h4 class="text-2xl font-bold">好き can be powerful.</h4>
          <p>
            When using <span class="font-japanese">好き</span> towards{" "}
            <u>people</u>, it carries stronger feelings than the English "like"
            and almost always implies romantic interest. The 大 isn't even
            needed. Saying "
            <Furigana furigana={<span class="text-xs">はるとくん</span>}>
              大翔君
            </Furigana>
            が好きです" is practically an omission of love to your crush,
            Haruto. If you add 大, you're essentially obsessed with them.
          </p>
          <h4 class="!mt-9 text-2xl font-bold">嫌い is kinda harsh.</h4>
          <div class="space-y-2">
            <p class="font-japanese">A：おすしを食べませんか。</p>
            <p class="text-base">Do you want to go out and eat sushi?</p>
            <p class="font-japanese">
              B：いいえ、おすしは好きじゃありません。嫌いです。
            </p>
            <p class="text-base">No I don't like sushi, I hate sushi.</p>
            <p class="text-base">A：... (Silence)</p>
            <p class="font-japanese">B：あ、ごめんね。おすしはちょっと…</p>
            <p class="text-base">Oh, sorry. Sushi is just not my thing...</p>
          </div>
          <p>
            Saying such a thing is pretty blunt/rude, and most people would
            think you don't want to talk anymore after that. It's so blunt that
            there's really nowhere left for the conversation to go. They might
            also think you're weird.{" "}
            <span class="font-japanese">おすしはちょっと…</span> is a better,
            more socially acceptable answer.
          </p>
          <p class="text-base text-muted-foreground">
            You might want to explain why though... I mean, who doesn't like
            sushi?
          </p>
        </div>
      </div>

      <div class="space-y-4 px-10 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the correct form for each situation*
        </p>

        <p>How would you say "I like sushi"?</p>
        <SelectText
          answer="おすしが好きです。"
          a="おすしを好きです。"
          b="おすしが好きです。"
          c="おすしは好きです。"
          class="text-xl"
        />

        <p>
          You want to say "I like sports but hate studying." Which particle
          pattern is correct?
        </p>
        <SelectText
          answer="スポーツは好きですが、勉強はきらいです。"
          a="スポーツが好きですが、勉強がきらいです。"
          b="スポーツは好きですが、勉強はきらいです。"
          c="スポーツが好きですが、勉強はきらいです。"
          class="text-xl"
        />

        <p>
          Your teacher asks what kind of books you like. How would you describe
          "books I like"? (ex: the books I like/my favorite books are ...)
        </p>
        <SelectText
          answer="私の好きな本"
          a="私の好きの本"
          b="私が好きな本"
          c="私の好きな本"
          class="text-xl"
        />

        <p>
          Your friend really loves cats. They've turned their entire house into
          a cat jungle gym. How would they state their affection for cats?
        </p>
        <SelectText
          answer="猫が大好きです。"
          a="猫を大好きです。"
          b="猫が大好きです。"
          c="猫は大好きです。"
          class="text-xl"
        />

        <p>How would you describe "the movies I like"?</p>
        <SelectText
          answer="私の好きな映画"
          a="私の好きの映画"
          b="私が好きな映画"
          c="私の好きな映画"
          class="text-xl"
        />

        <p>
          Someone asks about horror movies, but you feel neutral about them. How
          would you respond?
        </p>
        <SelectText
          answer="好きでもきらいでもないです。"
          a="好きでもきらいでもです。"
          b="好きでもきらいでもないです。"
          c="好きじゃないです。"
          class="text-xl"
        />
      </div>
    </div>
  )
}
