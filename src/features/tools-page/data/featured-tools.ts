import type { Tool } from "../types"

export const featuredTools: Tool[] = [
  {
    title: "Vocab Decks",
    description: "Practice vocabulary both quickly and with spaced repetition",
    icon: "📚",
    href: "/vocab",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Grammar Notes",
    description: "Review grammar patterns and structures",
    icon: "📝",
    href: "/grammar",
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "Lessons",
    description: "Follow structured learning paths",
    icon: "🎓",
    href: "/learn",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    title: "Sentence Practice",
    description: "Build sentences and improve comprehension",
    icon: "💬",
    href: "/practice/sentences",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    title: "Conjugation",
    description: "Master verb and adjective conjugations",
    icon: "⚡",
    href: "/practice/conjugation",
    gradient: "from-red-400 to-red-600",
  },
]
