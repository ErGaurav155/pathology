/* eslint-disable prefer-const */
/* eslint-disable no-prototype-builtins */
import { type ClassValue, clsx } from "clsx";
import qs from "qs";
import { twMerge } from "tailwind-merge";

import { aspectRatioOptions } from "@/constants";
import { any } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error message
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};

// PLACEHOLDER LOADER - while image is transforming
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#7986AC" offset="20%" />
      <stop stop-color="#68769e" offset="50%" />
      <stop stop-color="#7986AC" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#7986AC" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const dataUrl = `data:image/svg+xml;base64,${toBase64(
  shimmer(1000, 1000)
)}`;

// DEBOUNCE
export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout | null;
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// GE IMAGE SIZE
export type AspectRatioKey = keyof typeof aspectRatioOptions;
export const getImageSize = (
  type: string,
  image: any,
  dimension: "width" | "height"
): number => {
  if (type === "fill") {
    return (
      aspectRatioOptions[image.aspectRatio as AspectRatioKey]?.[dimension] ||
      1000
    );
  }
  return image?.[dimension] || 1000;
};

// DOWNLOAD IMAGE
export const download = async (url: string, filename: string) => {
  if (!url) {
    throw new Error("Resource URL not provided! You need to provide one");
  }
  const formData = new FormData();
  formData.append("item", url);

  try {
    const response = await fetch("/api/images", {
      method: "POST",
      body: formData,
    });

    if (response) {
      // Handle successful response
      console.log("Download request successful", response);
      // Optionally, you can download the response
      const blob = await response.blob();
      const url1 = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url1;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url1);
    } else {
      // Handle failed response
      console.error("Download request failed");
    }
  } catch (error) {
    // Handle errors
    console.error("An error occurred while downloading", error);
  }
};

export const totalCredits = (selectedAspectRatio: string, arImage: string) => {
  switch (selectedAspectRatio) {
    case "1024x1024":
      return 4 * Number(arImage);
    case "1792x1024":
      return 6 * Number(arImage);
    case "1024x1792":
      return 6 * Number(arImage);
    default:
      return 1;
  }
};

export const calculateCredits = (fileSize?: number) => {
  if (!fileSize) {
    return 1;
  }
  if (fileSize <= 1 * 1024 * 1024) {
    return 4;
  } else if (fileSize <= 2 * 1024 * 1024) {
    return 6;
  } else if (fileSize <= 3 * 1024 * 1024) {
    return 8;
  } else if (fileSize <= 4 * 1024 * 1024) {
    return 10;
  } else if (fileSize <= 5 * 1024 * 1024) {
    return 12;
  } else {
    return 15;
  }
};
