// src/features/guided-tour/tours.ts
interface TourStep {
  element?: string // Optional - omit for centered modal
  route: string // Use '*' for wildcard (any route)
  title: string
  description: string
  side?: "top" | "bottom" | "left" | "right"
  align?: "start" | "center" | "end"
}

export const TOURS: Record<string, TourStep[]> = {
  "app-onboarding": [
    {
      route: "*",
      title: "Welcome to Nihongo Ninja! 🥷",
      description: "Take a quick tour, or skip and explore on your own!",
    },
    {
      route: "/",
      title: "Your Dashboard",
      description:
        "Start at the homepage to access your most important learning tools.",
    },
    {
      element: "#tour-featured-tools",
      route: "/",
      title: "Featured Tools",
      description: "Focus on your most important learning tools right here.",
      side: "bottom",
      align: "center",
    },
    {
      element: "#tour-learn-card",
      route: "/",
      title: "Learn Card",
      description: "Access your lessons and track your learning progress here.",
      side: "bottom",
      align: "center",
    },
    {
      element: "#tour-learn",
      route: "/",
      title: "Learn Button",
      description: "You can also access that via your navbar.",
      side: "top",
    },
    {
      element: "#tour-lesson-cards",
      route: "/learn",
      title: "Lesson Cards",
      description:
        "Browse your lessons here — you can start any of them when you’re ready.",
      side: "top",
      align: "center",
    },
    {
      element: "[data-word-hierarchy-content]",
      route: "/learn",
      title: "Progress Details",
      description:
        "See how far you’ve advanced in the current chapter. Watch items glow yellow as you encounter them, then turn blue once mastered.",
      side: "right",
    },
    {
      element: "#tour-vocab-card",
      route: "/",
      title: "Vocab Card",
      description: "Manage your vocabulary decks and practice anytime.",
      side: "bottom",
    },
    {
      route: "/vocab",
      title: "Vocabulary Area",
      description: "Import, organize, and review your vocabulary lists here.",
    },
    {
      element: "#tour-builtin-panel",
      route: "/vocab",
      title: "Built-In Decks",
      description:
        "Preview and import ready-made decks to get started quickly.",
      side: "right",
      align: "center",
    },
    {
      element: "#tour-user-panel",
      route: "/vocab",
      title: "Your Decks",
      description: "Access and practice decks you’ve imported or created.",
      side: "left",
      align: "center",
    },
    {
      element: "#tour-vocab-center",
      route: "/vocab",
      title: "Vocabulary List",
      description:
        "Review each word in detail to strengthen understanding and memory.",
      align: "center",
    },
    {
      route: "*",
      title: "You’re All Set! 🚀",
      description:
        "That’s the end of the tour. You’re ready to explore and start learning Japanese with confidence!",
    },
  ],
}
