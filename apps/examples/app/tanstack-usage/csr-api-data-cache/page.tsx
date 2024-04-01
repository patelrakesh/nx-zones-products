'use client';

/*
 - This pattern is basically to show data fetching on client side in this page.
 - And, using the cached data on 'recommended-products' page without calling api call on client
   until staleTime is not over. 
 - Data fetching on client side and fetched data will be cached on client.
 - If same data requried by other component, then use same queryKey instance. 
*/

import { useQuery } from '@tanstack/react-query';
import styles from './page.module.css';
import {
  BackButton,
  DocHeading,
  DocParagraph,
  ProductListingWithRecommendation,
} from '@verizon-nextgen/shared/ui';
import { getRandomProductsList } from '@examples/services';
import { staleTimeOneMinute } from '@examples/constants/tanstackQueryStaleTime';

export default function Page() {
  const { isFetching, data } = useQuery({
    queryKey: ['recommended-product-key'],
    queryFn: () => getRandomProductsList(),
    staleTime: staleTimeOneMinute,
  });

  if (isFetching) {
    return <h2 className="text-center">Loading...</h2>;
  }

  return (
    <>
      <div className={styles.infoText}>
        <BackButton />
        <DocHeading>API State Management with tanstack</DocHeading>
        <DocParagraph>
          This pattern is basically to show data fetching on client side in this
          page. And, using the cached data on recommended products page without
          calling api on client for same data until staleTime is not over. Click
          on view more to see the results and stale time of recommended products
          is 1 mins
        </DocParagraph>
      </div>
      <ProductListingWithRecommendation productData={data?.products} />
    </>
  );
}
