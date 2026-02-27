import { createMemo, createSignal, For, Show } from "solid-js"
import { ArrowRight, Check, ChevronDown } from "lucide-solid"
import { cn } from "@/utils"
import { Button } from "@/components/ui/button"
import type { AnkiExtractedData, FieldMapping } from "./anki-types"

interface AnkiFieldMappingViewProps {
  extractedData: AnkiExtractedData
  fieldMapping: FieldMapping
  onMappingChange: (mapping: FieldMapping) => void
  onNext: () => void
}

export function AnkiFieldMappingView(props: AnkiFieldMappingViewProps) {
  const firstNote = () => props.extractedData.notes[0]

  const noteFields = createMemo(() => {
    const note = firstNote()
    if (!note) return []
    return note.flds.split("\x1f")
  })

  const previewWord = () =>
    noteFields()[props.fieldMapping.wordFieldIndex] ?? ""
  const previewMeaning = () =>
    noteFields()[props.fieldMapping.englishFieldIndex] ?? ""

  const [picking, setPicking] = createSignal<"word" | "meaning" | null>(null)

  const handleFieldPick = (idx: number) => {
    const role = picking()
    if (!role) return
    if (role === "word") {
      props.onMappingChange({ ...props.fieldMapping, wordFieldIndex: idx })
    } else {
      props.onMappingChange({ ...props.fieldMapping, englishFieldIndex: idx })
    }
    setPicking(null)
  }

  return (
    <div class="space-y-10">
      {/* Example */}
      <div class="rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
        <p class="mb-1 text-center text-xs uppercase tracking-widest text-white/25">
          Example
        </p>
        <p class="flex items-center justify-center gap-2 text-lg text-white/70">
          <span>食べる</span>
          <ArrowRight class="size-4 text-white/50" />
          <span>to eat</span>
        </p>
      </div>

      {/* Field selectors */}
      <div class="flex items-end gap-3 sm:gap-4">
        <div class="min-w-0 flex-1">
          <FieldSelect
            label="Word"
            value={previewWord()}
            open={picking() === "word"}
            onClick={() => setPicking(picking() === "word" ? null : "word")}
          />
        </div>
        <ArrowRight class="mb-4 size-5 shrink-0 text-white/20" />
        <div class="min-w-0 flex-1">
          <FieldSelect
            label="Meaning"
            value={previewMeaning()}
            open={picking() === "meaning"}
            onClick={() =>
              setPicking(picking() === "meaning" ? null : "meaning")
            }
          />
        </div>
      </div>

      {/* Field picker dropdown */}
      <Show when={picking()}>
        {(role) => (
          <div class="animate-in fade-in slide-in-from-top-4 duration-300">
            <p class="mb-4 text-[13px] text-white/35">
              Select the{" "}
              <span class="font-medium text-white/60">{role()}</span> field
            </p>
            <div class="space-y-2">
              <For each={noteFields()}>
                {(field, idx) => {
                  const isSelected = () =>
                    role() === "word"
                      ? idx() === props.fieldMapping.wordFieldIndex
                      : idx() === props.fieldMapping.englishFieldIndex
                  const isOtherRole = () =>
                    role() === "word"
                      ? idx() === props.fieldMapping.englishFieldIndex
                      : idx() === props.fieldMapping.wordFieldIndex

                  return (
                    <button
                      type="button"
                      onClick={() => handleFieldPick(idx())}
                      class={cn(
                        "flex w-full cursor-pointer items-center gap-4 rounded-xl border px-5 py-3.5 text-left transition-all ease-instant-hover-150",
                        isSelected()
                          ? "border-(--accent)/25 bg-(--accent)/[0.07]"
                          : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.05]",
                      )}
                    >
                      <span
                        class={cn(
                          "flex size-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] transition-colors",
                          isSelected()
                            ? "border-(--accent) bg-(--accent) text-white"
                            : "border-white/15",
                        )}
                      >
                        <Show when={isSelected()}>
                          <Check class="size-2.5" stroke-width={3} />
                        </Show>
                      </span>
                      <span
                        class={cn(
                          "min-w-0 flex-1 truncate text-base",
                          isSelected()
                            ? "text-white"
                            : isOtherRole()
                              ? "text-white/15"
                              : "text-white/45",
                        )}
                      >
                        <Show
                          when={field}
                          fallback={
                            <span class="italic text-white/10">empty</span>
                          }
                        >
                          {field}
                        </Show>
                      </span>
                      <Show when={isOtherRole()}>
                        <span class="shrink-0 text-[10px] uppercase tracking-wide text-white/15">
                          {role() === "word" ? "meaning" : "word"}
                        </span>
                      </Show>
                    </button>
                  )
                }}
              </For>
            </div>
          </div>
        )}
      </Show>

      {/* Continue */}
      <div class="flex justify-end">
        <Button
          onClick={props.onNext}
          variant="ghost"
          class="bg-(--accent) hover:bg-(--accent) h-auto rounded-xl px-8 py-3.5 text-base hover:brightness-120"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

function FieldSelect(props: {
  label: string
  value: string
  open: boolean
  onClick: () => void
}) {
  return (
    <div>
      <label class="mb-2 block text-sm font-medium text-white/50">
        {props.label}
      </label>
      <button
        type="button"
        onClick={props.onClick}
        class={cn(
          "group flex w-full cursor-pointer items-center gap-3 rounded-xl border px-5 py-4 text-left transition-all ease-instant-hover-150",
          props.open
            ? "border-(--accent)/30 bg-(--accent)/[0.06]"
            : "border-white/[0.12] bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
        )}
      >
        <span class="min-w-0 flex-1 truncate text-lg text-white">
          {props.value}
        </span>
        <ChevronDown
          class={cn(
            "size-5 shrink-0 transition-all",
            props.open
              ? "rotate-180 text-(--accent)"
              : "text-white/30 group-hover:text-white/50",
          )}
        />
      </button>
    </div>
  )
}
