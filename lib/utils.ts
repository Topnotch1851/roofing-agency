import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(raw: string): string {
  return raw;
}

export function telHref(raw: string): string {
  return `tel:${raw.replace(/[^\d+]/g, "")}`;
}
