import { Component, JSX } from 'solid-js'
import { Button as BaseButton } from '@/components/ui/button'
import type { ButtonProps as BaseButtonProps } from '@/components/ui/button'

type ButtonProps = BaseButtonProps

const Button: Component<ButtonProps> = (props) => {
  return <BaseButton {...props} />
}

export default Button
export { Button }
export type { ButtonProps }
