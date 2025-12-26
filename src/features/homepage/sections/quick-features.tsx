import { For, createSignal, onMount, onCleanup } from "solid-js"
import { cn } from "@/utils"
import { QUICK_FEATURES } from "../data/features"

export function QuickFeatures() {
  return (
    <section class="relative py-20">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          <For each={QUICK_FEATURES}>
            {(feature, i) => {
              let ref: HTMLDivElement | undefined
              const [visible, setVisible] = createSignal(false)

              onMount(() => {
                const observer = new IntersectionObserver(
                  ([entry]) => entry.isIntersecting && setVisible(true),
                  { threshold: 0.3 },
                )
                if (ref) observer.observe(ref)
                onCleanup(() => observer.disconnect())
              })

              return (
                <div
                  ref={ref}
                  class={cn(
                    "group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-(--landing-accent)/20 hover:bg-white/[0.04]",
                    visible()
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8",
                  )}
                  style={{ "transition-delay": `${i() * 100}ms` }}
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
