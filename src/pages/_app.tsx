import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

import Footer from '../components/footer';
import NavbarPage from '../components/navbar';
import { AuthProvider } from '../contexts/AuthProvider';
import { queryClient } from '../hooks/use-request';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <NavbarPage />
          <Component {...pageProps} />
          <Footer />
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
