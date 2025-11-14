import { Component, createSignal } from 'solid-js'
import type { Media } from '../../../api/anilist'
import Heart from '../../icons/animated/heart'
import { Button, iconSizes } from './index'
import type { ButtonProps } from './index'
import { authAggregator, fav } from '../../../api/auth'
import { click as clickDirective } from '../../../utils/navigate'
import { cn } from '../../../utils'

interface FavoriteButtonProps extends Omit<ButtonProps, 'children' | 'onClick'> {
  media: Media
  size?: 'icon-sm' | 'icon' | 'xs' | 'sm' | 'default' | 'lg'
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  class?: string
}

const FavoriteButton: Component<FavoriteButtonProps> = (props) => {
  const {
    media,
    size = 'icon-sm',
    variant = 'ghost',
    class: className,
    ...rest
  } = props

  const [key, setKey] = createSignal(1)

  const toggleFav = async () => {
    await authAggregator.toggleFav(media.id)
    setKey((prev) => prev + 1)
  }

  let buttonRef: HTMLButtonElement | undefined

  return (
    <Button
      ref={buttonRef}
      size={size}
      variant={variant}
      class={cn(className, 'animated-icon')}
      onClick={() => {
        toggleFav()
        setKey((prev) => prev + 1)
      }}
      {...rest}
    >
      <Heart
        fill={key() && fav(media) ? 'currentColor' : 'transparent'}
        size={iconSizes[size] ?? iconSizes.default}
      />
    </Button>
  )
}

export default FavoriteButton
export { FavoriteButton }
export type { FavoriteButtonProps }
