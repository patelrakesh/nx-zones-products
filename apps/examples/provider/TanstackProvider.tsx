'use client';

import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      // retry: (failureCount, error) => {
      //   if (error?.status === 401) {
      //     return false; // do not retry, trigger error
      //   }
      //   // otherwise, restore default
      //   const defaultRetry = new QueryClient().getDefaultOptions().queries
      //     ?.retry;
      //   return Number.isSafeInteger(defaultRetry)
      //     ? failureCount < (defaultRetry ?? 0)
      //     : false;
      // },
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(error, query);
      // can handle network error here,
      // useually used for
      // 1- refresh token api call,
      // 2- logging,
      // 3- retry queries,
      // 4- data invalidation queries,
      // if (error?.status === 401) redirect('/');
      // queryClient.refetchQueries(query.queryKey);
    },
  }),
});

const TanstackProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanstackProvider;
