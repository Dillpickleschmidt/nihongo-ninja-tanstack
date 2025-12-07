import { Show, type ParentProps } from 'solid-js'
import { useBreakpoints } from '@/hooks/useBreakpoints'

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface SSRMediaQueryProps extends ParentProps {
  showFrom?: Breakpoint
  hideFrom?: Breakpoint
}

export function SSRMediaQuery(props: SSRMediaQueryProps) {
  const bp = useBreakpoints()

  const show = () => {
    if (props.showFrom && !bp[props.showFrom]()) return false
    if (props.hideFrom && bp[props.hideFrom]()) return false
    return true
  }

  return <Show when={show()}>{props.children}</Show>
}
