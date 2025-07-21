// src/context/TransitionContext.tsx
import { createSignal, createContext, useContext, ParentProps, onMount, createEffect } from "solid-js"
import { useLocation } from "@tanstack/solid-router"

type NavigationType = "initial" | "navigation" | "refresh"

type TransitionContextType = {
  shouldAnimate: () => boolean
  getNavigationType: () => NavigationType
  animationTrigger: () => number
  triggerAnimations: () => void
}

const TransitionContext = createContext<TransitionContextType>()

export function TransitionProvider(props: ParentProps) {
  const location = useLocation()
  const [hasNavigated, setHasNavigated] = createSignal(false)
  const [animationTrigger, setAnimationTrigger] = createSignal(0)
  const [currentPath, setCurrentPath] = createSignal("")

  // Track navigation events
  onMount(() => {
    // Set initial path
    setCurrentPath(location().pathname)
    console.log("[TransitionContext] Initial path set:", location().pathname)
    
    // Check if this is a page refresh or direct navigation
    const navigationEntries = window.performance.getEntriesByType("navigation")
    const navigationType = navigationEntries[0]?.type
    const isRefresh = navigationType === "reload"
    
    console.log("[TransitionContext] Navigation type on mount:", navigationType)
    console.log("[TransitionContext] Is refresh:", isRefresh)
    
    // If not a refresh and has referrer, consider it navigation
    if (!isRefresh && document.referrer && document.referrer !== window.location.href) {
      console.log("[TransitionContext] Setting hasNavigated to true (referrer detected)")
      setHasNavigated(true)
    }
  })

  // Watch for path changes to detect navigation
  const _ = createEffect(() => {
    const newPath = location().pathname
    console.log("[TransitionContext] Path changed from:", currentPath(), "to:", newPath)
    
    if (currentPath() !== "" && currentPath() !== newPath) {
      console.log("[TransitionContext] Router navigation detected - setting hasNavigated to true")
      setHasNavigated(true)
      triggerAnimations()
    }
    
    setCurrentPath(newPath)
  })

  const shouldAnimate = () => {
    const result = hasNavigated()
    console.log("[TransitionContext] shouldAnimate() called - hasNavigated:", hasNavigated(), "result:", result)
    return result
  }

  const getNavigationType = (): NavigationType => {
    return hasNavigated() ? "navigation" : "initial"
  }

  const triggerAnimations = () => {
    setAnimationTrigger((prev) => prev + 1)
  }

  return (
    <TransitionContext.Provider
      value={{
        shouldAnimate,
        getNavigationType,
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
