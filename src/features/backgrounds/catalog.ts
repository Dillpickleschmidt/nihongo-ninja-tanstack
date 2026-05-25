import { GENERATED_IMAGES } from "@/features/images/generated-images"

type CommonFields = {
  layout: "vertical" | "horizontal"
  opacity: number
  sourceWidth: number
  yOffsetDesktop?: string
  yOffsetMobile?: string
}

export type BuiltInImageBackground = CommonFields & {
  mediaType: "image"
  id: string
  src: string
}

export type BuiltInVideoBackground = CommonFields & {
  mediaType: "video"
  id: string
  src: string
  posterSrc: string
}

export type BuiltInBackground = BuiltInImageBackground | BuiltInVideoBackground

type BuiltInImageBackgroundDefinition = Omit<BuiltInImageBackground, "id" | "sourceWidth">
type BuiltInVideoBackgroundDefinition = Omit<BuiltInVideoBackground, "id" | "sourceWidth">
type BuiltInBackgroundDefinition =
  | BuiltInImageBackgroundDefinition
  | BuiltInVideoBackgroundDefinition

const BUILT_IN_BACKGROUND_DEFINITIONS: BuiltInBackgroundDefinition[] = [
  {
    mediaType: "image",
    src: "/img/backgrounds/tranquil_village_by_k_jackson_katss_djqxpcz.png",
    layout: "horizontal",
    opacity: 0.44,
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/moujib-aghrout-s9ESRUFnKDg-unsplash.jpg",
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/morning_village_by_k_jackson_katss_djrsova.jpg",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    mediaType: "video",
    src: "/video/backgrounds/AdobeStock_621205133_Video_HD_Preview.mp4",
    posterSrc: "/img/backgrounds/video-posters/AdobeStock_621205133_Video_HD_Preview.jpg",
    layout: "vertical",
    opacity: 0.44,
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/rainy-day-stroll.jpg",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/japanese-gate.png",
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    mediaType: "video",
    src: "/video/backgrounds/AdobeStock_353576536_Video_HD_Preview.mp4",
    posterSrc: "/img/backgrounds/video-posters/AdobeStock_353576536_Video_HD_Preview.jpg",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    mediaType: "video",
    src: "/video/backgrounds/AdobeStock_621202547_Video_HD_Preview.mp4",
    posterSrc: "/img/backgrounds/video-posters/AdobeStock_621202547_Video_HD_Preview.jpg",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/AdobeStock_84364851_Preview.jpg",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/traditional_chinatown_market.jpg",
    layout: "vertical",
    opacity: 0.4,
    yOffsetDesktop: "-298px",
  },
  {
    mediaType: "video",
    src: "/video/backgrounds/AdobeStock_796038864_Video_4K_Preview.mp4",
    posterSrc: "/img/backgrounds/video-posters/AdobeStock_796038864_Video_4K_Preview.jpg",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/joshua-fernandez-4aE2enR5M8s-unsplash.jpg",
    layout: "vertical",
    opacity: 0.5,
    yOffsetDesktop: "-598px",
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/medium-shot-friends-wearing-scarfs.jpg",
    layout: "vertical",
    opacity: 0.45,
    yOffsetDesktop: "-838px",
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/shima-onsen-gunma-japan.jpg",
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/rainy-day-mood-cartoon-style.jpg",
    layout: "vertical",
    opacity: 0.5,
    yOffsetDesktop: "-468px",
    yOffsetMobile: "-24px",
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/pot and pan on gas stove4.jpg",
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/full-shot-people-eating-japanese-street-food-restaurant.jpg",
    layout: "horizontal",
    opacity: 0.5,
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/japanese-subway-train-system-display-screen-passenger-information.jpg",
    layout: "horizontal",
    opacity: 0.4,
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/asian-touristic-attraction-place.jpg",
    layout: "vertical",
    opacity: 0.5,
    yOffsetDesktop: "-793px",
  },
  {
    mediaType: "image",
    src: "/img/backgrounds/red-temple.jpg",
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
  const imageSrc = background.mediaType === "video" ? background.posterSrc : background.src
  const generated = GENERATED_IMAGES[imageSrc as keyof typeof GENERATED_IMAGES]
  if (!generated) throw new Error(`Missing generated image metadata for ${imageSrc}`)
  return {
    ...background,
    id: fileStem(background.src),
    sourceWidth: generated.sourceWidth,
  }
}

function fileStem(path: string): string {
  const fileName = path.split("/").at(-1) ?? path
  return fileName.replace(/\.[^.]+$/, "")
}
