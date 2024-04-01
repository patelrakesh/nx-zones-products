'use client';

import { useEffect, useState } from 'react';

import { ProductList } from '@verizon-nextgen/shared/ui';
import { getProductsList } from '../../services/products';

const ProductListingClient = ({ serverItems }: any) => {
  const [items, setItems] = useState(serverItems || []);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    getProductsList()
      .then(res => {
        setItems(res?.products);
      })
      .catch(console.log)
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div className="container">
      <ProductList products={items} showSkeletonLoader={loader} />
    </div>
  );
};
export default ProductListingClient;
