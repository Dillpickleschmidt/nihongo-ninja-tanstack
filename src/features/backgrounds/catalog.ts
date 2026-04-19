export type BuiltInBackground = {
  id: string
  src: string
  sourceType: "img" | "video"
  previewSrc?: string
  layout: "vertical" | "horizontal"
  opacity: number
  yOffsetDesktop?: string
  yOffsetMobile?: string
}

type BackgroundAssetConfig = {
  assetPath: string
  layout: "vertical" | "horizontal"
  opacity: number
  yOffsetDesktop?: string
  yOffsetMobile?: string
}

function getFileName(assetPath: string): string {
  return assetPath.split("/").at(-1) ?? assetPath
}

function getBaseName(fileName: string): string {
  return fileName.replace(/\.[^.]+$/, "")
}

function slugifyBaseName(baseName: string): string {
  return baseName
    .toLowerCase()
    .replace(/[ _]+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

function getSourceType(assetPath: string): "img" | "video" {
  return assetPath.toLowerCase().endsWith(".mp4") ? "video" : "img"
}

function getPreviewSrc(assetPath: string): string | undefined {
  if (getSourceType(assetPath) !== "video") return undefined
  const fileName = getFileName(assetPath)
  const baseName = getBaseName(fileName)
  return `/img/backgrounds/video-posters/${baseName}.jpg`
}

const BACKGROUND_ASSET_CONFIGS = [
  {
    assetPath: "img/backgrounds/tranquil_village_by_k_jackson_katss_djqxpcz.png",
    layout: "horizontal",
    opacity: 0.44,
  },
  {
    assetPath: "img/backgrounds/moujib-aghrout-s9ESRUFnKDg-unsplash.jpg",
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    assetPath: "img/backgrounds/morning_village_by_k_jackson_katss_djrsova.jpg",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    assetPath: "video/backgrounds/AdobeStock_621205133_Video_HD_Preview.mp4",
    layout: "vertical",
    opacity: 0.44,
  },
  {
    assetPath: "img/backgrounds/rainy-day-stroll.jpg",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    assetPath: "img/backgrounds/japanese-gate.png",
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    assetPath: "video/backgrounds/AdobeStock_353576536_Video_HD_Preview.mp4",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    assetPath: "video/backgrounds/AdobeStock_621202547_Video_HD_Preview.mp4",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    assetPath: "img/backgrounds/AdobeStock_84364851_Preview.svg",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    assetPath: "img/backgrounds/traditional_chinatown_market.jpg",
    layout: "vertical",
    opacity: 0.4,
    yOffsetDesktop: "-298px",
  },
  {
    assetPath: "video/backgrounds/AdobeStock_796038864_Video_4K_Preview.mp4",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    assetPath: "img/backgrounds/joshua-fernandez-4aE2enR5M8s-unsplash.jpg",
    layout: "vertical",
    opacity: 0.5,
    yOffsetDesktop: "-598px",
  },
  {
    assetPath: "img/backgrounds/medium-shot-friends-wearing-scarfs.jpg",
    layout: "vertical",
    opacity: 0.45,
    yOffsetDesktop: "-838px",
  },
  {
    assetPath: "img/backgrounds/shima-onsen-gunma-japan.jpg",
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    assetPath: "img/backgrounds/rainy-day-mood-cartoon-style.jpg",
    layout: "vertical",
    opacity: 0.5,
    yOffsetDesktop: "-468px",
    yOffsetMobile: "-24px",
  },
  {
    assetPath: "img/backgrounds/pot and pan on gas stove4.jpg",
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    assetPath: "img/backgrounds/full-shot-people-eating-japanese-street-food-restaurant.jpg",
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    assetPath:
      "img/backgrounds/japanese-subway-train-system-display-screen-passenger-information.jpg",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    assetPath: "img/backgrounds/asian-touristic-attraction-place.jpg",
    layout: "vertical",
    opacity: 0.5,
    yOffsetDesktop: "-793px",
  },
  {
    assetPath: "img/backgrounds/red-temple.jpg",
    layout: "horizontal",
    opacity: 0.4,
    yOffsetDesktop: "0",
  },
] satisfies readonly BackgroundAssetConfig[]

export const BUILT_IN_BACKGROUND_LIST: BuiltInBackground[] =
  BACKGROUND_ASSET_CONFIGS.map((config) => {
    const fileName = getFileName(config.assetPath)
    const baseName = getBaseName(fileName)

    return {
      id: slugifyBaseName(baseName),
      src: `/${config.assetPath}`,
      sourceType: getSourceType(config.assetPath),
      previewSrc: getPreviewSrc(config.assetPath),
      layout: config.layout,
      opacity: config.opacity,
      yOffsetDesktop: config.yOffsetDesktop,
      yOffsetMobile: config.yOffsetMobile,
    }
  })

export const BUILT_IN_BACKGROUNDS: Record<string, BuiltInBackground> =
  Object.fromEntries(
    BUILT_IN_BACKGROUND_LIST.map((background) => [background.id, background]),
  )

export const CURATED_CHAPTER_BACKGROUNDS: Record<string, Record<string, string>> =
  {
    genki_1: {
      "chapter-0": "red-temple",
      "chapter-1": "tranquil-village-by-k-jackson-katss-djqxpcz",
      "chapter-2": "moujib-aghrout-s9esrufnkdg-unsplash",
      "chapter-3": "morning-village-by-k-jackson-katss-djrsova",
      "chapter-4": "adobestock-621205133-video-hd-preview",
      "chapter-5": "rainy-day-stroll",
      "chapter-6": "japanese-gate",
      "chapter-7": "japanese-gate",
      "chapter-8": "adobestock-353576536-video-hd-preview",
      "chapter-9": "adobestock-621202547-video-hd-preview",
      "chapter-10": "adobestock-84364851-preview",
      "chapter-11": "traditional-chinatown-market",
      "chapter-12": "adobestock-796038864-video-4k-preview",
    },
    genki_2: {
      "chapter-13": "joshua-fernandez-4ae2enr5m8s-unsplash",
      "chapter-14": "medium-shot-friends-wearing-scarfs",
      "chapter-15": "shima-onsen-gunma-japan",
      "chapter-16": "rainy-day-mood-cartoon-style",
      "chapter-17": "pot-and-pan-on-gas-stove4",
      "chapter-18": "full-shot-people-eating-japanese-street-food-restaurant",
      "chapter-19":
        "japanese-subway-train-system-display-screen-passenger-information",
      "chapter-20": "asian-touristic-attraction-place",
    },
  }

export const FALLBACK_BACKGROUND_ID = "red-temple"
