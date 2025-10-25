// src/features/guided-tour/TourContext.tsx
import {
  createContext,
  useContext,
  Component,
  ParentProps,
  type JSX,
} from "solid-js"
import { render as renderSolidJS } from "solid-js/web"
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
  resumeTour: (tourId: string, stepIndex: number) => void
  nextStep: () => void
  resetTour: (tourId: string) => Promise<void>
}

const TourContext = createContext<TourContextType>()

interface TourProviderProps extends ParentProps {}

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

  // Inject CSS for tooltip mode (pointer-events override)
  if (!document.getElementById("tour-tooltip-styles")) {
    const style = document.createElement("style")
    style.id = "tour-tooltip-styles"
    style.textContent = `.tour-tooltip-mode.driver-active * {
  pointer-events: auto !important;
}`
    document.head.appendChild(style)
  }

  const startTour = (tourId: string) => {
    // Check if there's already an active tour
    const tourStatus = settingsQuery.data!.tours[tourId]
    if (tourStatus !== undefined && tourStatus >= 0) return

    const steps = TOURS[tourId]
    if (!steps) return

    // Check if already completed or dismissed
    if (tourStatus === -2 || tourStatus === -1) return

    // Capture the current location as the starting point
    tourStartPath = location().pathname

    // Start the requested tour
    currentTour = tourId
    currentStepIndex = 0

    updateSettingsMutation.mutate({
      tours: {
        ...settingsQuery.data!.tours,
        [tourId]: 0,
      },
    })

    initializeDriver(steps, 0)
  }

  const resumeTour = (tourId: string, stepIndex: number) => {
    const steps = TOURS[tourId]
    if (!steps || stepIndex < 0 || stepIndex >= steps.length) return

    // Capture the current location as the starting point (for returning later)
    tourStartPath = location().pathname

    // Resume the tour
    currentTour = tourId
    currentStepIndex = stepIndex

    initializeDriver(steps, stepIndex)
  }

  const nextStep = () => {
    if (!currentTour) return

    const steps = TOURS[currentTour]
    if (!steps) return

    handleNext(steps, currentStepIndex)
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
      steps: steps.map((s, index) => {
        // Check if description is a string or JSX
        const isJSXDescription = typeof s.description !== "string"

        return {
          element: s.element,
          popover: {
            title: s.title,
            // Needs some kind of string provided or it adds the hidden class
            description: isJSXDescription ? " " : (s.description as string),
            side: s.side || "bottom",
            align: s.align,
            onNextClick: () => handleNext(steps, index),
            onPrevClick: () => handlePrevious(steps, index),
          },
        }
      }),
      onDestroyStarted: dismissTour, // 👈 reuse
      onPopoverRender: (popover, { state }) => {
        const currentStep = steps[state.activeIndex!]
        const isJSXDescription = typeof currentStep?.description !== "string"

        // Apply custom width if specified (override driver.js's max-width: 300px)
        if (currentStep?.width) {
          popover.wrapper.style.width = currentStep.width
          popover.wrapper.style.maxWidth = currentStep.width
        }

        // Make it more like a tooltip if dialog is false
        const overlay = document.querySelector(
          ".driver-overlay",
        ) as HTMLElement | null
        if (overlay) {
          const isTooltipMode = currentStep?.dialog === false
          overlay.style.display = isTooltipMode ? "none" : ""

          // Toggle tooltip mode class for pointer-events override
          if (isTooltipMode) {
            document.body.classList.add("tour-tooltip-mode")
          } else {
            document.body.classList.remove("tour-tooltip-mode")
          }
        }

        // Inject JSX description if present
        if (isJSXDescription && currentStep) {
          // Query the description element from the document
          const descriptionElement = document.querySelector(
            ".driver-popover-description",
          ) as HTMLElement | null

          if (descriptionElement) {
            // Create a container for the JSX content
            const container = document.createElement("div")
            descriptionElement.appendChild(container)

            // Render JSX into the container
            renderSolidJS(
              () => currentStep.description as JSX.Element,
              container,
            )
          }
        }

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
    if (currentTour) {
      updateSettingsMutation.mutate({
        tours: {
          ...settingsQuery.data!.tours,
          [currentTour]: nextIndex,
        },
      })
    }

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
    if (currentTour) {
      updateSettingsMutation.mutate({
        tours: {
          ...settingsQuery.data!.tours,
          [currentTour]: prevIndex,
        },
      })
    }

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

    // Mark as completed (-2)
    await updateSettingsMutation.mutateAsync({
      tours: {
        ...settingsQuery.data!.tours,
        [currentTour]: -2,
      },
    })

    // Navigate back to the original page
    await navigate({ to: tourStartPath })

    cleanup()
  }

  const handleDismiss = () => {
    // Mark as dismissed (-1)
    if (currentTour) {
      updateSettingsMutation.mutate({
        tours: {
          ...settingsQuery.data!.tours,
          [currentTour]: -1,
        },
      })
    }
  }

  const cleanup = () => {
    if (driverInstance) {
      driverInstance.destroy()
      driverInstance = null
    }
    currentTour = null
    currentStepIndex = 0
    document.body.classList.remove("tour-tooltip-mode")
  }

  const resetTour = async (tourId: string) => {
    // Delete tour entry (resets to undefined = not started)
    const newTours = { ...settingsQuery.data!.tours }
    delete newTours[tourId]

    await updateSettingsMutation.mutateAsync({
      tours: newTours,
    })
  }

  const contextValue = {
    startTour,
    resumeTour,
    nextStep,
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
