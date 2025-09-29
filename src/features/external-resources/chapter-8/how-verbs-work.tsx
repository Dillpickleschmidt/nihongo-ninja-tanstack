import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <>
      <YouTubeVideo
        videoId="cGA6Tj9_lSg"
        title="The ULTIMATE Japanese Verb Conjugation CHEAT SHEET"
        credit="Jouzu Juls (上手 ジューズ)"
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-6 pt-6 pb-6 text-center text-4xl font-semibold lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">How Verbs Work</h1>
        </div>
        <p>
          You're starting acquire a lot of conjugation knowledge, and it may be
          starting to get all scrambled in your head. This video breaks down the
          "why" behind the "how" of Japanese verb conjugation—in other words,
          big picture stuff.
        </p>
      </div>
    </>
  )
}
