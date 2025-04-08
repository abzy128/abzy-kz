import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const formattedStartDate = formatDate(startDate);
  
  if (!endDate) {
    return formattedStartDate;
  }
  
  if (typeof endDate === "string") {
    return `${formattedStartDate} - ${endDate}`;
  }
  
  const formattedEndDate = formatDate(endDate);
  return `${formattedStartDate} - ${formattedEndDate}`;
}