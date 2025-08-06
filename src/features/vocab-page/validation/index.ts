// Unified Validation System - Main Export
// This file provides a single entry point for all validation functionality

// Export all common validation utilities
export {
  VALIDATION_RULES,
  validateName,
  validateUniqueness,
  // Types
  type ValidationResult,
  type ValidationError,
  // Zod schemas
  RequiredStringSchema,
  OptionalStringSchema,
  NonEmptyStringArraySchema,
} from "./common"

// Export vocabulary validation
export {
  BaseVocabItemSchema,
  VocabItemFormDataSchema,
  VocabItemFieldValidationSchema,
  PartialVocabItemSchema,
  validateVocabItemMinimal,
  validateVocabItemCollection,
  // Types
  type ValidatedVocabItemFormData,
  type PartialVocabItemFormData,
  type VocabItemValidationContext,
  type FieldValidationState,
} from "./vocabulary-validation"

// Export deck and folder validation
export {
  DeckMetadataSchema,
  DeckCreationSchema,
  FolderSchema,
  DeckNameValidationSchema,
  FolderNameValidationSchema,
  validateDeckNameUnique,
  validateFolderNameUnique,
  validateNoCircularReference,
  validateDeckComplete,
  validateFolderComplete,
  // Types
  type DeckMetadata,
  type DeckCreationData,
  type FolderData,
  type DeckNameValidation,
  type FolderNameValidation,
} from "./deck-folder-validation"
