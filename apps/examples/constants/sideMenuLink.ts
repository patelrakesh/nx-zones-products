const sideMenuLink = [
  {
    label: 'Nextjs App Router',
    href: '/nextjs-introduction',
  },
  {
    label: 'Nextjs Rendering Pattern',
    href: '/rendering-pattern',
    childs: [
      {
        label: 'Static Pages / Static Rendering',
        href: '/rendering-pattern#static-product-listing',
      },
      {
        label: 'Server Components + Streaming',
        href: '/rendering-pattern#streaming-product-listing',
      },
      {
        label: 'Client Rendering',
        href: '/rendering-pattern#clientside-product-listing',
      },
      {
        label: 'Server + Client Repainting',
        href: '/rendering-pattern#hybrid-product-listing',
      },
      {
        label: 'Dynamic Rendering',
        href: '/rendering-pattern#dynamic-product-listing',
      },
    ],
  },
  {
    label: 'API State Management with tanstack',
    href: '/tanstack-usage',
    childs: [
      {
        label: 'API data caching in CSR',
        href: '/tanstack-usage#csr-api-data-cache',
      },
      {
        label: 'On Demand Data refetch',
        href: '/tanstack-usage#on-demand-data-refetch',
      },
      {
        label: 'Client Side State',
        href: '/tanstack-usage#client-side-state',
      },
    ],
  },
  {
    label: 'Error Handling',
    href: '/error-handling',
    childs: [
      {
        label: 'CustomFetch Function',
        href: '/error-handling/custom-fetch',
      },
      {
        label: 'Error Boundary',
        href: '/error-handling/error-boundary',
      },
      {
        label: 'Error Logging',
        href: '/error-handling/error-logging',
      },
    ],
  },
  {
    label: 'Analytics Integration',
    href: '/docs/analytics-integration',
  },
];

export default sideMenuLink;
