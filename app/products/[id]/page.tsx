import React from "react";
import ProductDetails from "@/app/components/ProductDetails";
import { Product, Params } from "@/app/types/interfaces";

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

const PDP = async ({
  params,
}: {
  params: { exercise: string; id: string };
}) => {
  const Data = await fetchProduct(params.id, params.exercise);

  return (
    <div className="p-5">
      <span className="text-cyan-900 font-extrabold">
        <a href="/">{`< Back`}</a>
      </span>
      <h1 className="text-xl">Product Details of Product Id : {params.id}</h1>
      <ProductDetails product={Data} />
    </div>
  );
};

export default PDP;
