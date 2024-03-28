export interface NavLink {
  text: string;
  route: string;
  color: string;
}

export interface NavLinkText {
  text: string;
  route: string;
}

export interface Product {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: BigInteger;
  rating?: BigInteger;
  stock?: BigInteger;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images: [string] | undefined;
}
export interface Data {
  products?: Product[];
}
export interface Params {
  id: number;
}
