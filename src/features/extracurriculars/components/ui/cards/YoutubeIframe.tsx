import { Component, createSignal, onCleanup, createEffect } from 'solid-js'
import { Volume2, VolumeX } from 'lucide-solid'

interface YoutubeIframeProps {
  id: string
  onHide?: (hidden: boolean) => void
}

const YoutubeIframe: Component<YoutubeIframeProps> = (props) => {
  const [muted, setMuted] = createSignal(true)
  const [hide, setHide] = createSignal(true)
  let frame: HTMLIFrameElement | undefined
  let timeout: ReturnType<typeof setInterval> | undefined

  const ytCall = (action: string, arg: string | null = null) => {
    if (!frame) return
    frame.contentWindow?.postMessage(
      `{"event":"command", "func":"${action}", "args":${arg || 'null'}}`,
      '*'
    )
  }

  const toggleMute = () => {
    if (muted()) {
      ytCall('unMute')
    } else {
      ytCall('mute')
    }
    setMuted((prev) => !prev)
  }

  const ytMessage = (e: MessageEvent) => {
    if (e.origin !== 'https://www.youtube-nocookie.com') return
    if (timeout) clearInterval(timeout)

    try {
      const json = JSON.parse(e.data) as {
        event: string
        info?: { videoData?: { isPlayable: boolean }; playerState?: number }
      }

      if (json.event === 'onReady') {
        ytCall('setVolume', '[30]')
      }

      if (json.event === 'initialDelivery' && !json.info?.videoData?.isPlayable) {
        setHide(true)
        props.onHide?.(true)
      }

      if (json.event === 'infoDelivery' && json.info?.playerState === 1) {
        setHide(false)
        props.onHide?.(false)
      }
    } catch {
      // Ignore invalid JSON
    }
  }

  const initFrame = () => {
    if (!frame) return
    timeout = setInterval(() => {
      frame?.contentWindow?.postMessage('{"event":"listening","id":1,"channel":"widget"}', '*')
    }, 100)
    frame.contentWindow?.postMessage('{"event":"listening","id":1,"channel":"widget"}', '*')
  }

  createEffect(() => {
    window.addEventListener('message', ytMessage)
    return () => window.removeEventListener('message', ytMessage)
  })

  onCleanup(() => {
    if (timeout) clearInterval(timeout)
  })

  return (
    <>
      <div class="h-full w-full overflow-clip absolute top-0 rounded-t">
        <div
          class={`absolute z-10 top-0 right-0 p-3 ${hide() ? 'hide' : ''} cursor-pointer`}
          onClick={toggleMute}
        >
          {muted() ? (
            <VolumeX size="1rem" fill="currentColor" class="pointer-events-none" />
          ) : (
            <Volume2 size="1rem" fill="currentColor" class="pointer-events-none" />
          )}
        </div>
        <iframe
          ref={frame}
          class={`w-full border-0 absolute left-0 h-[calc(100%+200px)] top-1/2 transform-gpu -translate-y-1/2 pointer-events-none ${
            hide() ? 'hide' : ''
          }`}
          title="trailer"
          allow="autoplay"
          allowFullScreen
          onLoad={initFrame}
          src={`https://www.youtube-nocookie.com/embed/${props.id}?enablejsapi=1&autoplay=1&controls=0&mute=1&disablekb=1&loop=1&playlist=${props.id}&cc_lang_pref=ja`}
        />
      </div>
      <div class="h-full w-full overflow-clip absolute top-0 rounded-t blur-2xl saturate-200 -z-10 pointer-events-none">
        <iframe
          class={`w-full border-0 absolute left-0 h-[calc(100%+200px)] top-1/2 transform-gpu -translate-y-1/2 ${
            hide() ? 'hide' : ''
          }`}
          title="trailer"
          allow="autoplay"
          allowFullScreen
          src={`https://www.youtube-nocookie.com/embed/${props.id}?autoplay=1&controls=0&mute=1&disablekb=1&loop=1&playlist=${props.id}&cc_lang_pref=ja`}
        />
      </div>

      <style>{`
        .hide {
          opacity: 0;
          transition: opacity 0.3s;
        }
      `}</style>
    </>
  )
}

export default YoutubeIframe
export { YoutubeIframe }
export type { YoutubeIframeProps }
