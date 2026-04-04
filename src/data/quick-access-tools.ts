import type { JSX } from "solid-js"

export interface Tool {
  title: string
  description: string
  icon: JSX.Element | string
  href: string
  disabled?: boolean
}

export const quickAccessTools: Record<string, Tool[]> = {
  N5: [
    {
      title: "Hiragana Quiz",
      description: "You can master kana in a week here!",
      icon: "あ",
      href: "/kana/hiragana",
    },
    {
      title: "Conjugation Practice",
      description: "Get your forms down",
      icon: "⚡",
      href: "/conjugation",
    },
    {
      title: "Sentence Building",
      description: "See how it all fits together",
      icon: "🏗️",
      href: "/sentence-practice",
    },
    {
      title: "Lessons",
      description: "Structured learning content",
      icon: "📚",
      href: "/learn",
    },
    {
      title: "Vocabulary Practice",
      description: "Build your word (and kanji) bank",
      icon: "📝",
      href: "/vocab",
    },
  ],
  N4: [
    {
      title: "Real Content",
      description: "Learn from stuff you actually like",
      icon: "🎬",
      href: "/discover",
    },
    {
      title: "Sentence Building",
      description: "See how it all fits together",
      icon: "🏗️",
      href: "/sentence-practice",
    },
    {
      title: "Conjugation Practice",
      description: "Get your forms down",
      icon: "⚡",
      href: "/conjugation",
    },
    {
      title: "Vocabulary Practice",
      description: "Build your word (and kanji) bank",
      icon: "📝",
      href: "/vocab",
    },
    {
      title: "Custom Decks",
      description: "Create decks for your interests",
      icon: "🎴",
      href: "/decks",
    },
  ],
  N3: [
    {
      title: "Real Content",
      description: "Learn from stuff you actually like",
      icon: "🎬",
      href: "/discover",
    },
    {
      title: "Browser Extension",
      description: "Sentence-mine with grammar explanations",
      icon: "🧩",
      href: "/extension",
    },
    {
      title: "Sentence Building",
      description: "See how it all fits together",
      icon: "🏗️",
      href: "/sentence-practice",
    },
  ],
  N2: [
    {
      title: "Real Content",
      description: "Learn from stuff you actually like",
      icon: "🎬",
      href: "/discover",
    },
    {
      title: "Browser Extension",
      description: "Sentence-mine with grammar explanations",
      icon: "🧩",
      href: "/extension",
    },
    {
      title: "Sentence Building",
      description: "See how it all fits together",
      icon: "🏗️",
      href: "/sentence-practice",
    },
  ],
  N1: [
    {
      title: "Real Content",
      description: "Learn from stuff you actually like",
      icon: "🎬",
      href: "/discover",
    },
    {
      title: "Browser Extension",
      description: "Sentence-mine with grammar explanations",
      icon: "🧩",
      href: "/extension",
    },
  ],
}
