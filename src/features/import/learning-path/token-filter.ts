const EXCLUDED_POS = new Set(["記号", "補助記号", "助詞"])

export function shouldSkipToken(params: {
  tokenClass: string
  primaryPos: string
  normalizedWord: string
}): boolean {
  if (params.tokenClass === "UNKNOWN") return true
  if (!params.primaryPos) return true
  if (EXCLUDED_POS.has(params.primaryPos)) return true
  if (!params.normalizedWord) return true
  return false
}
