// src/routes/auth.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { Show } from "solid-js"
import Login from "@/features/auth/components/Login"
import LogoutButton from "@/features/auth/components/Logout"

export const Route = createFileRoute("/auth")({
  loader: ({ context }) => {
    return {
      user: context.user,
    }
  },
  component: AuthPage,
})

function AuthPage() {
  const data = Route.useLoaderData()
  const user = data().user

  return (
    <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <Show
          when={user}
          fallback={
            <>
              <h2 class="mt-6 text-center text-2xl leading-9 font-bold tracking-tight text-gray-900 dark:text-white">
                Sign in to your account
              </h2>
              <Login callbackName="handleSignInWithGoogleCallback" />
            </>
          }
        >
          <h2 class="mt-6 text-center text-2xl leading-9 font-bold tracking-tight text-gray-900 dark:text-white">
            You are signed in
          </h2>
          <div class="mt-6 flex justify-center">
            <LogoutButton />
          </div>
        </Show>
      </div>
    </div>
  )
}
