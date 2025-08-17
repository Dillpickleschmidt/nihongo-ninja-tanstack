import { raphaelColors } from "./raphael-colors"

const KANJIVG_BASE =
  "https://zsllzwieciplioikzzmq.supabase.co/storage/v1/object/public/kanji-svgs/kanjivg-20250816-stripped"

function getPathStartPoint(dAttribute: string) {
  const match = dAttribute.match(/^M([\d.-]+),([\d.-]+)/)
  return { x: parseFloat(match[1]), y: parseFloat(match[2]) }
}

function getKanjiSvgUrl(char: string) {
  const codePoint = char.codePointAt(0)!.toString(16).padStart(5, "0")
  return `${KANJIVG_BASE}/${codePoint}.svg`
}

export async function getKanjiSvg(char: string): Promise<string> {
  const url = getKanjiSvgUrl(char)
  const response = await fetch(url)
  return response.text()
}

export interface ProcessSvgOptions {
  size: number
  strokeColor: string
  strokeWidth: number
  showGrid: boolean
  autostart: boolean
  showNumbers: boolean
  showStartDots: boolean
  showDirectionLines: boolean
}

function replaceGroupWithId(pattern: RegExp, styleContent: string) {
  return (match: string) => {
    const idMatch = match.match(/id="([^"]*)"/)
    const id = idMatch ? idMatch[1] : "kvg:unknown"
    return `<g id="${id}" style="${styleContent}">`
  }
}

export function processSvgString(
  svgContent: string,
  options: ProcessSvgOptions,
): string {
  let processed = svgContent

  // 1. Update size attributes
  processed = processed.replace(/width="\d+"/, `width="${options.size}"`)
  processed = processed.replace(/height="\d+"/, `height="${options.size}"`)

  // 2. Update stroke paths styling
  const strokeOpacity = options.autostart ? "0.3" : "1"
  processed = processed.replace(
    /<g id="kvg:StrokePaths_[^"]*" style="[^"]*">/,
    replaceGroupWithId(
      /<g id="kvg:StrokePaths_[^"]*" style="[^"]*">/,
      `fill:none;stroke:${options.strokeColor};stroke-width:${options.strokeWidth};stroke-linecap:round;stroke-linejoin:round;opacity:${strokeOpacity};`,
    ),
  )

  // 3. Handle numbers and dots for static state
  if (!options.autostart && (options.showNumbers || options.showStartDots)) {
    // Extract stroke paths with simple regex for KanjiVG
    const strokePaths = [
      ...processed.matchAll(/<path id="[^"]*-s\d+" d="([^"]*)"/g),
    ]

    raphaelColors.reset()
    let dotsToAdd = []

    strokePaths.forEach(([fullMatch, dAttribute], index) => {
      const color = raphaelColors.getColor()

      if (options.showStartDots) {
        const { x, y } = getPathStartPoint(dAttribute)
        dotsToAdd.push(`<circle cx="${x}" cy="${y}" r="2" fill="${color}"/>`)
      }

      if (options.showNumbers) {
        // Update corresponding number text color and styling, preserving attributes
        const numberIndex = index + 1
        processed = processed.replace(
          new RegExp(`<text([^>]*?)>${numberIndex}</text>`),
          `<text$1 fill="${color}" font-size="10" font-weight="500">${numberIndex}</text>`,
        )
      }
    })

    // Add dots group to SVG
    if (dotsToAdd.length > 0) {
      const dotsGroup = `<g id="server-dots">${dotsToAdd.join("")}</g>`
      processed = processed.replace("</svg>", `${dotsGroup}</svg>`)
    }

    // Show numbers group if we styled them - don't override individual text colors
    const numbersStyle = options.showNumbers
      ? "opacity:1;display:block"
      : "display:none;opacity:0"

    processed = processed.replace(
      /<g id="kvg:StrokeNumbers_[^"]*" style="[^"]*">/,
      replaceGroupWithId(
        /<g id="kvg:StrokeNumbers_[^"]*" style="[^"]*">/,
        numbersStyle,
      ),
    )
  } else {
    // Numbers start hidden when autostart is enabled (client-side will handle them)
    processed = processed.replace(
      /<g id="kvg:StrokeNumbers_[^"]*" style="[^"]*">/,
      replaceGroupWithId(
        /<g id="kvg:StrokeNumbers_[^"]*" style="[^"]*">/,
        "opacity:0;transition:opacity 0.25s ease-in",
      ),
    )
  }

  // 4. Add grid if needed
  if (options.showGrid) {
    const gridSvg = `
      <g id="kanji-grid" style="opacity:0.3">
        <path d="M54.5,0 L54.5,109" stroke="rgb(163 163 163)" stroke-width="0.5" stroke-dasharray="3,3" fill="none"/>
        <path d="M0,54.5 L109,54.5" stroke="rgb(163 163 163)" stroke-width="0.5" stroke-dasharray="3,3" fill="none"/>
      </g>`
    processed = processed.replace("</svg>", `${gridSvg}</svg>`)
  }

  return processed
}
