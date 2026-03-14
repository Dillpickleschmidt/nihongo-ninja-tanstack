import { For } from "solid-js"
import { extractHiragana } from "@/data/utils/text/furigana"
import type { VocabularyItem } from "convex/validators"

export function DeckVocabTable(props: { vocab: VocabularyItem[] }) {
  return (
    <table class="w-full text-sm">
      <thead>
        <tr class="border-border/30 border-b">
          <th class="text-muted-foreground/60 py-1.5 pr-3 text-left text-xs font-medium">Kanji</th>
          <th class="text-muted-foreground/60 py-1.5 pr-3 text-left text-xs font-medium">Kana</th>
          <th class="text-muted-foreground/60 py-1.5 text-right text-xs font-medium">English</th>
        </tr>
      </thead>
      <tbody>
        <For each={props.vocab}>
          {(item) => (
            <tr class="border-border/30 border-b last:border-0">
              <td class="font-japanese py-1.5 pr-3 text-lg">
                {item.overwriteWord ?? item.word}
              </td>
              <td class="font-japanese py-1.5 pr-3 text-lg">
                {extractHiragana(item.furigana)}
              </td>
              <td class="py-1.5 text-right text-[0.9375rem]">
                {item.english.join(", ")}
              </td>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  )
}
