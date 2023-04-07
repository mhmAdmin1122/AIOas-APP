import Head from 'next/head'
import HomePage from './HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>AIOas || Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}
