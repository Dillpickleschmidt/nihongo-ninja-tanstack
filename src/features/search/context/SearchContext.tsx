import { createContext, createSignal, useContext, JSXElement } from "solid-js"
import type { CategoryType } from "../types"

interface SearchContextValue {
  activeCategory: () => CategoryType
  setActiveCategory: (category: CategoryType) => void
}

const SearchContext = createContext<SearchContextValue>()

export function SearchProvider(props: { children: JSXElement }) {
  const [activeCategory, setActiveCategory] =
    createSignal<CategoryType>("Anime")

  const value: SearchContextValue = {
    activeCategory,
    setActiveCategory,
  }

  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  )
}

export function useSearchContext() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error("useSearchContext must be used within SearchProvider")
  }
  return context
}
