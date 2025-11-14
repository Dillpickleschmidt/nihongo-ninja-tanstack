import SUPPORTS from './supports'
import { sleep } from '../utils'

export interface AuthResponse {
  access_token: string
  expires_in: number
  token_type: string
}

export interface Native {
  authAL: (url: string) => Promise<AuthResponse>
  authMAL: (url: string) => Promise<{ code: string; state: string }>
  restart: () => Promise<void>
  openURL: (url: string) => Promise<void>
  selectPlayer: () => Promise<string>
  selectDownload: () => Promise<string>
  share: (data: ShareData) => Promise<void>
  setAngle: (angle: number) => Promise<void>
  getLogs: () => Promise<string>
  getDeviceInfo: () => Promise<Record<string, unknown>>
  openUIDevtools: () => Promise<void>
  openTorrentDevtools: () => Promise<void>
  minimise: () => Promise<void>
  maximise: () => Promise<void>
  focus: () => Promise<void>
  close: () => Promise<void>
  checkUpdate: () => Promise<void>
  updateAndRestart: () => Promise<void>
  updateReady: () => Promise<void>
  toggleDiscordDetails: () => Promise<void>
  setMediaSession: (metadata: MediaMetadataInit) => Promise<void>
  setPositionState: (state: MediaPositionState) => Promise<void>
  setPlayBackState: (state: MediaSessionPlaybackState) => Promise<void>
  setActionHandler: (action: MediaSessionAction, handler: MediaSessionActionHandler | null) => Promise<void>
  checkAvailableSpace: () => Promise<number>
  checkIncomingConnections: () => Promise<boolean>
  updatePeerCounts: () => Promise<unknown[]>
  isApp: boolean
  playTorrent: () => Promise<unknown[]>
  rescanTorrents: () => Promise<void>
  deleteTorrents: () => Promise<void>
  library: () => Promise<unknown[]>
  attachments: () => Promise<unknown[]>
  tracks: () => Promise<unknown[]>
  subtitles: () => Promise<unknown>
  chapters: () => Promise<unknown[]>
  version: () => Promise<string>
  updateSettings: () => Promise<void>
  setDOH: () => Promise<void>
  cachedTorrents: () => Promise<unknown[]>
  spawnPlayer: () => Promise<void>
  setHideToTray: () => Promise<void>
  transparency: () => Promise<void>
  setZoom: () => Promise<void>
  navigate: () => Promise<void>
  downloadProgress: () => Promise<void>
  updateProgress: () => Promise<void>
  createNZB: () => Promise<void>
  torrentInfo: () => Promise<unknown>
  fileInfo: () => Promise<unknown[]>
  peerInfo: () => Promise<unknown[]>
  protocolStatus: () => Promise<unknown>
  defaultTransparency: () => boolean
  errors: () => Promise<void>
  debug: (value: string) => Promise<void>
  profile: () => Promise<void>
}

const rnd = (range = 100) => Math.floor(Math.random() * range)

const dummyFiles = [
  {
    name: 'AmebkuUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU.webm',
    hash: '1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
    type: 'video/webm',
    size: 1234567890,
    path: '/Amebku.webm',
    url: 'http://localhost:7344/test3.mkv',
    id: 0
  }
]

