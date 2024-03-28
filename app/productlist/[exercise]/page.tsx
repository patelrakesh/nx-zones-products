import React, { Suspense } from "react";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
  QueryClient,
} from "@tanstack/react-query";
import "./productlist.css";
import { Product, Data, NavLinkText } from "../../types/interfaces";
import { links } from "@/app/utils/constant";
import { fetchExerciseData, fetchExercise4Data } from "@/app/utils/fetchData";
import { revalidatePath } from "next/cache";

import Revalidation from "../../examples/Revalidation";
import CachedProducts from "@/app/examples/CachedProducts";

const ProductList = async ({ params }: { params: { exercise: string } }) => {
  const exercise: string = params.exercise;
  console.log("console_exercise", exercise);

  // const queryClient = new QueryClient();

  // const data = queryClient.fetchQuery<Data, Error>({
  //   queryKey: ["products"],
  //   queryFn: fetchExercise4Data,
  //   staleTime: exercise === "cached-products" ? 5 * 1000 : Infinity,
  // } as UseQueryOptions<Data, Error>);

  // const fetchData = async () => {
  //   if (exercise === "exercise4" || exercise === "cached-products") {
  //     return data;
  //   } else {
  //     return await fetchExerciseData(exercise);
  //   }
  // };

  const prodListData = await fetchExerciseData(exercise);
  // const prodListData =  fetchData();

  const products: Product[] = prodListData?.products ?? [];

  function findExerciseByRoute(route: string) {
    return links.find((exercise: NavLinkText) => exercise.route === route);
  }
  const exerciseTitle = findExerciseByRoute(exercise);

  // const handleClick=async (val:string) =>{
  //   'use server';
  //   console.log("console_val",val)
  // }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-8 text-center">
        {exerciseTitle?.text}
      </h2>
      {exercise === "exercise2" && <Revalidation />}

      {/* <CachedProducts exercise={exercise} handleClick={handleClick}/> */}
      <CachedProducts />
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
