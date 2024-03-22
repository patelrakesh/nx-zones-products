import React from 'react';
import ProductList from './components/ProductList';

const fetchProducts = async () => {
  const response = await fetch('https://nx-zones-products.vercel.app/ngd/api/products');

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
};

export default async function PLP() {
  const data = await fetchProducts()
  return (
    <>
      <h1>Product List</h1>
      <ProductList products={data.products} />
    </>
  )
}