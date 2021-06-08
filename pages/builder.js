import Head from "next/head"
import PcBuilder from '../components/Builder/PcBuilder'

export default function Builder() {
  return (
    <div>
      <Head>
        <title>Builder - PCLAB VE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-900 text-gray-100">
        <PcBuilder />
      </div>
    </div>
  )
}
