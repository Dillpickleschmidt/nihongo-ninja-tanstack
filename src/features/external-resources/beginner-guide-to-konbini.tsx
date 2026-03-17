import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <>
      <YouTubeVideo
        videoId="bPP3-GyFpYs"
        title="Beginner Guide to Konbini"
        credit="Kaname Naito"
        autoFocus
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-12 pt-6 pb-6 text-center text-4xl font-semibold lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">
            Beginner Guide To コンビニ
          </h1>
        </div>
        <p>
          Kaname 先生 back at it again with another banger. This time, we're
          checking out some common phrases and ways to interact with others at
          the コンビニ.
        </p>
        <p>
          The questions are advanced, but the main thing to get out of this
          video is how to give responses.
        </p>
        <p class="text-muted-foreground text-base">
          Kaname 先生 also talks a bit about counters which you'll learn in
          Chapter 5!
        </p>
      </div>
    </>
  )
}
