import Head from "next/head";
import HomePage from "./homepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GetLinked</title>
        <meta name="description" content="GetLinked" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
