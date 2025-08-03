type FeatureBlockProps = {
  eyebrow: string
  title: string
  lead: string
  body: string
  reverse?: boolean
  accentGradient: string
}

function FeatureBlock(props: FeatureBlockProps) {
  return (
    <div class="mt-24">
      <div
        class={`border-border/60 bg-background/80 relative overflow-hidden rounded-3xl border p-8 md:p-12 ${
          props.reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Restored original gradient with better falloff */}
        <div class="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_70%_at_20%_0%,black,transparent)] opacity-60">
          <div
            class={`absolute -top-16 left-10 h-44 w-44 rounded-full bg-gradient-to-br blur-3xl ${props.accentGradient}`}
          />
        </div>

        <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div class="space-y-4">
            <p class="text-primary/80 text-xs tracking-wider uppercase">
              {props.eyebrow}
            </p>
            <h3 class="text-4xl font-semibold">{props.title}</h3>
            <p class="text-muted-foreground text-lg">{props.lead}</p>
            <p class="text-muted-foreground">{props.body}</p>
          </div>

          <div class="relative">
            <div class="bg-primary/15 pointer-events-none absolute right-6 -bottom-6 h-24 w-24 rounded-full blur-2xl" />
            <div class="border-border/60 bg-card relative aspect-[16/10] w-full overflow-hidden rounded-2xl border">
              <div class="grid h-full place-items-center">
                <div class="bg-background/70 text-muted-foreground rounded-xl px-3 py-1 text-xs backdrop-blur">
                  Feature preview area
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeatureBlocks() {
  return (
    <section class="mx-auto w-full max-w-7xl px-4 pb-12">
      <FeatureBlock
        eyebrow="Personalized learning paths"
        title="You have control"
        lead="We don't force you to go through beginner material if you've already done it."
        body="Chances are that you've already gone through some material by the time you've come across Nihongo Ninja, anyway."
        accentGradient="from-orange-400/30 to-rose-400/30 dark:from-orange-500/20 dark:to-rose-500/20"
      />

      <FeatureBlock
        eyebrow="Transparent progress"
        title="Feel confident about your progress"
        lead="Language tools shouldn't be black boxes."
        body="We want you to know exactly what you're struggling with, see what's coming up, and look at a clear history of what you've accomplished."
        reverse
        accentGradient="from-indigo-400/30 to-cyan-400/30 dark:from-indigo-500/20 dark:to-cyan-500/20"
      />
    </section>
  )
}
