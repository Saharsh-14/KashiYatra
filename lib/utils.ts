import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names safely with Tailwind CSS
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats numbers into roman numerals or padded numbers for Kashi chapters
 */
export function formatChapterNumber(num: number): string {
  const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  return roman[num - 1] || String(num).padStart(2, "0");
}
