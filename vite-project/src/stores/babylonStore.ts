import { create } from "zustand";
import { Camera, Engine, Scene } from "@babylonjs/core";

type BabylonStore = {
  scene: Scene | null;
  camera: Camera | null;
  engine: Engine | null;
  setScene: (scene: Scene) => void;
  setCamera: (camera: Camera) => void;
  setEngine: (engine: Engine) => void;
};

export const useBabylonStore = create<BabylonStore>((set) => ({
  scene: null,
  camera: null,
  engine: null,
  setScene: (scene) => set({ scene }),
  setCamera: (camera) => set({ camera }),
  setEngine: (engine) => set({ engine }),
}));
