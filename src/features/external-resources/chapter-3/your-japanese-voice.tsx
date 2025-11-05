import { Button } from "@/components/ui/button"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <div class="w-full">
      <YouTubeVideo
        videoId="Phr8z5X5Sf4"
        title="Should your 'Japanese voice' sound different?"
        credit="Dogen"
        autoFocus
      />
    </div>
  )
}
