interface SkeletonAnimeCardProps {
  animate?: boolean
  size?: "small" | "large"
}

export function SkeletonAnimeCard(props: SkeletonAnimeCardProps) {
  const isLarge = () => props.size === "large"

  return (
    <div
      class="flex shrink-0 flex-col"
      classList={{ "w-38": !isLarge(), "w-56": isLarge() }}
    >
      {/* Cover skeleton */}
      <div
        class="bg-primary/5 w-full rounded-t"
        classList={{
          "animate-pulse": props.animate !== false,
          "h-[13.5rem]": !isLarge(),
          "h-72": isLarge(),
        }}
      />
      {/* Comprehension bar skeleton */}
      <div
        class="bg-primary/5 h-1 w-full"
        classList={{ "animate-pulse": props.animate !== false }}
      />
      {/* Comprehension numbers skeleton */}
      <div class="flex justify-between pt-2">
        <div
          class="bg-primary/5 h-6 w-10 rounded"
          classList={{ "animate-pulse": props.animate !== false }}
        />
        <div
          class="bg-primary/5 h-6 w-10 rounded"
          classList={{ "animate-pulse": props.animate !== false }}
        />
      </div>
      {/* Title skeleton */}
      <div
        class="bg-primary/5 mt-2 h-2 w-28 rounded"
        classList={{ "animate-pulse": props.animate !== false }}
      />
    </div>
  )
}
