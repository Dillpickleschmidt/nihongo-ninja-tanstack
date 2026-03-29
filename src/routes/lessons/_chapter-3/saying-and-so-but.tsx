import { createFileRoute } from "@tanstack/solid-router"
import YouTubeVideo from "@/features/youtube/YouTube"
import CustomTextArea from "@/components/ui/custom/CustomTextArea"
import WanakanaWrapper from "@/features/wanakana/WanaKana"

export const Route = createFileRoute(
  "/lessons/_chapter-3/saying-and-so-but",
)({
  component: SayingAndSoBut,
})

function SayingAndSoBut() {
  return (
    <div class="mb-32">
      <h1 class="px-6 pb-6 pt-6 text-center text-4xl font-semibold sm:px-12 sm:pt-12 lg:px-28 lg:pt-24">
        Saying And, So, and But in Japanese
      </h1>
      <div class="space-y-6 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          In this lesson, we'll learn how to connect ideas in Japanese using
          words that mean{" "}
          <span class="font-bold underline underline-offset-[3px]">and</span>,{" "}
          <span class="font-bold underline underline-offset-[3px]">so</span>,
          and{" "}
          <span class="font-bold underline underline-offset-[3px]">but</span>.
          We'll focus on five important words:{" "}
          <span class="font-japanese text-xl font-medium">
            そして、それから、でも、けど、
          </span>
          and <span class="font-japanese text-xl font-medium">が</span>.
        </p>

        <h2 class="text-center text-[1.6rem] font-bold">
          Saying{" "}
          <span class="italic underline underline-offset-[3px]">And</span>
        </h2>
        <p>
          Both <span class="font-japanese">そして</span> and{" "}
          <span class="font-japanese">それから</span> mean{" "}
          <span class="font-bold underline underline-offset-[3px]">and</span> or{" "}
          <span class="font-bold underline underline-offset-[3px]">
            and then
          </span>
          . They're used to connect sentences or ideas.
        </p>

        <h3 class="text-3xl font-medium">
          <span class="font-japanese">そして</span> -{" "}
          <span class="font-honk text-4xl">Soshite</span>
        </h3>
        <ul class="list-inside list-disc space-y-2">
          <li>Used to add information or show a sequence of events.</li>
          <li>
            <span class="font-bold">Example: </span>
            <span class="font-japanese text-xl">
              私は朝ごはんを食べます。そして、学校に行きます。
            </span>
            {"->"} I eat breakfast. And then, I go to school.
          </li>
        </ul>

        <h3 class="text-3xl font-medium">
          <span class="font-japanese">それから</span> -{" "}
          <span class="font-honk text-4xl">Sorekara</span>
        </h3>
        <ul class="list-inside list-disc space-y-2">
          <li>
            Similar to <span class="font-japanese">そして</span>, but often
            implies a longer time gap between events.
          </li>
          <li>
            <span class="font-bold">Example: </span>
            <span class="font-japanese text-xl">
              私は宿題をします。それから、テレビを見ます。
            </span>
            {"->"} I do my homework. After that, I watch TV.
          </li>
        </ul>

        <h2 class="text-center text-[1.6rem] font-bold">
          Saying{" "}
          <span class="italic underline underline-offset-[3px]">But</span>
        </h2>
        <p>
          These words are used to show contrast or introduce a contradicting
          idea.
        </p>

        <h3 class="text-3xl font-medium">
          <span class="font-japanese">でも</span> -{" "}
          <span class="font-honk text-4xl">Demo</span>
        </h3>
        <ul class="list-inside list-disc space-y-2">
          <li>
            Used at the beginning of a sentence to mean{" "}
            <span class="font-bold underline underline-offset-[3px]">but</span>{" "}
            or{" "}
            <span class="font-bold underline underline-offset-[3px]">
              however
            </span>
            .
          </li>
          <li>
            <span class="font-bold">Example: </span>
            <span class="font-japanese text-xl">
              日本語は難しいです。でも、楽しいです。
            </span>
            {"->"} Japanese is difficult. But it's fun.
          </li>
        </ul>

        <p class="text-base italic text-muted-foreground">
          Important note: <span class="font-japanese not-italic">でも</span> can{" "}
          <strong>only</strong> appear at the beginning of the sentence—Don't
          use a comma after <span class="font-japanese not-italic">です</span>,{" "}
          <span class="font-japanese not-italic">ます</span>, etc. when{" "}
          <span class="font-japanese not-italic">でも</span> follows:
        </p>
        <div class="flex w-full items-center">
          <p class="w-1/4 font-bold text-red-500">Incorrect</p>
          <p class="w-3/4">
            <span class="font-japanese text-xl line-through">
              たいていうちで勉強します、でも、ときどき本を読みます。
            </span>
          </p>
        </div>
        <div class="flex w-full items-center">
          <p class="w-1/4 font-bold">Correct</p>
          <p class="w-3/4">
            <span class="font-japanese text-xl">
              たいていうちで勉強します。でも、ときどき本を読みます。
            </span>
            {"->"} I usually study at home. But sometimes I read books.
          </p>
        </div>

        <h3 class="text-3xl font-medium">
          <span class="font-japanese">けど</span> -{" "}
          <span class="font-honk text-4xl">Kedo</span>
        </h3>
        <ul class="list-inside list-disc space-y-2">
          <li>Used to connect two contrasting ideas within a sentence.</li>
          <li>
            More casual than <span class="font-japanese">が</span>.
          </li>
          <li>
            <span class="font-bold">Example: </span>
            <span class="font-japanese text-xl">
              映画は面白かったけど、長かったです。
            </span>
            {"->"} The movie was interesting, but it was long.
          </li>
        </ul>

        <h4 class="text-xl font-bold">
          Using <span class="font-japanese">けど</span> to Bring Up New Topics
        </h4>
        <p>
          <span class="font-japanese">けど</span> is often used to introduce a
          new topic or provide background information before the main point.
          This is a common conversational strategy in Japanese:
        </p>
        <ul class="list-inside list-disc space-y-2">
          <li>
            <span class="font-bold">Example: </span>
            <span class="font-japanese text-xl">
              あのう、週末ですけど、映画を見ませんか。
            </span>
            {"->"} Um, regarding this weekend, would you like to see a movie?
          </li>
        </ul>

        <p>
          In this usage, <span class="font-japanese">けど</span> doesn't
          necessarily express contrast. Instead, it serves to:
        </p>
        <ol class="!mt-3 ml-9 list-outside list-decimal space-y-2">
          <li>
            Smooth the conversation by providing context before the main point.
          </li>
          <li>
            Make requests or suggestions sound less direct and more polite.
          </li>
        </ol>

        <p class="text-center italic">
          Here's an excellent video that explains this usage of{" "}
          <span class="font-japanese not-italic">けど</span> in more detail:
        </p>

        <YouTubeVideo
          videoId="gPlFnVKqfv4"
          title="けど Is Not Always But"
          credit="Kaname Naito"
        />

        <h4 class="text-lg font-bold">
          Softening Requests with <span class="font-japanese">けど</span>
        </h4>
        <p>
          In casual speech, <span class="font-japanese">けど</span> is often
          used at the end of a sentence to soften a request or statement:
        </p>
        <ul class="list-inside list-disc space-y-2">
          <li>
            <span class="font-bold">Example: </span>
            <span class="font-japanese text-xl">ちょっと暑いんですけど。</span>
            {"->"} It's a bit hot in here. (Implying: Could you turn on the AC?)
          </li>
        </ul>

        <h3 class="text-3xl font-medium">
          <span class="font-japanese">が</span> -{" "}
          <span class="font-honk text-4xl">Ga</span>
        </h3>
        <ul class="list-inside list-disc space-y-2">
          <li>
            Similar to <span class="font-japanese">けど</span>, but more formal
            and often used in writing.
          </li>
          <li>
            <span class="font-bold">Example: </span>
            <span class="font-japanese text-xl">
              日本語を勉強していますが、まだ上手ではありません。
            </span>
            {"->"} I'm studying Japanese, but I'm not good at it yet.
          </li>
        </ul>
        <p>
          Both <span class="font-japanese">けど</span> and{" "}
          <span class="font-japanese">が</span> can be used to connect
          contrasting ideas, introduce new topics, or provide background
          information. Their functions and usages are essentially the same in
          all aspects. The main difference lies in their level of formality:
        </p>

        <p class="text-base italic text-muted-foreground">
          Important note: While <span class="font-japanese not-italic">が</span>{" "}
          and <span class="font-japanese not-italic">けど</span> function
          similarly, <span class="font-japanese not-italic">が</span> is more
          commonly used in formal speech or writing, whereas{" "}
          <span class="font-japanese not-italic">けど</span> is more common in
          everyday conversation.
        </p>
        <p class="text-base italic text-muted-foreground">
          *Notice that this usage of{" "}
          <span class="font-japanese not-italic">が</span> is totally different
          from the subject marker,{" "}
          <span class="font-japanese not-italic">が</span>.
        </p>

        <h2 class="!mt-12 text-center text-3xl font-bold">Practice</h2>
        <p>
          Try using these connectives in your own sentences to make your
          Japanese more natural and expressive. Remember, practice is key to
          mastering these useful expressions!
        </p>

        <ol class="list-inside list-decimal space-y-4">
          <li>
            <strong>
              Connect two activities you do daily using{" "}
              <span class="font-japanese">そして</span> or{" "}
              <span class="font-japanese">それから</span>:
            </strong>
            <div class="mt-2">
              <WanakanaWrapper enabled={true} watch={null}>
                <CustomTextArea
                  spacing={14}
                  class="h-28 w-full resize-none font-japanese text-xl"
                />
              </WanakanaWrapper>
            </div>
          </li>
          <li>
            <strong>
              Express a contrasting idea about a hobby or food using{" "}
              <span class="font-japanese">でも</span> or{" "}
              <span class="font-japanese">けど</span>:
            </strong>
            <div class="mt-2">
              <WanakanaWrapper enabled={true} watch={null}>
                <CustomTextArea
                  spacing={14}
                  class="h-28 w-full resize-none font-japanese text-xl"
                />
              </WanakanaWrapper>
            </div>
          </li>
          <li>
            <strong>
              Try introducing a new topic using{" "}
              <span class="font-japanese">けど</span>, then make a suggestion or
              ask a question:
            </strong>
            <div class="mt-2">
              <WanakanaWrapper enabled={true} watch={null}>
                <CustomTextArea
                  spacing={14}
                  class="h-28 w-full resize-none font-japanese text-xl"
                />
              </WanakanaWrapper>
            </div>
          </li>
        </ol>

        <p class="italic text-muted-foreground">
          By incorporating these connectives into your Japanese, you'll be able
          to express more complex ideas and have more natural conversations.
          Keep practicing!
        </p>
      </div>
    </div>
  )
}
