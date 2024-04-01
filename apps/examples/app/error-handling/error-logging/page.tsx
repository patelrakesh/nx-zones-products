'use server';

import {
  BackButton,
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
      <BackButton />
      <DocHeading>Error Logging</DocHeading>
      <DocParagraph>Error logging content will be added later</DocParagraph>
    </>
  );
}
