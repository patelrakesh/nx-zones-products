import React from "react";
import "./productlist.css";
import { Product } from "../../types/interfaces";

const fetchProducts = async (exercise: string) => {
  const response = await fetch(
    "https://nx-zones-products.vercel.app/ngd/api/products?random=true",
    {next:{revalidate: 15}}
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const ProductList = async ({ params }: { params: { exercise: string } }) => {
  const exercise: string = params.exercise;

  const Data = await fetchProducts(exercise);
  const dateTime = new Date();
  const products: Product[] = Data.products;

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-8 text-center">
        Static and dynamic rendering
      </h2>
      <h4>{dateTime.toLocaleString()}</h4>
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
    </div>
  );
};

export default ProductList;
