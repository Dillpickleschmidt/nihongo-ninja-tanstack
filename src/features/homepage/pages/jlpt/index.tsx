import { For } from "solid-js"
import { LevelCard } from "./components/LevelCard"
import { WelcomeSection } from "./components/WelcomeSection"

interface LevelItem {
  level: string
  description: string
}

interface JlptPageProps {
  onLevelSelect?: (level: string) => void
}

const JLPT_LEVELS: LevelItem[] = [
  { level: "N5", description: "Beginner" },
  { level: "N4", description: "Upper Beginner" },
  { level: "N3", description: "Intermediate" },
  { level: "N2", description: "Upper Intermediate" },
  { level: "N1", description: "Advanced / Fluent" },
]

export function JlptPage(props: JlptPageProps) {
  return (
    <div class="relative h-[calc(100vh-64px)] w-screen overflow-hidden">
      <WelcomeSection />

      {/* JLPT Level Cards */}
      <div class="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <For each={JLPT_LEVELS}>
          {(item) => <LevelCard item={item} onSelect={props.onLevelSelect} />}
        </For>
      </div>

      <div class="absolute bottom-4 w-full px-6 text-right text-sm opacity-50">
        <p>
          Don't worry, there's no additional questions asking for your email :)
        </p>
      </div>
    </div>
  )
}
