import React from "react";
import { Product } from "../types/interfaces";

const ProductDetails = ({ product }: { product: Product }) => {

  return (
    <>
      <div className="flex gap-3 mt-5">
        <img src={product.thumbnail} className="rounded-xl" />
        <div>
          <p className="text-xl font-bold">{product.title}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
