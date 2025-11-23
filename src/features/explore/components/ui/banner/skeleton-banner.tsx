export function BannerSkeleton() {
  return (
    <div class="relative flex h-[70vh] flex-col md:h-[80vh]">
      <div class="flex h-full max-w-full flex-col justify-end pb-5 pl-5">
        <div class="bg-primary/5 mb-1 h-6 w-[500px] animate-pulse rounded" />
        <div class="bg-primary/5 my-5 h-1.5 w-[250px] animate-pulse rounded" />
        <div class="mb-4 flex gap-2">
          <div class="bg-primary/5 h-6 w-16 animate-pulse rounded" />
          <div class="bg-primary/5 h-6 w-16 animate-pulse rounded" />
          <div class="bg-primary/5 h-6 w-16 animate-pulse rounded" />
        </div>
        <div class="mb-4 flex gap-2">
          <div class="bg-primary/5 h-8 w-20 animate-pulse rounded" />
          <div class="bg-primary/5 h-8 w-20 animate-pulse rounded" />
          <div class="bg-primary/5 h-8 w-20 animate-pulse rounded" />
        </div>
      </div>
    </div>
  )
}
