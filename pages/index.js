import Head from 'next/head'
import Hero from './components/Hero';
export default function Home() {
  return (
    <div style={{
      backgroundColor: "purple"
    }}>
      <Head>
        <title>GetLinked</title>
        <meta name="description" content="GetLinked" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />

    </div>
  )
}
