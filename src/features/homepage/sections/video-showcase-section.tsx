import { VideoShowcase } from '../components/video-showcase'

export function VideoShowcaseSection() {
  return (
    <section class="relative pb-20 lg:pb-32">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold lg:text-4xl">
            See It All in Action
          </h2>
          <p class="mx-auto max-w-2xl text-white/50">
            Explore each feature through detailed walkthrough videos
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <VideoShowcase title="Kana Quiz Demo" subtitle="Master hiragana & katakana" class="md:col-span-2 lg:col-span-1" videoSrc="/video/backgrounds/AdobeStock_353576536_Video_HD_Preview.mp4" />
          <VideoShowcase title="Conjugation Trainer" subtitle="11 verb forms" videoSrc="/video/backgrounds/AdobeStock_621202547_Video_HD_Preview.mp4" />
          <VideoShowcase title="Sentence Practice" subtitle="Write & get feedback" videoSrc="/video/backgrounds/AdobeStock_527953202_Video_HD_Preview.mp4" />
          <VideoShowcase title="Discover Section" subtitle="Find your next show" class="lg:col-span-2" videoSrc="/video/backgrounds/AdobeStock_1148732421_Video_HD_Preview.mp4" />
          <VideoShowcase title="Review System" subtitle="SRS made simple" videoSrc="/video/backgrounds/AdobeStock_621205133_Video_HD_Preview.mp4" />
        </div>
      </div>
    </section>
  )
}
