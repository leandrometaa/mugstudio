import type { MugColor, MugSize, MugMaterial, MugType } from '@/types/types.ts';
import { create } from 'zustand';

interface AppState {
  // Pagina
  selectedPage: 'configurator' | 'mugs';
  setSelectedPage: (page: 'configurator' | 'mugs') => void;
  // Configurazione tazza
  selectedMugType: MugType | null;
  setSelectedMugType: (type: MugType) => void;
  selectedMugSize: MugSize | null;
  setSelectedMugSize: (dimension: MugSize) => void;
  selectedMugColor: MugColor | null;
  setSelectedMugColor: (color: MugColor) => void;
  selectedImage: string | null;
  setSelectedImage: (image: string | null) => void;
  selectedMugMaterial: MugMaterial | null;
  setSelectedMugMaterial: (material: MugMaterial) => void;
  // Carrello
  price: number;
  setPrice: () => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export const useAppStore = create<AppState>()((set, get) => ({
  // Pagina
  selectedPage: 'configurator',
  setSelectedPage: (page) => set({ selectedPage: page }),

  // Configurazione tazza
  selectedMugType: null,
  setSelectedMugType: (type) => set({ selectedMugType: type }),
  selectedMugSize: null,

  setSelectedMugSize: (dimension) => set({ selectedMugSize: dimension }),

  selectedMugColor: null,
  setSelectedMugColor: (color) => set({ selectedMugColor: color }),

  selectedImage: null,
  setSelectedImage: (image) => set({ selectedImage: image }),

  selectedMugMaterial: null,
  setSelectedMugMaterial: (material) => set({ selectedMugMaterial: material }),

  // Carrello
  price: 0.0,
  setPrice: () => {
    const {
      selectedMugType,
      selectedMugSize,
      selectedMugColor,
      selectedMugMaterial,
      quantity,
    } = get();

    const typePrice = selectedMugType?.price ?? 0;
    const dimensionPrice = selectedMugSize?.price ?? 0;
    const colorPrice = selectedMugColor?.price ?? 0;
    const materialPrice = selectedMugMaterial?.price ?? 0;

    const total =
      (typePrice + dimensionPrice + colorPrice + materialPrice) * quantity;

    set({ price: total });
  },

  quantity: 1,
  setQuantity: (quantity) => set({ quantity }),
}));
