import { createSignal, createEffect, createMemo, onCleanup } from "solid-js"
import {
  getCurrentSeason,
  getTrendingConfig,
} from "~/features/discover/utils/section-configs"
import { useDiscoverSection } from "./useDiscoverSection"
import { useHqImage } from "./useHqImage"
import {
  formatColorForCSS,
  generateBannerIndices,
  getContrastTextColor,
} from "~/features/discover/utils/banner-utils"
import type { DiscoverMedia } from "~/features/discover/api/anilist/types"

export function useBannerCarousel(bannerSeed: () => number) {
  const { season, year } = getCurrentSeason()

  const trendingQuery = useDiscoverSection(() =>
    getTrendingConfig(season, year),
  )

  const bannerData = createMemo<DiscoverMedia[] | undefined>(() => {
    if (trendingQuery.status !== "success") return undefined
    const page = trendingQuery.data?.pages?.[0]
    if (!page) return []
    const media =
      page.media?.filter((m): m is NonNullable<typeof m> => m != null) ?? []
    if (media.length === 0) return []
    const bannerIndices = generateBannerIndices(media, bannerSeed())
    return bannerIndices.map((i) => media[i]).filter(Boolean) as DiscoverMedia[]
  })

  // All 5 HQ images fetch independently, non-blocking
  const hq0 = useHqImage(() => bannerData()?.[0]?.id)
  const hq1 = useHqImage(() => bannerData()?.[1]?.id)
  const hq2 = useHqImage(() => bannerData()?.[2]?.id)
  const hq3 = useHqImage(() => bannerData()?.[3]?.id)
  const hq4 = useHqImage(() => bannerData()?.[4]?.id)
  const hqImageUrls = createMemo<(string | null)[]>(() => [
    hq0.status === "success" ? hq0.data : null,
    hq1.status === "success" ? hq1.data : null,
    hq2.status === "success" ? hq2.data : null,
    hq3.status === "success" ? hq3.data : null,
    hq4.status === "success" ? hq4.data : null,
  ])

  // Carousel state
  const [currentIndex, setCurrentIndex] = createSignal(0)
  const [colorVars, setColorVars] = createSignal<Record<string, string>>({})

  createEffect(() => {
    const data = bannerData()
    if (!data || data.length === 0) {
      if (currentIndex() !== 0) setCurrentIndex(0)
      return
    }
    if (currentIndex() >= data.length) setCurrentIndex(0)
  })

  const current = () => {
    const data = bannerData()
    if (!data || data.length === 0) return null
    return data[currentIndex()] ?? null
  }

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
    if (!bannerData()?.length) return
    timerId = setTimeout(() => {
      setCurrentIndex((prev) => {
        const count = bannerData()?.length ?? 0
        if (count === 0) return 0
        return (prev + 1) % count
      })
      scheduleNext()
    }, 15000)
  }

  createEffect(() => {
    if (!bannerData()?.length) return
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
    itemCount: () => bannerData()?.length ?? 0,
    isLoading: () => bannerData() === undefined,
    error: () => trendingQuery.error ?? null,
  }
}
