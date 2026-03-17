import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <>
      <YouTubeVideo
        videoId="sVCeecJw8GM"
        title="Differences between kudasai and onegaishimasu | ください vs お願いします"
        credit="NihongoDekita with Sayaka"
        autoFocus
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-6 pt-6 pb-6 text-center text-4xl font-semibold lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">
            ください vs お願いします
          </h1>
        </div>
        <p>
          Here's a quick video to help you understand the differences between
          ください and お願いします. They have some subtle differences.
        </p>
      </div>
    </>
  )
}
