import Head from 'next/head'
import Header from '../components/IndexSections/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black text-gray-100">
        <Header />
      </main>

    </>
  )
}
