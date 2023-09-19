import Head from 'next/head'
import Hero from './components/Hero';
import Header from './components/Header';
import colors from '../utils/colors';
export default function Home() {
  return (
    <div>
      <Head>
        <title>GetLinked</title>
        <meta name="description" content="GetLinked" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />

    </div>
  )
}
