// features/dashboard/utils/contentShowcaseUtils.ts
import { Component } from "solid-js"
import {
  BookOpen,
  Video,
  Headphones,
  FileText,
  Mic,
  Wrench,
  MessageCircle,
  Newspaper,
  BookMarked,
  Ear,
  Eye,
  PenTool,
} from "lucide-solid"
import type { ExternalResource } from "@/data/types"

// Helper function to map resource type to Lucide icon component
export function getResourceIconComponent(
  resourceType: ExternalResource["resource_type"],
): Component<any> {
  const iconMap = {
    video: Video,
    article: FileText,
    podcast: Mic,
    tool: Wrench,
    forum: MessageCircle,
    news: Newspaper,
    textbook_companion: BookMarked,
    listening_practice: Ear,
    reading_practice: Eye,
    grammar_guide: PenTool,
    audio: Headphones,
  }
  return iconMap[resourceType as keyof typeof iconMap] || BookOpen
}
