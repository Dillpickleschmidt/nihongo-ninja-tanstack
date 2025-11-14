import { createPersisted } from '../../utils/solid-helpers'
import { createMemo } from 'solid-js'
import SUPPORTS from '../supports'

const alID = '26159' // Development client ID
const malID = 'd93b624a92e431a9b6dfe7a66c0c5bbb'

export const anilistClientID = createPersisted('anilist-client-id', alID)
export const malClientID = createPersisted('mal-client-id', malID)

// NSFW content filter settings
export const showHentai = createPersisted('extracurriculars-show-hentai', false)

// Derived signal: returns the genre filter to exclude
// Returns ['Hentai'] when filtering is enabled, null when disabled
export const nsfw = createMemo(() =>
  showHentai.value ? null : (['Hentai'] as const)
)

// Export SUPPORTS for use in other modules
export { SUPPORTS }
