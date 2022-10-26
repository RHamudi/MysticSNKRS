import type { AppProps } from 'next/app';

import Footer from '../components/footer';
import Navbar from '../components/header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
