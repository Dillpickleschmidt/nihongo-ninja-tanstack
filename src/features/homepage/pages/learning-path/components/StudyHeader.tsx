import { Button } from "@/components/ui/button"

export default function StudyHeader() {
  return (
    <div class="mx-4 mb-4 border-b border-neutral-500/50 pb-4 font-semibold">
      <div class="text-muted-foreground text-base uppercase md:text-sm">
        November 03, 2025
      </div>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold tracking-tight md:text-2xl">
          Today's studies
        </h2>
        <Button
          size="sm"
          class="h-8.5 border-2 border-indigo-400/70 bg-indigo-400/40 font-semibold text-indigo-50 transition-colors duration-200 hover:bg-indigo-400/70"
        >
          Study Now
        </Button>
      </div>
    </div>
  )
}
