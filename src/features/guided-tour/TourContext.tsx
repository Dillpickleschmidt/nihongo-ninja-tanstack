// src/features/guided-tour/TourContext.tsx
import {
  createContext,
  useContext,
  Component,
  ParentProps,
  onMount,
} from "solid-js"
import {
  useNavigate,
  useLocation,
  useRouteContext,
} from "@tanstack/solid-router"
import { driver } from "driver.js"
import type { Driver } from "driver.js"
import { useMutation, useQueryClient } from "@tanstack/solid-query"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  userSettingsQueryOptions,
  updateUserSettingsMutation,
} from "@/features/main-cookies/query/query-options"
import { Route as RootRoute } from "@/routes/__root"
import { TOURS } from "./tours"

interface TourContextType {
  startTour: (tourId: string) => void
  resetTour: (tourId: string) => Promise<void>
}

const TourContext = createContext<TourContextType>()

interface TourProviderProps extends ParentProps {
  shouldStartMainTour?: boolean
}

export const TourProvider: Component<TourProviderProps> = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const context = useRouteContext({ from: RootRoute.id })
  const userId = context().user?.id || null

  const queryClient = useQueryClient()
  const settingsQuery = useCustomQuery(() => userSettingsQueryOptions(userId))

  const updateSettingsMutation = useMutation(() =>
    updateUserSettingsMutation(userId, queryClient),
  )

  let driverInstance: Driver | null = null
  let currentTour: string | null = null
  let currentStepIndex: number = 0
  let tourStartPath: string = location().pathname

  // Auto-start main tour if requested
  onMount(() => {
    if (props.shouldStartMainTour) {
      startTour("app-onboarding")
    }
  })

  const startTour = (tourId: string) => {
    // Check if there's already an active tour
    if (settingsQuery.data.tour.currentTourId) return

    const steps = TOURS[tourId]
    if (!steps) return

    // Check if already completed
    if (settingsQuery.data["completed-tours"].includes(tourId)) return

    // Capture the current location as the starting point
    tourStartPath = location().pathname

    // Start the requested tour
    currentTour = tourId
    currentStepIndex = 0

    updateSettingsMutation.mutate({
      tour: {
        currentTourId: tourId,
        currentTourStep: 0,
      },
    })

    initializeDriver(steps, 0)
  }

  const initializeDriver = async (steps: any[], stepIndex: number) => {
    const step = steps[stepIndex]
    const currentRoute = location().pathname

    // Handle route navigation (skip if wildcard or same route)
    if (step.route !== "*" && step.route !== currentRoute) {
      await navigate({ to: step.route })
      await new Promise((resolve) => setTimeout(resolve, 200))
    }

    // Clean up existing driver
    if (driverInstance) {
      driverInstance.destroy()
    }

    // Create new driver instance
    const dismissTour = () => {
      handleDismiss()
      cleanup()
    }

    driverInstance = driver({
      showProgress: true,
      popoverClass: "nihongo-ninja-tour",
      steps: steps.map((s, index) => ({
        element: s.element,
        popover: {
          title: s.title,
          description: s.description,
          side: s.side || "bottom",
          align: s.align,
          onNextClick: () => handleNext(steps, index),
          onPrevClick: () => handlePrevious(steps, index),
        },
      })),
      onDestroyStarted: dismissTour, // 👈 reuse
      onPopoverRender: (popover, { state }) => {
        if (state.activeIndex === 0) {
          const skipButton = document.createElement("button")
          skipButton.innerText = "Skip"

          // Insert before the Next button
          const nextBtn = popover.footerButtons.querySelector(
            ".driver-popover-next-btn",
          )
          if (nextBtn) {
            popover.footerButtons.insertBefore(skipButton, nextBtn)
          } else {
            popover.footerButtons.appendChild(skipButton)
          }

          // Skip = same as dismiss
          skipButton.onclick = dismissTour
        }
      },
    })

    // Start from specific step
    driverInstance.drive(stepIndex)
  }

  const handleNext = async (steps: any[], currentIndex: number) => {
    const nextIndex = currentIndex + 1

    if (nextIndex >= steps.length) {
      // Tour completed
      await handleComplete()
      return
    }

    currentStepIndex = nextIndex
    updateSettingsMutation.mutate({
      tour: { currentTourId: currentTour, currentTourStep: nextIndex },
    })

    const nextStep = steps[nextIndex]
    const currentRoute = location().pathname

    if (nextStep.route !== "*" && nextStep.route !== currentRoute) {
      // Navigate to new page and reinitialize
      driverInstance?.destroy()
      await initializeDriver(steps, nextIndex)
    } else {
      // Same page, just move to next step
      driverInstance?.moveNext()
    }
  }

  const handlePrevious = async (steps: any[], currentIndex: number) => {
    if (currentIndex <= 0) return

    const prevIndex = currentIndex - 1
    currentStepIndex = prevIndex
    updateSettingsMutation.mutate({
      tour: { currentTourId: currentTour, currentTourStep: prevIndex },
    })

    const prevStep = steps[prevIndex]
    const currentRoute = location().pathname

    if (prevStep.route !== "*" && prevStep.route !== currentRoute) {
      // Navigate to previous page and reinitialize
      driverInstance?.destroy()
      await initializeDriver(steps, prevIndex)
    } else {
      // Same page, just move to previous step
      driverInstance?.movePrevious()
    }
  }

  const handleComplete = async () => {
    if (!currentTour) return

    // Add to completed tours
    const completed = settingsQuery.data["completed-tours"]
    await updateSettingsMutation.mutateAsync({
      "completed-tours": [...completed, currentTour],
    })

    // Mark as completed (-2)
    updateSettingsMutation.mutate({
      tour: { currentTourId: null, currentTourStep: -2 },
    })

    // Navigate back to the original page
    await navigate({ to: tourStartPath })

    // If we just completed the main tour, check if we should start a route-specific tour
    if (currentTour === "app-onboarding") {
      const currentRoute = location().pathname
      // Small delay to let the state updates settle, then try to start route tour
      setTimeout(() => {
        if (TOURS[currentRoute]) {
          startTour(currentRoute)
        }
      }, 100)
    }

    cleanup()
  }

  const handleDismiss = () => {
    // Mark as dismissed
    updateSettingsMutation.mutate({
      tour: { currentTourId: null, currentTourStep: -1 },
    })
  }

  const cleanup = () => {
    if (driverInstance) {
      driverInstance.destroy()
      driverInstance = null
    }
    currentTour = null
    currentStepIndex = 0
  }

  const resetTour = async (tourId: string) => {
    // Reset completion status
    const completed = settingsQuery.data["completed-tours"]
    await updateSettingsMutation.mutateAsync({
      "completed-tours": completed.filter((id) => id !== tourId),
    })

    // Reset tour settings
    updateSettingsMutation.mutate({
      tour: { currentTourId: null, currentTourStep: 0 },
    })
  }

  const contextValue = {
    startTour,
    resetTour,
  }

  return (
    <TourContext.Provider value={contextValue}>
      {props.children}
    </TourContext.Provider>
  )
}

export function useTour(): TourContextType {
  const context = useContext(TourContext)
  if (!context) {
    throw new Error("useTour must be used within a TourProvider")
  }
  return context
}
