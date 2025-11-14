import { createPersisted } from '../../utils/solid-helpers'
import SUPPORTS from '../supports'

const alID = '26159' // Development client ID
const malID = 'd93b624a92e431a9b6dfe7a66c0c5bbb'

export const anilistClientID = createPersisted('anilist-client-id', alID)
export const malClientID = createPersisted('mal-client-id', malID)

// Export SUPPORTS for use in other modules
export { SUPPORTS }
