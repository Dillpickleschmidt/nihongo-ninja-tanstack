// src/features/guided-tour/tours.ts
import type { JSX } from "solid-js"

interface TourStep {
  element?: string
  route: string
  title: string
  description: string | JSX.Element
  side?: "top" | "bottom" | "left" | "right"
  align?: "start" | "center" | "end"
  width?: string
  dialog?: boolean
  showNextButton?: boolean
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
      description: "You're all set! Start exploring and happy learning!",
    },
  ],
  "sentence-practice-intro": [
    {
      route: "*",
      title: "Welcome to Sentence Practice!",
      description: (
        <div>
          Looks like it's your first time here! Let's quickly understand how to
          use this awesome tool.
          <p class="pt-2">Click 'Next' to get started!</p>
        </div>
      ),
      width: "325px",
    },
    {
      element: "#sentence-practice-container",
      route: "/sentence-practice/tutorial",
      title: "What you're looking at...",
      description: (
        <div>
          <p>
            You'll be given an English prompt, and your task is to type the
            correct Japanese translation here in the input box.
          </p>
        </div>
      ),
      side: "bottom",
    },
    {
      element: "#sentence-practice-prompt",
      route: "/sentence-practice/tutorial",
      title: "How to Translate...",
      description: (
        <div>
          <p>
            There are often many ways to translate sentences, and we try to
            support every variation you're likely to think of. We support plain
            kana answers or answers with Kanji, casual form, polite form,
            different pronoun choice, different word order, and more!
          </p>
        </div>
      ),
      side: "right",
    },
    {
      element: "#sentence-practice-answer-input",
      route: "/sentence-practice/tutorial",
      title: "How To Type Japanese",
      description: (
        <div>
          <p>
            We automatically convert your typing to hiragana—no setup needed.
            Hold shift or capslock to type katakana. You can also use your own
            IME to type kanji, and we'll accept that too.
          </p>
        </div>
      ),
      side: "right",
    },
    {
      element: "#pos-hints",
      route: "/sentence-practice/tutorial",
      title: "Part-of-Speech Hints",
      description: (
        <div>
          <p>
            To make things a bit easier, we provide part-of-speech hints for the
            model answer. These colored boxes give you a sense of the structure
            of the expected answer without revealing any actual words.
          </p>
          <p class="pt-2">
            These hints only represent one possible correct answer. You could
            type something different that is still correct!
          </p>
        </div>
      ),
      side: "right",
      width: "350px",
    },
    {
      element: "#sentence-practice-answer-area",
      route: "/sentence-practice/tutorial",
      title: "Give it a try!",
      description: (
        <div>
          <p>
            Go ahead and type your answer in the input box. For this tutorial,
            you could do:
          </p>
          <ul>
            <li>がくせいです</li>
            <li>わたしはがくせいです</li>
            <li>学生です</li>
            <li>私は学生です</li>
            <li>僕は学生です</li>
            <li>俺が学生です</li>
            <li>etc.</li>
          </ul>
          <p class="pt-2">
            Click <strong>Check Answer</strong> when you're ready!
          </p>
        </div>
      ),
      side: "right",
      dialog: false,
      showNextButton: false,
    },
    {
      element: "#sentence-practice-results",
      route: "/sentence-practice/tutorial",
      title: "See results...",
      description: (
        <div>
          <p>
            Below, you can see how you did. Anything you added that shouldn't be
            there will be highlighted in red. Anything you forgot will be
            highlighted in green.
          </p>
          <p class="pt-2">You can see alternative answers below as well.</p>
          <p class="pt-2">
            Make any necessary corrections, then click{" "}
            <strong>Next Question</strong> when you're ready!
          </p>
        </div>
      ),
      side: "right",
      dialog: false,
      showNextButton: false,
    },
    {
      element: "#sentence-practice-answer-area",
      route: "/sentence-practice/tutorial",
      title: "Give it a try!",
      description: (
        <div>
          <p>
            Nice! Now try this one. This time try taking a look at the
            part-of-speech hints. The key is placed on the right of the page.
          </p>
          <p class="pt-2">The hints should guide you to the right answer.</p>
          <p class="pt-2">
            Click <strong>Check Answer</strong> when you're ready!
          </p>
        </div>
      ),
      side: "right",
      dialog: false,
      showNextButton: false,
    },
    {
      route: "/sentence-practice/tutorial",
      title: "You're All Set!",
      description: (
        <div>
          <p>
            Now you can start building sentences using all the new grammar that
            you're learning.
          </p>
          <p class="text-muted-foreground pt-2">
            Note that this tool is work-in-progress and may occasionally have
            bugs or missing variations. It will continue to be improved over
            time.
          </p>
        </div>
      ),
    },
  ],
}
