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
      <h1 className="text-3xl font-bold text-purple-400">Hello World!</h1>
    </div>
  );
}
