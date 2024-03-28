import {useState} from 'react';
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { AppProps } from 'next/app';
import '../styles/global.css'; // Import your global CSS styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <Component {...pageProps} />
  );
}

export default MyApp;