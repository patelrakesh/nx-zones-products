import react, {useState} from 'react';
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { AppProps } from 'next/app';
import '../styles/global.css'; // Import your global CSS styles

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;