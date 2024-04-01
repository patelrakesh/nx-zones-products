'use server';

import HybridProductListing from '@examples/components/HybridProductListing';
import { BackButton, DocHeading } from '@verizon-nextgen/shared/ui';

export default async function Page() {
  return (
    <>
      <BackButton />
      <DocHeading>Pattern 3– Server + Client Rendering</DocHeading>
      <HybridProductListing />
    </>
  );
}
