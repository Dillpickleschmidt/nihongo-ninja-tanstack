export type ImageOutputFormat =
  | "image/avif"
  | "image/webp"
  | "image/png"
  | "image/jpeg"

export function chooseOutputFormat(
  acceptHeader: string | null,
  sourceContentType: string,
): ImageOutputFormat {
  const accept = acceptHeader ?? ""
  if (accept.includes("image/avif")) return "image/avif"
  if (accept.includes("image/webp")) return "image/webp"
  return sourceContentType === "image/png" ? "image/png" : "image/jpeg"
}
