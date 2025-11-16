interface SkeletonAnimeCardProps {
  animate?: boolean
}

export function SkeletonAnimeCard(props: SkeletonAnimeCardProps) {
  return (
    <div class="shrink-0 p-4">
      <div
        class="item flex w-[9.5rem] flex-col"
        style={{ "aspect-ratio": "152/290" }}
      >
        {/* Cover skeleton */}
        <div
          class="bg-primary/5 h-[13.5rem] w-full rounded"
          classList={{ "animate-pulse": props.animate !== false }}
        />
        {/* Title skeleton */}
        <div
          class="bg-primary/5 mt-4 h-2 w-28 rounded"
          classList={{ "animate-pulse": props.animate !== false }}
        />
        {/* Metadata skeleton */}
        <div
          class="bg-primary/5 mt-2 h-2 w-20 rounded"
          classList={{ "animate-pulse": props.animate !== false }}
        />
      </div>
    </div>
  )
}
