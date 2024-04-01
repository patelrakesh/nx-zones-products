'use client';

import {
  BackButton,
  Button,
  DocHeading,
  DocParagraph,
} from '@verizon-nextgen/shared/ui';
import { ErrorBoundary } from 'react-error-boundary';

const Page = () => {
  const errors: any = null;

  return (
    <>
      <BackButton />
      <DocHeading>Main Content of JS error page</DocHeading>
      <DocParagraph>Trying to trigger some JS error on this page</DocParagraph>
      <ErrorBoundary fallbackRender={() => <>Error</>}>
        <Button onClick={() => errors.map((e: any) => console.log(e))}>
          Click here for triggering error
        </Button>
      </ErrorBoundary>
    </>
  );
};

export default Page;
