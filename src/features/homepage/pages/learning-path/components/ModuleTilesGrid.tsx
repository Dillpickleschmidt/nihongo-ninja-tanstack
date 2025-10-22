import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { PreviewTile } from "./PreviewTile"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"

interface ModuleTilesGridProps {
  tiles: Array<{
    title: string
    description?: string
    href: string
    moduleType: string
    iconClasses: string
  }>
  settingsQuery: UseQueryResult<UserSettings, Error>
  isModuleCompleted: (href: string) => boolean
  firstIncompleteIndex: number
}

export function ModuleTilesGrid(props: ModuleTilesGridProps) {
  const activeDeck = () => props.settingsQuery.data!["active-deck"]

  return (
    <div class="px-4 pt-2 pb-4 md:px-6 md:pb-6">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <For each={props.tiles}>
          {(tile, index) => (
            <Link to={tile.href}>
              <PreviewTile
                title={tile.title}
                description={tile.description}
                moduleType={tile.moduleType}
                iconClasses={tile.iconClasses}
                chapterSlug={activeDeck()}
                index={index()}
                href={tile.href}
                isCompleted={props.isModuleCompleted(tile.href)}
                firstIncompleteIndex={props.firstIncompleteIndex}
                settingsQuery={props.settingsQuery}
              />
            </Link>
          )}
        </For>
      </div>
    </div>
  )
}
