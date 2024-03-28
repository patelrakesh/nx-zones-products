import React from "react";
import { Product } from "../types/interfaces";

const ProductCard = ({ products }: { products: Product[] }) => {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {products.length > 0 &&
        products.map((product: Product) => (
          <li key={product?.id}>
            <div className="bg-white rounded-lg shadow-md p-6">
              <a href={`/products/${product?.id}`}>
                <img
                  src={product?.images && product?.images.length > 0 ? product?.images[0] : ""}
                  alt={product?.title}
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{product?.title}</h3>
                  <p className="text-gray-600">Brand: {product?.brand}</p>
                  <div className="items-center">
                    <p className="text-gray-600">Rating: {product?.rating}</p>
                    <p className="text-gray-600">Price: {product?.price}</p>
                  </div>
                </div>
              </a>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default ProductCard;
