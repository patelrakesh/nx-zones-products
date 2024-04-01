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
      <DocHeading>Nextjs Rendering pattern usage</DocHeading>
      <DocHeading subHeading id="static-product-listing">
        Pattern 1– Static Pages / Static Rendering
      </DocHeading>
      <h3>What is static rendering?</h3>
      <DocParagraph>
        Static rendering involves pre-rendering routes either during build time
        or in the background after data revalidation. The resulting content is
        cached and can be stored on a Content Delivery Network (CDN), enabling
        efficient sharing of pre-rendered content between users and server
        requests.
      </DocParagraph>
      <h3>When to use static rendering?</h3>
      <DocParagraph>
        Static rendering is ideal when a route&apos;s data is not personalized
        and can be determined at build time. It&apos;s suitable for content like
        static blog posts or product pages that don&apos;t change frequently for
        different users.
      </DocParagraph>
      <h3>How to use static rendering?</h3>
      <DocParagraph>
        To use static rendering in Next.js, leverage functions like fetch() with
        cache: &apos;force-cache&apos; to fetch data from external APIs or
        databases. Next.js automatically caches fetched data in the Data Cache
        on the server, enabling efficient reuse of cached data for subsequent
        requests.
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
      <DocParagraph>
        <Link href="/rendering-pattern/static-product-listing">
          See static rendering example
        </Link>
      </DocParagraph>
      <DocParagraph>
        <Link href="/rendering-pattern/static-product-listing-revalidation">
          See static rendering with revalidation example
        </Link>
      </DocParagraph>
      <DocHeading subHeading id="streaming-product-listing">
        Pattern 2– Server Components + Streaming
      </DocHeading>
      <h3>What is streaming? </h3>
      <DocParagraph>
        Streaming enables rendering parts of a webpage progressively from the
        server, splitting work into chunks and sending them to the client as
        they become available. This allows users to see immediate content
        without waiting for the entire page to load.
      </DocParagraph>
      <h3>When to use streaming?</h3>
      <DocParagraph>
        Streaming is useful when you want to improve initial page loading
        performance and UI responsiveness, especially for pages with components
        dependent on slower data fetches, like product reviews. It&apos;s
        beneficial for preventing long data requests from blocking page
        rendering, reducing Time To First Byte (TTFB) and improving First
        Contentful Paint (FCP).
      </DocParagraph>
      <h3>How to use streaming?</h3>
      <DocParagraph>
        In Next.js, streaming is built into the App Router by default. You can
        start streaming route segments using loading.js and React Suspense for
        UI components. By prioritizing component chunks based on importance and
        data availability, you can optimize rendering, improving Time to
        Interactive (TTI), especially on slower devices.
      </DocParagraph>
      <DocParagraph>
        <Link href="/rendering-pattern/streaming-product-listing">
          See working example
        </Link>
      </DocParagraph>
      <DocHeading subHeading id="clientside-product-listing">
        Pattern 3 - Client Rendering
      </DocHeading>
      <h3>What is client rendering?</h3>
      <DocParagraph>
        Client rendering refers to the process of rendering interactive user
        interfaces on the client-side using JavaScript in the browser, instead
        of relying solely on server-side rendering. It allows for immediate
        feedback, interactivity, and access to browser APIs like geolocation or
        localStorage.
      </DocParagraph>
      <h3>When to use client rendering?</h3>
      <DocParagraph>
        Client rendering is beneficial when you need interactive UI elements
        that respond to user input and require access to browser APIs. It&apos;s
        ideal for applications where real-time updates, immediate feedback, and
        dynamic content are important, enhancing the user experience.
      </DocParagraph>
      <h3>How to use client rendering?</h3>
      <DocParagraph>
        In Next.js, you can use client rendering by adding the &apos;use
        client&apos; directive at the top of a file where you want to declare a
        boundary between Server and Client Components. This directive allows
        components to access browser APIs and be rendered on the client-side,
        providing interactivity and dynamic functionality.
      </DocParagraph>
      <DocParagraph>
        <Link href="/rendering-pattern/clientside-product-listing">
          See working example
        </Link>
      </DocParagraph>
      <DocHeading subHeading id="hybrid-product-listing">
        Pattern 4 – Server + Client Repainting
      </DocHeading>
      <h3>What is Server + Client Repainting?</h3>
      <DocParagraph>
        At Verizon, we combine server-side and client-side rendering to show
        different data for logged-in and unregistered users, utilizing both
        rendering capabilities.
      </DocParagraph>
      <h3>When to use Server + Client Repainting?</h3>
      <DocParagraph>
        This pattern is suitable for pages that are not private and require
        Server-Side Rendering (SSR) for SEO purposes. However, when users log
        into the system, we need to display data for that page based on their
        search history and recommendations specific to each user. This pattern
        can be effectively used in such scenarios.
      </DocParagraph>
      <h3>How to use Server + Client Repainting?</h3>
      <DocParagraph>
        We&apos;ve made an example using this method. First, we get products
        from a public API and create the page using server-side rendering. Then,
        on the user&apos;s device, we fetch products again from a private API
        (like product recommendations) and update the page to show personalized
        products. We don&apos;t have an authentication system yet, but you can
        add your own logic for that.
      </DocParagraph>
      <DocParagraph>
        <Link href="/rendering-pattern/hybrid-product-listing">
          See working example
        </Link>
      </DocParagraph>
      <DocHeading subHeading id="dynamic-product-listing">
        Pattern 5 – Server Components for dynamic rendering
      </DocHeading>
      <h3>What is Dynamic Rendering?</h3>
      <DocParagraph>
        Dynamic rendering refers to the process of generating web page content
        for each user when they request it. This approach is beneficial for
        pages that contain personalized data or information that can only be
        determined at the time of the request, such as cookies or search
        parameters in the URL.
      </DocParagraph>
      <h3>When to use dynamic rendering?</h3>
      <DocParagraph>
        Dynamic rendering is suitable for websites that have dynamic content.
        For example, an e-commerce site when need to fetch personalized customer
        data.
      </DocParagraph>
      <h3>How to use dynamic rendering?</h3>
      <DocParagraph>
        In Next.js, dynamic rendering can be achieved by utilizing dynamic
        functions like cookies(), headers(), or searchParams. By using these
        functions within a Server Component or setting the Pages prop
        appropriately, you can opt specific routes into dynamic rendering at the
        time of the request. Additionally, you can control caching behavior by
        setting the cache option in fetch requests to &apos;no-store&apos; to
        fetch data dynamically on every request, ensuring that the content
        remains up-to-date and personalized for each user.
      </DocParagraph>
      <pre>
        {`
        export default async function Page() {
          // This request should be refetched on every request.
          const dynamicData = await fetch('https://...', { cache: 'no-store' })

          return <div>...</div>
        }`}
      </pre>
      <DocParagraph>
        <Link href="/rendering-pattern/dynamic-product-listing">
          See working example
        </Link>
      </DocParagraph>
    </>
  );
}
