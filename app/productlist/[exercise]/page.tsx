"use client"
import React from "react";
import { Product } from "../../types/interfaces";
import "./productlist.css";
import { fetchExercise4Data } from "@/app/utils/fetchData";

const ProductList =  ({ params }: { params: { exercise: string } }) => {
  const exercise: string = params.exercise;

  const {isPending, error, data} = fetchExercise4Data();

  const products: Product[] | undefined = data?.products;

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
      <div className="deal-of-the-week">
        <h2>Product List</h2>
        <Link></Link>
        <ul>
          {products?.map((product: Product ) => (
            <li key={product.id}>
              <a href={`/products/${product.id}`}>
                <div className="product-card">
                  <img src={product.thumbnail} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>Brand: {product.brand}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default ProductList;
