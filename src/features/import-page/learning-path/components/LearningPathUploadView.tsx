import { Show } from "solid-js"
import { UploadCloud, Loader2, FileCode } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"

interface LearningPathUploadViewProps {
  onUpload: (file: File) => void
  isProcessing: boolean
  error: string | null
}

export function LearningPathUploadView(props: LearningPathUploadViewProps) {
  return (
    <div class="flex h-[60vh] flex-col items-center justify-center">
      <div
        class={cn(
          "group relative flex w-full max-w-xl cursor-pointer flex-col items-center justify-center gap-6 rounded-3xl border-2 border-dashed p-12 text-center transition-colors",
          "bg-card/30 border-neutral-800",
          "hover:bg-card/50 hover:border-neutral-700",
          props.isProcessing ? "pointer-events-none opacity-80" : "",
        )}
        onClick={() => {
          const input = document.createElement("input")
          input.type = "file"
          input.accept = ".srt"
          input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0]
            if (file) props.onUpload(file)
          }
          input.click()
        }}
      >
        <div
          class={cn(
            "flex size-20 items-center justify-center rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-110",
            "border border-orange-500/20 bg-orange-500/10",
          )}
        >
          <Show
            when={!props.isProcessing}
            fallback={<Loader2 class="text-orange-400 size-10 animate-spin" />}
          >
            <UploadCloud class="text-orange-400 size-10" />
          </Show>
        </div>

        <h3 class="text-foreground text-xl font-bold mb-2">
          {props.isProcessing ? "Processing File..." : "Drop your SRT file here"}
        </h3>
        <p class="text-muted-foreground text-sm">
          {props.isProcessing
            ? "Extracting grammar patterns and vocabulary..."
            : "Upload subtitle files to create your learning path"}
        </p>

        <Show when={!props.isProcessing}>
          <div class="flex gap-4 pt-4">
            <div class="bg-neutral-900 flex items-center gap-2 rounded-lg border border-white/5 px-3 py-2 text-xs font-medium text-white/50">
              <FileCode class="size-3.5" /> SRT
            </div>
          </div>

          <Button variant="outline" class="mt-4 border-white/10 hover:bg-white/5">
            Browse Files
          </Button>
        </Show>
      </div>

      <Show when={props.error}>
        <div class="mt-8 rounded bg-red-500/10 p-4 border border-red-500/20 text-red-400 max-w-xl">
          <p class="font-semibold">Error:</p>
          <p class="text-sm mt-1">{props.error}</p>
        </div>
      </Show>
    </div>
  )
}
