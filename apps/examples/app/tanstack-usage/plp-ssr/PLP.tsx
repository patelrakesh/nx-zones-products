'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { ProductList } from '@verizon-nextgen/shared/ui';

const defaultOptions = { method: 'GET' };

const api = async (url: string, options = defaultOptions) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    return Promise.reject({
      status: res.status,
      message: res.statusText,
      ok: res.ok,
    });
  }
  const json = await res.json();
  return json;
};

const useCustomQuery = (options: any) => {
  const { isError, error, ...props } = useQuery(options);

  // can handle network error here mostly useful for redirection

  // if (isError && error?.status === 404) {
  //   return notFound();
  // }

  return { isError, error, ...props };
};

export default function PLP() {
  const { data } = useCustomQuery({
    queryKey: ['tanstack-ssr'],
    queryFn: () => api('https://dummyjson.com/products?limit=8'),
  }) as any;

  return (
    <>
      <h1 className="text-center">Pattern 5– SSR with tanstack</h1>
      <Link href="/tanstack/plp-ssr/no-api-call">
        <p className="text-center">
          Pattern 5.1- Navigate on other page to check no API call on client
        </p>
      </Link>
      <ProductList products={data.products} />
    </>
  );
}
