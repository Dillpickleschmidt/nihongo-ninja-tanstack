import { Component, JSX, createSignal, onCleanup } from 'solid-js'
import { cn } from '../../../utils'

interface LoadProps extends JSX.ImgHTMLAttributes<HTMLImageElement> {
  color?: string | null
}

const Load: Component<LoadProps> = (props) => {
  const { color = '#1890ff', class: className, src, alt = '', ...rest } = props
  const [loaded, setLoaded] = createSignal(false)

  const handleLoad = async (e: Event & { currentTarget: HTMLImageElement }) => {
    const target = e.currentTarget as HTMLImageElement
    try {
      await target.decode()
      setLoaded(true)
    } catch {
      setLoaded(true)
    }
  }

  return (
    <div style={{ background: color ?? '#1890ff' }} class={className}>
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        class={cn(
          className,
          'transition-opacity opacity-0 duration-300 ease-out',
          loaded() && '!opacity-100'
        )}
        decoding="async"
        loading="lazy"
        style={{ background: color ?? '#1890ff' }}
        {...rest}
      />
    </div>
  )
}

export default Load
export { Load }
export type { LoadProps }
