import React from "react";
import "./productlist.css";
import { Product } from "../types/interfaces";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="deal-of-the-week">
      <h2>Deal Of The Week</h2>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            <a href={`products/${product.id}`}>
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
