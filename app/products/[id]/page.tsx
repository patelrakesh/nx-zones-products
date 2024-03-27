import React from "react";
import ProductDetails from "@/app/components/ProductDetails";

const PDP = async ({
  params,
}: {
  params: { exercise: string; id: string };
}) => {
  return (
    <div className="p-5">
      <span className="text-cyan-900 font-extrabold">
        <a href={`/productlist/${params.exercise}`}>{`< Back`}</a>
      </span>
      <h1 className="text-xl">Product Details of Product Id : {params.id}</h1>
      <ProductDetails exercise={params.exercise} id={params.id} />
    </div>
  );
};

export default PDP;
