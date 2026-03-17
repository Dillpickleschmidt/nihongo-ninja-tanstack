import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <>
      <YouTubeVideo
        videoId="xLqnAI6mqDo"
        title="WHY Your Japanese Speaking Sucks, and One Way to Fix It"
        credit="ToKini Andy"
        autoFocus
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-6 pt-6 pb-6 text-center text-4xl font-semibold lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">
            WHY Your Japanese Speaking Sucks, and One Way to Fix It
          </h1>
        </div>
        <p>
          You're starting to reach the point where you actually have the
          knowledge to make some pretty sophisticated sentences in Japanese. The
          issue?
        </p>
        <p class="pl-6 italic">You're slow, and you're not very good at it.</p>
        <div class="space-y-2">
          <p>There's 2 things you should do:</p>
          <ol class="list-decimal space-y-1 pl-8">
            <li>
              Practice those conjugations until you don't have to think about
              them{" "}
              <span class="text-muted-foreground text-base">
                (if you're still struggling)
              </span>
              .
            </li>
            <li>Listen to LOTS of content.</li>
            <li>Take the info in the video above to heart.</li>
          </ol>
        </div>
        <p class="text-muted-foreground pt-6 italic">
          "Yeah, easy for you to say!"
        </p>

        <p>
          It may sound impossible, but making this way of thinking a habit early
          means less frustration down the line{" "}
          <span class="text-muted-foreground text-base">(I've been there)</span>
          . Even if your vocabulary knowledge is lacking, you'd be suprised
          about the kind of creativity that you're capable of.
        </p>
        <p>
          And of course, lots of Japanese listening is going to help this skill
          significantly!
        </p>
      </div>
    </>
  )
}
