import { Component } from 'solid-js'
import { Play as PlayIcon } from 'lucide-solid'
import type { Media } from '../../../api/anilist'
import { Button, iconSizes } from './index'
import type { ButtonProps } from './index'
import { list, progress } from '../../../api/auth'
import { cn } from '../../../utils'

// TODO: Import from application-level player module
// import { playEp } from '@/features/player/mediahandler'

interface PlayButtonProps extends Omit<ButtonProps, 'children' | 'onClick'> {
  media: Media
  size?: 'xs' | 'sm' | 'default' | 'lg'
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  class?: string
}

const PlayButton: Component<PlayButtonProps> = (props) => {
  const {
    media,
    size = 'xs',
    variant = 'default',
    class: className,
    ...rest
  } = props

  const play = () => {
    const episode = (progress(media) ?? 0) + 1
    // TODO: Implement player integration
    // playEp(media, episode)
    console.log(`Playing episode ${episode} of ${media.title?.english}`)
  }

  const status = list(media)

  return (
    <Button
      size={size}
      variant={variant}
      class={cn(className, 'font-bold flex items-center justify-center')}
      onClick={play}
      {...rest}
    >
      <PlayIcon
        fill="currentColor"
        class="mr-2"
        size={iconSizes[size] ?? iconSizes.default}
      />
      {status === 'COMPLETED'
        ? 'Rewatch'
        : status === 'CURRENT' || status === 'REPEATING' || status === 'PAUSED'
          ? 'Continue'
          : 'Watch Now'}
    </Button>
  )
}

export default PlayButton
export { PlayButton }
export type { PlayButtonProps }
