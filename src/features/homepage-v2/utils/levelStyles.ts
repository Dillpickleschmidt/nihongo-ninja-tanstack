export const JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const
export type JLPTLevel = (typeof JLPT_LEVELS)[number]

export interface LevelStyles {
  gradient: string
  textColor: string
  borderClass: string
  ringClass: string
  borderColor: string
}

export const getLevelStyles = (level: string | null): LevelStyles => {
  switch (level) {
    case "N5":
      return {
        gradient: "from-emerald-400/5 to-emerald-600/10",
        textColor: "text-emerald-400",
        borderClass: "stroke-emerald-400/35 [stroke-width:0.75]",
        ringClass: "stroke-emerald-400 [stroke-width:2]",
        borderColor: "border-emerald-400/35",
      }
    case "N4":
      return {
        gradient: "from-sky-400/5 to-sky-600/10",
        textColor: "text-sky-400",
        borderClass: "stroke-sky-400/35 [stroke-width:0.75]",
        ringClass: "stroke-sky-400 [stroke-width:2]",
        borderColor: "border-sky-400/35",
      }
    case "N3":
      return {
        gradient: "from-violet-400/5 to-violet-600/10",
        textColor: "text-violet-400",
        borderClass: "stroke-violet-400/35 [stroke-width:0.75]",
        ringClass: "stroke-violet-400 [stroke-width:2]",
        borderColor: "border-violet-400/35",
      }
    case "N2":
      return {
        gradient: "from-amber-400/5 to-amber-600/10",
        textColor: "text-amber-400",
        borderClass: "stroke-amber-400/35 [stroke-width:0.75]",
        ringClass: "stroke-amber-400 [stroke-width:2]",
        borderColor: "border-amber-400/35",
      }
    case "N1":
      return {
        gradient: "from-rose-400/5 to-rose-600/10",
        textColor: "text-rose-400",
        borderClass: "stroke-rose-400/35 [stroke-width:0.75]",
        ringClass: "stroke-rose-400 [stroke-width:2]",
        borderColor: "border-rose-400/35",
      }
    default:
      return {
        gradient: "from-gray-400/5 to-gray-600/10",
        textColor: "text-gray-400",
        borderClass: "stroke-gray-400/35 [stroke-width:0.75]",
        ringClass: "stroke-gray-400 [stroke-width:2]",
        borderColor: "border-gray-400/35",
      }
  }
}
