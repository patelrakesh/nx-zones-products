import React from "react";
import "./productlist.css";
import { Product } from "../../types/interfaces";

const fetchProducts = async (exercise: string) => {
  console.log("params", exercise);
  const response = await fetch(
    "https://nx-zones-products.vercel.app/ngd/api/products"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const ProductList = async ({ params }: { params: { exercise: string } }) => {
  const exercise: string = params.exercise;

  const Data = await fetchProducts(exercise);

  const products: Product[] = Data.products;

  return (
    <>
      <div className="deal-of-the-week">
        <h2>Product List</h2>
        <ul>
          {products.map((product: Product) => (
            <>
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
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
