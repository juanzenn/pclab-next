import Link from "next/link"
import HeaderSlider from './HeaderSlider'

export default function Header() {
  return (
    <section id="index_header" className="h-screen container mx-auto px-4 text-center space-y-12 flex flex-col justify-center">
      <h1 className="font-bold text-4xl lg:text-7xl z-10">
        Bienvenido a <span className="text-red-500">NICELOGO</span>
      </h1>      

      <div className="flex flex-col lg:flex-row gap-6 justify-center z-10">
        <div className="space-y-1 text-center">
          <h2 className="font-bold text-2xl lg:text-5xl">
            ¿Quieres armar tu PC?
          </h2>
          <p className="font-light text-gray-400 text-lg">
            Prueba nuestro builder de PCs
          </p>
          <div className="space-x-4">
            <Link href="/builder">
              <button className="px-4 py-2 font-ligt tracking-wide text-lg text-gray-100 border border-red-500 bg-red-600 hover:bg-red-500 transition-colors">
                Builder
              </button>
            </Link>
            <Link href="/#index_info">
              <button className="px-4 py-2 font-ligt tracking-wide text-lg text-gray-100 border border-blue-600 bg-blue-700 hover:bg-blue-600 transition-colors">
                Tutorial
              </button>
            </Link>
          </div>
        </div>

        <div className="space-y-1 text-center">
          <h2 className="font-bold text-2xl lg:text-5xl">¿No sabes armarla?</h2>
          <p className="font-light text-gray-400 text-lg">
            Echa un vistazo a nuestras PCs recomendadas
          </p>
          <Link href="/#catalogo">
            <button className="px-4 py-2 font-ligt tracking-wide text-lg text-gray-100 bg-red-600 border border-red-500 hover:bg-red-500 transition-colors">
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
