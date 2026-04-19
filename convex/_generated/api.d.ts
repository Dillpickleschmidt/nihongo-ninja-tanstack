/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as api_animeAuth from "../api/animeAuth.js";
import type * as api_completions from "../api/completions.js";
import type * as api_decks from "../api/decks.js";
import type * as api_folders from "../api/folders.js";
import type * as api_fsrs from "../api/fsrs.js";
import type * as api_hierarchy from "../api/hierarchy.js";
import type * as api_images from "../api/images.js";
import type * as api_learning_paths from "../api/learning_paths.js";
import type * as api_missedWords from "../api/missedWords.js";
import type * as api_practice from "../api/practice.js";
import type * as api_profiles from "../api/profiles.js";
import type * as api_progress from "../api/progress.js";
import type * as api_sentencePractice from "../api/sentencePractice.js";
import type * as api_sharing from "../api/sharing.js";
import type * as api_vocabulary from "../api/vocabulary.js";
import type * as auth from "../auth.js";
import type * as http from "../http.js";
import type * as model_animeAuth from "../model/animeAuth.js";
import type * as model_completions from "../model/completions.js";
import type * as model_decks from "../model/decks.js";
import type * as model_folders from "../model/folders.js";
import type * as model_fsrs from "../model/fsrs.js";
import type * as model_hierarchy from "../model/hierarchy.js";
import type * as model_images from "../model/images.js";
import type * as model_kanji from "../model/kanji.js";
import type * as model_learning_paths from "../model/learning_paths.js";
import type * as model_missedWords from "../model/missedWords.js";
import type * as model_profiles from "../model/profiles.js";
import type * as model_progress from "../model/progress.js";
import type * as model_sharing from "../model/sharing.js";
import type * as model_vocabulary from "../model/vocabulary.js";
import type * as validators from "../validators.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  "api/animeAuth": typeof api_animeAuth;
  "api/completions": typeof api_completions;
  "api/decks": typeof api_decks;
  "api/folders": typeof api_folders;
  "api/fsrs": typeof api_fsrs;
  "api/hierarchy": typeof api_hierarchy;
  "api/images": typeof api_images;
  "api/learning_paths": typeof api_learning_paths;
  "api/missedWords": typeof api_missedWords;
  "api/practice": typeof api_practice;
  "api/profiles": typeof api_profiles;
  "api/progress": typeof api_progress;
  "api/sentencePractice": typeof api_sentencePractice;
  "api/sharing": typeof api_sharing;
  "api/vocabulary": typeof api_vocabulary;
  auth: typeof auth;
  http: typeof http;
  "model/animeAuth": typeof model_animeAuth;
  "model/completions": typeof model_completions;
  "model/decks": typeof model_decks;
  "model/folders": typeof model_folders;
  "model/fsrs": typeof model_fsrs;
  "model/hierarchy": typeof model_hierarchy;
  "model/images": typeof model_images;
  "model/kanji": typeof model_kanji;
  "model/learning_paths": typeof model_learning_paths;
  "model/missedWords": typeof model_missedWords;
  "model/profiles": typeof model_profiles;
  "model/progress": typeof model_progress;
  "model/sharing": typeof model_sharing;
  "model/vocabulary": typeof model_vocabulary;
  validators: typeof validators;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {
  betterAuth: import("@convex-dev/better-auth/_generated/component.js").ComponentApi<"betterAuth">;
};
