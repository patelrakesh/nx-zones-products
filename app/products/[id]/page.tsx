import React from "react";
import ProductDetails from "@/app/components/ProductDetails";
import BackButton from "@/app/components/BackButton";


export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}


const PDP = async ({
  params,
}: {
  params: { exercise: string; id: string };
}) => {
  return (
    <div className="p-5">
      <span className="text-cyan-900 font-extrabold">
        <BackButton/>
      </span>
      <h1 className="text-xl">Product Details of Product Id : {params.id}</h1>
      <ProductDetails exercise={params.exercise} id={params.id} />
    </div>
  );
};

export default PDP;
