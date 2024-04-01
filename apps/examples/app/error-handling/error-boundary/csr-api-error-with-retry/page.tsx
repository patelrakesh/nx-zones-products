'use client';

import {
  BackButton,
  DocHeading,
  DocParagraph,
  CustomErrorBoundary,
  customFetch,
} from '@verizon-nextgen/shared/ui';
import { useEffect, useRef, useState } from 'react';

const Page = () => {
  const [error, setError] = useState(null);
  const errorLogRef: any = useRef(null);

  const logError = (msg: string) => {
    const msgElm = document.createElement('p');
    msgElm.innerHTML = msg;
    errorLogRef?.current?.appendChild(msgElm);
  };

  useEffect(() => {
    customFetch(
      `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/error/INTERNAL_SERVER_ERROR`,
      'GET',
      {
        retryAttempts: 2,
        retryDelay: 1000, // 1sec
        onApiFailedCallback: attempCount => {
          logError(`API attempt failed - ` + attempCount);
        },
      }
    ).catch(err => setError(err));
  }, []);

  return (
    <>
      <BackButton />
      <DocHeading>Client Side API Error with retry</DocHeading>
      <DocParagraph>
        This page calls an API, but sometimes the API encounters an error. We
        have set it up so that if the API fails the first time, it will
        automatically try again two more times. And finally it will show error
        fallback UI view.
      </DocParagraph>

      <CustomErrorBoundary error={error}>
        <h4>API call is in progress...</h4>
      </CustomErrorBoundary>

      <DocHeading subHeading>API logs are here:</DocHeading>

      <code ref={errorLogRef} />
    </>
  );
};

export default Page;
