const EXCLUDED_PRIMARY_POS = new Set([
  "記号",
  "補助記号",
  "助詞",
  "フィラー",
  "その他",
])

export function shouldSkipToken(params: {
  tokenClass: string
  pos: string[]
  normalizedWord: string
}): boolean {
  const primaryPos = params.pos[0] ?? ""

  if (params.tokenClass === "UNKNOWN") return true
  if (!primaryPos) return true
  if (EXCLUDED_PRIMARY_POS.has(primaryPos)) return true
  if (isExcludedPosPair(params.pos)) return true
  if (!params.normalizedWord) return true
  return false
}

function isExcludedPosPair(pos: string[]): boolean {
  const primary = pos[0]
  const secondary = pos[1]

  if (primary === "名詞" && secondary === "固有名詞") return true
  if (primary === "名詞" && secondary === "数") return true
  if (primary === "感動詞" && secondary === "間投") return true

  return false
}
