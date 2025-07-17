// src/routes/auth.tsx
import { createFileRoute } from "@tanstack/solid-router"
import Login from "@/features/auth/components/Login"

export const Route = createFileRoute("/auth")({
  component: AuthPage,
})

function AuthPage() {
  return (
    <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-2xl leading-9 font-bold tracking-tight text-gray-900 dark:text-white">
          Sign in to your account
        </h2>
      </div>
      <Login callbackName="handleSignInWithGoogleCallback" />
    </div>
  )
}
