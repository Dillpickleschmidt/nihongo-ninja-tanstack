import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <>
      <YouTubeVideo
        videoId="p37XUVrHP4E"
        title="Easy Japanese - Hobbies"
        credit="Nihongo-Learning"
        autoFocus
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-12 pt-6 pb-6 text-center text-4xl font-semibold lg:px-28 lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">Hobbies With Yuta</h1>
        </div>
        <p>
          This video has a some of vocabulary from this lesson, and is a great
          way to learn how to talk about your hobbies.
        </p>
        <p>
          This one's relatively easy understand, so relax and look back at how
          far you've come!
        </p>

        <h2 class="pt-6 text-2xl font-semibold">New words and phrases</h2>
        <p>The most important word for this video is:</p>
        <p>
          <span class="font-japanese text-xl">
            <Furigana furigana={<span class="text-sm">しゅみ</span>}>
              趣味
            </Furigana>
          </span>{" "}
          - hobby; pastime
        </p>
      </div>
    </>
  )
}
