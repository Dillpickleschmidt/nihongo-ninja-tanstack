// vocab-practice/components/shared/MnemonicSection.tsx
import { Show } from "solid-js"
import { parseMnemonicText } from "@/utils/mnemonic-parser"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"

export function MnemonicSection(props: {
  visible: () => boolean
}) {
  const { currentCard } = useVocabPracticeContext()

  // Pick the correct mnemonic based on mode
  const text = () => {
    const card = currentCard()
    if (!card) return ""
    const mode = card.practiceMode
    const m = card.mnemonics
    return mode === "meanings"
      ? m?.kanji?.[0] || ""
      : mode === "spellings"
        ? m?.reading?.[0] || ""
        : ""
  }

  const labelText = () => {
    const card = currentCard()
    if (!card) return ""
    return card.practiceMode === "meanings" ? "Meaning Mnemonic" : "Spelling Mnemonic"
  }

  return (
    <Show when={text() && text().length > 0}>
      <div
        class="w-full max-w-xl space-y-1 px-2"
        classList={{
          "opacity-0 pointer-events-none select-none": !props.visible(),
          "opacity-100 transition-opacity duration-300 pointer-events-auto select-auto":
            props.visible(),
        }}
      >
        <p class="mb-1 text-sm tracking-wider uppercase">
          <span>{labelText()}</span>
        </p>
        <p class="text-muted-foreground text-base leading-relaxed">
          {parseMnemonicText(text())}
        </p>
      </div>
    </Show>
  )
}
