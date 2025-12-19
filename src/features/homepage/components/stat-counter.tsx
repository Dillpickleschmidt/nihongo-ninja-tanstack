import { createSignal, onMount, onCleanup } from 'solid-js'
import { cn } from '@/utils'

export function StatCounter(props: { value: string; label: string; delay: number }) {
  const [isVisible, setIsVisible] = createSignal(false)
  let ref: HTMLDivElement | undefined

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref) observer.observe(ref)
    onCleanup(() => observer.disconnect())
  })

  return (
    <div
      ref={ref}
      class={cn(
        "text-center transition-all duration-700",
        isVisible() ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ 'transition-delay': `${props.delay}ms` }}
    >
      <div class="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end) lg:text-5xl">
        {props.value}
      </div>
      <div class="mt-2 text-sm text-white/50 uppercase tracking-wider">{props.label}</div>
    </div>
  )
}
