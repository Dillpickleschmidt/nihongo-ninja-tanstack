export interface FilterFormat {
  value: string
  label: string
}

export interface SearchFilters {
  name: string
  genres: FilterFormat[]
  years: FilterFormat[]
  seasons: FilterFormat[]
  formats: FilterFormat[]
  status: FilterFormat[]
  sort: FilterFormat[]
  ids?: number[]
  onList: FilterFormat[]
}
