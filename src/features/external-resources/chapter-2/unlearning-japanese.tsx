import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <>
      <YouTubeVideo
        videoId="BH9n_fNA7Z8"
        title="Unlearning Japanese - Real Real Japan #01"
        credit="Real Real Japan"
        autoFocus
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-6 pt-6 pb-6 text-center text-4xl font-semibold lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">
            Everything You've Always Wanted To Know About Japanese
          </h1>
        </div>
        <p class="font-yuji_boku text-muted-foreground">
          This video belongs in this course.
        </p>
      </div>
    </>
  )
}
