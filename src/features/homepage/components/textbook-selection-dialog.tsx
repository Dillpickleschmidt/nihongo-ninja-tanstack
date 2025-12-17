import { createSignal, For } from 'solid-js'
import { useNavigate } from '@tanstack/solid-router'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { textbooks, type TextbookIDEnum } from '@/data/textbooks'
import { cn } from '@/utils'
import { Button } from '~/components/ui/button'

const textbookList = Object.values(textbooks)

export function TextbookSelectionDialog(props: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const navigate = useNavigate()
  const [selectedTextbook, setSelectedTextbook] = createSignal<TextbookIDEnum>('genki_1')

  const handleContinue = () => {
    navigate({ to: '/dashboard', search: { textbook: selectedTextbook() } })
    props.onOpenChange(false)
  }

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent class="border-white/10 bg-neutral-950 sm:max-w-xl" overlayClass="bg-neutral-950/90">
        <DialogHeader>
          <DialogTitle class="text-xl xl:text-2xl font-bold text-white">
            Which{" "}
            <span class="text-transparent bg-clip-text bg-linear-to-r from-(--accent) to-(--accent-end)">
              textbook
            </span>
            {" "}are you following?
          </DialogTitle>
          <p class="text-sm xl:text-base text-white/50 mt-1">
            We'll tailor the order to your curriculum
          </p>
        </DialogHeader>

        <div class="flex flex-wrap gap-4">
          <For each={textbookList}>
            {(textbook) => (
              <Button
                variant="ghost"
                onClick={() => setSelectedTextbook(textbook.id)}
                class={cn(
                  "h-auto group relative flex flex-col items-center rounded-xl px-5 py-4 transition-all duration-200",
                  selectedTextbook() === textbook.id
                    ? "bg-white/10 scale-[1.02]"
                    : "hover:bg-white/5 hover:scale-[1.01]"
                )}
              >
                {/* Selection indicator */}
                <div
                  class={cn(
                    "absolute top-2.5 right-2.5 size-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center",
                    selectedTextbook() === textbook.id
                      ? "border-(--accent) bg-(--accent)"
                      : "border-white/20"
                  )}
                >
                  {selectedTextbook() === textbook.id && (
                    <svg class="size-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <img
                  src={textbook.cover_image_url}
                  alt={textbook.name}
                  class={cn(
                    "h-40 w-auto rounded-md object-contain transition-all duration-200",
                    selectedTextbook() === textbook.id
                      ? "opacity-100"
                      : "opacity-60 group-hover:opacity-90"
                  )}
                  style={{
                    "aspect-ratio": "3/4",
                    "box-shadow": "0 4px 12px rgba(0,0,0,0.4)"
                  }}
                />
                <span class={cn(
                  "mt-3 text-sm font-medium transition-colors",
                  selectedTextbook() === textbook.id
                    ? "text-white"
                    : "text-white/50 group-hover:text-white/70"
                )}>
                  {textbook.short_name}
                </span>
                <span class="text-xs text-white/40 mt-0.5">{textbook.level}</span>
              </Button>
            )}
          </For>
        </div>

        <div class="flex justify-end gap-3 pt-2">
          <Button
            variant="ghost"
            onClick={() => props.onOpenChange(false)}
            class="px-5 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all"
          >
            Cancel
          </Button>
          <Button
            variant="ghost"
            onClick={handleContinue}
            class="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-(--accent) to-(--accent-end) transition-all hover:scale-[1.02]"
            style={{
              "box-shadow": "0 8px 16px -4px color-mix(in srgb, var(--accent) 30%, transparent)"
            }}
          >
            Continue
            <svg class="size-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
