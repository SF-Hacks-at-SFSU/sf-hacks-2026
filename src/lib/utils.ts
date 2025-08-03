import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * This function was automatically generated from shadcn initialization
 * 
 * 
 * For more information on shadcn see https://ui.shadcn.com/docs. (I don't want to document a summary of what shadcn is right now)
 * @author Vireak
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
