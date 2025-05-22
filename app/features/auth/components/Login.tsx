// features/auth/components/Login.tsx
import { createSignal, onMount, onCleanup } from "solid-js"

export default function Login({ callbackName }: { callbackName: string }) {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
  const [credential, setCredential] = createSignal("")

  onMount(() => {
    // Register the callback globally only in the browser
    ;(window as any)[callbackName] = (response: { credential: string }) => {
      setCredential(response.credential)
      document
        .getElementById("google-login-form")
        ?.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true }),
        )
    }

    const script = document.createElement("script")
    script.src = "https://accounts.google.com/gsi/client"
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    onCleanup(() => {
      delete (window as any)[callbackName]
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    })
  })

  if (!googleClientId) {
    return (
      <div style={{ color: "red", "text-align": "center", padding: "1rem" }}>
        Google Sign-In is not configured correctly. (Missing Client ID)
      </div>
    )
  }

  return (
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="rounded-lg bg-white px-6 py-12 shadow sm:px-12 dark:bg-gray-800">
        <form
          id="google-login-form"
          action={`/api/auth/login`}
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
