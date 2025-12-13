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
}

export interface ErrorRange {
  start: number
  end: number
}

export type Difficulty = "easy" | "hard"
