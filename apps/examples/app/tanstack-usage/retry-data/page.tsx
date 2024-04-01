'use client';

/*
  - By default, useQuery hook retry data 3 times. If we'll pass retry 0 then no retry will be happen.
  - Retry the data fetching 2 times when api failed to reponse.
*/

import { ProductList } from '@verizon-nextgen/shared/ui';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const { isFetching, data, isError } = useQuery({
    queryKey: ['retry-data-fetching'],
    queryFn: () =>
      fetch('https://dummyjson.com/products22?limit=8')
        .then((res) => res.json())
        .then((res) => {
          return res.products;
        }),
    retry: 2,
  });

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    router.push('/docs/tanstack-usage');
  }

  return (
    <>
      <h1 className="text-center">
        Pattern 7- Retry data when api failed to response
      </h1>
      <ProductList products={data} />
    </>
  );
}
