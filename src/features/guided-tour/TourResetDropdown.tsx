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
import { useSettings } from "@/context/SettingsContext"

export function TourResetDropdown() {
  const tour = useTour()
  const { userPreferences, deviceUISettings } = useSettings()

  const getTourStatus = (tourId: string) => {
    const isCompleted = userPreferences()["completed-tours"].includes(tourId)
    const deviceTour = deviceUISettings().tour
    const isDismissed = deviceTour.currentTourStep === -1
    const isActive =
      deviceTour.currentTourId === tourId && deviceTour.currentTourStep >= 0

    if (isCompleted) return "✅"
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
          <DropdownMenuItem
            key={tourId}
            onSelect={() => handleResetTour(tourId)}
          >
            <span class="mr-2">{getTourStatus(tourId)}</span>
            <span>{tourConfig[0]?.title || tourId}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

