import { Component, createSignal, Show } from 'solid-js'
import { Volume2, VolumeX } from 'lucide-solid'
import { SUPPORTS } from '../../../modules/settings'

interface VideoframeProps {
  src: string
  onHide?: (hidden: boolean) => void
}

const Videoframe: Component<VideoframeProps> = (props) => {
  const [hide, setHide] = createSignal(true)
  const [muted, setMuted] = createSignal(true)
  let videoRef: HTMLVideoElement | undefined

  const toggleMute = () => {
    setMuted((prev) => !prev)
    if (videoRef) {
      videoRef.muted = !muted()
    }
  }

  const handleLoad = () => {
    setHide(false)
    props.onHide?.(false)
  }

  return (
    <>
      <div class="h-full w-full overflow-clip absolute top-0 rounded-t">
        <div
          class={`absolute z-10 top-0 right-0 p-3 cursor-pointer ${hide() ? 'hide' : ''}`}
          onClick={toggleMute}
        >
          {muted() ? (
            <VolumeX size="1rem" fill="currentColor" class="pointer-events-none" />
          ) : (
            <Volume2 size="1rem" fill="currentColor" class="pointer-events-none" />
          )}
        </div>
        <video
          ref={videoRef}
          class={`w-full border-0 absolute left-0 h-[calc(100%+200px)] top-1/2 transform-gpu -translate-y-1/2 pointer-events-none ${
            hide() ? 'hide' : ''
          }`}
          autoplay
          muted={muted()}
          loop
          volume={0.2}
          onLoadedData={handleLoad}
          src={props.src}
        />
      </div>
      <Show when={!SUPPORTS.isUnderPowered}>
        <div class="h-full w-full overflow-clip absolute top-0 rounded-t blur-2xl saturate-200 -z-10 pointer-events-none">
          <video
            class={`w-full border-0 absolute left-0 h-[calc(100%+200px)] top-1/2 transform-gpu -translate-y-1/2 ${
              hide() ? 'hide' : ''
            }`}
            muted
            autoplay
            loop
            src={props.src}
          />
        </div>
      </Show>

      <style>{`
        .absolute {
          transition: opacity 0.3s;
        }
        .absolute.hide {
          opacity: 0;
        }
      `}</style>
    </>
  )
}

export default Videoframe
export { Videoframe }
export type { VideoframeProps }
