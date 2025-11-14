import { Component, JSX } from 'solid-js'
import { cn } from '../../../utils'

interface BookmarkProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  color?: string
  size?: number | string
  strokeWidth?: number
  class?: string
}

const Bookmark: Component<BookmarkProps> = (props) => {
  const { color = 'currentColor', size = 24, strokeWidth = 2, class: className, ...rest } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
      class={cn(className, 'overflow-visible target-animated-icon')}
      {...rest}
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}

export default Bookmark

const styles = `
.target-animated-icon {
  animation: primaryAnimation 0.5s ease-in-out;
}

@keyframes primaryAnimation {
  0% {
    transform: scale(1) rotate(0deg);
  }
  20% {
    transform: scale(1.05) rotate(-7deg);
  }
  40% {
    transform: scale(1.05) rotate(7deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}
`

if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = styles
  document.head.appendChild(style)
}
