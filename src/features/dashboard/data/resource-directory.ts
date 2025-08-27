import type { ResourceCategory } from "../types"

export const resourceDirectory: ResourceCategory = {
  "Getting Started": [
    {
      name: "Hiragana Guide",
      description: "Complete guide to learning hiragana characters",
      href: "/guides/hiragana",
      icon: "あ",
      type: "guide",
    },
    {
      name: "Katakana Guide",
      description: "Master katakana with structured practice",
      href: "/guides/katakana",
      icon: "ア",
      type: "guide",
    },
    {
      name: "Our Spaced Repetition System",
      description: "How our SRS works and how to use it effectively",
      href: "/guides/srs",
      icon: "📊",
      type: "guide",
    },
  ],
  "Advanced Techniques": [
    {
      name: "Sentence Mining",
      description: "Extract and study sentences from native content",
      href: "/guides/sentence-mining",
      icon: "⛏️",
      type: "guide",
    },
    {
      name: "Immersion Strategies",
      description: "Effective approaches to Japanese immersion",
      href: "/guides/immersion",
      icon: "🌊",
      type: "guide",
    },
  ],
  "Tools & Extensions": [
    {
      name: "Recommended Browser Extensions",
      description: "Essential extensions for Japanese learning",
      href: "/guides/extensions",
      icon: "🔧",
      type: "guide",
    },
    {
      name: "Anki Setup",
      description: "Configure Anki for Japanese study",
      href: "/guides/anki",
      icon: "🗃️",
      type: "guide",
    },
  ],
  "Mobile & Tablet": [
    {
      name: "Using Hayase on iPad",
      description: "Complete setup guide for iPad users",
      href: "/guides/hayase-ipad",
      icon: "📱",
      type: "guide",
    },
    {
      name: "Mobile Study Apps",
      description: "Best apps for studying on the go",
      href: "/guides/mobile-apps",
      icon: "📲",
      type: "guide",
    },
  ],
}
