export function PremiumCallout() {
  return (
    <section class="relative py-16 lg:py-20">
      <div class="mx-auto max-w-4xl px-6 text-center">
        <p class="text-lg italic text-white/60 leading-relaxed lg:text-xl">
          <span
            class="text-transparent not-italic bg-clip-text bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end)"
            style={{ filter: "drop-shadow(0 0 8px var(--landing-accent))" }}
          >
            ✦
          </span>{" "}
          If the free tools have served you well, there's one premium option:
          turn your own subtitles and media into{" "}
          <span class="text-transparent bg-clip-text bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end) font-medium">
            personalized learning paths
          </span>{" "}
          built from only the vocab and grammar found within.
        </p>
      </div>
    </section>
  )
}
