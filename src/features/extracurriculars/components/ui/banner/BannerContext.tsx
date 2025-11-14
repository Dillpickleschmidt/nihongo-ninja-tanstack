import { createContext, useContext, createSignal, type ParentComponent } from 'solid-js'
import type { Media } from '../../../api/anilist'

interface BannerContextType {
  bannerSrc: () => Media | null
  setBannerSrc: (media: Media | null) => void
  hideBanner: () => boolean
  setHideBanner: (hidden: boolean) => void
}

const BannerContext = createContext<BannerContextType>()

export const BannerProvider: ParentComponent = (props) => {
  const [bannerSrc, setBannerSrc] = createSignal<Media | null>(null)
  const [hideBanner, setHideBanner] = createSignal(false)

  const value: BannerContextType = {
    bannerSrc,
    setBannerSrc,
    hideBanner,
    setHideBanner
  }

  return (
    <BannerContext.Provider value={value}>
      {props.children}
    </BannerContext.Provider>
  )
}

export const useBanner = () => {
  const context = useContext(BannerContext)
  if (!context) {
    throw new Error('useBanner must be used within BannerProvider')
  }
  return context
}
