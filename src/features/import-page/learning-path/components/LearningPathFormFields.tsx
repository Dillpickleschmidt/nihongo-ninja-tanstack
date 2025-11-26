import type { TextbookIDEnum } from "@/data/types"

interface LearningPathFormFieldsProps {
  pathName: string
  setPathName: (value: string) => void
  showName: string
  setShowName: (value: string) => void
  episodeName: string
  setEpisodeName: (value: string) => void
  textbookId: TextbookIDEnum
  setTextbookId: (value: TextbookIDEnum) => void
  inputClass?: string
}

export function LearningPathFormFields(props: LearningPathFormFieldsProps) {
  const inputClass =
    props.inputClass ||
    "w-full rounded border border-white/10 bg-neutral-900/50 px-3 py-2 text-foreground placeholder-muted-foreground"

  return (
    <div class="space-y-3">
      <div>
        <label class="block text-sm font-semibold text-foreground mb-2">
          Learning Path Name
        </label>
        <input
          type="text"
          placeholder="e.g., Attack on Titan Episode 1"
          value={props.pathName}
          onInput={(e) => props.setPathName(e.currentTarget.value)}
          required
          class={inputClass}
        />
      </div>

      <div>
        <label class="block text-sm font-semibold text-foreground mb-2">
          Show Name (Optional)
        </label>
        <input
          type="text"
          placeholder="e.g., Attack on Titan"
          value={props.showName}
          onInput={(e) => props.setShowName(e.currentTarget.value)}
          class={inputClass}
        />
      </div>

      <div>
        <label class="block text-sm font-semibold text-foreground mb-2">
          Episode Name (Optional)
        </label>
        <input
          type="text"
          placeholder="e.g., Episode 1"
          value={props.episodeName}
          onInput={(e) => props.setEpisodeName(e.currentTarget.value)}
          class={inputClass}
        />
      </div>

      <div>
        <label class="block text-sm font-semibold text-foreground mb-2">
          Module Ordering
        </label>
        <select
          value={props.textbookId}
          onChange={(e) =>
            props.setTextbookId(e.currentTarget.value as TextbookIDEnum)
          }
          class={inputClass}
        >
          <option value="getting_started">
            Getting Started with Nihongo Ninja
          </option>
          <option value="genki_1">Genki I</option>
          <option value="genki_2">Genki II</option>
        </select>
      </div>
    </div>
  )
}
