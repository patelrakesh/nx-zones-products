interface initialDataItem {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  rating: number;
  price: number;
}

export interface productsType {
  productData: initialDataItem[];
}
