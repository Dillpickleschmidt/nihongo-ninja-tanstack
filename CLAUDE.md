# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (run in separate terminals)
bunx convex dev          # Convex backend with live sync
bun run dev              # Vite dev server

# Test & Type Check
bun run test             # Run vitest
bunx tsc --noEmit         # Type check
```

## Architecture

### Tech Stack

- **Frontend**: SolidJS + TanStack Router + TanStack Query
- **Backend**: Convex (real-time database + functions)
- **Auth**: BetterAuth with Convex adapter
- **Styling**: Tailwind CSS v4 + Kobalte UI components (from solid-ui.com)

### Project Structure

- `src/routes/` - TanStack Router file-based routes
- `src/features/` - Feature-specific components (vocab-page, dashboard, etc.)
- `src/components/` - Shared UI components
- `src/lib/convex-query.ts` - Bridges TanStack Query cache with Convex real-time subscriptions

## Code Conventions

### File Organization

- Public API at top of file
- Private helpers below, in order of usage

```ts
export function mainFunction() {
  helperA()
  helperB()
}

function helperA() { ... }
function helperB() { ... }
```

### Getting Data

Prefetch in loader for fast initial load, query in component for reactivity:

```ts
// Route loader - prefetch for instant data on navigation
export const Route = createFileRoute("/_home/vocab/deck/$deckId/edit")({
  loader: ({ context, params }) => {
    context.queryClient.prefetchQuery(
      convexQuery(api.api.decks.getDeckWithVocab, {
        deckId: params.deckId as Id<"userDecks">,
      }),
    )
  },
})

// Component - reactive query
const user = getUser()
const deckQuery = useConvexQuery(
  api.api.decks.getDeckWithVocab,
  () => ({ deckId: params().deckId as Id<"userDecks"> }),
  () => ({ enabled: !!user() }),
)
```

Skip user-specific queries when not signed in to avoid network delay (`enabled: !!user()`).

### Data Loading States

- `undefined` = not yet loaded → show skeleton/loader
- `[]` = loaded but empty → show empty state

Avoid fallbacks like `?? []` that mask the difference. Derive loading state from the data itself or derived reactive data, not separate `isLoading` props.

```tsx
<Show when={data !== undefined} fallback={<Loader />}>
  <Show when={data.length} fallback={<EmptyState />}>
    <Content data={data} />
  </Show>
</Show>
```

### SolidJS Memoization

Prefer plain accessor functions over `createMemo` when used only once. Reserve `createMemo` for values used multiple times or expensive computations.

### Convex Folder Structure

- `api/` - Thin queries/mutations: define args, pass ctx to model helpers, return
- `model/` - Business logic + auth checks via `ctx.auth.getUserIdentity()` (when necessary)

### useNavigate

⚠️ Because of the Link component's built-in affordances around href, cmd/ctrl + click-ability, and active/inactive capabilities, it's recommended to use the Link component instead of useNavigate for anything the user can interact with (e.g. links, buttons). However, there are some cases where useNavigate is necessary to handle side-effect navigations (e.g. a successful async action that results in a navigation).
