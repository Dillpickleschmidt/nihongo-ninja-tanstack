// features/dashboard/components/content/service/ServiceContentArea.tsx
import { ServiceDeckList } from "./ServiceDeckList"
import { ServiceOverview } from "./ServiceOverview"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import type { ServiceType } from "@/features/service-config/types"

interface ServiceContentAreaProps {
  serviceId: ServiceType
  serviceData: {
    decks: Array<{
      id: string
      name: string
      dueCards: number
      totalCards: number
    }>
    stats: {
      totalDueCards: number
      studiedToday: number
      currentStreak: number
      accuracy: number
    }
    activeDeckId: string
  }
}

export function ServiceContentArea(props: ServiceContentAreaProps) {
  return (
    <>
      {/* Mobile Layout */}
      <SSRMediaQuery hideFrom="xl">
        <ServiceOverview
          serviceId={props.serviceId}
          stats={props.serviceData.stats}
          variant="mobile"
        />
        <ServiceDeckList
          serviceId={props.serviceId}
          decks={props.serviceData.decks}
          activeDeckId={props.serviceData.activeDeckId}
          variant="mobile"
        />
      </SSRMediaQuery>

      {/* Desktop Layout */}
      <SSRMediaQuery showFrom="xl">
        {/* Service Overview */}
        <div class="pb-3">
          <ServiceOverview
            serviceId={props.serviceId}
            stats={props.serviceData.stats}
            variant="desktop"
          />
        </div>

        {/* Scrollable Deck List */}
        <div class="scrollbar-hide relative h-[calc(100vh-376px)] overflow-x-hidden overflow-y-auto overscroll-x-none px-8 pb-12">
          <div class="relative pt-3">
            {/* Sticky Header */}
            <div class="sticky top-0 z-10 pt-2 backdrop-blur-sm">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-2xl font-bold">
                    Your{" "}
                    {props.serviceId.charAt(0).toUpperCase() +
                      props.serviceId.slice(1)}{" "}
                    Decks
                  </h2>
                  <p class="text-muted-foreground">
                    Manage and study your decks
                  </p>
                </div>
                <div class="text-right">
                  <div class="text-primary text-2xl font-bold">
                    {props.serviceData.stats.totalDueCards}
                  </div>
                  <div class="text-muted-foreground text-sm">Due Cards</div>
                </div>
              </div>
            </div>

            {/* Deck List */}
            <div class="pt-6">
              <ServiceDeckList
                serviceId={props.serviceId}
                decks={props.serviceData.decks}
                activeDeckId={props.serviceData.activeDeckId}
                variant="desktop"
              />
            </div>
          </div>
        </div>
      </SSRMediaQuery>
    </>
  )
}
