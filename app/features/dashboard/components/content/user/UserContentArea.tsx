// features/dashboard/components/content/user/UserContentArea.tsx
import { UserDeckList } from "./UserDeckList"
import { UserNotePreviews } from "./UserNotePreviews"
import { UserOverview } from "./UserOverview"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"

interface UserContentAreaProps {
  userId: string
  userData: {
    decks: Array<{
      id: string
      name: string
      cardCount: number
      lastStudied: string
    }>
    notes: Array<{
      id: string
      title: string
      content: string
      color: string
      createdAt: string
    }>
    activeDeckId: string
  }
}

export function UserContentArea(props: UserContentAreaProps) {
  return (
    <>
      {/* Mobile Layout */}
      <SSRMediaQuery hideFrom="xl">
        <UserNotePreviews notes={props.userData.notes} variant="mobile" />
        <UserDeckList
          decks={props.userData.decks}
          activeDeckId={props.userData.activeDeckId}
          variant="mobile"
        />
        <UserOverview variant="mobile" />
      </SSRMediaQuery>

      {/* Desktop Layout */}
      <SSRMediaQuery showFrom="xl">
        {/* Notes Section */}
        <div class="pb-3">
          <UserNotePreviews notes={props.userData.notes} variant="desktop" />
        </div>

        {/* Scrollable Content */}
        <div class="scrollbar-hide relative h-[calc(100vh-376px)] overflow-x-hidden overflow-y-auto overscroll-x-none px-8 pb-12">
          {/* User Overview */}
          <UserOverview variant="desktop" />

          <div class="relative pt-6">
            {/* Sticky Header */}
            <div class="sticky top-0 z-10 pt-2 backdrop-blur-sm">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-2xl font-bold">Your Custom Decks</h2>
                  <p class="text-muted-foreground">
                    Manage your personal study collections
                  </p>
                </div>
                <div class="text-right">
                  <div class="text-primary text-2xl font-bold">
                    {props.userData.decks.length}
                  </div>
                  <div class="text-muted-foreground text-sm">Decks</div>
                </div>
              </div>
            </div>

            {/* Deck List */}
            <div class="pt-6">
              <UserDeckList
                decks={props.userData.decks}
                activeDeckId={props.userData.activeDeckId}
                variant="desktop"
              />
            </div>
          </div>
        </div>
      </SSRMediaQuery>
    </>
  )
}
