// src/hooks/useAnimations.ts
import { createEffect, on } from "solid-js"
import { triggerComponentAnimations } from "@/utils/animations"
import { isServer } from "solid-js/web"

export function useAnimationManager() {
  return {
    animateOnDataChange: (selectors: string[], dataDependency: () => any) => {
      let hasRun = false
      createEffect(
        on(
          dataDependency,
          (data) => {
            if (data && !isServer && !hasRun) {
              hasRun = true
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  triggerComponentAnimations(selectors)
                })
              })
            }
          },
          { defer: false },
        ),
      )
    },
  }
}
