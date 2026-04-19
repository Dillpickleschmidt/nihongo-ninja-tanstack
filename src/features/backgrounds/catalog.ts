type CommonFields = {
  layout: "vertical" | "horizontal"
  opacity: number
  yOffsetDesktop?: string
  yOffsetMobile?: string
}

export type BuiltInImageBackground = CommonFields & {
  kind: "image"
  id: string
  src: string
  sourceWidth: number
}

// On a video, `src` is the poster image; `videoSrc` is the mp4.
export type BuiltInVideoBackground = CommonFields & {
  kind: "video"
  id: string
  src: string
  sourceWidth: number
  videoSrc: string
}

export type BuiltInBackground = BuiltInImageBackground | BuiltInVideoBackground

type BuiltInImageBackgroundDefinition = Omit<BuiltInImageBackground, "id">
type BuiltInVideoBackgroundDefinition = Omit<BuiltInVideoBackground, "id">
type BuiltInBackgroundDefinition =
  | BuiltInImageBackgroundDefinition
  | BuiltInVideoBackgroundDefinition

const BUILT_IN_BACKGROUND_DEFINITIONS: BuiltInBackgroundDefinition[] = [
  {
    kind: "image",
    src: "/img/backgrounds/tranquil_village_by_k_jackson_katss_djqxpcz.png",
    sourceWidth: 1424,
    layout: "horizontal",
    opacity: 0.44,
  },
  {
    kind: "image",
    src: "/img/backgrounds/moujib-aghrout-s9ESRUFnKDg-unsplash.jpg",
    sourceWidth: 2400,
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    kind: "image",
    src: "/img/backgrounds/morning_village_by_k_jackson_katss_djrsova.jpg",
    sourceWidth: 1424,
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    kind: "video",
    videoSrc: "/video/backgrounds/AdobeStock_621205133_Video_HD_Preview.mp4",
    src: "/img/backgrounds/video-posters/AdobeStock_621205133_Video_HD_Preview.jpg",
    sourceWidth: 1920,
    layout: "vertical",
    opacity: 0.44,
  },
  {
    kind: "image",
    src: "/img/backgrounds/rainy-day-stroll.jpg",
    sourceWidth: 5120,
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    kind: "image",
    src: "/img/backgrounds/japanese-gate.png",
    sourceWidth: 1920,
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    kind: "video",
    videoSrc: "/video/backgrounds/AdobeStock_353576536_Video_HD_Preview.mp4",
    src: "/img/backgrounds/video-posters/AdobeStock_353576536_Video_HD_Preview.jpg",
    sourceWidth: 1920,
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    kind: "video",
    videoSrc: "/video/backgrounds/AdobeStock_621202547_Video_HD_Preview.mp4",
    src: "/img/backgrounds/video-posters/AdobeStock_621202547_Video_HD_Preview.jpg",
    sourceWidth: 1920,
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    kind: "image",
    src: "/img/backgrounds/AdobeStock_84364851_Preview.jpg",
    sourceWidth: 3128,
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    kind: "image",
    src: "/img/backgrounds/traditional_chinatown_market.jpg",
    sourceWidth: 3999,
    layout: "vertical",
    opacity: 0.4,
    yOffsetDesktop: "-298px",
  },
  {
    kind: "video",
    videoSrc: "/video/backgrounds/AdobeStock_796038864_Video_4K_Preview.mp4",
    src: "/img/backgrounds/video-posters/AdobeStock_796038864_Video_4K_Preview.jpg",
    sourceWidth: 3840,
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    kind: "image",
    src: "/img/backgrounds/joshua-fernandez-4aE2enR5M8s-unsplash.jpg",
    sourceWidth: 3456,
    layout: "vertical",
    opacity: 0.5,
    yOffsetDesktop: "-598px",
  },
  {
    kind: "image",
    src: "/img/backgrounds/medium-shot-friends-wearing-scarfs.jpg",
    sourceWidth: 1937,
    layout: "vertical",
    opacity: 0.45,
    yOffsetDesktop: "-838px",
  },
  {
    kind: "image",
    src: "/img/backgrounds/shima-onsen-gunma-japan.jpg",
    sourceWidth: 4752,
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    kind: "image",
    src: "/img/backgrounds/rainy-day-mood-cartoon-style.jpg",
    sourceWidth: 2320,
    layout: "vertical",
    opacity: 0.5,
    yOffsetDesktop: "-468px",
    yOffsetMobile: "-24px",
  },
  {
    kind: "image",
    src: "/img/backgrounds/pot and pan on gas stove4.jpg",
    sourceWidth: 6250,
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    kind: "image",
    src: "/img/backgrounds/full-shot-people-eating-japanese-street-food-restaurant.jpg",
    sourceWidth: 3995,
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    kind: "image",
    src: "/img/backgrounds/japanese-subway-train-system-display-screen-passenger-information.jpg",
    sourceWidth: 5611,
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    kind: "image",
    src: "/img/backgrounds/asian-touristic-attraction-place.jpg",
    sourceWidth: 4004,
    layout: "vertical",
    opacity: 0.5,
    yOffsetDesktop: "-793px",
  },
  {
    kind: "image",
    src: "/img/backgrounds/red-temple.jpg",
    sourceWidth: 5911,
    layout: "horizontal",
    opacity: 0.4,
    yOffsetDesktop: "0",
  },
]

