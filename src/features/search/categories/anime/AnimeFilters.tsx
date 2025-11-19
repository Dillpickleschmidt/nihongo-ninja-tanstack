import { Show } from "solid-js"
import { MultiCombobox } from "@/features/explore/components/ui/combobox/multicombo"
import { SingleCombobox } from "@/features/explore/components/ui/combobox/singlecombo"
import {
  genres,
  years,
  seasons,
  formats,
  status,
  sort,
  onlist,
} from "@/features/explore/utils/values"
import type { SearchFilters } from "./types"

interface AnimeFiltersProps {
  search: () => SearchFilters
  setSearch: (
    s: SearchFilters | ((prev: SearchFilters) => SearchFilters),
  ) => void
  user: any
  isMobile: boolean
}

export function AnimeFilters(props: AnimeFiltersProps) {
  const Label = (p: { children: any }) => (
    <div class="text-muted-foreground mb-2 text-sm font-medium">
      {p.children}
    </div>
  )

  // Mobile: Sort section
  const mobileSort = () =>
    props.isMobile ? (
      <div class="mb-6">
        <div class="text-muted-foreground mb-2 text-sm font-medium">
          Sort By
        </div>
        <SingleCombobox
          items={sort}
          value={props.search().sort}
          onChange={(value) => props.setSearch((s) => ({ ...s, sort: value }))}
        />
      </div>
    ) : null

  return (
    <div class="flex flex-col gap-6">
      {mobileSort()}

      {/* My List */}
      <Show when={props.user?.id}>
        <div>
          <Label>My List</Label>
          <SingleCombobox
            items={onlist}
            value={props.search().onList}
            onChange={(value) =>
              props.setSearch((s) => ({ ...s, onList: value }))
            }
            placeholder="Select list..."
          />
        </div>
      </Show>

      {/* Genres */}
      <div>
        <Label>Genres</Label>
        <MultiCombobox
          items={genres}
          value={props.search().genres}
          onChange={(value) =>
            props.setSearch((s) => ({ ...s, genres: value }))
          }
          placeholder="Select genres..."
        />
      </div>

      {/* Season & Year Grid */}
      <div class="grid grid-cols-2 gap-3">
        <div>
          <Label>Season</Label>
          <SingleCombobox
            items={seasons}
            value={props.search().seasons}
            onChange={(value) =>
              props.setSearch((s) => ({ ...s, seasons: value }))
            }
            placeholder="Any"
          />
        </div>
        <div>
          <Label>Year</Label>
          <SingleCombobox
            items={years}
            value={props.search().years}
            onChange={(value) =>
              props.setSearch((s) => ({ ...s, years: value }))
            }
            placeholder="Any"
          />
        </div>
      </div>

      {/* Formats */}
      <div>
        <Label>Format</Label>
        <MultiCombobox
          items={formats}
          value={props.search().formats}
          onChange={(value) =>
            props.setSearch((s) => ({ ...s, formats: value }))
          }
          placeholder="Any format"
        />
      </div>

      {/* Status */}
      <div>
        <Label>Status</Label>
        <MultiCombobox
          items={status}
          value={props.search().status}
          onChange={(value) =>
            props.setSearch((s) => ({ ...s, status: value }))
          }
          placeholder="Any status"
        />
      </div>
    </div>
  )
}
