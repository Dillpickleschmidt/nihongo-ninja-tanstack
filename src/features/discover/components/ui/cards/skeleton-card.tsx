interface SkeletonAnimeCardProps {
  animate?: boolean
  size?: "small" | "large"
}

export function SkeletonAnimeCard(props: SkeletonAnimeCardProps) {
  const isLarge = () => props.size === "large"
  const pulseClass = () => (props.animate !== false ? "animate-pulse" : "")

  return (
    <div
      class="flex shrink-0 flex-col"
      classList={{ "w-38": !isLarge(), "w-56": isLarge() }}
    >
      <div
        class="relative w-full overflow-hidden rounded-lg bg-primary/5"
        classList={{
          [pulseClass()]: true,
          "h-[13.5rem]": !isLarge(),
          "h-72": isLarge(),
        }}
      >
        <div
          class="absolute right-1.5 bottom-1.5 size-8 rounded-full border border-white/10 bg-black/45"
          classList={{ [pulseClass()]: true }}
        />
      </div>

      <div class="pt-2">
        <div class="mb-1 flex items-center gap-2">
          <div
            class="size-2 rounded-full bg-primary/10"
            classList={{ [pulseClass()]: true }}
          />
          <div
            class="h-3 rounded bg-primary/5"
            classList={{
              [pulseClass()]: true,
              "w-24": !isLarge(),
              "w-32": isLarge(),
            }}
          />
        </div>
        <div
          class="h-3 rounded bg-primary/5"
          classList={{
            [pulseClass()]: true,
            "w-28": !isLarge(),
            "w-40": isLarge(),
          }}
        />
      </div>
    </div>
  )
}
