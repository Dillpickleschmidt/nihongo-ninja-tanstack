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
import { userSettingsQueryOptions } from "@/query/query-options"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"

export function TourResetDropdown() {
  const tour = useTour()
  const context = useRouteContext({ from: RootRoute.id })
  const userId = context().user?.id || null

  const settingsQuery = useCustomQuery(() => userSettingsQueryOptions(userId))

  const getTourStatus = (tourId: string) => {
    const tourStep = settingsQuery.data.tours[tourId]

    if (tourStep === -2) return "✅" // completed
    if (tourStep === -1) return "❌" // dismissed
    if (tourStep !== undefined && tourStep >= 0) return "▶️" // in progress
    return "⚪" // not started
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
