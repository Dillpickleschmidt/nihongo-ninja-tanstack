import { useCustomQuery } from "@/hooks/useCustomQuery"
import { completedModulesQueryOptions } from "@/query/query-options"

interface Tile {
  href: string
  [key: string]: any
}

export function useModuleProgress(userId: string | null, tiles: () => Tile[]) {
  const completedModulesQuery = useCustomQuery(() =>
    completedModulesQueryOptions(userId),
  )

  const isModuleCompleted = (moduleHref: string) => {
    const moduleId = moduleHref.split("/").pop()
    return (
      completedModulesQuery.data?.some(
        (module) => module.module_path === moduleId,
      ) ?? false
    )
  }

  const getFirstIncompleteIndex = () =>
    tiles().findIndex((tile) => !isModuleCompleted(tile.href))

  return { isModuleCompleted, getFirstIncompleteIndex }
}
