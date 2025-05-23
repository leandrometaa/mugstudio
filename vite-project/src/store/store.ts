import type {
  MugColor,
  MugDimension,
  MugMaterial,
  MugType,
} from '@/types/types.ts';
import { create } from 'zustand';

interface SelectedState {
  selectedMugType: MugType | null;
  setSelectedMugType: (type: MugType) => void;
  selectedMugDimension: MugDimension | null;
  setSelectedMugDimension: (dimension: MugDimension) => void;
  selectedMugColor: MugColor | null;
  setSelectedMugColor: (color: MugColor) => void;
  // Image
  // Text
  selectedMugMaterial: MugMaterial | null;
  setSelectedMugMaterial: (material: MugMaterial) => void;
  price: number;
  setPrice: () => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export const useSelectedStore = create<SelectedState>()((set, get) => ({
  selectedMugType: null,
  setSelectedMugType: (type) => set({ selectedMugType: type }),

  selectedMugDimension: null,
  setSelectedMugDimension: (dimension) =>
    set({ selectedMugDimension: dimension }),

  selectedMugColor: null,
  setSelectedMugColor: (color) => set({ selectedMugColor: color }),

  selectedMugMaterial: null,
  setSelectedMugMaterial: (material) => set({ selectedMugMaterial: material }),

  price: 0.0,
  setPrice: () => {
    const {
      selectedMugType,
      selectedMugDimension,
      selectedMugColor,
      selectedMugMaterial,
      quantity,
    } = get();

    const typePrice = selectedMugType?.price ?? 0;
    const dimensionPrice = selectedMugDimension?.price ?? 0;
    const colorPrice = selectedMugColor?.price ?? 0;
    const materialPrice = selectedMugMaterial?.price ?? 0;

    const total =
      (typePrice + dimensionPrice + colorPrice + materialPrice) * quantity;

    set({ price: total });
  },

  quantity: 1,
  setQuantity: (quantity) => set({ quantity }),
}));
