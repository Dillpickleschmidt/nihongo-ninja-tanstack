import { JSX } from "solid-js"

type FuriganaProps = {
  children: JSX.Element
  furigana: any
}

export default function Furigana({ children, furigana }: FuriganaProps) {
  return (
    <ruby class="font-japanese">
      {children}
      <rp>(</rp>
      <rt>{furigana}</rt>
      <rp>)</rp>
    </ruby>
  )
}
