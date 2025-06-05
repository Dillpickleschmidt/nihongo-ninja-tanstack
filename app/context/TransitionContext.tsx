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

      // Hide the original dashboard content immediately
      ref.style.opacity = "0"
      ref.style.pointerEvents = "none"

      // Start exit animations immediately
      const contentSection = clonedElement.querySelector(
        '[data-section="content"] [data-transition-content]',
      )
      const lessonsSection = clonedElement.querySelector(
        '[data-section="lessons"] [data-transition-content]',
      )

      if (contentSection) {
        // Separate animations for transform and opacity
        ;(contentSection as HTMLElement).animate(
          [
            { transform: "translateX(0px)" },
            { transform: "translateX(-30px)" },
          ],
          {
            duration: 300,
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            fill: "forwards",
          },
        )
        ;(contentSection as HTMLElement).animate(
          [{ opacity: 1 }, { opacity: 0 }],
          {
            duration: 300,
            easing: "cubic-bezier(0.5, 0, 0.75, 0)", // Inverse curve: ease-in (slow start, fast end)
            fill: "forwards",
          },
        )
      }

      if (lessonsSection) {
        // Separate animations for transform and opacity
        ;(lessonsSection as HTMLElement).animate(
          [{ transform: "translateX(0px)" }, { transform: "translateX(30px)" }],
          {
            duration: 300,
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            fill: "forwards",
          },
        )
        ;(lessonsSection as HTMLElement).animate(
          [{ opacity: 1 }, { opacity: 0 }],
          {
            duration: 300,
            easing: "cubic-bezier(0.5, 0, 0.75, 0)", // Inverse curve: ease-in (slow start, fast end)
            fill: "forwards",
          },
        )
      }

      setPreservedContent(clonedElement)

      // Cleanup faster
      setTimeout(() => {
        setPreservedContent(null)
        setState("idle")
        // Restore original dashboard visibility for when we return
        ref.style.opacity = ""
        ref.style.pointerEvents = ""
      }, 350)
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
