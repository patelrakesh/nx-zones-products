'use server';

import { getRandomProductById } from '@examples/services';
import {
  BackButton,
  DocHeading,
  ProductInfo,
} from '@verizon-nextgen/shared/ui';

export default async function Page({ params }: any) {
  const res: any = await getRandomProductById(params.id);
  const d = new Date();

  return (
    <div>
      <BackButton />
      <DocHeading>Dynamic Product Details page</DocHeading>
      <p className="text-center">{d.toString()}</p>
      <ProductInfo product={res} />
    </div>
  );
}
