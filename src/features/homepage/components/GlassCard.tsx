import { JSX } from "solid-js"
import { designTokens } from "../design-tokens"

type GlassCardProps = {
  children: JSX.Element
  class?: string
  hover?: boolean
  padding?: "sm" | "md" | "lg"
}

export default function GlassCard(props: GlassCardProps) {
  const paddingMap = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8 md:p-12",
  }

  return (
    <div
      class={` ${designTokens.borders.glass} ${designTokens.backgrounds.card} ${designTokens.effects.shadow} ${props.hover ? "hover:border-primary/40 transition-colors" : ""} ${paddingMap[props.padding || "md"]} rounded-2xl border ${props.class || ""} `}
    >
      {props.children}
    </div>
  )
}
