import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="container mx-auto text-center py-16">
      <Link href="/builder" className="">
        <a
          className="p-2 font-bold text-4xl bg-blue-500 text-black hover:bg-blue-600 transition-all"
          style={{ boxShadow: "-6px 6px black" }}
        >
          ¡Arma tu PC ya!
        </a>
      </Link>
    </section>
  )
}
