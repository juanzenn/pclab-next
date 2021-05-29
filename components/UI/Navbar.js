import Link from "next/link"
import { useState, useEffect } from "react"
import { InstagramFill, WhatsappFill, TextAlignJustified } from "akar-icons"

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
    <nav className="fixed z-50 py-4 px-4 lg:px-6 w-full h-auto lg:h-12 flex flex-col lg:flex-row lg:justify-around lg:items-center bg-blue-900">
      <div className="bg-blue-300 w-24 h-6"></div>

      <ul
        className={
          isVisible
            ? "p-4 flex flex-col lg:flex-row lg:items-center gap-4"
            : "hidden"
        }
      >
        {navLinks.map((item) => (
          <li key={item.title}>
            <Link href={item.ref}>
              <a
                className="text-gray-100 hover:bg-blue-300 hover:text-gray-800 p-2 transition-all"
                onClick={isMobile ? handleClick : undefined}
              >
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className={isVisible ? "flex gap-4" : "hidden"}>
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

      <button
        className="w-max absolute top-4 right-4 lg:hidden"
        onClick={handleClick}
      >
        <TextAlignJustified color="white" />
      </button>
    </nav>
  )
}
