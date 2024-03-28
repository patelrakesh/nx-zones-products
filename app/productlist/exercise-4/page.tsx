import React from "react";
import TanstackProductListing from "@/app/components/TanstackProductListing";

const ProductList = async ({ params }: { params: { exercise: string } }) => {
  return (
    <TanstackProductListing params={params} />
  );
};

export default ProductList;
