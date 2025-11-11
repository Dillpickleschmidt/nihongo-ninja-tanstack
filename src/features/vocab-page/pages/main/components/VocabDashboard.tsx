import { RecentlyStudiedSection } from "./RecentlyStudiedSection"
import { ComingUpSection } from "./ComingUpSection"
import { FolderBrowserGrid } from "./FolderBrowserGrid"
import { useVocabDashboard } from "../hooks/useVocabDashboard"
import { cn } from "@/utils"

interface VocabDashboardProps {
  onSelectDeck: (deck: UserDeck) => void
  class?: string
}

/**
 * Main vocab dashboard layout component
 * Shows:
 * - Breadcrumb navigation
 * - Recently studied decks
 * - Coming up modules
 * - Folder/learning path browser
 */
export function VocabDashboard(props: VocabDashboardProps) {
  const dashboard = useVocabDashboard()

  // Handle deck selection from recently studied
  const handleSelectRecentDeck = (deck: UserDeck & { lastPracticed: Date }) => {
    // Navigate to deck if it has a folder
    if (deck.folder_id) {
      dashboard.navigateToPath(`/vocab/${deck.folder_id}/${deck.deck_id}`)
    }
    props.onSelectDeck(deck)
  }

  // Handle folder click
  const handleFolderClick = (folderIdStr: string) => {
    dashboard.navigateToPath(`/vocab/${folderIdStr}`)
  }

  // Handle learning path click
  const handleLearningPathClick = (learningPathId: string) => {
    dashboard.navigateToPath(`/vocab/${learningPathId}`)
  }

  // Handle coming up deck selection
  const handleSelectComingUpDeck = (deck: UserDeck) => {
    // Coming up modules use their module ID as deck_id (from transformModuleToDeckLike)
    dashboard.navigateToPath(`/vocab/${deck.deck_id}`)
    props.onSelectDeck(deck)
  }

  return (
    <div class={cn("space-y-8", props.class)}>
      {/* Recently Studied Section */}
      <RecentlyStudiedSection
        query={dashboard.recentlyStudiedQuery}
        onSelectDeck={handleSelectRecentDeck}
      />

      {/* Coming Up Section */}
      <ComingUpSection
        upcomingModulesQuery={dashboard.upcomingModulesQuery}
        onSelectDeck={handleSelectComingUpDeck}
      />

      {/* Folder Browser Grid */}
      <FolderBrowserGrid
        folders={dashboard.folders()}
        learningPaths={dashboard.learningPaths()}
        onFolderClick={handleFolderClick}
        onLearningPathClick={handleLearningPathClick}
      />
    </div>
  )
}
