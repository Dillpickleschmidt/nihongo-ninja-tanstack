import { Show } from "solid-js"
import {
  UploadCloud,
  FileType,
  Loader2,
  FileCode,
} from "lucide-solid"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"

interface AutomaticUploadViewProps {
  onUpload: () => void
  isProcessing: boolean
}

export function AutomaticUploadView(props: AutomaticUploadViewProps) {
  return (
    <div class="flex h-[60vh] flex-col items-center justify-center">
      <div
        class={cn(
          // REVERTED to neutral background/border interactions for subtlety
          "group relative flex w-full max-w-xl cursor-pointer flex-col items-center justify-center gap-6 rounded-3xl border-2 border-dashed p-12 text-center transition-colors",
          "bg-card/30 border-neutral-800",
          "hover:bg-card/50 hover:border-neutral-700", // Neutral hover
          props.isProcessing ? "pointer-events-none opacity-80" : "",
        )}
        onClick={() => !props.isProcessing && props.onUpload()}
      >
        <div
          class={cn(
            "flex size-20 items-center justify-center rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-110",
            // Keep the icon box Purple to maintain identity
            "border border-purple-500/20 bg-purple-500/10",
          )}
        >
          <Show
            when={!props.isProcessing}
            fallback={<Loader2 class="text-purple-400 size-10 animate-spin" />}
          >
            <UploadCloud class="text-purple-400 size-10" />
          </Show>
        </div>

        <h3 class="text-foreground text-xl font-bold mb-2">
          {props.isProcessing ? "Processing File..." : "Drop your file here"}
        </h3>
        <p class="text-muted-foreground text-sm">
          {props.isProcessing
            ? "Analyzing vocabulary and kanji mastery..."
            : "Support for Anki (.apkg), JPDB (.json), or CSV files."}
        </p>

        <Show when={!props.isProcessing}>
          <div class="flex gap-4 pt-4">
            <div class="bg-neutral-900 flex items-center gap-2 rounded-lg border border-white/5 px-3 py-2 text-xs font-medium text-white/50">
              <FileType class="size-3.5" /> Anki
            </div>
            <div class="bg-neutral-900 flex items-center gap-2 rounded-lg border border-white/5 px-3 py-2 text-xs font-medium text-white/50">
              <FileCode class="size-3.5" /> JPDB
            </div>
          </div>

          <Button
            variant="outline"
            class="mt-4 border-white/10 hover:bg-white/5"
          >
            Browse Files
          </Button>
        </Show>
      </div>
    </div>
  )
}
