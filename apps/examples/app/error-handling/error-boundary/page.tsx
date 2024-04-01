'use server';

import {
  BackButton,
  DocHeading,
  DocParagraph,
} from '@verizon-nextgen/shared/ui';
import Link from 'next/link';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <BackButton />
      <DocHeading>Error Boundary</DocHeading>
      <DocHeading subHeading>Custom Error Boundary</DocHeading>
      <DocParagraph>
        We made an Custom Error Boundary component that deals with errors from
        APIs. It works for both client and server-side rendering. This component
        takes an error object and shows a backup UI accordingly.
      </DocParagraph>
      <h3>Feature</h3>
      <ul>
        <li>Works for both client and server-side rendering</li>
        <li>
          Will handles API errors, non 200 HTTP API failures and handled erros
          with 200 status code
        </li>
        <li>
          Fallback UI change based on the HTTP status codes or as customized
        </li>
        <li>
          It can also manage redirects in certain situations, such as when
          encountering a 401 HTTP status code.
        </li>
      </ul>
      <h3>Code Example:</h3>
      <pre>
        {`
        const Page = async () => {
          let error;
          await customFetch(
           ...
          ).catch(err => (error = err));
        
          return (
            <>
              <CustomErrorBoundary error={error}>
                <h4>API 1 Res</h4>
              </CustomErrorBoundary>
            </>
          );
        };
        
        export default Page;
        
        `}
      </pre>
      <h3>Example - API Error Handed in Server-Side Redering</h3>
      <DocParagraph>
        <Link href="/error-handling/error-boundary/ssr-api-error">
          See Examples
        </Link>
      </DocParagraph>
      <h3>Example - 401 API Error Handed in Server-Side Redering</h3>
      <DocParagraph>
        When the server-side API responds with a 401 error (Unauthorized), we
        handle this situation using an error boundary mechanism and redirect the
        user to Home page for now.
      </DocParagraph>
      <DocParagraph>
        <Link href="/error-handling/error-boundary/ssr-api-unauthorized-error">
          See Examples
        </Link>
      </DocParagraph>
      {/* <h3>Example - 404 API Error Handed in Server-Side Redering</h3>
      <DocParagraph>
        When the server-side API responds with a 404 error (Not Found), we
        handle this situation using an error boundary mechanism and redirect the
        user to a dedicated Not Found page.
      </DocParagraph>
      <DocParagraph>
        <Link href="/error-handling/error-boundary/ssr-api-not-found-error">
          See Examples
        </Link>
      </DocParagraph> */}
      <h3>Example - API Error Handed in Client-Side Redering</h3>
      <DocParagraph>
        We can also handle errors on Client Side rendering.
      </DocParagraph>
      <DocParagraph>
        <Link href="/error-handling/error-boundary/csr-api-error">
          See Examples
        </Link>
      </DocParagraph>
      <h3>API Error Handed in Client-Side Redering with retry</h3>
      <DocParagraph>
        <Link href="/error-handling/error-boundary/csr-api-error-with-retry">
          See Examples
        </Link>
      </DocParagraph>

      {/* <DocHeading subHeading>Component Level/ JS Error Boundary</DocHeading>
      <DocParagraph>
        For Component Level/ JS Error, We are using{' '}
        <a
          target="_blank"
          href="https://www.npmjs.com/package/react-error-boundary"
        >
          react-error-boundary
        </a>
      </DocParagraph> */}
      {/* <DocHeading subHeading>JS Error</DocHeading>
      <DocParagraph>
        <Link href="/error-handling/error-boundary/js-error">See Examples</Link>
      </DocParagraph>
      <DocHeading subHeading>JS Error with Next.js Parallel Routes</DocHeading>
      <DocParagraph>
        <Link href="/error-handling/error-boundary/parallel-routes-js-error">
          See Examples
        </Link>
      </DocParagraph> */}
    </>
  );
}
