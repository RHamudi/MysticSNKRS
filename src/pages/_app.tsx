import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

import Footer from '../components/footer';
import NavbarPage from '../components/navbar';
import { queryClient } from '../hooks/use-request';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavbarPage />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
