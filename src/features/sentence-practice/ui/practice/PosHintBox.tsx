// ui/practice/PosHintBox.tsx
import { type Component } from "solid-js"

export type PosCategory = "orange" | "green" | "blue"

interface PosHintBoxProps {
  pos: string[]
  width: number
}

/**
 * Maps kagome POS tag to color category
 * Orange: Nouns and Na-Adjectives
 * Green: Verbs and I-Adjectives
 * Blue: Particles, copulas, and everything else
 */
function getPosCategory(pos: string[]): PosCategory {
  const mainPos = pos[0]

  // Orange category: Nouns and Na-Adjectives
  if (mainPos === "名詞" || mainPos === "形容動詞") {
    return "orange"
  }

  // Green category: Verbs and I-Adjectives
  if (mainPos === "動詞" || mainPos === "形容詞") {
    return "green"
  }

  // Blue category: Particles, copulas, and everything else
  return "blue"
}

/**
 * Maps POS category to Tailwind background color class
 */
function getCategoryColorClass(category: PosCategory): string {
  const colors: Record<PosCategory, string> = {
    orange: "bg-orange-400 dark:bg-orange-500",
    green: "bg-green-400 dark:bg-green-500",
    blue: "bg-blue-400 dark:bg-blue-500",
  }
  return colors[category]
}

/**
 * Individual colored box representing a single token's POS category
 * Displays full-width spaces (　) to show structure without revealing text
 */
const PosHintBox: Component<PosHintBoxProps> = (props) => {
  const category = () => getPosCategory(props.pos)
  const colorClass = () => getCategoryColorClass(category())

  // Generate full-width spaces based on width
  const content = () => "　".repeat(props.width)

  return (
    <span
      class={`${colorClass()} inline-block rounded-md px-1 py-0.5 font-mono text-sm`}
      title={`${category()}: ${props.pos.join(", ")}`}
    >
      {content()}
    </span>
  )
}

export default PosHintBox
