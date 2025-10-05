// src/features/guided-tour/TourResetDropdown.tsx
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { useTour } from "./TourContext"
import { TOURS } from "./tours"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"

export function TourResetDropdown() {
  const tour = useTour()
  const context = useRouteContext({ from: RootRoute.id })
  const userId = context().user?.id || null

  const settingsQuery = useCustomQuery(() => userSettingsQueryOptions(userId))

  const getTourStatus = (tourId: string) => {
    const isCompleted = settingsQuery.data["completed-tours"].includes(tourId)
    const deviceTour = settingsQuery.data.tour
    const isDismissed = deviceTour.currentTourStep === -1
    const isMarkedCompleted = deviceTour.currentTourStep === -2
    const isActive =
      deviceTour.currentTourId === tourId && deviceTour.currentTourStep >= 0

    if (isCompleted || isMarkedCompleted) return "✅"
    if (isActive) return "▶️"
    if (isDismissed) return "❌"
    return "⚪"
  }

  const handleResetTour = async (tourId: string) => {
    try {
      await tour.resetTour(tourId)
    } catch (error) {
      console.error("Failed to reset tour:", error)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger as={Button<"button">} variant="outline" size="sm">
        🎯 Reset Tours
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Reset Tour Progress</DropdownMenuLabel>
        {Object.entries(TOURS).map(([tourId, tourConfig]) => (
          <DropdownMenuItem onSelect={() => handleResetTour(tourId)}>
            <span class="mr-2">{getTourStatus(tourId)}</span>
            <span>{tourConfig[0]?.title || tourId}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
