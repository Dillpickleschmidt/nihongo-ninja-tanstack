// features/import-page/data/jlpt-data.ts
// Static data providers - return item arrays as promises

import type { ImportItem } from "../types"

export async function getN5Grammar(): Promise<ImportItem[]> {
  return [
    { id: "g1", main: "は", meaning: "Topic marker" },
    { id: "g2", main: "が", meaning: "Subject marker" },
    { id: "g3", main: "を", meaning: "Object marker" },
    { id: "g4", main: "～ます", meaning: "Polite form" },
    { id: "g5", main: "～ません", meaning: "Polite negative" },
  ]
}

export async function getN4Grammar(): Promise<ImportItem[]> {
  return [
    { id: "g4-1", main: "～たら", meaning: "If; when" },
    { id: "g4-2", main: "～なら", meaning: "If (contextual)" },
  ]
}

export async function getN5Kanji(): Promise<ImportItem[]> {
  return [
    { id: "k5-1", main: "人", meaning: "person" },
    { id: "k5-2", main: "火", meaning: "fire" },
    { id: "k5-3", main: "水", meaning: "water" },
    { id: "k5-4", main: "木", meaning: "tree; wood" },
    { id: "k5-5", main: "金", meaning: "gold; money" },
  ]
}

export async function getN4Kanji(): Promise<ImportItem[]> {
  return [
    { id: "k4-1", main: "日", meaning: "day; sun" },
    { id: "k4-2", main: "月", meaning: "moon; month" },
    { id: "k4-3", main: "山", meaning: "mountain" },
    { id: "k4-4", main: "川", meaning: "river" },
  ]
}
