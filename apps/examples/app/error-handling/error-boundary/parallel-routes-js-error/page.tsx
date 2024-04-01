'use client';

import {
  BackButton,
  DocHeading,
  DocParagraph,
} from '@verizon-nextgen/shared/ui';

const Page = () => {
  const errors: any = null;

  return (
    <>
      <BackButton />
      <DocHeading>JS Error with Next.js Parallel Routes</DocHeading>
      <DocParagraph>
        This page has 3 sections. 1 - main content of this page, 2 - section 1,
        3 - section 2. Trying to trigger some JS error on section 1.
      </DocParagraph>
    </>
  );
};

export default Page;
