'use server';

import ProductListingClient from '@examples/components/ProductListingClient';
import { BackButton, DocHeading } from '@verizon-nextgen/shared/ui';

export default async function Page() {
  return (
    <>
      <BackButton />
      <DocHeading>Pattern 4– Client Rendering</DocHeading>
      <ProductListingClient />
    </>
  );
}
