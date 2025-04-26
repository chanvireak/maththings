// Import clsx to conditionally merge CSS class strings and ClassValue type
import { clsx, type ClassValue } from "clsx"
// Import twMerge to dedupe and merge Tailwind CSS utility classes
import { twMerge } from "tailwind-merge"

// Utility function to combine class names and resolve Tailwind CSS conflicts
export function cn(...inputs: ClassValue[]) {
  // Generate a single class string then merge conflicting Tailwind classes
  return twMerge(clsx(inputs))
}
