import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { PreviewTile } from "./PreviewTile"
import type { ChapterContent } from "../utils/getChapterContent"

interface ModuleTilesGridProps {
  tiles: ChapterContent["tiles"]
  chapterSlug: string
  isModuleCompleted: (href: string) => boolean
  firstIncompleteIndex: number
}

export function ModuleTilesGrid(props: ModuleTilesGridProps) {
  return (
    <div class="px-4 pt-2 pb-4 md:px-6 md:pb-6">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <For each={props.tiles}>
          {(tile, index) => (
            <Link to={tile.href}>
              <PreviewTile
                title={tile.title}
                description={tile.description}
                chapterSlug={props.chapterSlug}
                index={index()}
                href={tile.href}
                isCompleted={props.isModuleCompleted(tile.href)}
                firstIncompleteIndex={props.firstIncompleteIndex}
              />
            </Link>
          )}
        </For>
      </div>
    </div>
  )
}
