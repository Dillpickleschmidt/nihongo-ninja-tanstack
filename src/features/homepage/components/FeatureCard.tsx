import { designTokens, featureColors } from "../design-tokens"

type FeatureCardProps = {
  title: string
  note: string
  accent: keyof typeof featureColors
}

export default function FeatureCard(props: FeatureCardProps) {
  return (
    <div
      class={`group relative overflow-hidden rounded-xl border p-4 shadow-sm transition-colors ${designTokens.borders.glass} ${designTokens.backgrounds.card} hover:border-primary/40`}
    >
      <div class="flex items-center gap-2">
        <span
          class={`inline-block h-2.5 w-2.5 rounded-full ${featureColors[props.accent]}`}
        />
        <div class="text-base font-semibold">{props.title}</div>
      </div>
      <div class="text-muted-foreground mt-1 text-xs">{props.note}</div>

      {/* Subtle hover effect */}
      <div class="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div class="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-white/[0.02] to-white/[0.04]" />
      </div>
    </div>
  )
}
