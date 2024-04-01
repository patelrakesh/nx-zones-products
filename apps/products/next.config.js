//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

const { EXAMPLES_APP_BASE_URL } = process.env;

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  basePath: '/ngd',
  rewrites: async () => {
    return [
      {
        source: '/examples',
        destination: `${EXAMPLES_APP_BASE_URL}/ngd/examples`,
      },
      {
        source: '/examples/:path*',
        destination: `${EXAMPLES_APP_BASE_URL}/ngd/examples/:path*`,
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/ngd',
        basePath: false,
        permanent: false,
      },
    ];
  },
  staticPageGenerationTimeout: 100000,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
    ],
  },
  productionBrowserSourceMaps: process.env.SOURCE_MAPS === 'true',
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.optimization.splitChunks = {
  //       cacheGroups: {
  //         vendor: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name: 'vendor',
  //           chunks: 'all',
  //         },
  //       },
  //     };
  //   }
  //   return config;
  // },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withBundleAnalyzer,
];

module.exports = composePlugins(...plugins)(nextConfig);
