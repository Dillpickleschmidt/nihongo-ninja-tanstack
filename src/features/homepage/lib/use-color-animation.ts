import { onMount, onCleanup } from 'solid-js'

const ORANGE = { accent: '#f59e0b', accentEnd: '#f43f5e' }
const PINK = { accent: '#ec4899', accentEnd: '#a855f7' }

export function useColorAnimation() {
  onMount(() => {
    const root = document.documentElement
    root.style.setProperty('--accent', ORANGE.accent)
    root.style.setProperty('--accent-end', ORANGE.accentEnd)

    let isPink = false
    const interval = setInterval(() => {
      const colors = isPink ? ORANGE : PINK
      root.style.setProperty('--accent', colors.accent)
      root.style.setProperty('--accent-end', colors.accentEnd)
      isPink = !isPink
    }, 5000)

    onCleanup(() => clearInterval(interval))
  })
}
