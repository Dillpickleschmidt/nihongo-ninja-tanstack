type CloudflareImageFit = "cover" | "contain" | "scale-down"
type CloudflareImageFormat =
  | "image/avif"
  | "image/webp"
  | "image/png"
  | "image/jpeg"

interface R2ObjectBody {
  body: ReadableStream<Uint8Array> | null
  httpEtag: string
}

interface R2ObjectMetadata {
  httpEtag: string
}

interface R2Bucket {
  get(key: string): Promise<R2ObjectBody | null>
  head(key: string): Promise<R2ObjectMetadata | null>
  put(
    key: string,
    value: ReadableStream<Uint8Array> | ArrayBuffer | ArrayBufferView | Blob | string,
    options?: { httpMetadata?: { contentType?: string } },
  ): Promise<R2ObjectMetadata | null>
}

interface ImagesTransformResult {
  response(): Response
  contentType(): string
}

interface ImagesTransformOutput {
  output(options: {
    format: CloudflareImageFormat
    quality?: number
  }): Promise<ImagesTransformResult>
}

interface ImagesInputTransformer {
  transform(options: {
    width?: number
    height?: number
    fit?: CloudflareImageFit
  }): ImagesTransformOutput
}

interface ImagesInfo {
  width: number
  height: number
  format: string
  fileSize: number
}

interface ImagesBinding {
  input(
    stream:
      | ReadableStream<Uint8Array>
      | ArrayBuffer
      | ArrayBufferView
      | Blob,
  ): ImagesInputTransformer
  info(
    stream:
      | ReadableStream<Uint8Array>
      | ArrayBuffer
      | ArrayBufferView
      | Blob,
  ): Promise<ImagesInfo>
}

declare namespace Cloudflare {
  interface Env {
    IMAGES: ImagesBinding
    IMAGE_UPLOADS_BUCKET: R2Bucket
  }
}

declare module "cloudflare:workers" {
  export const env: Cloudflare.Env
}
