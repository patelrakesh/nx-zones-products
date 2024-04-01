'use server';

import { getProductById } from '@examples/services';
import {
  BackButton,
  DocHeading,
  ProductInfo,
} from '@verizon-nextgen/shared/ui';

export default async function Page({ params }: any) {
  const res = await getProductById(params.id);

  return (
    <>
      <BackButton />
      <DocHeading>Product Details page SSG</DocHeading>
      <ProductInfo product={res} />
    </>
  );
}

export async function generateStaticParams() {
  const mockArr = new Array(6).fill(0);
  return mockArr.map((_, i) => ({
    id: String(i + 1),
  }));
}
