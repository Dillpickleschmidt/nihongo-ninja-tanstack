import { For, onMount } from "solid-js"
import { QUICK_FEATURES } from "../data/features"
import {
  animateElementIn,
  getInitialAnimationStyles,
} from "@/utils/animations"

export function QuickFeatures() {
  return (
    <section class="relative pt-14 pb-20">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          <For each={QUICK_FEATURES}>
            {(feature, i) => {
              let ref: HTMLDivElement | undefined

              onMount(() => {
                if (!ref) return
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      setTimeout(
                        () => animateElementIn(ref!, "down", { duration: 500 }),
                        200 + i() * 100,
                      )
                      observer.disconnect()
                    }
                  },
                  { threshold: 0.3 },
                )
                observer.observe(ref)
              })

              return (
                <div
                  ref={ref}
                  class="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-(--landing-accent)/20 hover:bg-white/[0.04]"
                  style={getInitialAnimationStyles("down")}
                >
                  <div class="mb-4 text-4xl font-japanese text-(--landing-accent)/80 transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 class="mb-1 font-semibold text-white">{feature.title}</h3>
                  <p class="text-sm text-white/50">{feature.desc}</p>
                </div>
              )
            }}
          </For>
        </div>
      </div>
    </section>
  )
}
