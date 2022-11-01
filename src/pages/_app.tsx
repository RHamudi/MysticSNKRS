import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';

import Footer from '../components/footer';
import NavbarPage from '../components/navbar';
import { AuthProvider } from '../contexts/AuthProvider';
import { queryClient } from '../hooks/use-request';
import '../styles/globals.css';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());

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
