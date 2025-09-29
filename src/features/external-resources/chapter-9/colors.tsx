import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <>
      <YouTubeVideo
        videoId="7XKDgSyu2yk"
        title="Let's learn color names in Japanese!! Comprehensible Japanese"
        credit="Nihongo-Learning"
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-6 pt-6 pb-6 text-center text-4xl font-semibold lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">Colors in Japanese</h1>
        </div>
        <p>
          You've gotta love Yuta's comprehensible input videos. This one's all
          about learning colors.
        </p>
      </div>
    </>
  )
}
