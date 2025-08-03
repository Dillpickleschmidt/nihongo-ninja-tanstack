import { designTokens } from "../design-tokens"
import GradientBackground from "../components/GradientBackground"

export default function PreviewGrid() {
  return (
    <section
      class={`${designTokens.spacing.containerMax} w-full px-4 pt-16 md:pt-20`}
    >
      <div
        class={`relative overflow-hidden rounded-3xl border bg-gradient-to-br ${designTokens.borders.glass} ${designTokens.backgrounds.section}`}
      >
        <GradientBackground variant="preview" />

        {/* Content section */}
        <div class="p-4 md:p-6">
          <div class="max-w-3xl">
            <h2 class="text-2xl font-semibold md:text-3xl">
              Learn from the best
            </h2>
            <p class="text-muted-foreground mt-4">
              There are a lot of great resources out there beyond just
              textbooks, but if you've ever tried searching yourself, you'll
              know the pain of sifting through tons of content that isn't at
              your level.
            </p>
            <FeatureList />
          </div>
        </div>

        {/* Preview tiles */}
        <div class="px-4 pt-2 pb-4 md:px-6 md:pb-6">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <PreviewTile title="Video Lesson" subtitle="YouTube embed" />
            <PreviewTile title="Deck Review" subtitle="SRS session" />
            <PreviewTile title="Vocabulary" subtitle="Quick lookup" />
            <PreviewTile title="Grammar" subtitle="Guided notes" />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureList() {
  const features = [
    "Hand-picked channels and lessons",
    "Inline notes and quick lookups",
    "Smooth reviews with SRS",
  ]

  return (
    <ul class="text-muted-foreground mt-4 space-y-2 text-sm">
      {features.map((feature) => (
        <li class="flex items-center gap-2">
          <span class="bg-primary h-1.5 w-1.5 rounded-full" />
          {feature}
        </li>
      ))}
    </ul>
  )
}

function PreviewTile(props: { title: string; subtitle: string }) {
  return (
    <div
      class={`relative overflow-hidden rounded-2xl border p-4 transition-colors ${designTokens.borders.glass} ${designTokens.backgrounds.glass} hover:border-primary/40`}
    >
      {/* Preview area */}
      <div
        class={`mb-3 h-32 rounded-xl md:h-40 ${designTokens.backgrounds.muted}`}
      />

      <div class="flex items-center justify-between">
        <div>
          <p class="text-muted-foreground text-sm">{props.subtitle}</p>
          <h3 class="text-lg font-medium">{props.title}</h3>
        </div>
        <span
          class={`text-muted-foreground rounded-full border px-3 py-1 text-xs ${designTokens.borders.glass}`}
        >
          Preview
        </span>
      </div>
    </div>
  )
}
