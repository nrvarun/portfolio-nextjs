import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../Libs/gtags";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!--  Preconnect to the fonts’ origin. --> */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={true}
          />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link
            rel="preload"
            as="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700|Roboto:300,400,500,600,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700|Roboto:300,400,500,600,700&display=swap"
          />
          <meta name="theme-color" content="#000000" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
