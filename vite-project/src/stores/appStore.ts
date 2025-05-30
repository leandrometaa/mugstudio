import type {
  MugColor,
  MugSize,
  MugMaterial,
  MugType,
  MugTexture,
  CartItem,
} from "@/types/types.ts";
import { create } from "zustand";

interface AppState {
  // Pagina
  selectedPage: "configurator" | "mugs";
  setSelectedPage: (page: "configurator" | "mugs") => void;
  // Configurazione tazza
  selectedMugType: MugType | null;
  setSelectedMugType: (type: MugType) => void;
  selectedMugSize: MugSize | null;
  setSelectedMugSize: (dimension: MugSize) => void;
  selectedMugColor: MugColor | null;
  setSelectedMugColor: (color: MugColor) => void;
  selectedMugImage: string | null;
  setSelectedMugImage: (image: string | null) => void;
  selectedMugMaterial: MugMaterial | null;
  setSelectedMugMaterial: (material: MugMaterial) => void;
  selectedMugTexture: MugTexture | null;
  setSelectedMugTexture: (texture: MugTexture | null) => void;
  price: number;
  setPrice: () => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  // Carrello
  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
  cartPrice: number;
  setCartPrice: () => void;
}

export const useAppStore = create<AppState>()((set, get) => ({
  // Pagina
  selectedPage: "mugs",
  setSelectedPage: (page) => set({ selectedPage: page }),

  // Configurazione tazza
  selectedMugType: null,
  setSelectedMugType: (type) => set({ selectedMugType: type }),
  selectedMugSize: null,

  setSelectedMugSize: (dimension) => set({ selectedMugSize: dimension }),

  selectedMugColor: null,
  setSelectedMugColor: (color) => set({ selectedMugColor: color }),

  selectedMugImage: null,
  setSelectedMugImage: (image) => set({ selectedMugImage: image }),

  selectedMugMaterial: null,
  setSelectedMugMaterial: (material) => set({ selectedMugMaterial: material }),

  selectedMugTexture: null,
  setSelectedMugTexture: (texture) => set({ selectedMugTexture: texture }),

  price: 0.0,
  setPrice: () => {
    const {
      selectedMugType,
      selectedMugSize,
      selectedMugColor,
      selectedMugMaterial,
      selectedMugImage,
    } = get();

    const typePrice = selectedMugType?.price ?? 0;
    const dimensionPrice = selectedMugSize?.price ?? 0;
    const colorPrice = selectedMugColor?.price ?? 0;
    const materialPrice = selectedMugMaterial?.price ?? 0;
    const imagePrice = selectedMugImage ? 1 : 0;

    const total =
      typePrice + dimensionPrice + colorPrice + materialPrice + imagePrice;

    set({ price: total });
  },

  quantity: 1,
  setQuantity: (quantity) => set({ quantity }),

  // Carrello
  cartItems: [],
  setCartItems: (cartItems: CartItem[]) => set({ cartItems: cartItems }),

  cartPrice: 0,
  setCartPrice: () => {
    const { cartItems } = get();
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    set({ cartPrice: total });
  },
}));
