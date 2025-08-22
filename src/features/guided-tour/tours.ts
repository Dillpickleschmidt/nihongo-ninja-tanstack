// src/features/guided-tour/tours.ts
interface TourStep {
  element?: string // Optional - omit for centered modal
  route: string // Use '*' for wildcard (any route)
  title: string
  description: string
  side?: "top" | "bottom" | "left" | "right"
}

export const TOURS: Record<string, TourStep[]> = {
  "app-onboarding": [
    {
      route: "*",
      title: "Welcome to Nihongo Ninja! 🥷",
      description:
        "Let's take a quick tour to get you started with Japanese learning. This will only take a minute!",
    },
    {
      element: "nav",
      route: "*",
      title: "Navigation",
      description:
        "Use the navigation bar to move between different sections of the app.",
      side: "bottom",
    },
    {
      element: 'nav [href="/dashboard"]',
      route: "*",
      title: "Dashboard Link",
      description:
        "Click here to access your main dashboard where you can track progress and access tools.",
      side: "bottom",
    },
    {
      route: "/dashboard",
      title: "Dashboard",
      description:
        "Welcome to your dashboard! This is your central hub for learning Japanese.",
    },
    {
      route: "*",
      title: "You're all set! 🎉",
      description:
        "You've completed the basic tour. Start exploring and happy learning!",
    },
  ],
  "/dashboard": [
    {
      route: "/dashboard",
      title: "Welcome to your Dashboard! 📊",
      description:
        "This is your personalized learning hub. Let's explore what's available here.",
    },
    {
      element: ".container .grid",
      route: "/dashboard",
      title: "Featured Tools",
      description:
        "These are your most important learning tools. Start here for daily practice.",
      side: "bottom",
    },
    {
      element: ".border-t",
      route: "/dashboard",
      title: "Resource Directory",
      description:
        "Browse additional learning resources and external tools here.",
      side: "top",
    },
    {
      route: "/dashboard",
      title: "Dashboard Complete! ✨",
      description: "You're now familiar with your dashboard. Happy learning!",
    },
  ],
}
