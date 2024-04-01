'use server';

import ServerSideProductListing from '@examples/components/ServerSideProductListing';
import { BackButton, DocHeading } from '@verizon-nextgen/shared/ui';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <>
      <BackButton />
      <DocHeading>Pattern 2– Server Components + Streaming</DocHeading>
      <Suspense fallback={<p>Loading products...</p>}>
        <ServerSideProductListing />
      </Suspense>
    </>
  );
}
