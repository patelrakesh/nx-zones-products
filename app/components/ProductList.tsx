import React from "react";
import { Product } from "../types/interfaces";

const fetchProducts = async (exercise: string) => {
  let url = "https://nx-zones-products.vercel.app/ngd/api/products";
  if (exercise === "exercise2") {
    url = "https://nx-zones-products.vercel.app/ngd/api/products?random=trues";
  }

  const response = await fetch(url, {
    next: { revalidate: 120 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const ProductListComp = async ({ exercise }: { exercise: string }) => {
  const Data = await fetchProducts(exercise);
  const products: Product[] = Data.products;
  return (
      <ul className="grid grid-cols-3 gap-4">
        {products.length > 0 &&
          products.map((product) => (
            <li key={product.id}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <a href={`/products/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-48 w-full object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <p className="text-gray-600">Brand: {product.brand}</p>
                    <div className="items-center">
                      <p className="text-gray-600">Rating: {product.rating}</p>
                      <p className="text-gray-600">Price: {product.price}</p>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          ))}
      </ul>
  );
};

export default ProductListComp;
