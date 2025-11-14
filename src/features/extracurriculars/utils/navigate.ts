import { createSignal } from 'solid-js'

let lastHoverElement: ((_: boolean) => unknown) | null = null

type InputType = 'mouse' | 'touch' | 'dpad'
export const [inputType, setInputType] = createSignal<InputType>('touch')

function pointerEvent({ pointerType }: PointerEvent) {
  setInputType(pointerType === 'mouse' ? 'mouse' : 'touch')
}

if (typeof window !== 'undefined') {
  addEventListener('pointerdown', pointerEvent)
  addEventListener('pointermove', pointerEvent)

  // media selectors for pointer coarse, fine and none
  const pointerTypes = [
    { pointer: '(pointer: coarse)', value: 'touch' as InputType },
    { pointer: '(pointer: fine)', value: 'mouse' as InputType },
    { pointer: '(pointer: none)', value: 'dpad' as InputType }
  ]

  for (const { pointer, value } of pointerTypes) {
    const media = matchMedia(pointer)
    if (media.matches) setInputType(value)
    media.addEventListener('change', e => {
      if (e.matches) setInputType(value)
    })
  }
}

const noop: () => void = () => undefined

export function clickwrap(cb: (_: MouseEvent) => unknown = noop) {
  return (e: MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    e.stopImmediatePropagation()
    navigator.vibrate(15)
    cb(e)
  }
}

export function keywrap(cb: (_: KeyboardEvent) => unknown = noop) {
  return (e: KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && inputType() === 'dpad' && !e.repeat) {
      e.stopPropagation()
      e.preventDefault()
      e.stopImmediatePropagation()
      cb(e)
    }
  }
}

export function click(node: HTMLElement, cb: (_: Event) => unknown = noop) {
  const ctrl = new AbortController()
  node.tabIndex = 0
  node.role = 'button'
  node.addEventListener('click', e => {
    e.stopPropagation()
    e.preventDefault()
    navigator.vibrate(15)
    cb(e)
  }, { signal: ctrl.signal })
  node.addEventListener('keydown', e => {
    if (e.key === 'Enter' && inputType() === 'dpad') {
      e.stopPropagation()
      e.preventDefault()
      cb(e)
    }
  }, { signal: ctrl.signal })

  return { destroy: () => ctrl.abort() }
}

export function hover(node: HTMLElement, [cb = noop, hoverUpdate = noop]: [typeof noop, (_: boolean) => void]) {
  const ctrl = new AbortController()
  node.addEventListener('wheel', e => {
    if (document.elementsFromPoint(e.clientX + e.deltaX, e.clientY + e.deltaY).includes(node)) {
      lastHoverElement?.(false)
      lastHoverElement = hoverUpdate
      hoverUpdate(true)
    } else {
      lastHoverElement?.(false)
      hoverUpdate(false)
    }
  }, { passive: true, signal: ctrl.signal })
  node.tabIndex = 0
  node.role = 'button'
  node.addEventListener('pointerenter', () => {
    lastHoverElement?.(false)
    hoverUpdate(true)
    if (inputType() === 'mouse') lastHoverElement = hoverUpdate
  }, { signal: ctrl.signal })
  node.addEventListener('click', e => {
    e.stopPropagation()
    if (inputType() === 'dpad') return
    if (inputType() === 'mouse') return cb()
    if (lastHoverElement === hoverUpdate) {
      lastHoverElement = null
      navigator.vibrate(15)
      hoverUpdate(false)
      cb()
    } else {
      lastHoverElement?.(false)
      lastHoverElement = hoverUpdate
    }
  }, { signal: ctrl.signal })
  node.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter' && inputType() === 'dpad') {
      e.stopPropagation()
      lastHoverElement?.(false)
      if (lastHoverElement === hoverUpdate) {
        lastHoverElement = null
        hoverUpdate(false)
        cb()
      } else {
        lastHoverElement?.(false)
        hoverUpdate(true)
        lastHoverElement = hoverUpdate
      }
    }
  }, { signal: ctrl.signal })
  node.addEventListener('pointerleave', () => {
    if (inputType() !== 'touch') {
      lastHoverElement?.(false)
      hoverUpdate(false)
      lastHoverElement = null
    }
  }, { signal: ctrl.signal })
  node.addEventListener('pointermove', (e) => {
    if (inputType() === 'touch' && Math.abs(e.movementY) > 0) {
      lastHoverElement?.(false)
      hoverUpdate(false)
      lastHoverElement = null
    }
  }, { signal: ctrl.signal })
  node.addEventListener('drag', () => {
    if (inputType() === 'mouse') {
      lastHoverElement?.(false)
      hoverUpdate(false)
      lastHoverElement = null
    }
  }, { signal: ctrl.signal })

  return { destroy: () => ctrl.abort() }
}

