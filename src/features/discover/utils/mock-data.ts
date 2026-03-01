/**
 * Deterministic mock data for placeholder comprehension badges and region availability.
 * Uses media ID as seed for consistent values across renders.
 */

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297
  return x - Math.floor(x)
}

export function getMockComprehension(mediaId: number): {
  avg: number
  best: number
} {
  const base = seededRandom(mediaId)
  const avg = Math.floor(base * 60 + 15) // 15-75%
  const bestOffset = Math.floor(seededRandom(mediaId + 7) * 25 + 5) // 5-30% higher
  const best = Math.min(avg + bestOffset, 98)
  return { avg, best }
}

const STREAMING_SERVICES = [
  "Netflix",
  "Crunchyroll",
  "Funimation",
  "Amazon Prime",
  "HiDive",
] as const

const COUNTRY_POOLS = [
  ["US", "CA", "UK", "AU"],
  ["JP", "US", "CA"],
  ["US", "UK", "DE", "FR", "AU", "NZ"],
  ["JP"],
  ["US", "CA", "UK", "AU", "DE", "FR", "IT", "ES", "BR", "MX"],
] as const

export function getMockRegionData(mediaId: number): {
  available: boolean
  countries: string[]
  service: string
} {
  const r = seededRandom(mediaId + 13)
  // ~20% chance of being region-locked
  const available = r > 0.2
  if (available) {
    return { available: true, countries: [], service: "" }
  }

  const serviceIdx = Math.floor(seededRandom(mediaId + 31) * STREAMING_SERVICES.length)
  const countryIdx = Math.floor(seededRandom(mediaId + 37) * COUNTRY_POOLS.length)
  return {
    available: false,
    countries: [...COUNTRY_POOLS[countryIdx]],
    service: STREAMING_SERVICES[serviceIdx],
  }
}

export const MOCK_VOCAB = [
  { word: "食べる", reading: "たべる", meaning: "to eat", freq: 847 },
  { word: "走る", reading: "はしる", meaning: "to run", freq: 523 },
  { word: "学校", reading: "がっこう", meaning: "school", freq: 712 },
  { word: "友達", reading: "ともだち", meaning: "friend", freq: 634 },
  { word: "天気", reading: "てんき", meaning: "weather", freq: 389 },
  { word: "買い物", reading: "かいもの", meaning: "shopping", freq: 298 },
  { word: "電車", reading: "でんしゃ", meaning: "train", freq: 456 },
  { word: "病院", reading: "びょういん", meaning: "hospital", freq: 187 },
  { word: "約束", reading: "やくそく", meaning: "promise", freq: 342 },
  { word: "練習", reading: "れんしゅう", meaning: "practice", freq: 411 },
  { word: "旅行", reading: "りょこう", meaning: "travel", freq: 367 },
  { word: "料理", reading: "りょうり", meaning: "cooking", freq: 508 },
  { word: "会議", reading: "かいぎ", meaning: "meeting", freq: 234 },
  { word: "経験", reading: "けいけん", meaning: "experience", freq: 156 },
  { word: "景色", reading: "けしき", meaning: "scenery", freq: 89 },
]

export const MOCK_GRAMMAR = [
  { pattern: "〜てから", meaning: "after doing", freq: 612 },
  { pattern: "〜ている", meaning: "ongoing action", freq: 891 },
  { pattern: "〜たら", meaning: "if/when", freq: 534 },
  { pattern: "〜ないで", meaning: "without doing", freq: 278 },
  { pattern: "〜ようにする", meaning: "try to", freq: 189 },
  { pattern: "〜ことがある", meaning: "sometimes", freq: 345 },
  { pattern: "〜はずだ", meaning: "should be", freq: 167 },
  { pattern: "〜そうだ", meaning: "looks like", freq: 423 },
]
