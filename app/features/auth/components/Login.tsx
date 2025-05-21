// features/auth/components/Login.tsx

import { createSignal, onCleanup } from "solid-js"

const API_BASE = "https://api.nihongoninja.io"

export default function Login({ callbackName }: { callbackName: string }) {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
  const [credential, setCredential] = createSignal("")

  // Register the callback globally
  window[callbackName] = (response: { credential: string }) => {
    setCredential(response.credential)
    // Submit the form programmatically
    document
      .getElementById("google-login-form")
      ?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }))
  }

  onCleanup(() => {
    delete window[callbackName]
  })

  return (
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="rounded-lg bg-white px-6 py-12 shadow sm:px-12 dark:bg-gray-800">
        <form
          id="google-login-form"
          action={`${API_BASE}/auth/login`}
          method="post"
          style={{ display: "none" }}
        >
          <input type="hidden" name="credential" value={credential()} />
        </form>
        <div
          id="g_id_onload"
          data-client_id={googleClientId}
          data-context="signin"
          data-ux_mode="popup"
          data-callback={callbackName}
          data-nonce=""
          data-auto_select="true"
          data-itp_support="true"
          data-use_fedcm_for_prompt="true"
        ></div>
        <div
          class="g_id_signin flex justify-center"
          data-type="standard"
          data-shape="pill"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left"
        ></div>
      </div>
    </div>
  )
}
