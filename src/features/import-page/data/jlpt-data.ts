// features/import-page/data/jlpt-data.ts

import type { ItemStatus } from "../types"

export interface ImportItem {
  id: string
  main: string // Kanji or Grammar Pattern
  meaning: string // English definition
  status?: ItemStatus // Optional initial status
}

export interface ImportSubCategory {
  id: string
  title: string
  description?: string
  items: ImportItem[]
}

export interface ImportCategory {
  id: string
  title: string
  subcategories: ImportSubCategory[]
}

export interface JLPTLevel {
  id: string
  label: string // "N5"
  description: string // "Beginner"
  color: string // For UI accents
  categories: ImportCategory[]
}

export const jlptData: JLPTLevel[] = [
  {
    id: "n5",
    label: "N5",
    description: "Beginner",
    color: "#21b959", // Green
    categories: [
      {
        id: "n5-grammar",
        title: "Grammar",
        subcategories: [
          {
            id: "n5-gram-basics",
            title: "Basic Particles",
            items: [
              { id: "g1", main: "は", meaning: "Topic marker" },
              { id: "g2", main: "が", meaning: "Subject marker" },
              { id: "g3", main: "を", meaning: "Object marker" },
            ],
          },
          {
            id: "n5-gram-verb",
            title: "Verb Conjugations",
            items: [
              { id: "g4", main: "～ます", meaning: "Polite form" },
              { id: "g5", main: "～ません", meaning: "Polite negative" },
            ],
          },
        ],
      },
      {
        id: "n5-vocab",
        title: "Vocabulary",
        subcategories: [
          {
            id: "n5-core",
            title: "Core Vocab",
            description: "The 100 most essential words for N5.",
            items: [
              { id: "v1", main: "私", meaning: "I; me" },
              { id: "v2", main: "猫", meaning: "cat" },
              { id: "v3", main: "食べる", meaning: "to eat" },
              { id: "v4", main: "見る", meaning: "to see; to watch" },
              { id: "v5", main: "学校", meaning: "school" },
            ],
          },
          {
            id: "n5-extra",
            title: "Extra Vocab",
            description: "Additional nouns and adjectives.",
            items: [
              { id: "v6", main: "鉛筆", meaning: "pencil" },
              { id: "v7", main: "天気", meaning: "weather" },
              { id: "v8", main: "辛い", meaning: "spicy" },
            ],
          },
        ],
      },
      {
        id: "n5-kanji",
        title: "Kanji",
        subcategories: [
          {
            id: "n5-kanji-basic",
            title: "Basic Kanji",
            description: "Essential kanji for N5 proficiency.",
            items: [
              { id: "k5-1", main: "人", meaning: "person" },
              { id: "k5-2", main: "火", meaning: "fire" },
              { id: "k5-3", main: "水", meaning: "water" },
              { id: "k5-4", main: "木", meaning: "tree; wood" },
              { id: "k5-5", main: "金", meaning: "gold; money" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "n4",
    label: "N4",
    description: "Elementary",
    color: "#eab308", // Yellow
    categories: [
      {
        id: "n4-grammar",
        title: "Grammar",
        subcategories: [
          {
            id: "n4-gram-cond",
            title: "Conditionals",
            items: [
              { id: "g4-1", main: "～たら", meaning: "If; when" },
              { id: "g4-2", main: "～なら", meaning: "If (contextual)" },
            ],
          },
        ],
      },
      {
        id: "n4-vocab",
        title: "Vocabulary",
        subcategories: [
          {
            id: "n4-core",
            title: "Core Vocab",
            items: [
              { id: "v4-1", main: "選ぶ", meaning: "to choose" },
              { id: "v4-2", main: "決める", meaning: "to decide" },
              { id: "v4-3", main: "住所", meaning: "address" },
            ],
          },
        ],
      },
      {
        id: "n4-kanji",
        title: "Kanji",
        subcategories: [
          {
            id: "n4-kanji-core",
            title: "Core Kanji",
            description: "Essential kanji for N4 proficiency.",
            items: [
              { id: "k4-1", main: "日", meaning: "day; sun" },
              { id: "k4-2", main: "月", meaning: "moon; month" },
              { id: "k4-3", main: "山", meaning: "mountain" },
              { id: "k4-4", main: "川", meaning: "river" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "n1",
    label: "N1",
    description: "Advanced",
    color: "#bf2c2c", // Red
    categories: [
      {
        id: "n1-grammar",
        title: "Grammar",
        subcategories: [
          {
            id: "n1-gram-advanced",
            title: "Advanced Structures",
            items: [
              { id: "g1-1", main: "～ものなら", meaning: "if it were possible" },
              { id: "g1-2", main: "～ばかりか", meaning: "not only... but also" },
            ],
          },
        ],
      },
      {
        id: "n1-vocab",
        title: "Vocabulary",
        subcategories: [
          {
            id: "n1-core",
            title: "Core Vocab",
            items: [
              { id: "v1-1", main: "概念", meaning: "concept" },
              { id: "v1-2", main: "供給", meaning: "supply" },
            ],
          },
        ],
      },
      {
        id: "n1-kanji",
        title: "Kanji",
        subcategories: [
          {
            id: "n1-kanji-advanced",
            title: "Advanced Kanji",
            description: "Complex kanji for N1 proficiency.",
            items: [
              { id: "k1-1", main: "龍", meaning: "dragon" },
              { id: "k1-2", main: "馬", meaning: "horse" },
              { id: "k1-3", main: "鳥", meaning: "bird" },
            ],
          },
        ],
      },
    ],
  },
]
