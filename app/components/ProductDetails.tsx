import React from "react";
import { Product } from "../types/interfaces";

const fetchProduct = async (id: string, exercise: string): Promise<Product> => {
  let url = `https://nx-zones-products.vercel.app/ngd/api/products/${id}`;
  if (exercise === "exercise2") {
    url =
      "https://nx-zones-products.vercel.app/ngd/api/products/${id}?random=true";
  }
  const response = await fetch(url, { next: { revalidate: 10 } });

  return response.json();
};

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

const ProductDetails = async ({
  exercise,
  id,
}: {
  exercise: string;
  id: string;
}) => {
  const product = await fetchProduct(id, exercise);
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            width={400}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <h1 className="font-bold text-xl mb-2">{product.title}</h1>
          <p className="text-gray-600">Brand: {product.brand}</p>
          <p className="text-gray-600">Rating: {product.rating}</p>
          <p className="text-gray-600">Price: ${product.price}</p>

          <form className="cart-form flex items-center justify-between mt-4">
            <p className="text-gray-600">Add to Cart</p>
            <div className="flex items-center">
              <button type="button" className="bg-gray-300 p-2 rounded-l">
                -
              </button>
              <input
                type="number"
                value={1}
                className="w-10 text-center border border-gray-300"
              />
              <button type="button" className="bg-gray-300 p-2 rounded-r">
                +
              </button>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              ADD TO CART
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
