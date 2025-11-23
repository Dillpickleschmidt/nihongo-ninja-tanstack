import { RecentlyStudiedSection } from "./RecentlyStudiedSection"
import { ComingUpSection } from "./ComingUpSection"
import { FolderBrowserGrid } from "./FolderBrowserGrid"
import { useVocabDashboard } from "../hooks/useVocabDashboard"
import { cn } from "@/utils"

interface VocabDashboardProps {
  onSelectDeck: (deck: UserDeck) => void
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
      dashboard.navigate({ to: `/vocab/${deck.folder_id}/${deck.deck_id}` })
    }
    props.onSelectDeck(deck)
  }

  const handleFolderClick = (folderIdStr: string) => {
    dashboard.navigate({ to: `/vocab/${folderIdStr}` })
  }

  const handleLearningPathClick = (learningPathId: string) => {
    dashboard.navigate({ to: `/vocab/${learningPathId}` })
  }

  return (
    <div class="space-y-8">
      <RecentlyStudiedSection
        query={dashboard.recentlyStudiedQuery}
        onSelectDeck={handleSelectRecentDeck}
      />
      <ComingUpSection upcomingModulesQuery={dashboard.upcomingModulesQuery} />
      <FolderBrowserGrid
        folders={dashboard.folders()}
        decks={dashboard.userDecks()}
        learningPaths={dashboard.learningPaths()}
        onFolderClick={handleFolderClick}
        onDeckClick={props.onSelectDeck}
        onLearningPathClick={handleLearningPathClick}
      />
    </div>
  )
}
