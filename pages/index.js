import Head from 'next/head'
import Header from '../components/IndexSections/Header'
import ServicesSection from '../components/IndexSections/ServicesSection'
import Catalog from '../components/IndexSections/Catalog'
import Information from '../components/IndexSections/Information'
import CallToAction from '../components/IndexSections/CallToAction'

export default function Home() {
  return (
    <>
      <Head>
        <title>PCLAB Ve</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-900 text-gray-100">
        <Header />
        <ServicesSection />
        <Catalog />
        <Information />
        <CallToAction />
      </div>

    </>
  )
}
