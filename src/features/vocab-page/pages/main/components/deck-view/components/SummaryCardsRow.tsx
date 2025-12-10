import { SummaryCard } from '../SummaryCard'

interface SummaryCardsRowProps {
  vocabCount?: number
  kanjiCount?: number
  radicalCount?: number
  onVocabClick: () => void
  onKanjiClick: () => void
}

export function SummaryCardsRow(props: SummaryCardsRowProps) {
  return (
    <div class="grid grid-cols-3 gap-3 px-4">
      <SummaryCard
        label="Vocabulary"
        count={props.vocabCount}
        onClick={props.onVocabClick}
      />
      <SummaryCard
        label="Kanji"
        count={props.kanjiCount}
        onClick={props.onKanjiClick}
      />
      <SummaryCard
        label="Radicals"
        count={props.radicalCount}
      />
    </div>
  )
}
