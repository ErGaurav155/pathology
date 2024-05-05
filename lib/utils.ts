/* eslint-disable prefer-const */
/* eslint-disable no-prototype-builtins */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { aspectRatioOptions } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error message
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
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
      throw new Error(`Error: Download request failed`);
    }
  } catch (error) {
    // Handle errors
    throw new Error(`Error: ${error}`);
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
      return 0;
  }
};
export const handleCredit = (value: string) => {
  const length = value.length;

  let calculatedCredits = 0;
  if (length >= 0 && length <= 100) {
    return (calculatedCredits = 2);
  } else if (length > 100 && length <= 200) {
    return (calculatedCredits = 3);
  } else if (length > 200 && length <= 300) {
    return (calculatedCredits = 5);
  } else if (length > 300 && length <= 500) {
    return (calculatedCredits = 8);
  } else if (length > 500 && length <= 700) {
    return (calculatedCredits = 10);
  } else if (length > 700 && length <= 1000) {
    return (calculatedCredits = 12);
  } else if (length > 1000 && length <= 1500) {
    return (calculatedCredits = 15);
  } else if (length > 1500 && length <= 2000) {
    return (calculatedCredits = 20);
  } else if (length > 2000 && length <= 2500) {
    return (calculatedCredits = 25);
  } else if (length > 2500 && length <= 3000) {
    return (calculatedCredits = 30);
  } else {
    return 50;
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
