'use server';

import RevalidatePathButton from '@examples/components/RevalidateButtons/RevalidatePathButton';
import RevalidateTagButton from '@examples/components/RevalidateButtons/RevalidateTagButton';
import { NEXT_PRODUCTS_CACHE_OPTION } from '@examples/constants/nextCacheOption';
import { getRandomProductsList } from '@examples/services';
import {
  BackButton,
  DocHeading,
  ProductList,
} from '@verizon-nextgen/shared/ui';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   *
   */

  const res: any = await getRandomProductsList(NEXT_PRODUCTS_CACHE_OPTION);
  const d = new Date();

  return (
    <>
      <BackButton />
      <DocHeading>
        Example – Static Pages with revalidation time 5 mins
      </DocHeading>
      <div className="pure-g">
        <div className="pure-u-1 pure-u-lg-1-2">
          <h2>Deal Of The Week</h2>
        </div>
        <div className="pure-u-1 pure-u-lg-1-4">
          <RevalidateTagButton />
        </div>
        <div className="pure-u-1 pure-u-lg-1-4">
          <RevalidatePathButton />
        </div>
      </div>
      <p className="text-center">
        {d.toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}
      </p>

      <div className="container">
        <ProductList products={res?.products} />
      </div>
    </>
  );
}
