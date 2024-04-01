'use server';

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

  const res: any = await getRandomProductsList();
  const d = new Date();

  return (
    <>
      <BackButton />
      <DocHeading>Pattern 1 – Server Components for Dynamic Pages</DocHeading>
      <h2 className="text-center">Deal Of The Week</h2>
      <p className="text-center">
        {d.toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}
      </p>

      <div className="container">
        <ProductList products={res.products} dynamic={true} />
      </div>
    </>
  );
}
