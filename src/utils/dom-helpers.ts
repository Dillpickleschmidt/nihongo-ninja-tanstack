// src/utils/dom-helpers.ts

/**
 * Finds an element ID at a specific pointer position by data attribute
 * Useful for drag-to-select operations
 */
export function getItemIdAtPoint(
  x: number,
  y: number,
  dataAttribute: string,
): string | null {
  const elements = document.elementsFromPoint(x, y)
  for (const el of elements) {
    const itemId = (el as HTMLElement).getAttribute(dataAttribute)
    if (itemId) return itemId
  }
  return null
}