export default Object.assign<Partial<Native>, Partial<Native>>(
  {
    authAL: (url: string) => {
      return new Promise<AuthResponse>((resolve, reject) => {
        const popup = open(url, 'authframe', SUPPORTS.isAndroid ? 'popup' : 'popup,width=382,height=582')
        if (!popup) return reject(new Error('Failed to open popup'))
        const check = () => {
          if (popup.closed) return reject(new Error('Popup closed'))
          try {
            if (popup.location.hash.startsWith('#access_token=')) {
              const search = Object.fromEntries(
                new URLSearchParams(popup.location.hash.replace('#', '?')).entries()
              ) as unknown as AuthResponse
              resolve(search)
              popup.close()
              return
            }
          } catch (e) {}
          setTimeout(check, 100)
        }
        check()
      })
    },
    authMAL: (url: string) => {
      return new Promise<{ code: string; state: string }>((resolve, reject) => {
        const popup = open(url, 'authframe', SUPPORTS.isAndroid ? 'popup' : 'popup,width=540,height=782')
        if (!popup) return reject(new Error('Failed to open popup'))
        const check = () => {
          if (popup.closed) return reject(new Error('Popup closed'))
          try {
            if (popup.location.search.startsWith('?code=')) {
              const search = Object.fromEntries(new URLSearchParams(popup.location.search).entries()) as unknown as {
                code: string
                state: string
              }
              resolve(search)
              popup.close()
              return
            }
          } catch (e) {}
          setTimeout(check, 100)
        }
        check()
      })
    },
    restart: async () => location.reload(),
    openURL: async (url: string) => {
      open(url)
    },
    selectPlayer: async () => 'mpv',
    selectDownload: async () => '/tmp/webtorrent',
    share: (...args) => navigator.share(...(args as [ShareData])),
    setAngle: async () => undefined,
    getLogs: async () => '',
    getDeviceInfo: async () => ({}),
    openUIDevtools: async () => undefined,
    openTorrentDevtools: async () => undefined,
    minimise: async () => undefined,
    maximise: async () => undefined,
    focus: async () => undefined,
    close: async () => undefined,
    checkUpdate: async () => undefined,
    updateAndRestart: async () => undefined,
    updateReady: () => sleep(rnd(10_000)),
    toggleDiscordDetails: async () => undefined,
    setMediaSession: async (metadata) => {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: metadata.title,
        artist: metadata.artist,
        artwork: metadata.artwork
      })
    },
    setPositionState: async (e) => navigator.mediaSession.setPositionState(e),
    setPlayBackState: async (e) => {
      navigator.mediaSession.playbackState = e
    },
    setActionHandler: async (...args) =>
      navigator.mediaSession.setActionHandler(...(args as [action: MediaSessionAction, handler: MediaSessionActionHandler | null])),
    checkAvailableSpace: () =>
      new Promise(resolve => setTimeout(() => resolve(Math.floor(Math.random() * (1e10 - 1e8 + 1) + 1e8)), 1000)),
    checkIncomingConnections: () => new Promise(resolve => setTimeout(() => resolve(false), 1000)),
    updatePeerCounts: async () => [],
    isApp: false,
    playTorrent: async () => dummyFiles,
    rescanTorrents: async () => undefined,
    deleteTorrents: async () => undefined,
    library: async () => [],
    attachments: async () => [],
    tracks: async () => [],
    subtitles: async () => undefined,
    chapters: async () => [
      { start: 5 * 1000, end: 15 * 1000, text: 'OP' },
      { start: 1.0 * 60 * 1000, end: 1.2 * 60 * 1000, text: 'Chapter 1' },
      { start: 1.4 * 60 * 1000, end: 88 * 1000, text: 'Chapter 2 ' }
    ],
    version: async () => 'v6.4.4',
    updateSettings: async () => undefined,
    setDOH: async () => undefined,
    cachedTorrents: async () => [],
    spawnPlayer: async () => undefined,
    setHideToTray: async () => undefined,
    transparency: async () => undefined,
    setZoom: async () => undefined,
    navigate: async () => undefined,
    downloadProgress: async () => undefined,
    updateProgress: async () => undefined,
    createNZB: async () => undefined,
    torrentInfo: async () => ({
      name: '',
      progress: 0,
      size: { total: 0, downloaded: 0, uploaded: 0 },
      speed: { down: 0, up: 0 },
      time: { remaining: 0, elapsed: 0 },
      peers: { seeders: 0, leechers: 0, wires: 0 },
      pieces: { total: 0, size: 0 },
      hash: ''
    }),
    fileInfo: async () => [],
    peerInfo: async () => [],
    protocolStatus: async () => ({
      dht: false,
      lsd: false,
      pex: false,
      nat: false,
      forwarding: false,
      persisting: false,
      streaming: false
    }),
    defaultTransparency: () => false,
    errors: async () => undefined,
    debug: async () => undefined,
    profile: async () => undefined
  },
  typeof globalThis !== 'undefined' && (globalThis as any).native ? (globalThis as any).native : {}
) as Native
