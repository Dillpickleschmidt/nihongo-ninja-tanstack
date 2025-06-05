// app/context/TransitionContext.tsx
import {
  createSignal,
  createContext,
  useContext,
  ParentProps,
  Show,
  onCleanup,
} from "solid-js"
import {
  createSlideWithFadeOutAnimation,
  ANIMATION_CONFIG,
} from "@/utils/animations"

type TransitionState = "idle" | "dashboard-to-learn" | "learn-to-dashboard"

type TransitionContextType = {
  state: () => TransitionState
  startDashboardToLearn: () => void
  startLearnToDashboard: () => void
  isInitialLoad: () => boolean
  dashboardRef: () => HTMLDivElement | undefined
  setDashboardRef: (el: HTMLDivElement) => void
}

const TransitionContext = createContext<TransitionContextType>()

export function TransitionProvider(props: ParentProps) {
  const [state, setState] = createSignal<TransitionState>("idle")
  const [dashboardRef, setDashboardRef] = createSignal<HTMLDivElement>()
  const [preservedContent, setPreservedContent] =
    createSignal<HTMLDivElement | null>(null)
  const [isInitialLoad, setIsInitialLoad] = createSignal(true)

  const startDashboardToLearn = () => {
    setIsInitialLoad(false)
    setState("dashboard-to-learn")

    const ref = dashboardRef()
    if (!ref) return

    // Clone and position the dashboard
    const clonedElement = ref.cloneNode(true) as HTMLDivElement
    Object.assign(clonedElement.style, {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      zIndex: "10",
      pointerEvents: "none",
    })

    // Hide original immediately
    ref.style.opacity = "0"
    ref.style.pointerEvents = "none"

    // Animate sections
    const sections = [
      {
        selector: '[data-section="content"] [data-transition-content]',
        direction: "left" as const,
      },
      {
        selector: '[data-section="lessons"] [data-transition-content]',
        direction: "right" as const,
      },
    ]

    sections.forEach(({ selector, direction }) => {
      const element = clonedElement.querySelector(selector) as HTMLElement
      if (element) {
        createSlideWithFadeOutAnimation(element, direction)
      }
    })

    setPreservedContent(clonedElement)

    // Cleanup
    setTimeout(() => {
      setPreservedContent(null)
      setState("idle")
      // Restore original for return navigation
      ref.style.opacity = ""
      ref.style.pointerEvents = ""
    }, ANIMATION_CONFIG.duration)
  }

  const startLearnToDashboard = () => {
    setIsInitialLoad(false)
    setState("learn-to-dashboard")
    setTimeout(() => setState("idle"), ANIMATION_CONFIG.duration)
  }

  onCleanup(() => setPreservedContent(null))

  return (
    <TransitionContext.Provider
      value={{
        state,
        startDashboardToLearn,
        startLearnToDashboard,
        isInitialLoad,
        dashboardRef,
        setDashboardRef,
      }}
    >
      <div class="relative min-h-screen">
        <Show when={preservedContent()}>
          {(preserved) => {
            const handleRef = (el: HTMLDivElement) => {
              if (preserved()) {
                el.appendChild(preserved())
              }
            }
            return <div ref={handleRef} class="absolute inset-0 z-10" />
          }}
        </Show>
        <div class="relative z-20">{props.children}</div>
      </div>
    </TransitionContext.Provider>
  )
}

export function usePageTransition() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error("usePageTransition must be used within TransitionProvider")
  }
  return context
}
