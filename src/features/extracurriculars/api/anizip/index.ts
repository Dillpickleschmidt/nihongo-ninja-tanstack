import type { EpisodesResponse, MappingsResponse } from './types'
import { safefetch } from '../../utils'

export async function episodes(id: number, _fetch = fetch) {
  return await safefetch<EpisodesResponse>(_fetch, `https://hayase.ani.zip/v1/episodes?anilist_id=${id}`)
}

export async function mappings(id: number, _fetch = fetch) {
  return await safefetch<MappingsResponse>(_fetch, `https://hayase.ani.zip/v1/mappings?anilist_id=${id}`)
}

export async function mappingsByKitsuId(kitsuId: number, _fetch = fetch) {
  return await safefetch<MappingsResponse>(_fetch, `https://hayase.ani.zip/v1/mappings?kitsu_id=${kitsuId}`)
}

export async function mappingsByMalId(malId: number, _fetch = fetch) {
  return await safefetch<MappingsResponse>(_fetch, `https://hayase.ani.zip/v1/mappings?mal_id=${malId}`)
}

export type * from './types'
