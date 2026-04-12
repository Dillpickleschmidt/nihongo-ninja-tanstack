export interface DashboardCard {
  id: string
  title: string
  description: string
  href: string
  image: string
  moduleType?: string // maps to module icon and color from module-helpers
  tags?: string[]
  dueCountType?: "vocab" | "sentences" // which due count to show
}

export const PRACTICE_TOOLS: DashboardCard[] = [
  {
    id: "learning-path",
    title: "Learning Path",
    description: "Follow a structured path through lessons, vocabulary, and grammar",
    href: "/learn",
    image: "/img/dashboard/nn_learn_homepage.png",
    moduleType: "lesson",
    tags: ["All"],
  },
  {
    id: "sentence-practice",
    title: "Sentence Practice",
    description: "Practice reading and understanding full Japanese sentences",
    href: "/sentence-practice",
    image: "/img/dashboard/nn_sentence-practice.png",
    moduleType: "sentence-practice",
    tags: ["Writing", "Grammar", "Vocabulary"],
    dueCountType: "sentences",
  },
  {
    id: "vocab-practice",
    title: "Vocabulary Practice",
    description: "Master words with spaced repetition flashcards",
    href: "/vocab",
    image: "/img/dashboard/nn_vocab_practice.png",
    moduleType: "vocab-practice",
    tags: ["Vocabulary"],
    dueCountType: "vocab",
  },
  {
    id: "conjugation-practice",
    title: "Conjugation Practice",
    description: "Drill verb and adjective conjugations until they're automatic",
    href: "/conjugation",
    image: "/img/dashboard/nn_conjugation.png",
    moduleType: "conjugation-practice",
    tags: ["Grammar"],
  },
  {
    id: "counter-practice",
    title: "Counter Practice",
    description: "Learn and drill Japanese counting systems",
    href: "/counters",
    image: "/img/dashboard/nn_counters.png",
    moduleType: "counter-practice",
    tags: ["Grammar"],
  },
  {
    id: "kana-practice",
    title: "Kana Practice",
    description: "Learn and review hiragana and katakana",
    href: "/kana",
    image: "/img/dashboard/nn_kana_quiz.png",
    moduleType: "worksheet",
  },
]

export const MEDIA_RESOURCES: DashboardCard[] = [
  {
    id: "curated-video",
    title: "Curated Video Content",
    description: "Hand-picked videos for Japanese learners at every level",
    href: "/discover?tab=youtube",
    image: "/img/dashboard/nn_curated_content.png",
    moduleType: "video",
    tags: ["Listening", "Immersion"],
  },
  {
    id: "listening-practice",
    title: "Listening Practice",
    description: "External resources for training your ear",
    href: "/external-resources",
    image: "/img/backgrounds/japanese-subway-train-system-display-screen-passenger-information.jpg",
    moduleType: "listening-material",
    tags: ["Listening", "Immersion"],
  },
  {
    id: "reading-practice",
    title: "Reading Practice",
    description: "External resources for building reading fluency",
    href: "/external-resources",
    image: "/img/backgrounds/joshua-fernandez-4aE2enR5M8s-unsplash.jpg",
    moduleType: "reading",
    tags: ["Reading"],
  },
]

export const REFERENCE_TOOLS: DashboardCard[] = [
  {
    id: "guides",
    title: "Guides",
    description: "In-depth guides on Japanese learning topics",
    href: "/guides",
    image: "/img/backgrounds/traditional_chinatown_market.jpg",
    moduleType: "guides",
  },
  {
    id: "cheatsheets",
    title: "Cheatsheets",
    description: "Quick reference sheets for grammar, particles, and more",
    href: "/cheatsheets",
    image: "/img/backgrounds/moujib-aghrout-s9ESRUFnKDg-unsplash.jpg",
    moduleType: "grammar-cheatsheet",
    tags: ["Grammar"],
  },
  {
    id: "web-extension",
    title: "Nihongo Ninja Extension",
    description: "Browser extension for looking up words while you browse",
    href: "/guides",
    image: "/img/backgrounds/full-shot-people-eating-japanese-street-food-restaurant.jpg",
    moduleType: "extension",
    tags: ["Grammar", "Vocabulary", "Listening", "Immersion"],
  },
  {
    id: "misc",
    title: "Misc Tools",
    description: "Additional tools and resources for your studies",
    href: "/settings",
    image: "/img/backgrounds/medium-shot-friends-wearing-scarfs.jpg",
    moduleType: "misc",
  },
]
