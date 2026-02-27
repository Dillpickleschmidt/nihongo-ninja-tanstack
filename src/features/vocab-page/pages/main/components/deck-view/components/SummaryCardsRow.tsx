import { SummaryCard } from "../SummaryCard"

interface SummaryCardsRowProps {
  vocabCount?: number
  kanjiCount?: number
  radicalCount?: number
  vocabDueRows?: {
    meanings: { hasHistory: boolean; dueCount: number }
    spellings: { hasHistory: boolean; dueCount: number }
  }
  kanjiDueRows?: {
    meanings: { hasHistory: boolean; dueCount: number }
  }
  radicalDueRows?: {
    meanings: { hasHistory: boolean; dueCount: number }
  }
  dueRowsLoading: boolean
  onVocabClick: () => void
  onKanjiClick: () => void
}

export function SummaryCardsRow(props: SummaryCardsRowProps) {
  return (
    <div class="grid grid-cols-3 gap-3 px-4">
      <SummaryCard
        label="Vocabulary"
        count={props.vocabCount}
        dueRows={
          props.vocabDueRows
            ? [
                {
                  label: "Meanings",
                  hasHistory: props.vocabDueRows.meanings.hasHistory,
                  dueCount: props.vocabDueRows.meanings.dueCount,
                },
                {
                  label: "Spellings",
                  hasHistory: props.vocabDueRows.spellings.hasHistory,
                  dueCount: props.vocabDueRows.spellings.dueCount,
                },
              ]
            : undefined
        }
        dueLoading={props.dueRowsLoading}
        onClick={props.onVocabClick}
      />
      <SummaryCard
        label="Kanji"
        count={props.kanjiCount}
        dueRows={
          props.kanjiDueRows
            ? [
                {
                  label: "Meanings",
                  hasHistory: props.kanjiDueRows.meanings.hasHistory,
                  dueCount: props.kanjiDueRows.meanings.dueCount,
                },
              ]
            : undefined
        }
        dueLoading={props.dueRowsLoading}
        onClick={props.onKanjiClick}
      />
      <SummaryCard
        label="Radicals"
        count={props.radicalCount}
        dueRows={
          props.radicalDueRows
            ? [
                {
                  label: "Meanings",
                  hasHistory: props.radicalDueRows.meanings.hasHistory,
                  dueCount: props.radicalDueRows.meanings.dueCount,
                },
              ]
            : undefined
        }
        dueLoading={props.dueRowsLoading}
      />
    </div>
  )
}
