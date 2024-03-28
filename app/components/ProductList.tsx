import React from "react";
import { Product } from "../types/interfaces";
import ProductCard from "./ProductCard";

const fetchProducts = async (exercise: string) => {
  let url = "https://nx-zones-products.vercel.app/ngd/api/products";
  if (exercise === "exercise2") {
    url = "https://nx-zones-products.vercel.app/ngd/api/products?random=trues";
  }

  const response = await fetch(url, {
    next: { revalidate: 120, tags: ["product"] },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const ProductListComp = async ({ exercise }: { exercise: string }) => {
  const Data = await fetchProducts(exercise);
  const products: Product[] = Data.products;
  return <ProductCard products={products} />;
};

export default ProductListComp;
