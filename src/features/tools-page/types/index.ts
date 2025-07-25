export interface Tool {
  title: string
  description: string
  icon: string
  href: string
  gradient: string
}

export interface ResourceItem {
  name: string
  description: string
  href: string
  icon: string
  type: "guide" | "external" | "tool"
}

export interface ResourceCategory {
  [categoryName: string]: ResourceItem[]
}
