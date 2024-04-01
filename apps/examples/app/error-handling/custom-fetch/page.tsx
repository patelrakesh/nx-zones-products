'use server';

import {
  BackButton,
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
      <BackButton />
      <DocHeading>CustomFetch Function</DocHeading>
      <DocParagraph>
        The customFetch function is designed to perform API requests in both
        client and server side and handles API error.
      </DocParagraph>
      <h3>Features</h3>
      <ul>
        <li>Works on both client and server side</li>
        <li>Uses the built-in native Fetch API</li>
        <li>
          Will handles API errors, non 200 HTTP API failures and handled erros
          with 200 status code
        </li>
        <li>Inbuilt Retry feature on API failure</li>
        <li>Error logging capability</li>
        <li>Logs API response time</li>
        <li>Supports Next.js server side caching and revalidation option</li>
      </ul>
      <h3>Function Signature</h3>
      <pre>
        {`
        async customFetch(
            url: string,
            type: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
            options: CustomFetchOptions = {}
        ): Promise<Response | undefined>
        `}
      </pre>
      <h3>Parameters</h3>
      <ul>
        <li>
          <b>url:</b> string: Specifies the API endpoint URL.
        </li>
        <li>
          <b>type:</b> GET | POST | PUT | PATCH | DELETE = GET: Defines the HTTP
          request type. Defaults to GET if not specified.
        </li>
        <li>
          <b>options:</b> CustomFetchOptions = {}: Specifies custom fetch
          options. Default is an empty object.
        </li>
      </ul>
      <h3>CustomFetchOptions Type</h3>
      <pre>
        {`
        export type CustomFetchOptions = {
          body?: RequestInit['body'] | Record<string, any>;
          cacheOption?: any;
          headers?: [string, string][] | Record<string, string> | Headers;
          retryAttempts?: number;
          retryDelay?: number;
          onApiFailedCallback?: (attemptCount: number) => void;
          onRetryCallback?: (attemptCount: number) => void;
        };
        `}
      </pre>
      <ul>
        <li>
          <b>body?:</b> RequestInit[body] | Record&lt;string, any&gt;: Optional
          request body, which can be of type RequestInit[body] or a generic
          object with string keys and any values.
        </li>
        <li>
          <b>cacheOption?:</b> any: Optional Next.js caching option of any type.
        </li>
        <li>
          <b>headers?:</b> [string, string][] | Record&lt;string, string&gt; |
          Headers: Optional headers configuration, which can be specified as an
          array of string tuples, a key-value object, or a Headers object from
          the Fetch API.
        </li>
        <li>
          <b>retryAttempts?:</b> number: Optional number indicating the maximum
          retry attempts.
        </li>
        <li>
          <b>retryDelay?:</b> number: Optional delay (in milliseconds) between
          retry attempts.
        </li>
        <li>
          <b>onApiFailedCallback?: </b> (attemptCount: number) =&gt; void:
          Optional callback function triggered when an API call attempt fails,
          with the number of retry attempts made so far as a parameter.
        </li>
        <li>
          <b>onRetryCallback?: </b> (attemptCount: number) =&gt; void: Optional
          callback function triggered when a retry attempt starts, with the
          number of retry attempts made so far as a parameter.
        </li>
      </ul>

      <h3>Return Value</h3>
      <DocParagraph>
        The function returns a Promise that resolves to a Fetch API Response
        object.
      </DocParagraph>
      <h3>Examples</h3>
      <DocParagraph>
        Client Side API Error with retry{' '}
        <CustomLink href="/error-handling/error-boundary/csr-api-error-with-retry">
          See Working Example
        </CustomLink>
      </DocParagraph>
    </>
  );
}
