import { onMount } from "solid-js"
import { isServer } from "solid-js/web"

// Extend Window interface to include H5P resizer property
declare global {
  interface Window {
    h5pResizerInitialized?: boolean
  }
}

type KikusasaizuProps = {
  src: string
}

export default function Kikusasaizu({ src }: KikusasaizuProps) {
  onMount(() => {
    // Only load H5P resizer script on client side
    if (!isServer && !window.h5pResizerInitialized) {
      const script = document.createElement("script")
      script.src =
        "https://h5p.cee.sfu.ca/sites/all/modules/h5p/library/js/h5p-resizer.js"
      script.async = true
      document.head.appendChild(script)
    }
  })

  return (
    <div>
      <iframe src={src} allowfullscreen title="L3-1 Summary" class="w-full" />
    </div>
  )
}
