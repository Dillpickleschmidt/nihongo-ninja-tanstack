import { Component, createSignal } from 'solid-js'
import type { Media } from '../../../api/anilist'
import Bookmark from '../../icons/animated/bookmark'
import { Button, iconSizes } from './index'
import type { ButtonProps } from './index'
import { authAggregator, list, lists } from '../../../api/auth'
import { cn } from '../../../utils'

interface BookmarkButtonProps extends Omit<ButtonProps, 'children' | 'onClick'> {
  media: Media
  size?: 'icon-sm' | 'icon' | 'xs' | 'sm' | 'default' | 'lg'
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  class?: string
}

const BookmarkButton: Component<BookmarkButtonProps> = (props) => {
  const {
    media,
    size = 'icon-sm',
    variant = 'ghost',
    class: className,
    ...rest
  } = props

  const [key, setKey] = createSignal(1)

  const toggleBookmark = async () => {
    if (!list(media)) {
      const customLists = lists(media)?.filter(({ enabled }) => enabled).map(({ name }) => name) ?? []
      await authAggregator.entry({ id: media.id, status: 'PLANNING', lists: customLists })
    } else {
      await authAggregator.delete(media)
    }
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
        toggleBookmark()
        setKey((prev) => prev + 1)
      }}
      {...rest}
    >
      <Bookmark
        fill={key() && list(media) ? 'currentColor' : 'transparent'}
        size={iconSizes[size] ?? iconSizes.default}
      />
    </Button>
  )
}

export default BookmarkButton
export { BookmarkButton }
export type { BookmarkButtonProps }
