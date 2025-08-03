export const designTokens = {
  gradients: {
    // Hero gradients - more intentional and cohesive
    heroWarm:
      "radial-gradient(60% 60% at 30% 0%, rgba(251,146,60,0.15), transparent 70%)",
    heroAccent:
      "radial-gradient(40% 50% at 80% 20%, rgba(99,102,241,0.08), transparent 60%)",
    heroPanel:
      "conic-gradient(from 200deg at 70% 30%, rgba(251,146,60,0.12), transparent 40%, rgba(56,189,248,0.10), transparent 75%)",

    // Feature block gradients
    orange:
      "from-orange-400/30 to-rose-400/30 dark:from-orange-500/20 dark:to-rose-500/20",
    blue: "from-indigo-400/30 to-cyan-400/30 dark:from-indigo-500/20 dark:to-cyan-500/20",

    // Ambient effects
    primaryGlow: "from-primary/20 to-transparent",
    cardHover:
      "from-primary/15 absolute inset-0 bg-gradient-to-tr to-transparent",
  },

  backgrounds: {
    glass: "bg-background/70 backdrop-blur",
    card: "bg-background/65 backdrop-blur",
    muted: "bg-muted/70",
    section: "from-background via-background to-muted/40",
  },

  borders: {
    glass: "border-border/60",
    subtle: "border-border/40",
    dashed: "border-border/60 border-dashed",
  },

  effects: {
    shadow: "shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
    shadowHover:
      "hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_8px_30px_rgba(255,165,0,0.08)]",
    blur: "blur-3xl",
    blurSoft: "blur-2xl",
  },

  spacing: {
    sectionPadding: "px-4 py-16 lg:py-24",
    cardPadding: "p-8 md:p-12",
    containerMax: "mx-auto max-w-7xl",
  },
} as const

export const featureColors = {
  blue: "bg-blue-400",
  emerald: "bg-emerald-400",
  violet: "bg-violet-400",
  orange: "bg-orange-400",
  rose: "bg-rose-400",
} as const
