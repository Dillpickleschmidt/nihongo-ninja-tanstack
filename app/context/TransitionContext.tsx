// app/context/TransitionContext.tsx
import {
  createSignal,
  createContext,
  useContext,
  ParentProps,
  Show,
  onCleanup,
} from "solid-js"

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

    // Capture and animate dashboard immediately
    const ref = dashboardRef()
    if (ref) {
      const clonedElement = ref.cloneNode(true) as HTMLDivElement

      clonedElement.style.position = "absolute"
      clonedElement.style.top = "0"
      clonedElement.style.left = "0"
      clonedElement.style.right = "0"
      clonedElement.style.zIndex = "10"
      clonedElement.style.pointerEvents = "none"

      // Start exit animations immediately
      const contentSection = clonedElement.querySelector(
        '[data-section="content"] [data-transition-content]',
      )
      const lessonsSection = clonedElement.querySelector(
        '[data-section="lessons"] [data-transition-content]',
      )

      if (contentSection) {
        ;(contentSection as HTMLElement).animate(
          [
            { opacity: 1, transform: "translateX(0px)" },
            { opacity: 0, transform: "translateX(-30px)" },
          ],
          {
            duration: 350, // Faster exit
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            fill: "forwards",
          },
        )
      }

      if (lessonsSection) {
        ;(lessonsSection as HTMLElement).animate(
          [
            { opacity: 1, transform: "translateX(0px)" },
            { opacity: 0, transform: "translateX(30px)" },
          ],
          {
            duration: 350, // Faster exit
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            fill: "forwards",
          },
        )
      }

      setPreservedContent(clonedElement)

      // Cleanup faster
      setTimeout(() => {
        setPreservedContent(null)
        setState("idle")
      }, 400)
    }

    setState("dashboard-to-learn")
  }

  const startLearnToDashboard = () => {
    setIsInitialLoad(false)
    setState("learn-to-dashboard")

    setTimeout(() => {
      setState("idle")
    }, 400)
  }

  onCleanup(() => {
    setPreservedContent(null)
  })

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
