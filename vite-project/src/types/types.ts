export interface PostOrder {
  id: string;
  date: string;
  totalPrice: number;
  products: OrderItem | OrderItem[];
}

export interface OrderItem {
  type: number;
  dimension: number;
  color: number;
  material: number;
  image: string | false;
  texture: number | false;
  quantity: number;
  price: number;
}

export interface CartItem {
  id: string;
  price: number;
  quantity: number;
  name: string;
  image: string;
  product: {
    type: string;
    dimension: string;
    color: string;
    material: string;
    image: string | false;
    texture: string | false;
  };
}

export interface MugType {
  id: number;
  name: string;
  fileName: string;
  price: number;
  supportsImage: boolean;
  supportsTexture: boolean;
  description: string;
}

export interface MugSize {
  id: number;
  name: string;
  scale: number;
  height: string;
  price: number;
}

export interface MugColor {
  id: number;
  name: string;
  code: string;
  price: number;
}

export interface MugMaterial {
  id: number;
  name: string;
  code: string;
  price: number;
  alpha: number;
  transparencyMode: string;
  metallic: number;
  roughness: number;
  indexOfRefraction: number;
}

export interface MugTexture {
  id: number;
  name: string;
  fileName: string;
}
