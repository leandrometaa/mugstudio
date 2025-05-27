export interface PostRequest {
  price: number;
  quantity: number;
  product: {
    type: number;
    dimension: string;
    color: string;
    image: string;
    text: string;
    material: string;
  };
}

export interface MugType {
  id: number;
  name: string;
  model: string;
  price: number;
  supportsImage: boolean;
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
}
