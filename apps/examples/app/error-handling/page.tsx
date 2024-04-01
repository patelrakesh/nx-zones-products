'use server';

import { DocHeading, DocParagraph } from '@verizon-nextgen/shared/ui';
import Link from 'next/link';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <DocHeading>Error Handling</DocHeading>
      <DocParagraph>
        - CustomFetch Function{' '}
        <Link href="/error-handling/custom-fetch">Click here</Link>
      </DocParagraph>
      <DocParagraph>
        - Learn about the usage of Error Boundary{' '}
        <Link href="/error-handling/error-boundary">Click here</Link>
      </DocParagraph>
      <DocParagraph>
        - Learn about the usage of Error Logging{' '}
        <Link href="/error-handling/error-logging">Click here</Link>
      </DocParagraph>
    </>
  );
}
