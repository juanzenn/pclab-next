import {WhatsappFill, InstagramFill} from 'akar-icons'

export default function Footer() {
  return (
    <footer className="w-full space-y-4 py-6 bg-black flex flex-col justify-center items-center">
      <p className="text-gray-100">
        Todos nuestros productos son importados 100%. Originales y nuevos.
      </p>

      <div className="bg-blue-300 w-24 h-6"></div>

      <div className="flex gap-4">
        <a
          href="https://www.instagram.com"
          className="text-gray-100 hover:text-blue-300 transition-all"
        >
          <WhatsappFill />
        </a>

        <a
          href="https://www.web.whatsapp.com"
          className="text-gray-100 hover:text-blue-300 transition-all"
        >
          <InstagramFill />
        </a>
      </div>

      <p className="text-gray-100">
        Hecho con ♥{" "}
        <a
          href="https://www.github.com/juanzenn"
          className="hover:text-blue-700 transition-all"
        >
          Juan Alvarez
        </a>
      </p>
    </footer>
  )
}
