export const JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const
export type JLPTLevel = (typeof JLPT_LEVELS)[number]

export interface LevelStyles {
  gradient: string
  textColor: string
  backgroundColor: string
  svgBorderClass: string
  borderColor: string
  ringClass: string
  tileRingColor: string
}

export const getLevelStyles = (level: string | null): LevelStyles => {
  switch (level) {
    case "N5":
      return {
        gradient: "from-emerald-400/5 to-emerald-600/10",
        textColor: "text-emerald-400",
        backgroundColor: "bg-emerald-400/10",
        svgBorderClass: "stroke-emerald-400/35 [stroke-width:0.75]",
        borderColor: "border-emerald-400/35",
        ringClass: "stroke-emerald-400 [stroke-width:2]",
        tileRingColor: "ring-emerald-400/20",
      }
    case "N4":
      return {
        gradient: "from-sky-400/5 to-sky-600/10",
        textColor: "text-sky-400",
        backgroundColor: "bg-sky-400/10",
        svgBorderClass: "stroke-sky-400/35 [stroke-width:0.75]",
        borderColor: "border-sky-400/35",
        ringClass: "stroke-sky-400 [stroke-width:2]",
        tileRingColor: "ring-sky-400/20",
      }
    case "N3":
      return {
        gradient: "from-violet-400/5 to-violet-600/10",
        textColor: "text-violet-400",
        backgroundColor: "bg-violet-400/10",
        svgBorderClass: "stroke-violet-400/35 [stroke-width:0.75]",
        borderColor: "border-violet-400/35",
        ringClass: "stroke-violet-400 [stroke-width:2]",
        tileRingColor: "ring-violet-400/20",
      }
    case "N2":
      return {
        gradient: "from-amber-400/5 to-amber-600/10",
        textColor: "text-amber-400",
        backgroundColor: "bg-amber-400/10",
        svgBorderClass: "stroke-amber-400/35 [stroke-width:0.75]",
        borderColor: "border-amber-400/35",
        ringClass: "stroke-amber-400 [stroke-width:2]",
        tileRingColor: "ring-amber-400/20",
      }
    case "N1":
      return {
        gradient: "from-rose-400/5 to-rose-600/10",
        textColor: "text-rose-400",
        backgroundColor: "bg-rose-400/10",
        svgBorderClass: "stroke-rose-400/35 [stroke-width:0.75]",
        borderColor: "border-rose-400/35",
        ringClass: "stroke-rose-400 [stroke-width:2]",
        tileRingColor: "ring-rose-400/20",
      }
    default:
      return {
        gradient: "from-gray-400/5 to-gray-600/10",
        textColor: "text-gray-400",
        backgroundColor: "bg-gray-400/10",
        svgBorderClass: "stroke-gray-400/35 [stroke-width:0.75]",
        borderColor: "border-gray-400/35",
        ringClass: "stroke-gray-400 [stroke-width:2]",
        tileRingColor: "ring-gray-400/20",
      }
  }
}
