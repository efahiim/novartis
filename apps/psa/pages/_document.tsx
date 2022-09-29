import React from 'react';
import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';
import Config from '../config/config.json';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = (): ReturnType<typeof ctx.renderPage> =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  /**
   * Return the analytics noscript section for GA Advanced container.
   * @returns The jsx containing the noscript section.
   */
  render(): JSX.Element {
    return (
      <Html dir={Config.Direction} lang={Config.locale}>
        <Head />
        <body>
          <div id="splash-loader">
            <svg>
              <path d="m 12.5,20 15,0 0,0 -15,0 z" className="loader-bar one" />
              <path d="m 32.5,20 15,0 0,0 -15,0 z" className="loader-bar two" />
              <path d="m 52.5,20 15,0 0,0 -15,0 z" className="loader-bar three" />
              <path d="m 72.5,20 15,0 0,0 -15,0 z" className="loader-bar four" />
            </svg>
          </div>
          <Script
            id='novartis-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', '${Config.Analytics.GtmID}');
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}; 