interface ElementPosition {
  element: HTMLElement
  x: number
  y: number
  inViewport: boolean
}

type Direction = 'up' | 'right' | 'down' | 'left'

const Directions: Record<Direction, number> = { up: 1, right: 2, down: 3, left: 4 }
const DirectionKeyMap: Record<'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight', Direction> = {
  ArrowDown: 'down',
  ArrowUp: 'up',
  ArrowLeft: 'left',
  ArrowRight: 'right'
}

function getDirection(anchor: ElementPosition, relative: ElementPosition) {
  return Math.round((Math.atan2(relative.y - anchor.y, relative.x - anchor.x) * 180 / Math.PI + 180) / 90) || 4
}

function getDistance(anchor: ElementPosition, relative: ElementPosition) {
  return Math.hypot(relative.x - anchor.x, relative.y - anchor.y)
}

function getKeyboardFocusableElements(element: Element = document.body) {
  return [
    ...element.querySelectorAll<HTMLElement>(
      'a[href]:not([disabled=""], [disabled="true"], [tabindex="-1"]), button:not([disabled=""], [disabled="true"], [tabindex="-1"]), fieldset:not([disabled=""], [disabled="true"]), input:not([disabled=""], [disabled="true"], [readonly]), optgroup:not([disabled=""], [disabled="true"]), option:not([disabled=""], [disabled="true"]), select:not([disabled=""], [disabled="true"]), textarea:not([disabled=""], [disabled="true"]), details, [tabindex]:not([tabindex="-1"], [disabled=""], [disabled="true"]), [contenteditable], [controls]'
    )
  ].filter(el => !el.getAttribute('aria-hidden'))
}

function getElementPosition(element: HTMLElement): ElementPosition {
  const { x, y, width, height, top, left, bottom, right } = element.getBoundingClientRect()
  const inViewport = isInViewport({ top, left, bottom, right, width, height })
  return { element, x: x + width * 0.5, y: y + height * 0.5, inViewport }
}

function getFocusableElementPositions(): ElementPosition[] {
  const elements = []
  let listbox: Element | null = null
  try {
    listbox = document.querySelector(':has(> [role="listbox"])')
  } catch {}
  for (const element of getKeyboardFocusableElements(
    document.querySelector('[role="dialog"]') ?? document.querySelector('[role="application"]') ?? listbox ?? document.body
  )) {
    const position = getElementPosition(element)
    elements.push(position)
  }
  return elements
}

function isInViewport({
  top,
  left,
  bottom,
  right,
  width,
  height
}: {
  top: number
  left: number
  bottom: number
  right: number
  width: number
  height: number
}) {
  return (
    top + height >= 0 && left + width >= 0 && bottom - height <= window.innerHeight && right - width <= window.innerWidth
  )
}

