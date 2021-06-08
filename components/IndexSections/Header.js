import Link from "next/link"
import HeaderSlider from './HeaderSlider'

export default function Header() {
  return (
    <section id="index_header" className="h-screen container mx-auto px-4 text-center space-y-12 flex flex-col justify-center">
      <h1 className="font-bold text-4xl lg:text-7xl z-10">
        Bienvenido a <span className="text-blue-500">NICELOGO</span>
      </h1>      

      <div className="flex flex-col lg:flex-row gap-6 justify-center z-10">
        <div className="space-y-1 text-center">
          <h2 className="font-bold text-2xl lg:text-4xl font-mono">
            ¿Quieres armar tu PC?
          </h2>
          <p className="font-light text-gray-300 text-lg">
            Prueba nuestro builder de PCs
          </p>
          <div className="space-x-4">
            <Link href="/builder">
              <button className="px-4 py-2 font-ligt tracking-wide text-lg text-gray-100 border border-blue-500 bg-blue-600 hover:bg-blue-500 transition-colors">
                Builder
              </button>
            </Link>
            <Link href="/#information">
              <button className="px-4 py-2 font-ligt tracking-wide text-lg text-gray-100 border border-purple-600 bg-purple-700 hover:bg-purple-600 transition-colors">
                Tutorial
              </button>
            </Link>
          </div>
        </div>

        <div className="space-y-1 text-center">
          <h2 className="font-bold text-2xl lg:text-4xl font-mono">¿No sabes armarla?</h2>
          <p className="font-light text-gray-300 text-lg">
            Echa un vistazo a nuestras PCs recomendadas
          </p>
          <Link href="/#catalogo">
            <button className="px-4 py-2 font-ligt tracking-wide text-lg text-gray-100 bg-blue-600 border border-blue-500 hover:bg-blue-500 transition-colors">
              Catálogo
            </button>
          </Link>
        </div>
      </div>

      <div classNmae="z-0">
        <HeaderSlider />
      </div>
    </section>
  )
}
