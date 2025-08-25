import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Checks if the work in progress mode is enabled
 * Used by middleware and components to determine if the site should show work-in-progress
 * @returns boolean indicating if work in progress mode is active
 */
export function isWorkInProgressMode(): boolean {
  return process.env.IS_WORKING_IN_PROGRESS === "true";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function pickFields<T>(obj: any, keys: (keyof T)[]): T {
  const result: Partial<T> = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result as T;
}
