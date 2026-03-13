declare namespace YT {
  class Player {
    constructor(element: HTMLElement | string, options: PlayerOptions)
    getCurrentTime(): number
    seekTo(seconds: number, allowSeekAhead?: boolean): void
    getPlayerState(): number
    playVideo(): void
    pauseVideo(): void
    destroy(): void
  }

  interface PlayerOptions {
    videoId?: string
    host?: string
    width?: string | number
    height?: string | number
    playerVars?: Record<string, unknown>
    events?: {
      onReady?: (event: { target: Player }) => void
    }
  }

  const PlayerState: {
    PLAYING: number
  }
}

interface Window {
  YT?: typeof YT
  onYouTubeIframeAPIReady?: () => void
}
