// src/hooks/useAnimations.ts
import { createEffect } from "solid-js"
import { triggerComponentAnimations } from "@/utils/animations"
import { isServer } from "solid-js/web"

export function useAnimationManager() {
  return {
    animateOnDataChange: (selectors: string[], dataDependency: () => any) => {
      createEffect(() => {
        const data = dataDependency()
        if (data && !isServer) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              triggerComponentAnimations(selectors)
            })
          })
        }
      })
    }
  }
}