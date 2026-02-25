import { onMount } from "solid-js"
import {
  animateElementIn,
  getInitialAnimationStyles,
} from "@/utils/animations"

export function StatCounter(props: {
  value: string
  label: string
  delay: number
}) {
  let ref: HTMLDivElement | undefined

  onMount(() => {
    if (!ref) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(
            () => animateElementIn(ref!, "down", { duration: 700 }),
            props.delay,
          )
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(ref)
  })

  return (
    <div ref={ref} class="text-center" style={getInitialAnimationStyles("down")}>
      <div class="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end) lg:text-5xl">
        {props.value}
      </div>
      <div class="mt-2 text-sm text-white/50 uppercase tracking-wider">
        {props.label}
      </div>
    </div>
  )
}
