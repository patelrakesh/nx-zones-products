"use client";
import React, { useEffect, useState } from "react";
import { UseQueryOptions, QueryClient } from "@tanstack/react-query";
import { Data, Product } from "@/app/types/interfaces";
import ProductCard from "./ProductCard";

const TanstackProductListing = ({
  params,
}: {
  params: { exercise: string };
}) => {
  const exercise: string = params.exercise;
  const queryClient = new QueryClient();
  const [products, setProducts] = useState<Product[]>([]);
  const [isPending, setIsPending] = useState(false);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://nx-zones-products.vercel.app/ngd/api/products?random=true"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };

  useEffect(() => {
    try {
      setIsPending(true);
      const data: any = queryClient.fetchQuery<Data, Error>({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: exercise === "cached-products" ? 5 * 1000 : Infinity,
      } as UseQueryOptions<Data, Error>);
      data.then((res: any) => {
        setProducts(res.products);
        setIsPending(false);
      });
    } catch (error) {
      console.log(error);
      setIsPending(false);
    }
  }, [exercise]);

  const handleClick = async () => {
    await queryClient.refetchQueries({
      queryKey: ["products"],
    });
  };

  return (
    <>
      {!isPending && (
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-8 text-center">
            {exercise === "cached-products"
              ? "Tanstack Query Cached Products"
              : "Tanstack Query"}
          </h2>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleClick()}
          >
            Click to fetch fresh data
          </button>

          <ProductCard products={products} />
        </div>
      )}
    </>
  );
};

export default TanstackProductListing;
