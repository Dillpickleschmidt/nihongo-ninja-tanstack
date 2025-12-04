import type { JSX } from "solid-js"

export interface Tool {
  title: string
  description: string
  icon: JSX.Element | string
  href: string
  styles: {
    text: string
    gradient: string
    border: string
    ring: string
  }
  disabled?: boolean
}

export interface ResourceItem {
  name: string
  description: string
  href: string
  icon: string
  type: "guide" | "external" | "tool"
  disabled?: boolean
}

export interface ResourceCategory {
  [categoryName: string]: ResourceItem[]
}
