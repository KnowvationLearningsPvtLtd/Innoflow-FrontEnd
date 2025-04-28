import { FirebaseError } from "firebase/app"

export function useAuthError() {
  const getErrorMessage = (error: unknown): string => {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/network-request-failed":
          return "Network error. Please check your internet connection."
        case "auth/popup-closed-by-user":
          return "Sign-in popup was closed. Please try again."
        case "auth/cancelled-popup-request":
          return "Sign-in was cancelled. Please try again."
        case "auth/popup-blocked":
          return "Pop-up was blocked by your browser. Please allow pop-ups for this site."
        case "auth/account-exists-with-different-credential":
          return "An account already exists with the same email address but different sign-in credentials."
        case "auth/operation-not-allowed":
          return "Google sign-in is not enabled. Please contact support."
        case "auth/user-disabled":
          return "This account has been disabled. Please contact support."
        case "auth/invalid-credential":
          return "Invalid credentials. Please try again."
        default:
          return "An error occurred during sign-in. Please try again."
      }
    }
    return "An unexpected error occurred. Please try again."
  }

  return { getErrorMessage }
} 