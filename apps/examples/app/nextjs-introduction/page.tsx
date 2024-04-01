'use server';

import {
  BackButton,
  DocHeading,
  DocNotes,
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
      <DocHeading>Nextjs App Router</DocHeading>
      <DocParagraph>
        There 2 kind of rendering in Next.js App Router:
      </DocParagraph>
      <h3>Static Rendering/ SSG</h3>
      <DocParagraph>
        In static rendering, pages are pre-rendered at build time. This means
        that when a user requests a page, the HTML content is already generated
        and ready to be served. This approach is beneficial for content that
        doesn&apos;t change frequently, such as marketing pages, blogs, or
        documentation.
      </DocParagraph>
      <DocParagraph>
        Static rendering improves performance by serving pre-built HTML files
        directly to users, reducing server load and improving
        time-to-interactive metrics.
      </DocParagraph>
      <h3>Dynamic Rendering/ SSR</h3>
      <DocParagraph>
        Dynamic rendering, on the other hand, generates content on-demand,
        typically at request time. This is useful for content that changes
        frequently or requires user-specific data, such as user dashboards,
        e-commerce product listings, or personalized content.
      </DocParagraph>
      <DocParagraph>
        Next.js supports dynamic rendering through Server-side Rendering (SSR).
        SSR generates pages on each request, ensuring the latest data is
        included.
      </DocParagraph>
      <h3>Creating static pages with static paths</h3>
      <DocParagraph>
        To ensure that pages are generated as static without relying on{' '}
        <a
          href="https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-functions"
          target="_block"
        >
          dynamic functions
        </a>{' '}
        , the fetch cache value should be set to &apos;force-cache,&apos; which
        is the default behavior. If you omit the &apos;revalidate&apos; value or
        set it to a non-zero value, Next.js will automatically create static
        pages during the build time, and you will find corresponding .html files
        for those pages in your project&apos;s build output.
      </DocParagraph>
      <h3>Creating static pages with dymanic paths</h3>
      <DocParagraph>
        To create static pages with dynamic paths in Next.js while ensuring that
        no dynamic functions are used, the fetch cache value is
        &apos;force-cache&apos; (which is the default behavior), and the
        &apos;revalidate&apos; value is either not provided or set to a value
        other than 0. Additionally, you can use the{' '}
        <a
          href="https://nextjs.org/docs/app/api-reference/functions/generate-static-params"
          target="_blank"
        >
          generateStaticParams
        </a>{' '}
        function to generate static paths for these pages. This approach will
        result in Next.js generating static HTML pages for these paths in your
        build output.
      </DocParagraph>
      <pre>
        {`
        export default async function Page() {
          // This request should be cached until manually invalidated.
          
          // 'force-cache' is the default and can be omitted.
          const staticData = await fetch('https://...', { cache: 'force-cache' })
        
          // This request should be cached with a lifetime of 10 seconds.
          const revalidatedData = await fetch('https://...', {
            next: { revalidate: 10 },
          })
        
          return <div>...</div>
        }`}
      </pre>
      <h3>Creating Dynamic pages</h3>
      <DocParagraph>
        If you use any dynamic functions, your page will switch from being
        static to dynamic. Similarly, setting the fetch cache value to
        &apos;no-store&apos;, setting dynamic = &apos;force-dynamic&apos; or
        setting the revalidate value to &apos;0&apos; will result in your page
        being rendered dynamically, and .html pages will not be generated for
        those pages.
      </DocParagraph>
      <pre>
        {`
        // Opt out of caching for all data requests in the route segment
        export const dynamic = 'force-dynamic'
        export default async function Page() {
          // This request should be cached until manually invalidated.
          
          // Opt out of caching for an individual 'fetch' request
          fetch('https://...', { cache: 'no-store' })
        
          // The revalidate: 0 option is added to individual fetch requests.
          const revalidatedData = await fetch('https://...', {
            next: { revalidate: 0 },
          })
        
          return <div>...</div>
        }`}
      </pre>
      <DocHeading subHeading>
        Static and Dynamic page generation table
      </DocHeading>
      <table cellSpacing="10">
        <thead>
          <tr>
            <th>Dynamic Functions</th>
            <th>Cache Option</th>
            <th>Revalidate</th>
            <th>Paths</th>
            <th>Static page/ SSG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No</td>
            <td>default - force-cache</td>
            <td>Not given/ Non-zero value</td>
            <td>Static path</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>No</td>
            <td>default - force-cache</td>
            <td>0</td>
            <td>Static path</td>
            <td>No</td>
          </tr>
          <tr>
            <td>No</td>
            <td>no-cache</td>
            <td>0</td>
            <td>Static path</td>
            <td>No</td>
          </tr>
          <tr>
            <td>No</td>
            <td>default - force-cache</td>
            <td>Not given/ Non-zero value</td>
            <td>Dynamic path with generateStaticParams</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>No</td>
            <td>default - force-cache</td>
            <td>Not given/ Non-zero value</td>
            <td>Dynamic path without generateStaticParams</td>
            <td>No</td>
          </tr>
          <tr>
            <td>No</td>
            <td>no-cache</td>
            <td>0</td>
            <td>Dynamic path</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Yes</td>
            <td>ANY</td>
            <td>ANY</td>
            <td>ANY</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
      <DocNotes>
        <h3>Important Links</h3>
        <ul>
          <li>
            <a
              href="https://nextjs.org/docs/app/building-your-application/rendering/server-components#switching-to-dynamic-rendering"
              target="_blank"
            >
              Switching To Dynamic Rendering
            </a>
          </li>
          <li>
            <a
              href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching"
              target="_blank"
            >
              Opt Out Data Caching
            </a>
          </li>
          <li>
            <a
              href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods"
              target="_blank"
            >
              Migrating Pages router to App router
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data"
            >
              Revalidating Data
            </a>
          </li>
        </ul>
      </DocNotes>
    </>
  );
}
