// RichSegment: single source of truth - compute once, use everywhere
export interface RichSegment {
  original: string // "行[い]く" - with furigana brackets
  plain: string // "行く" - kanji, no brackets
  kana: string // "いく" - kana only
  ruby: string // "<ruby>行<rt>い</rt></ruby>く" - HTML
  isBlank: boolean
}

// Pre-computed answer forms for matching
export interface RichAnswer {
  original: string // "給料[きゅうりょう]を..." - with furigana brackets
  plain: string // "給料をもらったら" - kanji, no brackets
  kana: string // "きゅうりょうをもらったら" - all kana

  // Variation tracking for filtering/display
  isVariation?: boolean
  isKanaVariation?: boolean // Pure kana version of kanji answer
  originalPoliteForm?: boolean // true=polite, false=casual
  pronounType?: string // "私[わたし]" | "僕[ぼく]" | "none" | etc.
  honorificType?: string // "さん" | "くん+ちゃん" | "none" | etc.
  sourceAnswerIndex?: number // Which source answer this came from
  notes?: string // Optional context note
}

export interface AnswerMatch {
  answer: RichAnswer
  displayText: string // The text actually shown (kana or plain)
  similarity: number // 0-1 score
  userErrors: ErrorRange[] // Errors in user input
  answerErrors: ErrorRange[] // Errors in correct answer (for highlighting)
}

export interface ProcessedQuestion {
  english: string
  hint?: string
  answers: RichSegment[][] // answers[0] used for display
  validAnswers: RichAnswer[] // all valid answers for checking
}

export interface CheckResult {
  isCorrect: boolean
  bestMatch: string
  similarity: number // 0-1
  errorRanges: ErrorRange[] // errors in user input
  bestMatchErrors: ErrorRange[] // errors in correct answer (for display)
  strippedParticle?: string // particle stripped for comparison (よ/ね)

  // All matches for alternatives & debug
  allMatches: AnswerMatch[]
  bestMatchIndex: number // Index into allMatches for current best
}

export interface ErrorRange {
  start: number
  end: number
}

export type Difficulty = "easy" | "hard"
