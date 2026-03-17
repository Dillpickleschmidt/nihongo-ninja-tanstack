import { Skeleton } from "@/components/ui/custom/skeleton"

export function BannerSkeleton() {
  return (
    <div class="relative flex h-[70vh] flex-col md:h-[80vh]">
      <div class="flex h-full max-w-full flex-col justify-end pb-5 pl-5">
        <Skeleton class="bg-primary/5 mb-1 h-6 w-[500px] rounded" />
        <Skeleton class="bg-primary/5 my-5 h-1.5 w-[250px] rounded" />
        <div class="mb-4 flex gap-2">
          <Skeleton class="bg-primary/5 h-6 w-16 rounded" />
          <Skeleton class="bg-primary/5 h-6 w-16 rounded" />
          <Skeleton class="bg-primary/5 h-6 w-16 rounded" />
        </div>
        <div class="mb-4 flex gap-2">
          <Skeleton class="bg-primary/5 h-8 w-20 rounded" />
          <Skeleton class="bg-primary/5 h-8 w-20 rounded" />
          <Skeleton class="bg-primary/5 h-8 w-20 rounded" />
        </div>
      </div>
    </div>
  )
}
