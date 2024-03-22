export interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: BigInteger,
    rating: BigInteger,
    stock: BigInteger,
    brand: string,
    category: string,
    thumbnail: string,
    images: any
}

export interface Params { id: number }