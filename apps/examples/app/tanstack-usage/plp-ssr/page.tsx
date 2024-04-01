'use server';

/*
  - It is not a recommended way for SSR using tanstack react query.
  - Server side caching and revalidating is not possible with tanstack query.
  - For server caching it's good to go with NextJs using native fetch, it provides caching on server by default.
  - If any other client component need the same data then we can use tanstack to store the data on cache. 
*/

import ServerSideProductListingWithTanstack from '@examples/components/ServerSideProductListingWithTanstack';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function Page() {
  const queryClient = new QueryClient();
  let productsData;
  try {
    productsData = await queryClient.fetchQuery({
      queryKey: ['plp-ssr'],
      queryFn: () =>
        fetch('https://dummyjson.com/products?limit=8')
          .then((res) => res.json())
          .then((res) => {
            return res.products;
          }),
    });
  } catch (error) {
    console.log(error);
  }

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ServerSideProductListingWithTanstack initialData={productsData} />
    </HydrationBoundary>
  );
}
