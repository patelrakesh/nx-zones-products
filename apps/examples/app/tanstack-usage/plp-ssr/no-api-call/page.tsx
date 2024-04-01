'use client';

import { useQuery } from '@tanstack/react-query';
import { ProductList } from '@verizon-nextgen/shared/ui';
import { staleTimeOneMinute } from '../../../../constants/tanstackQueryStaleTime';

export default function PageWithNoAPICall() {
  const { data } = useQuery({
    queryKey: ['plp-ssr'],
    queryFn: () =>
      fetch('https://dummyjson.com/products?limit=8')
        .then((res) => res.json())
        .then((res) => {
          return res.products;
        }),
    staleTime: staleTimeOneMinute,
  }) as any;
  return (
    <>
      <h4 className="text-center">
        Pattern 5.1- Navigate on other page to check no API call on client
      </h4>
      <ProductList products={data} />
    </>
  );
}
