import ServiceCard from "./ServiceCard"

export default function ServicesSection() {
  return (
    <section id="services" className="container mx-auto px-4 space-y-4 mb-12">
      <h2 className="text-4xl font-bold mb-4 mt-8">Nuestros Servicios</h2>

      <div className="space-y-6">
        <ServiceCard
          title="Calidad"
          content="Traemos tus piezas directo desde Estados Unidos bajo pedido. Las tienes en tus manos a una velocidad impresionante."
          bg="url(/images/slide1.jpg)"
        />

        <ServiceCard
          title="Enviamos a todo el país"
          content="Hacemos nuestros envíos a través de las mejores y más respetadas empresas nacionales."
          bg="url(/images/slide2.jpg)"
          reverse
        />

        <ServiceCard
          title="Precios"
          content="Las mejores piezas en el mercado al precio más competitivo en toda Venezuela."
          bg="url(/images/slide3.jpg)"
        />
      </div>
    </section>
  )
}
