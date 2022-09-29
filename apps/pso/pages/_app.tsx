import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '@styles/globalStyle';
import '@public/assets/css/typography.css';
import '@public/assets/css/loader.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
      const loader = document.getElementById('splash-loader');
      if (loader) setTimeout(() => loader.remove(), 3000);
    }
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment >
  );
}

export default MyApp;
