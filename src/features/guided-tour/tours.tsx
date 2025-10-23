// src/features/guided-tour/tours.ts
import type { JSX } from "solid-js"

interface TourStep {
  element?: string // Optional - omit for centered modal
  route: string // Use '*' for wildcard (any route)
  title: string
  description: string | JSX.Element
  side?: "top" | "bottom" | "left" | "right"
  align?: "start" | "center" | "end"
}

export const TOURS: Record<string, TourStep[]> = {
  "learn-page-intro": [
    {
      route: "/learn",
      title: "Welcome to Your Dashboard",
      description: (
        <div>
          It's for tracking progress and accessing lessons.
          <p class="pt-2">Let's walk through it quickly!</p>
        </div>
      ),
    },
    {
      element: "#deck-selection-popover-trigger",
      route: "/learn",
      title: "Select Your Chapter",
      description: (
        <div>
          Choose which learning path and chapter you want to study from here.
        </div>
      ),
      side: "bottom",
    },
    {
      element: "#learning-path-content",
      route: "/learn",
      title: "Your Learning Path",
      description: (
        <div>
          These are the lessons and activities for your current chapter.
        </div>
      ),
      side: "top",
    },
    {
      element: "#hero-daily-progress",
      route: "/learn",
      title: "Daily Progress",
      description: (
        <div>
          Track your daily learning time and stay motivated to reach your goals.
          <p class="pt-2">The chart will fill up as you practice each day.</p>
        </div>
      ),
      side: "bottom",
    },
    {
      element: "#adjust-target-button",
      route: "/learn",
      title: "Adjust Your Goal",
      description:
        "You can adjust your daily time goal to match your learning pace here.",
      side: "bottom",
    },
    {
      element: "#module-types-list",
      route: "/learn",
      title: "Different Module Types",
      description: (
        <div>
          Here are some of the most common types of practice you'll want to
          check out.
          <p class="pt-2">
            Many of these give you practice for skills that traditional learning
            tools can't replicate.
          </p>
        </div>
      ),
      side: "right",
    },
    {
      element: "#module-types-list-sentence-practice",
      route: "/learn",
      title: "Sentence Practice",
      description:
        "If you've already got some Japanese under your belt, try this one out! It's got the most bang for your buck.",
      side: "right",
    },
    {
      route: "/learn",
      title: "That's it!",
      description: (
        <div>You're all set! Start exploring and happy learning!</div>
      ),
    },
  ],
}
