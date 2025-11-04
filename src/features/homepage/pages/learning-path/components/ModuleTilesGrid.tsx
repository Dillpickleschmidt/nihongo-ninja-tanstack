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
  tileRefs?: (el: HTMLElement, index: number) => void
  blinkingTileIndex?: number | null
}

export function ModuleTilesGrid(props: ModuleTilesGridProps) {
  const activeChapter = () => props.settingsQuery.data!["active-chapter"]

  return (
    <div class="px-4 pt-2 pb-4 md:px-6 md:pb-6">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <For each={props.tiles}>
          {(tile, index) => (
            <div
              ref={(el) => props.tileRefs?.(el, index())}
            >
              <Link to={tile.href}>
                <PreviewTile
                  title={tile.title}
                  description={tile.description}
                  moduleType={tile.moduleType}
                  iconClasses={tile.iconClasses}
                  chapterSlug={activeChapter()}
                  index={index()}
                  href={tile.href}
                  isCompleted={props.isModuleCompleted(tile.href)}
                  firstIncompleteIndex={props.firstIncompleteIndex}
                  settingsQuery={props.settingsQuery}
                  shouldBlink={props.blinkingTileIndex === index()}
                />
              </Link>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
