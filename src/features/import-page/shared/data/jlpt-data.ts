// features/import-page/data/jlpt-data.ts
// Static data providers - return item arrays as promises

import type { ImportItem } from "../types"

export async function getN5Grammar(): Promise<ImportItem[]> {
  return [
    { id: "は", meaning: "Topic marker" },
    { id: "が", meaning: "Subject marker" },
    { id: "を", meaning: "Object marker" },
    { id: "～ます", meaning: "Polite form" },
    { id: "～ません", meaning: "Polite negative" },
  ]
}

export async function getN4Grammar(): Promise<ImportItem[]> {
  return [
    { id: "～たら", meaning: "If; when" },
    { id: "～なら", meaning: "If (contextual)" },
  ]
}

export async function getN5Kanji(): Promise<ImportItem[]> {
  return [
    { id: "人", meaning: "person" },
    { id: "火", meaning: "fire" },
    { id: "水", meaning: "water" },
    { id: "木", meaning: "tree; wood" },
    { id: "金", meaning: "gold; money" },
  ]
}

export async function getN4Kanji(): Promise<ImportItem[]> {
  return [
    { id: "日", meaning: "day; sun" },
    { id: "月", meaning: "moon; month" },
    { id: "山", meaning: "mountain" },
    { id: "川", meaning: "river" },
  ]
}
