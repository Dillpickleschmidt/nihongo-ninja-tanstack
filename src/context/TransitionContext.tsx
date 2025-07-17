// src/context/TransitionContext.tsx
import { createSignal, createContext, useContext, ParentProps } from "solid-js"

type TransitionContextType = {
  hasUserNavigated: () => boolean
  setUserHasNavigated: (value: boolean) => void
  animationTrigger: () => number
  triggerAnimations: () => void
}

const TransitionContext = createContext<TransitionContextType>()

export function TransitionProvider(props: ParentProps) {
  const [hasUserNavigated, setUserHasNavigated] = createSignal(false)
  const [animationTrigger, setAnimationTrigger] = createSignal(0)

  const triggerAnimations = () => {
    setAnimationTrigger((prev) => prev + 1)
  }

  return (
    <TransitionContext.Provider
      value={{
        hasUserNavigated,
        setUserHasNavigated,
        animationTrigger,
        triggerAnimations,
      }}
    >
      {props.children}
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
