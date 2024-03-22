import React from 'react';
import ProductDetails from '@/app/components/ProductDetails';
import { Product, Params } from '@/app/types/interfaces';

const fetchProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`https://nx-zones-products.vercel.app/ngd/api/products/${id}`);
  return response.json();

};

const PDP = async ({ params }: { params: Params }) => {

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  const Data = await fetchProduct(params.id)
  const product = {}



  return (
    <div>
      <h1>Product Details of {params.id}</h1>
      <ProductDetails product={Data} />
    </div>
  );
};

export default PDP;
