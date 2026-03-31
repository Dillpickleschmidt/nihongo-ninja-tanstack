import { Show } from "solid-js"
import { formatMnemonic } from "../utils/card-display"

interface MnemonicDisplayProps {
  mnemonic: string | null | undefined
}

export function MnemonicDisplay(props: MnemonicDisplayProps) {
  return (
    <Show when={props.mnemonic}>
      {(text) => (
        <div class="w-full max-w-lg rounded-lg bg-white/5 p-4">
          <h4 class="mb-2 text-xs font-semibold uppercase tracking-wide text-white/40">
            Mnemonic
          </h4>
          <p
            class="text-sm leading-relaxed text-white/70"
            innerHTML={formatMnemonic(text())}
          />
        </div>
      )}
    </Show>
  )
}
