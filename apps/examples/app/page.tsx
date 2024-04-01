'use server';

import {
  CustomLink,
  DocHeading,
  DocParagraph,
} from '@verizon-nextgen/shared/ui';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <DocHeading>Multizone app 2 - Examples</DocHeading>
      <DocParagraph>
        - Nextjs Rendering pattern usage{' '}
        <CustomLink prefetch="onHover" href="/rendering-pattern">
          Click here
        </CustomLink>
      </DocParagraph>
      <DocParagraph>
        - State Management usage with tanstack{' '}
        <CustomLink prefetch="onHover" href="/tanstack-usage">
          Click here
        </CustomLink>
      </DocParagraph>
      <DocParagraph>
        - Error Handling{' '}
        <CustomLink href="/error-handling">Click here</CustomLink>
      </DocParagraph>
      <DocParagraph>
        - Analytics Integration{' '}
        <CustomLink href="/docs/analytics-integration">Click here</CustomLink>
      </DocParagraph>
    </>
  );
}
