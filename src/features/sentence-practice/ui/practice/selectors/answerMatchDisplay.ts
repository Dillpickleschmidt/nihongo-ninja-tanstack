import type { AnswerMatch, ErrorRange } from "../../../core/types"

interface AnswerMatchDisplayOptions {
  showFurigana: boolean
}

interface AnswerMatchDisplay {
  text: string
  showFurigana: boolean
  errors: ErrorRange[]
}

export function getAnswerMatchDisplay(
  match: AnswerMatch,
  options: AnswerMatchDisplayOptions,
): AnswerMatchDisplay {
  if (options.showFurigana && match.displayTextMode === "plain") {
    return {
      text: match.answer.original,
      showFurigana: true,
      errors: match.displayTextErrors,
    }
  }

  return {
    text: match.displayText,
    showFurigana: false,
    errors: match.displayTextErrors,
  }
}
