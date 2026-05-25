#!/usr/bin/env bun
import { createHash } from "crypto"
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "fs"
import { dirname, extname, join, relative, sep } from "path"
import sharp from "sharp"
import {
  GENERATED_IMAGE_EXTENSIONS,
  IMAGE_QUALITY,
  IMAGE_VARIANT_FORMATS,
  type ImageVariantFormat,
} from "../src/features/images/image-constants"
import { imageVariantWidths } from "../src/features/images/variants"

const PUBLIC_ROOT = join(process.cwd(), "public")
const GENERATED_ROOT = join(PUBLIC_ROOT, "generated")
const GENERATED_METADATA_FILE = join(
  process.cwd(),
  "src/features/images/generated-images.ts",
)

const CACHE_VERSION = 1
const OUT_ROOT = join(GENERATED_ROOT, "images")
const MANIFEST_FILE = join(
  process.cwd(),
  "scripts/.generated-image-cache/manifest.json",
)

const GENERATED_IMAGE_EXTENSION_SET = new Set<string>(GENERATED_IMAGE_EXTENSIONS)

type Manifest = Record<string, { hash: string; widths: number[]; outputBasePath: string }>
type GeneratedImage = {
  outputBasePath: string
  sourceWidth: number
  widths: number[]
  formats: ImageVariantFormat[]
}

function hashFile(path: string, widths: number[]) {
  return createHash("sha256")
    .update(
      `${CACHE_VERSION}\n${JSON.stringify(IMAGE_QUALITY)}\n${IMAGE_VARIANT_FORMATS.join(",")}\n${widths.join(",")}\n`,
    )
    .update(readFileSync(path))
    .digest("hex")
}

function readManifest(): Manifest {
  if (!existsSync(MANIFEST_FILE)) return {}
  return JSON.parse(readFileSync(MANIFEST_FILE, "utf-8"))
}

function writeManifest(manifest: Manifest) {
  mkdirSync(dirname(MANIFEST_FILE), { recursive: true })
  writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2))
}

function findSourceImages(dir: string): string[] {
  if (dir === GENERATED_ROOT) return []

  return readdirSync(dir)
    .flatMap((entry) => {
      const path = join(dir, entry)
      const stat = statSync(path)
      if (stat.isDirectory()) return findSourceImages(path)
      if (!stat.isFile()) return []

      const extension = extname(path).toLowerCase()
      return GENERATED_IMAGE_EXTENSION_SET.has(extension) ? [path] : []
    })
    .sort()
}

function toPublicPath(path: string) {
  return `/${relative(PUBLIC_ROOT, path).split(sep).join("/")}`
}

function outputBasePathFor(sourcePath: string) {
  const sourceRelativePath = relative(PUBLIC_ROOT, sourcePath).split(sep).join("/")
  const extension = extname(sourceRelativePath)
  const outputRelativePath = extension
    ? sourceRelativePath.slice(0, -extension.length)
    : sourceRelativePath
  return `/generated/images/${outputRelativePath}`
}

async function generate() {
  const manifest = readManifest()
  const nextManifest: Manifest = {}
  const generatedImages: Record<string, GeneratedImage> = {}

  for (const sourcePath of findSourceImages(PUBLIC_ROOT)) {
    const sourceUrl = toPublicPath(sourcePath)
    const outputBasePath = outputBasePathFor(sourcePath)
    const outputDir = join(PUBLIC_ROOT, outputBasePath.replace(/^\/+/, ""))
    const metadata = await sharp(sourcePath).metadata()
    if (!metadata.width) throw new Error(`${sourceUrl}: missing source width`)

    const widths = imageVariantWidths(metadata.width)
    const hash = hashFile(sourcePath, widths)
    nextManifest[sourceUrl] = { hash, widths, outputBasePath }
    generatedImages[sourceUrl] = {
      outputBasePath,
      sourceWidth: metadata.width,
      widths,
      formats: [...IMAGE_VARIANT_FORMATS],
    }

    if (manifest[sourceUrl]?.hash === hash) continue

    rmSync(outputDir, { recursive: true, force: true })
    mkdirSync(outputDir, { recursive: true })

    await Promise.all(
      widths.flatMap((width) => [
        sharp(sourcePath)
          .resize({ width, withoutEnlargement: true })
          .avif({ quality: IMAGE_QUALITY.avif })
          .toFile(join(outputDir, `${width}.avif`)),
        sharp(sourcePath)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: IMAGE_QUALITY.webp })
          .toFile(join(outputDir, `${width}.webp`)),
      ]),
    )

    console.log(`generated ${sourceUrl}`)
  }

  for (const [sourceUrl, entry] of Object.entries(manifest)) {
    if (!nextManifest[sourceUrl]) {
      rmSync(join(PUBLIC_ROOT, entry.outputBasePath.replace(/^\/+/, "")), {
        recursive: true,
        force: true,
      })
    }
  }

  writeManifest(nextManifest)
  writeFileSync(
    GENERATED_METADATA_FILE,
    `export const GENERATED_IMAGES = ${JSON.stringify(generatedImages, null, 2)} as const\n`,
  )
}

await generate()
