"use client";
import React from "react";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Product, Data } from "@/app/types/interfaces";
import CachedProducts from "@/app/components/CachedProducts";
import { fetchExercise4Data } from "../utils/fetchData";

const TanstackProductListing = ({
  params,
}: {
  params: { exercise: string };
}) => {
  const exercise: string = params.exercise;
  const { isPending, error, data, refetch } = useQuery<Data, Error>({
    queryKey: ["products"],
    queryFn: fetchExercise4Data,
    staleTime: 10000,
  } as UseQueryOptions<Data, Error>);

  const products: Product[] = data?.products ?? [];

  return (
    <>
      {error && <div>Something went wrong...</div>}
      {isPending && <div>Loading...</div>}
      {!isPending && (
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-8 text-center">
            {exercise === "cached-products"
              ? "Tanstack Query Cached Products"
              : "Tanstack Query"}
          </h2>
          <CachedProducts handleClick={refetch} />
          <ul className="grid grid-cols-3 gap-4">
            {products.length > 0 &&
              products.map((product: Product) => (
                <li key={product.id}>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <a href={`/products/${product.id}`}>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-48 w-full object-cover rounded-t-lg"
                      />
                      <div className="mt-4">
                        <h3 className="text-xl font-semibold">
                          {product.title}
                        </h3>
                        <p className="text-gray-600">Brand: {product.brand}</p>
                        <div className="items-center">
                          <p className="text-gray-600">
                            Rating: {product.rating}
                          </p>
                          <p className="text-gray-600">
                            Price: {product.price}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default TanstackProductListing;
