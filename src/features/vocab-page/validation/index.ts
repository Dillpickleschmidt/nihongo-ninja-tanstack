// Unified Validation System - Main Export
// This file provides a single entry point for all validation functionality

// Export all common validation utilities
export {
  VALIDATION_RULES,
  validateName,
  // Zod schemas
} from "./common"

// Export vocabulary validation
export {
  VocabItemFormDataSchema,
  VocabItemFieldValidationSchema,
  validateVocabItemMinimal,
} from "./vocabulary-validation"

// Export deck and folder validation
export {
  DeckMetadataSchema,
  DeckNameValidationSchema,
  FolderNameValidationSchema,
  validateDeckNameUnique,
  validateFolderNameUnique,
  validateNoCircularReference,
  validateDeckComplete,
  validateFolderComplete,
} from "./deck-folder-validation"
