'use client'
import React, { useEffect, useState } from "react";
import { useQuery, UseQueryOptions, UseQueryResult, QueryClient } from "@tanstack/react-query";
import { Product, Data } from "@/app/types/interfaces";
import { useRouter } from 'next/navigation'
import CachedProducts from "@/app/examples/CachedProducts";

const TanstackProductListing = ({ params }: { params: { exercise: string } }) => {
  const exercise: string = params.exercise;
  const queryClient = new QueryClient();
  const [products, setProducts] = useState<any>([]);
  const [isPending, setIsPending] = useState(false);
  // const router =  useRouter();

  const fetchProducts = async () => {
    const response = await fetch("https://nx-zones-products.vercel.app/ngd/api/products?random=true");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };

  useEffect(()=>{
    try {
      setIsPending(true)
      const data:any = queryClient.fetchQuery<Data, Error>({
      queryKey: ["products"],
      queryFn: fetchProducts,
      staleTime: exercise === "cached-products" ? 5 * 1000 : Infinity,
    } as UseQueryOptions<Data, Error>);
    data.then((res:any)=>{
      console.log("consle_arr",res.products)
      setProducts(res.products)
      setIsPending(false)
    })
  } catch (error) {
    console.log(error)
    setIsPending(false)
  }
  },[exercise])
// let data:any;
//   try {
//     setIsPending(true)
//   data = queryClient.fetchQuery<Data, Error>({
//     queryKey: ["products"],
//     queryFn: fetchProducts,
//     staleTime: exercise === "cached-products" ? 5 * 1000 : Infinity,
//   } as UseQueryOptions<Data, Error>);
//   data.then((res:any)=>{
//     console.log("consle_arr",res.products)
//     setIsPending(false)
//     // setProducts(res.products)
//   })
// } catch (error) {
//   setIsPending(false)
//   console.log(error)
// }
  // const { isPending, error, data, refetch } = useQuery<Data, Error>({
  //   queryKey: ["products"],
  //   queryFn: fetchProducts,
  //   // enabled: true,
  //   suspense: true,
  //   // staleTime: Infinity,
  //   initialData: exercise === "cached-products"
  //     ? queryClient.getQueryData(["products"]) // Get cached data
  //     : undefined,
  // } as UseQueryOptions<Data, Error> )


  // const products: Product[] = data?.products ?? [];

  const handleClick = async() => {
    await queryClient.refetchQueries({
      queryKey: ['products'],
      // exact: true,
    })

    // console.log("console_val");
    // refetch()
    // router.refresh();
  };

  return (
    // <Suspense fallback={<div>Loading products...</div>}>
    <>
    {!isPending && <div className="container mx-auto">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-8 text-center">
        {exercise === "cached-products" ? "Tanstack Query Cached Products" : "Tanstack Query"}
      </h2>
      <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick()}>Click to fetch fresh data</button>
      {/* <CachedProducts refetch={refetch}/> */}
      <ul className="grid grid-cols-3 gap-4">
        {products.length > 0 &&
          products.map((product:any) => (
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
    </div>}
    </>
    // </Suspense>
  );
};

export default TanstackProductListing;
