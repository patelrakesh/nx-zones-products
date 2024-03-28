"use client";
import React from "react";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Data, Product } from "@/app/types/interfaces";
import ProductCard from "./ProductCard";
import BackButton from "./BackButton";
import { fetchExercise4Data } from "../utils/fetchData";
import CachedProducts from "./CachedProducts";

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
          <BackButton />
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-8 text-center">
            {exercise === "cached-products"
              ? "Tanstack Query Cached Products"
              : "Tanstack Query"}
          </h2>
          <CachedProducts handleClick={refetch} />
          <ProductCard products={products} />
        </div>
      )}
    </>
  );
};

export default TanstackProductListing;
