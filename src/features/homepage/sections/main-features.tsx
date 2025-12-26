import { For } from "solid-js"
import { FeatureVideoCard } from "../components/feature-video-card"
import { FEATURES } from "../data/features"

export function MainFeatures() {
  return (
    <section id="features" class="relative py-20 lg:py-32">
      <div class="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div class="mb-16 text-center lg:mb-24">
          <h2 class="mb-4 text-3xl font-bold lg:text-4xl">
            Tools & Resources
            <span class="text-transparent bg-clip-text bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end)">
              {" "}
              That Actually Help
            </span>
          </h2>
          <p class="mx-auto max-w-2xl text-white/50 lg:text-lg">
            Everything here is designed to make learning Japanese more enjoyable
            and effective.
          </p>
        </div>

        {/* Feature rows */}
        <div class="space-y-24 lg:space-y-32">
          <For each={FEATURES}>
            {(feature, i) => (
              <FeatureVideoCard
                title={feature.title}
                description={feature.description}
                videoTitle={feature.videoTitle}
                videoSrc={feature.videoSrc}
                index={i()}
                flipped={i() % 2 === 1}
              />
            )}
          </For>
        </div>
      </div>
    </section>
  )
}
