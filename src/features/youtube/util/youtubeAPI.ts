// src/features/youtube/util/youtubeAPI.ts
declare global {
  var onYouTubeIframeAPIReady: () => void
}
let apiLoadPromise: Promise<void> | null = null

export function loadYouTubeApi(): Promise<void> {
  if (apiLoadPromise) {
    return apiLoadPromise
  }

  apiLoadPromise = new Promise((resolve) => {
    if (window.YT) {
      resolve()
      return
    }

    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"

    window.onYouTubeIframeAPIReady = () => {
      resolve()
    }

    document.head.appendChild(tag)
  })

  return apiLoadPromise
}
