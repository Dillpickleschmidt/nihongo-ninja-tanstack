import { createSignal } from "solid-js"
import { cn } from "@/utils"

interface FileDropZoneProps {
  accept?: string
  description?: string
  onFile?: (file: File) => void
}

export function FileDropZone(props: FileDropZoneProps) {
  const [isDragging, setIsDragging] = createSignal(false)
  const [fileName, setFileName] = createSignal<string | null>(null)

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer?.files[0]
    if (file) {
      setFileName(file.name)
      props.onFile?.(file)
    }
  }

  const handleFileSelect = (e: Event) => {
    const input = e.target as HTMLInputElement
    const file = input.files?.[0]
    if (file) {
      setFileName(file.name)
      props.onFile?.(file)
    }
  }

  return (
    <label
      class={cn(
        "flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed p-12 transition-all",
        isDragging()
          ? "border-dynamic-accent/50 bg-dynamic-accent/10"
          : "border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/[0.07]",
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        class="sr-only"
        accept={props.accept}
        onChange={handleFileSelect}
      />

      <div
        class={cn(
          "flex size-16 items-center justify-center rounded-2xl transition-colors",
          isDragging() ? "bg-dynamic-accent/20" : "bg-white/10",
        )}
      >
        <svg
          class={cn(
            "size-8 transition-colors",
            isDragging() ? "text-dynamic-accent" : "text-white/50",
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
      </div>

      {fileName() ? (
        <div class="text-center">
          <p class="font-medium text-white">{fileName()}</p>
          <p class="mt-1 text-sm text-white/50">Click or drop to replace</p>
        </div>
      ) : (
        <div class="text-center">
          <p class="font-medium text-white">
            Drop your file here, or <span class="text-dynamic-accent">browse</span>
          </p>
          <p class="mt-1 text-sm text-white/50">
            {props.description || "Supports .apkg and .json files"}
          </p>
        </div>
      )}
    </label>
  )
}
