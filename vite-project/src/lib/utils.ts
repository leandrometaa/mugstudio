import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { Engine, Camera, Tools } from "@babylonjs/core";

export const captureScreenshot = (
  engine: Engine,
  camera: Camera,
  width = 512,
  height = 512,
): Promise<string> => {
  return new Promise((resolve) => {
    Tools.CreateScreenshotUsingRenderTarget(
      engine,
      camera,
      { width, height },
      (dataUrl) => resolve(dataUrl),
      "image/png",
    );
  });
};
