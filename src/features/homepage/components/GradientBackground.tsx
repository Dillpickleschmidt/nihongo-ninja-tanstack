type GradientBackgroundProps = {
  variant: "hero" | "feature" | "preview"
  children?: any
}

export default function GradientBackground(props: GradientBackgroundProps) {
  if (props.variant === "hero") {
    return (
      <div class="pointer-events-none absolute inset-0 -z-10">
        {/* Primary warm wash */}
        <div class="mx-auto h-56 w-full max-w-7xl px-4">
          <div class="h-full w-full rounded-b-[3rem] bg-[radial-gradient(60%_60%_at_30%_0%,rgba(251,146,60,0.15),transparent_70%)] [mask-image:linear-gradient(to_bottom,black,black,transparent)]" />
        </div>
        {/* Subtle accent gradient */}
        <div class="mx-auto mt-4 w-full max-w-7xl px-4">
          <div class="ml-auto h-40 w-2/3 rounded-l-[2rem] bg-[radial-gradient(40%_50%_at_80%_20%,rgba(99,102,241,0.08),transparent_60%)] [mask-image:linear-gradient(to_left,black,transparent)]" />
        </div>
      </div>
    )
  }

  if (props.variant === "feature") {
    return (
      <div class="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_70%_at_20%_0%,black,transparent)] opacity-60">
        {props.children}
      </div>
    )
  }

  if (props.variant === "preview") {
    return (
      <div class="absolute inset-0 [mask-image:radial-gradient(70%_70%_at_80%_10%,black,transparent)] opacity-60">
        <div class="bg-primary/20 absolute top-10 right-10 h-40 w-40 rounded-full blur-3xl" />
      </div>
    )
  }

  return null
}
