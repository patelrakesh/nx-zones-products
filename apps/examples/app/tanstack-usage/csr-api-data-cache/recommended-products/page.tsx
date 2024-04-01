'use client';
/* 
  - Getting cached data that is already fetched in ClientCache > page.tsx.
  - If cached data is available then no api call will be happen, but we have to pass staleTime.
*/

import {
  BackButton,
  DocHeading,
  ProductList,
} from '@verizon-nextgen/shared/ui';
import { useQuery } from '@tanstack/react-query';
import styles from '../page.module.css';
import { staleTimeOneMinute } from '../../../../constants/tanstackQueryStaleTime';
import { getRandomProductsList } from '@examples/services';

export default function Page() {
  const { isFetching, data, refetch } = useQuery({
    queryKey: ['recommended-product-key'],
    queryFn: () => getRandomProductsList(),
    staleTime: staleTimeOneMinute,
  });

  const handleRefetch = () => {
    refetch();
  };

  return (
    <>
      <BackButton />
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-4-5">
          <DocHeading>Get Client Side Cache Data</DocHeading>
        </div>
        <div className="pure-u-1 pure-u-md-1-5">
          <button
            type="button"
            className={styles.refetchButton}
            onClick={handleRefetch}
          >
            Refetch
          </button>
        </div>
      </div>
      {isFetching ? (
        <h2 className="text-center">Loading...</h2>
      ) : (
        <ProductList
          products={data?.products}
          showSkeletonLoader={isFetching}
        />
      )}
    </>
  );
}
