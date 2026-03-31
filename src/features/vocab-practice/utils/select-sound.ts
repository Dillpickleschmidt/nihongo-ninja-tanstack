const CLICK_SOUNDS = [
  "/audio/sfx/click4_11.opus",
  "/audio/sfx/click4_22.opus",
  "/audio/sfx/click4_33.opus",
  "/audio/sfx/click4_44.opus",
]

function playRandom(sounds: string[]) {
  const src = sounds[Math.floor(Math.random() * sounds.length)]
  new Audio(src).play().catch(() => {})
}

export function playClickSound() {
  playRandom(CLICK_SOUNDS)
}

export function playCorrectSound() {
  new Audio("/audio/sfx/correct.opus").play().catch(() => {})
}

export function playErrorSound() {
  new Audio("/audio/sfx/error1_1.opus").play().catch(() => {})
}
