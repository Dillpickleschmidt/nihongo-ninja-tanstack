import type { JSX } from "solid-js"
import GlowBox from "./GlowBox"
import SectionLabel from "./SectionLabel"

export default function LessonSummary(props: { children: JSX.Element }) {
  return (
    <GlowBox opacity={0.1}>
      <SectionLabel>Summary</SectionLabel>
      <div class="mt-4 grid gap-3 sm:grid-cols-2">{props.children}</div>
    </GlowBox>
  )
}

export function SummaryItem(props: { children: JSX.Element }) {
  return (
    <div class="flex gap-2.5 text-sm text-white/60">
      <div class="mt-1.5 size-1.5 shrink-0 rounded-full bg-dynamic-accent opacity-60" />
      <span>{props.children}</span>
    </div>
  )
}
