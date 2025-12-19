export const TOOLS = [
  {
    id: "sentences",
    title: "Sentences",
    description: "Practice grammar patterns",
    href: "/sentence-practice",
    icon: "文",
    opacity: 0.12,
  },
  {
    id: "vocab",
    title: "Vocabulary",
    description: "Master words with spaced repetition",
    href: "/vocab",
    icon: "語",
    opacity: 0.2,
  },
  {
    id: "conjugation",
    title: "Conjugation",
    description: "Drill all verb forms",
    href: "/conjugation",
    icon: "鍛",
    opacity: 0.17,
  },
  {
    id: "kana",
    title: "Kana",
    description: "Learn hiragana & katakana",
    href: "/kana",
    icon: "あ",
    opacity: 0.17,
  },
  {
    id: "counters",
    title: "Counters",
    description: "Master Japanese counters",
    href: "/counters",
    icon: "計",
    opacity: 0.12,
  },
  {
    id: "cheatsheets",
    title: "Cheatsheets",
    description: "Quick reference guides",
    href: "/cheatsheets",
    icon: "紙",
    opacity: 0.16,
  },
] as const

export type Tool = (typeof TOOLS)[number]
