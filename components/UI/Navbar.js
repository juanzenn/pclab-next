import Link from "next/link"
import { useState, useEffect } from "react"
import {
  InstagramFill,
  WhatsappFill,
  TextAlignJustified,
  Cross,
} from "akar-icons"

export default function Navbar() {
  // Use only for phone
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true)
      setIsVisible(false)
    } else {
      setIsMobile(false)
      setIsVisible(true)
    }
  }, [])

  const navLinks = [
    {
      ref: "/",
      title: "Página principal",
    },
    {
      ref: "/builder",
      title: "Arma tu PC",
    },
  ]

  const handleClick = () => {
    if (isVisible) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }

  return (
    <nav className="fixed z-50 py-4 lg:px-6 w-full h-auto lg:h-12 flex flex-col lg:flex-row lg:justify-around lg:items-center lg:bg-blue-900 shadow-none lg:shadow-md">
      <div className="bg-blue-300 w-24 h-6 ml-4 mb-4 lg:ml-0 lg:mb-0"></div>

      <ul
        className={
          isVisible
            ? "w-screen lg:w-auto pl-2 py-4 lg:p-0 flex flex-col lg:flex-row lg:items-center gap-4 bg-blue-900" 
            : "hidden"
        }
      >
        {navLinks.map((item) => (
          <li key={item.title}>
            <Link href={item.ref}>
              <a
                className="text-gray-100 hover:bg-blue-300 p-2 hover:text-gray-800 transition-all"
                onClick={isMobile ? handleClick : undefined}
              >
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={
          isVisible
            ? "w-screen lg:w-auto pl-2 lg:p-0 flex gap-4 bg-blue-900"
            : "hidden"
        }
      >
        <a
          href="https://www.instagram.com"
          className="text-gray-100 hover:text-blue-300 p-2 lg:p-0 transition-all"
        >
          <WhatsappFill />
        </a>

        <a
          href="https://www.web.whatsapp.com"
          className="text-gray-100 hover:text-blue-300 p-2 lg:p-0 transition-all"
        >
          <InstagramFill />
        </a>
      </div>

      <button
        className="w-max absolute top-4 right-4 focus:outline-none lg:hidden"
        onClick={handleClick}
      >
        {isVisible ? (
          <Cross color="white" />
        ) : (
          <TextAlignJustified color="white" />
        )}
      </button>
    </nav>
  )
}
