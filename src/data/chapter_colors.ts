export interface ChapterStyles {
  textColor: string
  ringColor1: string
  ringColor2: string
  ringColorBright: string
  bgColor: string
  borderColor: string
  gradient: string
  svgBorderClass: string
  ringClass: string
}

export const chapterColors: Record<string, ChapterStyles> = {
  // Getting Started - N5 (Emerald)
  "n5-introduction": {
    textColor: "text-emerald-400",
    ringColor1: "ring-emerald-400/20",
    ringColor2: "ring-emerald-400/30",
    ringColorBright: "ring-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/35",
    gradient: "from-emerald-400/5 to-emerald-600/10",
    svgBorderClass: "stroke-emerald-400/35 [stroke-width:0.75]",
    ringClass: "stroke-emerald-400 [stroke-width:2]",
  },
  // Getting Started - N4 (Sky)
  "n4-introduction": {
    textColor: "text-sky-400",
    ringColor1: "ring-sky-400/20",
    ringColor2: "ring-sky-400/30",
    ringColorBright: "ring-sky-400",
    bgColor: "bg-sky-400/10",
    borderColor: "border-sky-400/35",
    gradient: "from-sky-400/5 to-sky-600/10",
    svgBorderClass: "stroke-sky-400/35 [stroke-width:0.75]",
    ringClass: "stroke-sky-400 [stroke-width:2]",
  },
  // Getting Started - N3 (Violet)
  "n3-introduction": {
    textColor: "text-violet-400",
    ringColor1: "ring-violet-400/20",
    ringColor2: "ring-violet-400/30",
    ringColorBright: "ring-violet-400",
    bgColor: "bg-violet-400/10",
    borderColor: "border-violet-400/35",
    gradient: "from-violet-400/5 to-violet-600/10",
    svgBorderClass: "stroke-violet-400/35 [stroke-width:0.75]",
    ringClass: "stroke-violet-400 [stroke-width:2]",
  },
  // Getting Started - N2 (Amber)
  "n2-introduction": {
    textColor: "text-amber-400",
    ringColor1: "ring-amber-400/20",
    ringColor2: "ring-amber-400/30",
    ringColorBright: "ring-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/35",
    gradient: "from-amber-400/5 to-amber-600/10",
    svgBorderClass: "stroke-amber-400/35 [stroke-width:0.75]",
    ringClass: "stroke-amber-400 [stroke-width:2]",
  },
  // Getting Started - N1 (Rose)
  "n1-introduction": {
    textColor: "text-rose-400",
    ringColor1: "ring-rose-400/20",
    ringColor2: "ring-rose-400/30",
    ringColorBright: "ring-rose-400",
    bgColor: "bg-rose-400/10",
    borderColor: "border-rose-400/35",
    gradient: "from-rose-400/5 to-rose-600/10",
    svgBorderClass: "stroke-rose-400/35 [stroke-width:0.75]",
    ringClass: "stroke-rose-400 [stroke-width:2]",
  },
  "chapter-0": {
    textColor: "text-red-400",
    ringColor1: "ring-red-400/20",
    ringColor2: "ring-red-400/30",
    ringColorBright: "ring-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/35",
    gradient: "from-red-400/5 to-red-600/10",
    svgBorderClass: "stroke-red-400/35 [stroke-width:0.75]",
    ringClass: "stroke-red-400 [stroke-width:2]",
  },
}

export const getChapterStyles = (chapterSlug: string | null): ChapterStyles => {
  if (!chapterSlug) {
    return {
      textColor: "text-gray-400",
      ringColor1: "ring-gray-400/20",
      ringColor2: "ring-gray-400/30",
      ringColorBright: "ring-gray-400",
      bgColor: "bg-gray-400/10",
      borderColor: "border-gray-400/35",
      gradient: "from-gray-400/5 to-gray-600/10",
      svgBorderClass: "stroke-gray-400/35 [stroke-width:0.75]",
      ringClass: "stroke-gray-400 [stroke-width:2]",
    }
  }
  return (
    chapterColors[chapterSlug] || {
      textColor: "text-gray-400",
      ringColor1: "ring-gray-400/20",
      ringColor2: "ring-gray-400/30",
      ringColorBright: "ring-gray-400",
      bgColor: "bg-gray-400/10",
      borderColor: "border-gray-400/35",
      gradient: "from-gray-400/5 to-gray-600/10",
      svgBorderClass: "stroke-gray-400/35 [stroke-width:0.75]",
      ringClass: "stroke-gray-400 [stroke-width:2]",
    }
  )
}
