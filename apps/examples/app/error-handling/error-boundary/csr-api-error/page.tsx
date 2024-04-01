'use client';

import {
  BackButton,
  DocHeading,
  DocParagraph,
  CustomErrorBoundary,
  customFetch,
} from '@verizon-nextgen/shared/ui';
import { useEffect, useState } from 'react';

const Page = () => {
  const [error, setError] = useState(null);
  const [error1, set1Error] = useState(null);
  const [error2, set2Error] = useState(null);

  useEffect(() => {
    customFetch(
      `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/error/OK_WITH_ERROR`
    ).catch(err => setError(err));

    customFetch(
      `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/error/BAD_REQUEST`
    ).catch(err => set1Error(err));

    customFetch(
      `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/error/INTERNAL_SERVER_ERROR`
    ).catch(err => set2Error(err));
  }, []);

  return (
    <>
      <BackButton />
      <DocHeading>Client Side API Error Examples</DocHeading>
      <DocParagraph>
        On this page, we have three sections, each with its own API. The first
        API is responding with an error but showing a 200 success code. The
        second API is responding with a 400 Bad Request error, and the third one
        is responding with a 500 Server Error. The error boundary has caught all
        the errors and is displaying the UI accordingly.
      </DocParagraph>

      <DocHeading subHeading>Section 1</DocHeading>
      <CustomErrorBoundary error={error}>
        <h4>API 1 Res</h4>
      </CustomErrorBoundary>

      <DocHeading subHeading>Section 2</DocHeading>
      <CustomErrorBoundary error={error1}>
        <h4>API 2 Res</h4>
      </CustomErrorBoundary>

      <DocHeading subHeading>Section 3</DocHeading>
      <CustomErrorBoundary error={error2}>
        <h4>API 3 Res</h4>
      </CustomErrorBoundary>
    </>
  );
};

export default Page;
