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
      <DocHeading>API State Management with Tanstack</DocHeading>
      <DocHeading subHeading={true}>What is Tanstack query?</DocHeading>
      <DocParagraph>
        It is data fetching, caching and API state management library. It has
        capabilities like caching, revalidating, retry on error, deduplication.
      </DocParagraph>
      <DocHeading subHeading={true}>When to use Tanstack?</DocHeading>
      <DocParagraph>
        1 - Using Tanstack query, We can fetch the data in one page and use the
        same data in another page without calling the API.
      </DocParagraph>
      <DocParagraph>
        2 - Using Tanstack query, We can store state data in globally.
      </DocParagraph>
      <DocHeading subHeading={true}>
        Different State management examples?
      </DocHeading>
      <h3 id="csr-api-data-cache">Example 1 - API data caching in CSR</h3>
      <DocParagraph>
        In SSR, Next.js provides built-in data/API caching using fetch. However,
        in CSR, fetch does not cache any API data. It will run the useEffect
        hook and call the API every time when we visit the client-side
        component. This is the first use case where we use Tanstack to cache
        that API data to avoid multiple API calls in client component for same
        API.
      </DocParagraph>
      <DocParagraph>
        <Link href="/tanstack-usage/csr-api-data-cache" id="example1">
          See working example
        </Link>
      </DocParagraph>
      <h3 id="on-demand-data-refetch">Example 2 - On Demand Data refetch</h3>
      <DocParagraph>
        In Tanstack, when we fetch data from API we can provide staleTime in ms.
        After staleTime is over it will refetch the data from API. using In On
        demand data refetching, We can refetch the data whenever we needed.
      </DocParagraph>
      <DocParagraph>
        In this example, We are fetching the data with 1 min staleTime. After
        that Tanstack will call the API again and refetch the data. There is a
        button &quot;Refetch&quot;, using it we can fetch data whenever we
        needed.
      </DocParagraph>
      <DocParagraph>
        <Link
          href="/tanstack-usage/csr-api-data-cache/recommended-products"
          id="example2"
        >
          See working example
        </Link>
      </DocParagraph>
      <h3 id="client-side-state">
        Example 3 - Store client side data in Tanstack State{' '}
      </h3>
      <DocParagraph>
        When we need to store client side state across pages. For Example page 1
        user enter form data, which we need to shown on another page without
        submitting to backend.
      </DocParagraph>
      <DocParagraph>
        On next page, intentionally we are failing the API call on click of
        confirm button because we want to show you the implemented retry logic
        on API failure. As per the retry logic API will be trigger automatically
        two times when the initial API call will be fail on click of confirm
        button.
      </DocParagraph>
      <DocParagraph>
        <Link href="/tanstack-usage/client-state" id="example3">
          See working example
        </Link>
      </DocParagraph>
      {/* <h3>Example 4 - Tanstack with SSR</h3>
      <DocParagraph>
        In SSR, we fetch our data on the server side and pass it to our page.tsx
        for generating HTML/View. Lets suppose we need that data on another
        page. In that case, we have to fetch the data again. However, we can
        also use Tanstack to cache our API response and use it on a different
        page without calling the API again.
      </DocParagraph>
      <DocParagraph>
        <Link href="/tanstack-usage/plp-ssr">See working example</Link>
      </DocParagraph> */}
    </>
  );
}
