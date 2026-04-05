import { For, type JSX } from "solid-js"
import { Repeat2 } from "lucide-solid"
import {
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
} from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  TextField,
  TextFieldLabel,
  TextFieldInput,
} from "@/components/ui/text-field"
import { Button3D } from "@/components/Button3D"
import type { ConjugationPracticeSettings } from "../utils/questionGenerator"

type SettingsPageProps = {
  settings: () => ConjugationPracticeSettings
  onSettingsChange: (settings: ConjugationPracticeSettings) => void
  onStartPractice: () => void
}

type SettingKey = keyof ConjugationPracticeSettings
type SettingEntry = [SettingKey, string]

const CATEGORIES: Record<string, SettingEntry[]> = {
  formTypes: [
    ["normal", "Normal"],
    ["teForm", "Te-form"],
    ["tariForm", "Tari-form"],
    ["taiForm", "Tai-form"],
    ["potential", "Potential"],
    ["volitional", "Volitional"],
    ["imperative", "Imperative"],
    ["conditional", "Conditional"],
    ["passive", "Passive"],
    ["causative", "Causative"],
    ["causativePassive", "Causative-Passive"],
  ],
  partsOfSpeech: [
    ["verb", "Verb"],
    ["iAdjective", "I-Adjective"],
    ["naAdjective", "Na-Adjective"],
  ],
  speechLevels: [
    ["polite", "Polite"],
    ["plain", "Plain"],
  ],
  tenses: [
    ["nonPast", "Non-Past"],
    ["past", "Past"],
  ],
  polarities: [
    ["positive", "Positive"],
    ["negative", "Negative"],
  ],
}

const FORM_EXAMPLES: Record<string, string> = {
  normal: "食べる・食べます",
  teForm: "食べて",
  tariForm: "食べたり",
  taiForm: "食べたい",
  potential: "食べられる",
  volitional: "食べよう・食べましょう",
  imperative: "食べろ",
  conditional: "食べれば",
  passive: "食べられる",
  causative: "食べさせる",
  causativePassive: "食べさせられる",
}

const JLPT_OPTIONS = ["n5", "n4", "n3", "n2", "n1"]

