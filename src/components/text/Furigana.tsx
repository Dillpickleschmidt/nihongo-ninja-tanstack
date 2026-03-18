import { JSX } from "solid-js"

type FuriganaProps = {
  children: JSX.Element
  furigana: any
}

export default function Furigana(props: FuriganaProps) {
  return (
    <ruby class="font-japanese">
      {props.children}
      <rp>(</rp>
      <rt>{props.furigana}</rt>
      <rp>)</rp>
    </ruby>
  )
}
