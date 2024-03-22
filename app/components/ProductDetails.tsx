import React from 'react';
import { Product } from '../types/interfaces';

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} height={200} />
      <p><b>Description :</b> {product.description}</p>
      {/* ... other product details */}
    </div>
  );
};

export default ProductDetails;