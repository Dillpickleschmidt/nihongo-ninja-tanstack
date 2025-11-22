// src/features/import-page/constants/status-config.ts
import { BookOpen, Star, GraduationCap } from "lucide-solid"
import type { ItemStatus } from "../types"

export interface StatusConfigItem {
  icon: typeof BookOpen
  label: string
  borderColor: string // border-{color}/10
  bgColor: string // bg-{color}/10
  textColor: string // text-{color}-400
  hoverBgColor: string // hover:bg-{color}/20
  hoverTextColor: string // hover:text-{color}-300
  tooltipText: string
}

export type StatusConfigMap = Record<Exclude<ItemStatus, null>, StatusConfigItem>

export const statusConfig: StatusConfigMap = {
  learning: {
    icon: GraduationCap,
    label: "Learning",
    borderColor: "border-green-500/10",
    bgColor: "bg-green-500/10",
    hoverBgColor: "hover:bg-green-500/20",
    textColor: "text-green-400",
    hoverTextColor: "hover:text-green-300",
    tooltipText: "I'm currently learning this and need regular review.",
  },
  decent: {
    icon: BookOpen,
    label: "Decent",
    borderColor: "border-blue-500/10",
    bgColor: "bg-blue-500/10",
    hoverBgColor: "hover:bg-blue-500/20",
    textColor: "text-blue-400",
    hoverTextColor: "hover:text-blue-300",
    tooltipText:
      "I've practiced this before but wouldn't mind occasional review.",
  },
  mastered: {
    icon: Star,
    label: "Mastered",
    borderColor: "border-yellow-500/10",
    bgColor: "bg-yellow-500/10",
    hoverBgColor: "hover:bg-yellow-500/20",
    textColor: "text-yellow-400",
    hoverTextColor: "hover:text-yellow-300",
    tooltipText:
      "I've got a very good grip on this and will almost never need to review it.",
  },
}

export function getStatusConfig(status: ItemStatus): StatusConfigItem | null {
  if (status === null) return null
  return statusConfig[status]
}
