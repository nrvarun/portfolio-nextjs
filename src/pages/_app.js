import Head from "next/head";
import "styles/globals.scss";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:400,700|Roboto:300,400,500,600,700&display=swap"
        />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
