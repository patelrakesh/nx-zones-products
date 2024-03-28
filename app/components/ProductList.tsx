import React from "react";
import { Product } from "../types/interfaces";
import { fetchExerciseData } from "../utils/fetchData";
import ProductCard from "./ProductCard";

const ProductListComp = async ({ exercise }: { exercise: string }) => {
  const Data = await fetchExerciseData(exercise);
  const products: Product[] = Data.products;
  return <ProductCard products={products} />;
};

export default ProductListComp;
