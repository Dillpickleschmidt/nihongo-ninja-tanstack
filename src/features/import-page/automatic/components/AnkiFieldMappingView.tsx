import { createMemo } from "solid-js"
import { ChevronDown } from "lucide-solid"
import { Button } from "@/components/ui/button"
import type {
  AnkiExtractedData,
  FieldMapping,
} from "@/features/fsrs-import/adapters/anki/anki-types"

interface AnkiFieldMappingViewProps {
  extractedData: AnkiExtractedData
  fieldMapping: FieldMapping
  onMappingChange: (mapping: FieldMapping) => void
  onNext: () => void
}

export function AnkiFieldMappingView(props: AnkiFieldMappingViewProps) {
  // Get first note for preview
  const firstNote = () => props.extractedData.notes[0]

  // Parse note fields (memoized since used in 5 places)
  const noteFields = createMemo(() => {
    const note = firstNote()
    if (!note) return []
    return note.flds.split("\x1f")
  })

  // Preview functions (plain functions since each called once)
  // Index is guaranteed valid by dropdown UI constraints
  const previewWord = () => {
    const fields = noteFields()
    return fields[props.fieldMapping.wordFieldIndex]
  }

  const previewMeaning = () => {
    const fields = noteFields()
    return fields[props.fieldMapping.englishFieldIndex]
  }

  const handleWordFieldChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    props.onMappingChange({
      ...props.fieldMapping,
      wordFieldIndex: parseInt(target.value, 10),
    })
  }

  const handleEnglishFieldChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    props.onMappingChange({
      ...props.fieldMapping,
      englishFieldIndex: parseInt(target.value, 10),
    })
  }

  return (
    <div class="animate-in fade-in slide-in-from-bottom-8 space-y-6 duration-700">
      {/* Header */}
      <div class="space-y-2">
        <h2 class="text-foreground text-2xl font-bold">Map Your Fields</h2>
        <p class="text-muted-foreground">
          Tell us which Anki fields contain the word and its meaning.
        </p>
      </div>

      {/* Main Content - Split View */}
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left: Raw Anki Note */}
        <div class="space-y-4">
          <div>
            <h3 class="text-foreground mb-3 text-sm font-semibold">
              Sample Anki Note
            </h3>
            <div class="space-y-2 rounded-lg border border-neutral-800 bg-neutral-950/50 p-4">
              {noteFields().map((field, idx) => (
                <div
                  class={`rounded p-3 text-sm transition-colors ${idx === props.fieldMapping.wordFieldIndex
                    ? "border border-blue-500/30 bg-blue-500/20"
                    : idx === props.fieldMapping.englishFieldIndex
                      ? "border border-amber-500/30 bg-amber-500/20"
                      : "border border-neutral-700 bg-neutral-900/50"
                    }`}
                >
                  <div class="text-muted-foreground mb-1 text-xs font-medium">
                    Field {idx}
                  </div>
                  <div class="text-foreground wrap-break-word">{field}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Preview Transformation */}
        <div class="space-y-4">
          <div>
            <h3 class="text-foreground mb-3 text-sm font-semibold">
              Preview Result
            </h3>
            <div class="space-y-3 rounded-lg border border-neutral-800 bg-neutral-950/50 p-4">
              {/* Word Preview */}
              <div class="space-y-1">
                <div class="text-muted-foreground text-xs font-medium">
                  Word
                </div>
                <div class="text-foreground rounded border border-blue-500/20 bg-blue-500/10 px-3 py-2 wrap-break-word">
                  {previewWord()}
                </div>
              </div>

              {/* Meaning Preview */}
              <div class="space-y-1">
                <div class="text-muted-foreground text-xs font-medium">
                  Meaning
                </div>
                <div class="text-foreground rounded border border-amber-500/20 bg-amber-500/10 px-3 py-2 wrap-break-word">
                  {previewMeaning()}
                </div>
              </div>

              {/* Auto-detect Badge */}
              <div class="pt-2">
                <div class="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  <div class="size-1.5 rounded-full bg-green-400" />
                  Auto-detected
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Field Selection Controls */}
      <div class="space-y-4 rounded-lg border border-neutral-800 bg-neutral-950/50 p-6">
        <h3 class="text-foreground text-sm font-semibold">Field Mapping</h3>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Word Field Dropdown */}
          <div class="space-y-2">
            <label class="text-muted-foreground text-sm font-medium">
              Word Field
            </label>
            <div class="relative">
              <select
                value={props.fieldMapping.wordFieldIndex}
                onChange={handleWordFieldChange}
                class="text-foreground w-full appearance-none rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 pr-10 text-sm transition-colors hover:border-neutral-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 focus:outline-none"
              >
                {noteFields().map((field, idx) => (
                  <option value={idx}>
                    Field {idx}: {field.slice(0, 30)}
                    {field.length > 30 ? "..." : ""}
                  </option>
                ))}
              </select>
              <ChevronDown class="text-muted-foreground pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2" />
            </div>
          </div>

          {/* English Field Dropdown */}
          <div class="space-y-2">
            <label class="text-muted-foreground text-sm font-medium">
              Meaning Field
            </label>
            <div class="relative">
              <select
                value={props.fieldMapping.englishFieldIndex}
                onChange={handleEnglishFieldChange}
                class="text-foreground w-full appearance-none rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 pr-10 text-sm transition-colors hover:border-neutral-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 focus:outline-none"
              >
                {noteFields().map((field, idx) => (
                  <option value={idx}>
                    Field {idx}: {field.slice(0, 30)}
                    {field.length > 30 ? "..." : ""}
                  </option>
                ))}
              </select>
              <ChevronDown class="text-muted-foreground pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Navigation */}
      <div class="flex items-center justify-between border-t border-neutral-800 pt-6">
        <div class="text-muted-foreground text-sm font-medium">Step 2 of 3</div>
        <Button
          onClick={props.onNext}
          class="bg-purple-600 hover:bg-purple-700"
        >
          Next Step
        </Button>
      </div>
    </div>
  )
}
