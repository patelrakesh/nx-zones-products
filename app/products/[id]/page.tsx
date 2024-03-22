import React from "react";
import ProductDetails from "@/app/components/ProductDetails";
import { Product, Params } from "@/app/types/interfaces";

const fetchProduct = async (id: string): Promise<Product> => {
  const response = await fetch(
    `https://nx-zones-products.vercel.app/ngd/api/products/${id}`
  );
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
  const Data = await fetchProduct(params.id);

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
