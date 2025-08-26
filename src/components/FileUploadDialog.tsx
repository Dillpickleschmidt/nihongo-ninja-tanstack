import { createSignal, Show } from "solid-js"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"

interface FileUploadDialogProps {
  isOpen: boolean
  onClose: () => void
  onSelected: (file: File) => Promise<void>
  title?: string
}

export function FileUploadDialog(props: FileUploadDialogProps) {
  const [isDragOver, setIsDragOver] = createSignal(false)
  const [isUploading, setIsUploading] = createSignal(false)
  const [error, setError] = createSignal<string | null>(null)

  let fileInputRef: HTMLInputElement | undefined

  const handleFileSelect = async (file: File) => {
    // Reset error state
    setError(null)

    // Validate file type
    if (!file.name.toLowerCase().endsWith(".json")) {
      setError("Please select a JSON file")
      return
    }

    // Validate file size (10MB limit as configured in Supabase)
    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10MB")
      return
    }

    try {
      setIsUploading(true)
      await props.onSelected(file)
      props.onClose()
    } catch (error) {
      console.error("Upload failed:", error)
      setError(error instanceof Error ? error.message : "Upload failed")
    } finally {
      setIsUploading(false)
    }
  }

  const handleFileInputChange = (event: Event) => {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleDrop = (event: DragEvent) => {
    event.preventDefault()
    setIsDragOver(false)

    const files = event.dataTransfer?.files
    const file = files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault()
    setIsDragOver(false)
  }

  const openFileDialog = () => {
    fileInputRef?.click()
  }

  return (
    <Dialog
      open={props.isOpen}
      onOpenChange={(open) => !open && props.onClose()}
    >
      <DialogContent class="border-card-foreground sm:max-w-md">
        <DialogTitle>{props.title || "Upload JSON File"}</DialogTitle>

        <div class="space-y-4">
          {/* File Drop Zone */}
          <div
            class={cn(
              "rounded-lg border-2 border-dashed p-8 text-center transition-colors",
              isDragOver()
                ? "border-primary bg-primary/5"
                : "border-muted hover:border-muted-foreground/30",
              isUploading() && "pointer-events-none opacity-50",
            )}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <div class="space-y-3">
              <div class="text-muted-foreground text-4xl">📁</div>
              <div class="space-y-1">
                <p class="text-sm font-medium">Drop your JSON file here</p>
                <p class="text-muted-foreground text-xs">or click to browse</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={openFileDialog}
                disabled={isUploading()}
              >
                {isUploading() ? "Uploading..." : "Choose File"}
              </Button>
            </div>
          </div>

          {/* Error Message */}
          <Show when={error()}>
            <div class="text-destructive bg-destructive/10 rounded-lg p-3 text-sm">
              {error()}
            </div>
          </Show>

          {/* File Input (Hidden) */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            class="hidden"
            onChange={handleFileInputChange}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

