import type { AppProps } from 'next/app';

import Footer from '../components/footer';
import NavbarPage from '../components/navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavbarPage />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
