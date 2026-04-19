import type { Accessor } from "solid-js"
import { api } from "convex/_generated/api"
import { useConvexQuery } from "@/lib/convex-query"
import type { LayoutArgs } from "./breakpoints"
import { buildPrivateUnpicSource } from "./transformer"

export function usePrivateImageSource(
  imageId: Accessor<string | undefined>,
  layout: Accessor<LayoutArgs>,
  sourceWidth?: Accessor<number | undefined>,
) {
  const shouldFetch = () => !!imageId() && sourceWidth?.() === undefined
  const query = useConvexQuery(
    api.api.images.getOwnedImageAsset,
    () => ({ imageId: imageId() ?? "" }),
    () => ({ enabled: shouldFetch() }),
  )

  return () => {
    const id = imageId()
    if (!id) return undefined
    const width = sourceWidth?.() ?? query.data()?.sourceWidth
    if (!width) return undefined
    return buildPrivateUnpicSource({
      imageId: id,
      sourceWidth: width,
      layout: layout(),
    })
  }
}
