export function getThumbnailUrl(externalUrl: string): string | null {
  const match = externalUrl.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
  )
  return match
    ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`
    : null
}
