import { Show } from "solid-js"
import {
  BackgroundImage,
  BackgroundMediaItem,
} from "@/components/BackgroundImage"

type TextbookChapterBackgrounds = {
  [textbook: string]: {
    [chapter: string]: BackgroundMediaItem
  }
}

const textbook_chapter_backgrounds: TextbookChapterBackgrounds = {
  genki_1: {
    "chapter-0": {
      source_type: "img",
      src: "/img/backgrounds/tranquil_village_by_k_jackson_katss_djqxpcz.png",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.18,
      y_offset_desktop: "-82px",
    },
    "chapter-1": {
      source_type: "img",
      src: "/img/backgrounds/morning_village_by_k_jackson_katss_djrsova.jpg",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.18,
    },
    "chapter-2": {
      source_type: "img",
      src: "/img/backgrounds/moujib-aghrout-s9ESRUFnKDg-unsplash.jpg",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.38,
    },
    "chapter-3": {
      source_type: "img",
      src: "/img/backgrounds/lanterns-with-text-hanging-temple.jpg",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.18,
    },
    "chapter-4": {
      source_type: "img",
      src: "/img/backgrounds/jordan-duca-aOqEXM_zI_4-unsplash.jpg",
      position: "absolute",
      layout: "vertical",
      opacity: 0.28,
      y_offset_desktop: "-450px",
    },
    "chapter-5": {
      source_type: "img",
      src: "/img/backgrounds/rainy-day-stroll.jpg",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.18,
    },
    "chapter-6": {
      source_type: "img",
      src: "/img/backgrounds/japanese-gate.png",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.28,
    },
    "chapter-7": {
      source_type: "img",
      src: "/img/backgrounds/woman-8382544.jpg",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.23,
    },
    "chapter-8": {
      source_type: "video",
      src: "/video/backgrounds/AdobeStock_353576536_Video_HD_Preview.mp4",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.18,
    },
    "chapter-9": {
      source_type: "video",
      src: "/video/backgrounds/AdobeStock_621202547_Video_HD_Preview.mp4",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.18,
    },
    "chapter-10": {
      source_type: "img",
      src: "/img/backgrounds/AdobeStock_84364851_Preview.svg",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.18,
    },
    "chapter-11": {
      source_type: "img",
      src: "/img/backgrounds/traditional_chinatown_market.jpg",
      position: "absolute",
      layout: "vertical",
      opacity: 0.18,
      y_offset_desktop: "-330px",
    },
    "chapter-12": {
      source_type: "video",
      src: "/video/backgrounds/AdobeStock_796038864_Video_4K_Preview.mp4",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.18,
    },
  },
  genki_2: {
    "chapter-13": {
      source_type: "img",
      src: "/img/backgrounds/joshua-fernandez-4aE2enR5M8s-unsplash.jpg",
      position: "absolute",
      layout: "vertical",
      opacity: 0.28,
      y_offset_desktop: "-630px",
    },
    "chapter-14": {
      source_type: "img",
      src: "/img/backgrounds/medium-shot-friends-wearing-scarfs.jpg",
      position: "absolute",
      layout: "vertical",
      opacity: 0.23,
      y_offset_desktop: "-870px",
    },
    "chapter-15": {
      source_type: "img",
      src: "/img/backgrounds/shima-onsen-gunma-japan.jpg",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.28,
    },
    "chapter-16": {
      source_type: "img",
      src: "/img/backgrounds/rainy-day-mood-cartoon-style.jpg",
      position: "absolute",
      layout: "vertical",
      opacity: 0.28,
      y_offset_desktop: "-500px",
      y_offset_mobile: "-24px",
    },
    "chapter-17": {
      source_type: "img",
      src: "/img/backgrounds/pot and pan on gas stove4.jpg",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.28,
      y_offset_desktop: "0px",
    },
    "chapter-18": {
      source_type: "img",
      src: "/img/backgrounds/full-shot-people-eating-japanese-street-food-restaurant.jpg",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.28,
      y_offset_desktop: "0px",
    },
    "chapter-19": {
      source_type: "img",
      src: "/img/backgrounds/japanese-subway-train-system-display-screen-passenger-information.jpg",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.18,
    },
    "chapter-20": {
      source_type: "img",
      src: "/img/backgrounds/asian-touristic-attraction-place.jpg",
      position: "absolute",
      layout: "vertical",
      opacity: 0.28,
      y_offset_desktop: "-825px",
    },
  },
}

export function TextbookChapterBackgrounds(props: {
  textbook: string
  chapter: string
  showGradient?: boolean
  blur?: string
  class?: string
}) {
  const getBackgroundItem = () =>
    textbook_chapter_backgrounds[props.textbook]?.[props.chapter]

  return (
    <Show when={getBackgroundItem()} keyed>
      {(backgroundItem) => (
        <BackgroundImage
          variant="media"
          backgroundItem={backgroundItem}
          showGradient={props.showGradient}
          blur={props.blur}
          class={props.class}
        />
      )}
    </Show>
  )
}
