'use server';

import { getFeaturedProductsList } from '@examples/services';
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

  const res: any = await getFeaturedProductsList();

  return (
    <>
      <BackButton />
      <DocHeading>Pattern 1 – Server Components for Static Pages</DocHeading>
      <h2 className="text-center">Deal Of The Week</h2>
      <div className="container">
        <ProductList products={res?.products} />
      </div>
    </>
  );
}
