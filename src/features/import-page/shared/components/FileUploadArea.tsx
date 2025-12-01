import { Show, For } from "solid-js"
import { UploadCloud, FileType, Loader2 } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"

const accentStyles = {
  purple: {
    border: "border-purple-500/20",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
  },
  orange: {
    border: "border-orange-500/20",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
  },
}

interface FileUploadAreaProps {
  onUpload: (file: File) => void
  isProcessing: boolean
  error?: string | null
  accept: string
  accentColor: "purple" | "orange"
  description: string
  processingDescription: string
}

export function FileUploadArea(props: FileUploadAreaProps) {
  const styles = () => accentStyles[props.accentColor]

  // Derive file type labels from accept prop (e.g., ".apkg,.json" -> ["APKG", "JSON"])
  const fileTypeLabels = () =>
    props.accept
      .split(",")
      .map((ext) => ext.replace(".", "").toUpperCase())

  const handleFileSelect = () => {
    if (props.isProcessing) return

    const input = document.createElement("input")
    input.type = "file"
    input.accept = props.accept
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) props.onUpload(file)
    }
    input.click()
  }

  return (
    <div class="flex h-[60vh] flex-col items-center justify-center">
      <div
        class={cn(
          "group relative flex w-full max-w-xl cursor-pointer flex-col items-center justify-center gap-6 rounded-3xl border-2 border-dashed p-12 text-center transition-colors",
          "bg-card/30 border-neutral-800",
          "hover:bg-card/50 hover:border-neutral-700",
          props.isProcessing ? "pointer-events-none opacity-80" : "",
        )}
        onClick={handleFileSelect}
      >
        <div
          class={cn(
            "flex size-20 items-center justify-center rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-110",
            "border",
            styles().border,
            styles().bg,
          )}
        >
          <Show
            when={!props.isProcessing}
            fallback={<Loader2 class={cn("size-10 animate-spin", styles().text)} />}
          >
            <UploadCloud class={cn("size-10", styles().text)} />
          </Show>
        </div>

        <h3 class="text-foreground mb-2 text-xl font-bold">
          {props.isProcessing ? "Processing File..." : "Drop your file here"}
        </h3>
        <p class="text-muted-foreground text-sm">
          {props.isProcessing ? props.processingDescription : props.description}
        </p>

        <Show when={!props.isProcessing}>
          <div class="flex gap-4 pt-4">
            <For each={fileTypeLabels()}>
              {(label) => (
                <div class="flex items-center gap-2 rounded-lg border border-white/5 bg-neutral-900 px-3 py-2 text-xs font-medium text-white/50">
                  <FileType class="size-3.5" /> {label}
                </div>
              )}
            </For>
          </div>

          <Button
            variant="outline"
            class="mt-4 border-white/10 hover:bg-white/5"
            onClick={handleFileSelect}
          >
            Browse Files
          </Button>
        </Show>
      </div>

      <Show when={props.error}>
        <div class="mt-8 max-w-xl rounded border border-red-500/20 bg-red-500/10 p-4 text-red-400">
          <p class="font-semibold">Error:</p>
          <p class="mt-1 text-sm">{props.error}</p>
        </div>
      </Show>
    </div>
  )
}
