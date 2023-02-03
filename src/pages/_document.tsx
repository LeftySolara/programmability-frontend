import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_FONT_LINK} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
