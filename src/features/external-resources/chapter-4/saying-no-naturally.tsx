import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <>
      <YouTubeVideo
        videoId="J9JdP6pA5LY"
        title="Japanese People Rarely Say いいえ iie, What Do We Say?"
        credit="That Japanese Man Yuta"
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-6 pt-6 pb-6 text-center text-4xl font-semibold lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">
            Saying "No" Naturally
          </h1>
        </div>
        <p>
          You've learned いいえ, which is very polite and formal, but let's
          upgrade your knowledge to sound much more like a native speaker.
        </p>
      </div>
    </>
  )
}
