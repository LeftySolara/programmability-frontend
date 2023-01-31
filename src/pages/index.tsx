import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Programmability</title>
        <meta name="description" content="A forum for developers" />
        {/*Proxima Nova and Soleil fonts */}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/kff0gah.css"
        ></link>
      </Head>
      <h1>Hello World!</h1>
    </div>
  );
}
