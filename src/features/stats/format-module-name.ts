const VOCAB_REVIEW_LABELS: Record<string, string> = {
  "vocab-review:nihongo-ninja-meanings": "Nihongo Ninja Meanings Review",
  "vocab-review:nihongo-ninja-spellings": "Nihongo Ninja Spellings Review",
  "vocab-review:anki-meanings": "Anki Meanings Review",
  "vocab-review:anki-spellings": "Anki Spellings Review",
}

export function formatModuleName(path: string) {
  if (path.startsWith("vocab-review:")) {
    return (
      VOCAB_REVIEW_LABELS[path] ??
      path.replace(/^vocab-review:/, "").replaceAll("-", " ")
    )
  }

  return path
    .replace(/^vocab-deck:/, "")
    .replace(/^sentence-practice-/, "")
    .replaceAll("_", " ")
    .replaceAll("-", " ")
}
