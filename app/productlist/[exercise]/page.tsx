import React, { Suspense } from "react";
import "./productlist.css";
import { Product } from "../../types/interfaces";
import { NavLinkText } from "../../types/interfaces";
import { links } from "@/app/utils/constant";
import { revalidatePath } from "next/cache";

const fetchProducts = async (exercise: string) => {
  let url = "https://nx-zones-products.vercel.app/ngd/api/products";
  if (exercise === "exercise2") {
    url = "https://nx-zones-products.vercel.app/ngd/api/products?random=trues";
  }
  const response = await fetch(url, { next: { revalidate: 120 } });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const ProductList = async ({ params }: { params: { exercise: string } }) => {
  const exercise: string = params.exercise;

  const revalidateByPath = () => {
    revalidatePath(`/productlist/${exercise}`);
  };

  const Data = await fetchProducts(exercise);
  const dateTime = new Date();
  const products: Product[] = Data.products;

  function findExerciseByRoute(route: string) {
    return links.find((exercise: NavLinkText) => exercise.route === route);
  }
  const exercise2Data = findExerciseByRoute(exercise);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-8 text-center">
        {exercise2Data?.text}
      </h2>
      {exercise === "exercise2" && (
        <>
          <div className="flex justify-end">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-16">
              REVALIDATE BY TAG
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              REVALIDATE BY PATH
            </button>
          </div>
          <h4 className="text-center">{dateTime.toLocaleString()}</h4>
        </>
      )}
      {/* <SuspenseList revealOrder="forwards"> */}
      <Suspense fallback={<div>Loading products...</div>}>
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
                        <p className="text-gray-600">
                          Rating: {product.rating}
                        </p>
                        <p className="text-gray-600">Price: {product.price}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            ))}
        </ul>
      </Suspense>
      {/* </SuspenseList> */}
    </div>
  );
};

export default ProductList;
