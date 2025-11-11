/**
 * View Container Component
 * Provides consistent layout for all vocab view pages (chapter, folder, learning path)
 */

import { JSX } from "solid-js"
import { VocabBreadcrumb } from "../../pages/main/components/VocabBreadcrumb"

export interface Breadcrumb {
  label: string
  href: string
}

interface ViewContainerProps {
  breadcrumbs: Breadcrumb[]
  title: string
  description?: string
  children: JSX.Element
}

/**
 * Container for vocab view pages
 * Provides:
 * - Breadcrumb navigation
 * - Page title and optional description
 * - Consistent spacing and layout
 */
export function ViewContainer(props: ViewContainerProps) {
  return (
    <div class="space-y-6">
      {/* Breadcrumb Navigation */}
      <VocabBreadcrumb items={props.breadcrumbs} />

      {/* Page Header */}
      <div class="mb-4">
        <h2 class="text-foreground mb-2 text-2xl font-bold">{props.title}</h2>
        {props.description && (
          <p class="text-muted-foreground text-sm">{props.description}</p>
        )}
      </div>

      {/* Content */}
      {props.children}
    </div>
  )
}
