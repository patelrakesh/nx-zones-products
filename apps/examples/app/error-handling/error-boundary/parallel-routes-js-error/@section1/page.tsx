'use client';

import { Button, DocHeading, DocParagraph } from '@verizon-nextgen/shared/ui';

const Page = () => {
  const errors: any = null;

  const onButtonClick = () => {
    errors.map((e: any) => console.log(e));
  };

  return (
    <>
      <DocHeading>Section 1 Main Content</DocHeading>
      <DocParagraph>Trying to trigger some JS error on this page</DocParagraph>
      <Button onClick={onButtonClick}>Click here for triggering error</Button>
    </>
  );
};

export default Page;
