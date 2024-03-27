import React, { Suspense } from "react";
import { Product } from "../../types/interfaces";
import { NavLinkText } from "../../types/interfaces";
import { links } from "@/app/utils/constant";
import RevalidateButton from "../../pages/RevalidateButton";
import ProductListing from "@/app/components/ProductListing";

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
      {exercise === "exercise2" && <RevalidateButton exercise={exercise} />}
      {/* <SuspenseList revealOrder="forwards"> */}
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductListing products={products} />
      </Suspense>
      {/* </SuspenseList> */}
    </div>
  );
};

export default ProductList;