export function SettingsPage(props: SettingsPageProps) {
  const isLastInCategory = (key: SettingKey): boolean => {
    for (const category of Object.values(CATEGORIES)) {
      const keys = category.map(([k]) => k)
      if (keys.includes(key)) {
        const selectedCount = keys.filter((k) => !!props.settings()[k]).length
        return selectedCount === 1 && !!props.settings()[key]
      }
    }
    return false
  }

  const handleChange = (
    key: keyof ConjugationPracticeSettings,
    value: boolean | string | number,
  ) => {
    if (typeof value === "boolean" && !value && isLastInCategory(key)) return
    props.onSettingsChange({ ...props.settings(), [key]: value })
  }

  return (
    <div>
      {/* Header */}
      <div class="mb-10">
        <div class="mb-2 flex items-center gap-2">
          <Repeat2 class="size-4 text-teal-400" />
          <span class="text-xs font-semibold tracking-widest text-teal-400/90 uppercase">
            Conjugation Practice
          </span>
        </div>
        <h1 class="font-japanese text-4xl leading-tight font-bold tracking-tight md:text-5xl">
          活用練習
        </h1>
        <p class="text-muted-foreground mt-2 max-w-lg text-sm leading-relaxed md:text-base">
          Practice verb and adjective conjugations across all forms, tenses, and
          speech levels.
        </p>
      </div>

      <div class="space-y-6 pb-32">
        {/* Form Types */}
        <Section title="Form Types">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <For each={CATEGORIES.formTypes}>
              {([key, label]) => (
                <div>
                  <ToggleOption
                    checked={() => !!props.settings()[key]}
                    onChange={(checked) => handleChange(key, checked)}
                    label={label}
                  />
                  <p class="mt-0.5 font-japanese text-sm text-white/30">
                    {FORM_EXAMPLES[key]}
                  </p>
                </div>
              )}
            </For>
          </div>
        </Section>

        {/* Parts of Speech */}
        <Section title="Parts of Speech">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <For each={CATEGORIES.partsOfSpeech}>
              {([key, label]) => (
                <ToggleOption
                  checked={() => !!props.settings()[key]}
                  onChange={(checked) => handleChange(key, checked)}
                  label={label}
                />
              )}
            </For>
          </div>
        </Section>

        {/* Speech Level / Tense / Polarity */}
        <div class="grid gap-4 sm:grid-cols-3">
          <Section title="Speech Level">
            <div class="space-y-3">
              <For each={CATEGORIES.speechLevels}>
                {([key, label]) => (
                  <ToggleOption
                    checked={() => !!props.settings()[key]}
                    onChange={(checked) => handleChange(key, checked)}
                    label={label}
                  />
                )}
              </For>
            </div>
          </Section>

          <Section title="Tense">
            <div class="space-y-3">
              <For each={CATEGORIES.tenses}>
                {([key, label]) => (
                  <ToggleOption
                    checked={() => !!props.settings()[key]}
                    onChange={(checked) => handleChange(key, checked)}
                    label={label}
                  />
                )}
              </For>
            </div>
          </Section>

          <Section title="Polarity">
            <div class="space-y-3">
              <For each={CATEGORIES.polarities}>
                {([key, label]) => (
                  <ToggleOption
                    checked={() => !!props.settings()[key]}
                    onChange={(checked) => handleChange(key, checked)}
                    label={label}
                  />
                )}
              </For>
            </div>
          </Section>
        </div>

        {/* Special Options */}
        <Section title="Options">
          <div class="grid gap-6 sm:grid-cols-2">
            <div class="space-y-5">
              <div class="space-y-2">
                <label class="text-sm font-medium text-white/40">
                  JLPT Level
                </label>
                <Select
                  options={JLPT_OPTIONS}
                  value={props.settings().jlptLevel}
                  onChange={(value) => {
                    if (value) handleChange("jlptLevel", value)
                  }}
                  itemComponent={(itemProps) => (
                    <SelectItem item={itemProps.item}>
                      {itemProps.item.rawValue.toUpperCase()}
                    </SelectItem>
                  )}
                >
                  <SelectTrigger class="bg-white/5 border-white/10">
                    <SelectValue<string>>
                      {(state) => state.selectedOption().toUpperCase()}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent />
                </Select>
              </div>

              <TextField class="space-y-2">
                <TextFieldLabel class="text-white/40">
                  Number of questions
                </TextFieldLabel>
                <TextFieldInput
                  type="number"
                  value={props.settings().amount}
                  onInput={(e) => {
                    const val = parseInt(e.currentTarget.value, 10)
                    if (!isNaN(val) && val >= 1 && val <= 100)
                      handleChange("amount", val)
                  }}
                  min="1"
                  max="100"
                  class="bg-white/5 border-white/10"
                />
              </TextField>
            </div>

            <div class="space-y-3">
              <ToggleOption
                checked={() => props.settings().leaveOutSuru}
                onChange={(checked) => handleChange("leaveOutSuru", checked)}
                label={
                  <>
                    Leave out <span class="font-japanese">する</span> verbs
                  </>
                }
              />
              <ToggleOption
                checked={() => props.settings().reverse}
                onChange={(checked) => handleChange("reverse", checked)}
                label="Reverse mode"
              />
              <ToggleOption
                checked={() => props.settings().showMeaning}
                onChange={(checked) => handleChange("showMeaning", checked)}
                label="Show meaning"
              />
              <ToggleOption
                checked={() => props.settings().noFurigana}
                onChange={(checked) => handleChange("noFurigana", checked)}
                label="No furigana"
              />
            </div>
          </div>
        </Section>
      </div>

      {/* Fixed bottom button */}
      <div class="fixed bottom-20 left-0 right-0 z-30 flex justify-center px-4">
        <div class="w-full max-w-xs">
          <Button3D
            onClick={props.onStartPractice}
            color="rgb(20,184,166)"
          >
            Start Practice
          </Button3D>
        </div>
      </div>
    </div>
  )
}

function Section(props: {
  title: string
  children: JSX.Element
}) {
  return (
    <section class="space-y-4 rounded-xl border border-white/10 bg-white/5 p-5">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-white/40">
        {props.title}
      </h2>
      {props.children}
    </section>
  )
}

function ToggleOption(props: {
  checked: () => boolean
  onChange: (checked: boolean) => void
  label: JSX.Element
}) {
  return (
    <Checkbox
      class="group flex items-start gap-2"
      checked={props.checked()}
      onChange={props.onChange}
    >
      <CheckboxInput class="cursor-pointer border-white/20" />
      <CheckboxLabel class="cursor-pointer text-sm font-medium text-white/70 transition-colors hover:text-white/90">
        {props.label}
      </CheckboxLabel>
    </Checkbox>
  )
}
