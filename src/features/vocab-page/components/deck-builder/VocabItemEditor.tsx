import { createSignal, For } from "solid-js"
import { Plus, Trash2, Minus } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldDescription,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
  NumberFieldLabel,
} from "@/components/ui/number-field"
import type { PartOfSpeech } from "@/data/types"

const PARTS_OF_SPEECH: PartOfSpeech[] = [
  "Ichidan verb",
  "Godan verb with 'u' ending",
  "Godan verb with 'tsu' ending",
  "Godan verb with 'ru' ending",
  "Godan verb - Iku/Yuku special class",
  "Godan verb with 'ku' ending",
  "Godan verb with 'gu' ending",
  "Godan verb with 'bu' ending",
  "Godan verb with 'mu' ending",
  "Godan verb with 'nu' ending",
  "Godan verb with 'su' ending",
  "Godan verb with 'ru' ending (irregular verb)",
  "Godan verb - -aru special class",
  "Suru verb - included",
  "Suru verb - compound word",
  "Suru verb - special class",
  "Kuru verb - special class",
  "I-adjective",
  "Na-adjective",
]

interface VocabItemEditorProps {
  index: number
  onRemove: () => void
}

export function VocabItemEditor(props: VocabItemEditorProps) {
  // Each vocab item manages its own state
  const [word, setWord] = createSignal("")
  const [furigana, setFurigana] = createSignal("")
  const [english, setEnglish] = createSignal([""])
  const [partOfSpeech, setPartOfSpeech] = createSignal("")
  const [chapter, setChapter] = createSignal("1")

  const addEnglishMeaning = () => setEnglish((prev) => [...prev, ""])
  const removeEnglishMeaning = (index: number) =>
    setEnglish((prev) =>
      prev.length > 1 ? prev.filter((_, i) => i !== index) : [""],
    )
  const updateEnglishMeaning = (index: number, value: string) =>
    setEnglish((prev) => prev.map((item, i) => (i === index ? value : item)))

  return (
    <div class="border-border rounded-lg border p-4">
      <div class="mb-3 flex items-center justify-between">
        <div class="text-muted-foreground text-xs">Item {props.index + 1}</div>
        <Button
          variant="ghost"
          size="icon"
          class="size-8"
          onClick={props.onRemove}
          aria-label="Remove item"
        >
          <Trash2 class="size-4" />
        </Button>
      </div>

      {/* Word and Furigana row - for proper tab order */}
      <div class="grid gap-4 md:grid-cols-2">
        <TextField value={word()} onChange={setWord}>
          <TextFieldLabel>Word</TextFieldLabel>
          <TextFieldInput placeholder="食べ物" />
        </TextField>

        <TextField value={furigana()} onChange={setFurigana}>
          <TextFieldLabel>Furigana</TextFieldLabel>
          <TextFieldInput placeholder="食[た]べ  物[もの]" />
          <TextFieldDescription class="text-xs leading-none font-normal">
            Use kana in brackets for kanji segments.
          </TextFieldDescription>
        </TextField>
      </div>

      {/* Rest of the content in original two-column layout */}
      <div class="-mt-1.5 grid gap-4 md:grid-cols-2">
        {/* LEFT COLUMN */}
        <div>
          {/* English Meanings */}
          <div class="mb-1.5">
            <span class="text-sm font-medium">English Meanings</span>
          </div>
          <div class="space-y-2">
            <For each={english()}>
              {(meaning, i) => (
                <div class="flex items-center gap-1">
                  <TextField
                    class="flex-1"
                    value={meaning}
                    onChange={(value) => updateEnglishMeaning(i(), value)}
                  >
                    <TextFieldInput placeholder="food" />
                  </TextField>
                  <div class="flex items-center gap-0.5">
                    <Button
                      variant="ghost"
                      size="icon"
                      class="size-8"
                      onClick={() => removeEnglishMeaning(i())}
                      aria-label="Remove meaning"
                    >
                      <Minus class="size-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      class="size-8"
                      onClick={addEnglishMeaning}
                      aria-label="Add meaning"
                    >
                      <Plus class="size-3" />
                    </Button>
                  </div>
                </div>
              )}
            </For>
          </div>

          {/* Part of Speech + Chapter */}
          <div class="grid grid-cols-[1fr_auto] items-end gap-3 pt-2.5">
            <div>
              <div class="mb-1.5">
                <span class="text-sm font-medium">Part of Speech</span>
              </div>
              <Select
                value={partOfSpeech()}
                onChange={setPartOfSpeech}
                options={PARTS_OF_SPEECH}
                placeholder="Select part of speech"
                itemComponent={(itemProps) => (
                  <SelectItem item={itemProps.item}>
                    {itemProps.item.rawValue}
                  </SelectItem>
                )}
              >
                <SelectTrigger>
                  <SelectValue<string>>
                    {(state) =>
                      state.selectedOption() || "Select part of speech"
                    }
                  </SelectValue>
                </SelectTrigger>
                <SelectContent />
              </Select>
            </div>

            <div class="w-20">
              <NumberField
                value={chapter()}
                onChange={(val) => setChapter(val || "1")}
              >
                <NumberFieldLabel>Chapter</NumberFieldLabel>
                <NumberFieldGroup>
                  <NumberFieldInput />
                  <NumberFieldIncrementTrigger class="h-3 w-3 pt-1" />
                  <NumberFieldDecrementTrigger class="h-3 w-3 pb-1" />
                </NumberFieldGroup>
              </NumberField>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div class="space-y-4">
          {/* Action buttons */}
          <div class="mt-1.5 flex h-36 flex-col justify-center">
            <div class="flex flex-wrap justify-end gap-2">
              <Button variant="outline">
                <Plus class="size-4" /> Note
              </Button>
              <Button variant="outline">
                <Plus class="size-4" /> Particle
              </Button>
              <Button variant="outline">
                <Plus class="size-4" /> Example
              </Button>
              <Button variant="outline">
                <Plus class="size-4" /> Kanji Mnemonic
              </Button>
              <Button variant="outline">
                <Plus class="size-4" /> Reading Mnemonic
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
