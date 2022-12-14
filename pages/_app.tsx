import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';

import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}
