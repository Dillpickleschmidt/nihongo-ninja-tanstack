# JWT Authentication Flow - Walkthrough

## Initial Authentication

1. User signs in with Google OAuth (standard OAuth flow)
2. My server receives Google credential at /api/auth/login endpoint
3. My server calls Supabase: supabase.auth.signInWithIdToken({ provider: "google", token: credential })
4. Supabase validates Google token and creates/updates user in database
5. Supabase generates JWT access token:

- Contains user claims (id, email, metadata, expiration, etc.)
- Signed with Supabase project's JWT secret
- Short expiration (<1 hour)

6. Supabase generates refresh token:

- Just a random string stored in Supabase database
- 30-day expiration

7. Supabase returns both tokens to my server
8. My server manually sets HTTP-only cookies:

- sb-{project}-auth-token: JWT access token
- sb-{project}-refresh-token: Refresh token
- Note: Manual cookie setting required due to TanStack Start RPC issues with Supabase's setAll() function

9. Browser redirects to page with user authenticated

## Subsequent Requests (Fast Path - majority of requests)

1. User navigates to any page
2. Browser automatically sends HTTP-only cookies
3. My server extracts access token from cookies
4. My server verifies JWT locally:

- Uses same JWT secret as Supabase project
- Validates signature (prevents forgery)
- Checks expiration (though the browser should have deleted it if expired anyway)
- Extracts user data from claims

5. No database calls needed - user data comes from JWT
6. Page renders with user authenticated

## Token Refresh Flow (When Access Token Expires)

1. User navigates to page after short-lived access token expires
2. Browser sends cookies (access token expired/missing, refresh token valid)
3. My server extracts both tokens from cookies
4. Access token missing/expired, but refresh token exists
5. My server calls Supabase: supabase.auth.refreshSession({ refresh_token: refreshToken })
6. Supabase validates refresh token against database
7. Supabase generates NEW tokens:

- New JWT access token (signed with same secret, 1-hour expiry)
- New refresh token (30-day expiry)
- Old refresh token invalidated in database

8. Supabase returns fresh tokens + current user data
9. My server manually sets new HTTP-only cookies
10. User stays logged in seamlessly

## Key Security Notes

- JWT Secret Shared: My server has same JWT secret as Supabase project for local verification
- Token Rotation: Every refresh generates new tokens (both auth and refresh), old ones become invalid. This prevents the refresh token from being used for 30 days if somehow stolen.
- Signature Verification: Prevents anyone from forging JWTs without the secret
- HTTP-Only Cookies: JavaScript cannot access tokens (XSS protection)
- Local Verification: majority of requests skip database calls for performance

## Error Scenarios

- No tokens: User not authenticated, redirect to login
- Invalid JWT signature: Immediate rejection (potential attack)
- Expired access + valid refresh: Automatic refresh (seamless)
- Both tokens expired/invalid: Force re-authentication
