import { overlayKanji, type OverlayResult } from "../core/kanaToKanjiOverlay"
import type { ProcessedQuestion } from "../core/types"
import type { TokenizationResult } from "../kagome/types"

export interface TokenizationWorker {
  waitForReady(): Promise<void>
  tokenize(text: string, timeoutMs?: number): Promise<TokenizationResult>
}

export interface PreparedUserTokenization {
  textToTokenize: string
  overlay: OverlayResult | null
}

export interface UserTokenizationOutcome {
  tokens: TokenizationResult["tokens"]
  overlay: OverlayResult | null
}

export function prepareUserTokenization(
  userInput: string,
  question: ProcessedQuestion,
): PreparedUserTokenization | null {
  if (!userInput.trim()) return null

  const overlay = overlayKanji(userInput, question.answers)
  return {
    textToTokenize: overlay?.overlaidText ?? userInput,
    overlay,
  }
}

export function createTokenizationSession(worker: TokenizationWorker) {
  let latestUserRequestId = 0

  return {
    waitForReady: () => worker.waitForReady(),

    async tokenizeUserInput(
      userInput: string,
      question: ProcessedQuestion,
    ): Promise<UserTokenizationOutcome | null | undefined> {
      const prepared = prepareUserTokenization(userInput, question)
      if (!prepared) return null

      const requestId = ++latestUserRequestId
      const result = await worker.tokenize(prepared.textToTokenize)
      if (requestId !== latestUserRequestId) return undefined

      return {
        tokens: result.tokens,
        overlay: prepared.overlay,
      }
    },
  }
}