function getElementsInDesiredDirection(
  keyboardFocusable: ElementPosition[],
  currentElement: ElementPosition,
  direction: string
): ElementPosition[] {
  return keyboardFocusable.filter(position => {
    if (position.element === currentElement.element) return false
    if (getDirection(currentElement, position) !== Directions[direction as Direction]) return false
    if (position.inViewport && !position.element.checkVisibility()) return false
    if (!position.inViewport && direction === 'right') return false
    return true
  })
}

function inInputEl(element: HTMLElement): element is HTMLInputElement {
  return element.matches('input, textarea')
}

function navigateDPad(direction = 'up', e: KeyboardEvent) {
  const keyboardFocusable = getFocusableElementPositions()
  const nofocus = !document.activeElement || document.activeElement === document.body
  const currentElement = nofocus ? keyboardFocusable[0]! : getElementPosition(document.activeElement as HTMLElement)

  if (nofocus) return focusElement(currentElement.element)
  if (inInputEl(currentElement.element)) {
    const input = currentElement.element
    if (direction === 'left' && input.selectionStart !== 0) return
    if (direction === 'right' && input.selectionEnd !== input.value.length) return
  }

  e.preventDefault()
  e.stopPropagation()

  for (const selector of currentElement.element.dataset[direction]?.split(',') ?? []) {
    const element = document.querySelector<HTMLElement>(selector.trim())
    if (!element) continue
    if (!element.checkVisibility()) continue
    if (focusElement(element)) return
  }

  const elementsInDesiredDirection = getElementsInDesiredDirection(keyboardFocusable, currentElement, direction)

  if (elementsInDesiredDirection.length) {
    const closestElement = elementsInDesiredDirection.reduce<{ distance: number; element?: HTMLElement }>(
      (reducer, position) => {
        const distance = getDistance(currentElement, position)
        if (distance < reducer.distance) return { distance, element: position.element }
        return reducer
      },
      { distance: Infinity }
    )

    focusElement(closestElement.element)
  }
}

function focusElement(element?: HTMLElement | null) {
  if (!element) return false
  const isInput = inInputEl(element)
  if (isInput) {
    const input = element
    input.readOnly = true
  }
  element.focus()
  if (isInput) setTimeout(() => { element.readOnly = false })
  element.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' })

  element.dispatchEvent(
    new CustomEvent('navigate', {
      bubbles: true,
      composed: true,
      detail: { target: element.id, value: element.dataset.value }
    })
  )

  return true
}

if (typeof window !== 'undefined') {
  document.addEventListener('keydown', navigate)
}

export function navigate(e: KeyboardEvent) {
  if (e.key in DirectionKeyMap) {
    setInputType('dpad')
    navigateDPad(DirectionKeyMap[e.key as 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight'], e)
  }
}

export function dragScroll(node: HTMLElement) {
  let x = 0
  let y = 0
  let isDragging = false
  let deltaX = 0
  let deltaY = 0

  const ctrl = new AbortController()

  node.addEventListener('mousedown', e => {
    if (e.button !== 0 || e.buttons !== 1) return
    isDragging = true
    x = e.clientX
    y = e.clientY
    deltaX = 0
    deltaY = 0
  }, { signal: ctrl.signal })
  node.addEventListener('click', () => {
    isDragging = false
  }, { signal: ctrl.signal })

  node.addEventListener('mousemove', e => {
    if (!isDragging) return true
    deltaX += Math.abs(e.clientX - x)
    deltaY += Math.abs(e.clientY - y)
    node.scrollBy(x - e.clientX, y - e.clientY)
    x = e.clientX
    y = e.clientY
    if (deltaX > 15 || deltaY > 15) {
      e.target?.dispatchEvent(new MouseEvent('drag', { bubbles: true }))
    }
  }, { signal: ctrl.signal })

  node.addEventListener('mouseleave', () => {
    isDragging = false
  }, { signal: ctrl.signal })

  node.addEventListener('mouseup', () => {
    isDragging = false
  }, { signal: ctrl.signal })

  return { destroy: () => ctrl.abort() }
}
