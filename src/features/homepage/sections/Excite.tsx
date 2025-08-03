import { designTokens } from "../design-tokens"

export default function Excite() {
  return (
    <section class="relative">
      <div
        class={`${designTokens.spacing.containerMax} ${designTokens.spacing.sectionPadding}`}
      >
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-semibold sm:text-4xl">
            Be excited to come back every day
          </h2>
          <p class="text-foreground/90 mt-5 text-lg">
            Instant gratification, engaging stories, and the world's knowledge
            at your fingertips.
          </p>
          <p class="text-muted-foreground mt-10 text-xl">
            Our whole ethos is about having fun. Getting input from only one
            source quickly gets dull. Trying to wing it and "absorb the language
            naturally" is incredibly frustrating in the beginning.
          </p>
          <p class="text-foreground mx-auto mt-10 max-w-3xl text-2xl font-medium italic">
            Nihongo Ninja aims to walk the fine line between structure and
            freedom by offering best-in-class tools while bringing passionate
            artists and creators to you.
          </p>
        </div>
      </div>
      <div
        class={`${designTokens.spacing.containerMax} bg-border/60 mx-auto my-2 h-px w-11/12`}
      />
    </section>
  )
}
