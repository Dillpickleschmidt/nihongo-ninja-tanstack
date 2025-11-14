import { episodes, type Media } from '../anilist'

export function progress(media: Pick<Media, 'mediaListEntry' | 'id'>): number | undefined {
  return media.mediaListEntry?.progress ?? undefined
}

export function fav(media: Pick<Media, 'isFavourite' | 'id'>): boolean {
  return !!media.isFavourite
}

export function list(
  media: { id: Media['id']; mediaListEntry: Pick<Media['mediaListEntry'] & {}, 'status' | 'id'> | null }
): 'CURRENT' | 'PLANNING' | 'COMPLETED' | 'DROPPED' | 'PAUSED' | 'REPEATING' | null | undefined {
  return media.mediaListEntry?.status
}

export function lists(
  media: Pick<Media, 'mediaListEntry' | 'id'>
): Array<{ enabled: boolean; name: string }> | undefined {
  return media.mediaListEntry?.customLists as Array<{ enabled: boolean; name: string }> | undefined
}

export function repeat(media: Pick<Media, 'mediaListEntry' | 'id'>): number | null | undefined {
  return media.mediaListEntry?.repeat
}

export function score(media: Pick<Media, 'mediaListEntry' | 'id'>): number | null | undefined {
  return media.mediaListEntry?.score
}

export function entry(media: Pick<Media, 'mediaListEntry' | 'id'>): Media['mediaListEntry'] {
  return media.mediaListEntry ?? null
}

export function of(
  media: Pick<Media, 'aired' | 'notaired' | 'episodes' | 'mediaListEntry' | 'id'>
): string | undefined {
  const count = episodes(media)
  if (count === 1 || !count) return

  const prog = progress(media)
  if (!prog || prog === count) return `${count} Episodes`

  return `${prog} / ${count} Episodes`
}
