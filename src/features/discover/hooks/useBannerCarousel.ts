import { createSignal, createEffect, createMemo, onCleanup } from "solid-js"
import {
  getCurrentSeason,
  getTrendingConfig,
} from "~/features/discover/utils/section-configs"
import { useDiscoverSection } from "./useDiscoverSection"
import { useHqImage } from "./useHqImage"
import {
  formatColorForCSS,
  getContrastTextColor,
} from "~/features/discover/utils/banner-utils"
import type { DiscoverMedia } from "~/features/discover/api/anilist/types"

export function useBannerCarousel() {
  const { season, year } = getCurrentSeason()

  const trendingQuery = useDiscoverSection(
    () => getTrendingConfig(season, year),
    { withBannerIndices: true },
  )

  const bannerData = createMemo(() => {
    const data = trendingQuery.data
    if (!data) return []
    const media = data.media
    if (!media || media.length === 0) return []
    return data.bannerIndices
      .map((i) => media[i])
      .filter(Boolean) as DiscoverMedia[]
  })

  // All 5 HQ images fetch independently, non-blocking
  const hq0 = useHqImage(() => bannerData()[0]?.id)
  const hq1 = useHqImage(() => bannerData()[1]?.id)
  const hq2 = useHqImage(() => bannerData()[2]?.id)
  const hq3 = useHqImage(() => bannerData()[3]?.id)
  const hq4 = useHqImage(() => bannerData()[4]?.id)
  const hqImageUrls = () => [
    hq0.data,
    hq1.data,
    hq2.data,
    hq3.data,
    hq4.data,
  ]

  // Carousel state
  const [currentIndex, setCurrentIndex] = createSignal(0)
  const [colorVars, setColorVars] = createSignal<Record<string, string>>({})

  const current = () => bannerData()[currentIndex()] ?? null

  // Derive color CSS vars from current anime's cover color
  createEffect(() => {
    const anime = current()
    if (anime) {
      const color = formatColorForCSS(anime.coverImage?.color)
      const textColor = getContrastTextColor(anime.coverImage?.color)
      setColorVars({
        "--custom": color.hex,
        "--custom-r": String(color.r),
        "--custom-g": String(color.g),
        "--custom-b": String(color.b),
        "--text-contrast": textColor === "white" ? "#ffffff" : "#000000",
      })
    }
  })

  // Auto-advance timer
  let timerId: ReturnType<typeof setTimeout> | undefined

  const scheduleNext = () => {
    if (timerId) clearTimeout(timerId)
    if (!bannerData().length) return
    timerId = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerData().length)
      scheduleNext()
    }, 15000)
  }

  createEffect(() => {
    if (!bannerData().length) return
    scheduleNext()
    onCleanup(() => {
      if (timerId) clearTimeout(timerId)
    })
  })

  const selectIndex = (index: number) => {
    setCurrentIndex(index)
    scheduleNext()
  }

  // Resolve best available banner image URL
  const bannerImage = () => {
    const anime = current()
    if (!anime) return null
    const hq = hqImageUrls()[currentIndex()]
    if (hq) return hq
    return anime.bannerImage ?? anime.coverImage?.extraLarge ?? null
  }

  return {
    current,
    bannerImage,
    colorVars,
    currentIndex,
    selectIndex,
    itemCount: () => bannerData().length,
    error: () => trendingQuery.error ?? null,
  }
}
