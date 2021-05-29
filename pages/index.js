import Head from 'next/head'
import Header from '../components/IndexSections/Header'
import ServicesSection from '../components/IndexSections/ServicesSection'
import Catalog from '../components/IndexSections/Catalog'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-900 text-gray-100">
        <Header />
        <ServicesSection />
        <Catalog />
      </main>

    </>
  )
}