export const BUILT_IN_BACKGROUND_LIST =
  BUILT_IN_BACKGROUND_DEFINITIONS.map(withDerivedId)

export const BUILT_IN_BACKGROUNDS: Record<string, BuiltInBackground> =
  Object.fromEntries(
    BUILT_IN_BACKGROUND_LIST.map((background) => [background.id, background]),
  )

export const CURATED_CHAPTER_BACKGROUNDS: Record<
  string,
  Record<string, string>
> = {
  genki_1: {
    "chapter-0": "red-temple",
    "chapter-1": "tranquil_village_by_k_jackson_katss_djqxpcz",
    "chapter-2": "moujib-aghrout-s9ESRUFnKDg-unsplash",
    "chapter-3": "morning_village_by_k_jackson_katss_djrsova",
    "chapter-4": "AdobeStock_621205133_Video_HD_Preview",
    "chapter-5": "rainy-day-stroll",
    "chapter-6": "japanese-gate",
    "chapter-7": "japanese-gate",
    "chapter-8": "AdobeStock_353576536_Video_HD_Preview",
    "chapter-9": "AdobeStock_621202547_Video_HD_Preview",
    "chapter-10": "AdobeStock_84364851_Preview",
    "chapter-11": "traditional_chinatown_market",
    "chapter-12": "AdobeStock_796038864_Video_4K_Preview",
  },
  genki_2: {
    "chapter-13": "joshua-fernandez-4aE2enR5M8s-unsplash",
    "chapter-14": "medium-shot-friends-wearing-scarfs",
    "chapter-15": "shima-onsen-gunma-japan",
    "chapter-16": "rainy-day-mood-cartoon-style",
    "chapter-17": "pot and pan on gas stove4",
    "chapter-18": "full-shot-people-eating-japanese-street-food-restaurant",
    "chapter-19":
      "japanese-subway-train-system-display-screen-passenger-information",
    "chapter-20": "asian-touristic-attraction-place",
  },
}

export const FALLBACK_BACKGROUND_ID = "red-temple"

function withDerivedId(
  background: BuiltInBackgroundDefinition,
): BuiltInBackground {
  return {
    ...background,
    id: fileStem(
      background.kind === "video" ? background.videoSrc : background.src,
    ),
  }
}

function fileStem(path: string): string {
  const fileName = path.split("/").at(-1) ?? path
  return fileName.replace(/\.[^.]+$/, "")
}
