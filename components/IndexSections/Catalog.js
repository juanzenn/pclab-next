import CatalogCard from './CatalogCard'

export default function Catalog() {
  const pcs = [
    {
      title: "Gama baja",
      components: [
        { title: "CPU", component: "Ryzen 3 3200g" },
        { title: "Tarjeta madre", component: "B450-M" },
        { title: "RAM", component: "8GB DDR4 - 2400GHz" },
        { title: "Tarjeta gráfica", component: "Integrada" },
        { title: "Almacenamiento", component: "240GB SATA SSD" },
        { title: "Fuente de poder", component: "450W 80+ Bronze" }
      ]
    },
    {
      title: "Gama media",
      components: [
        { title: "CPU", component: "Ryzen 5 3600" },
        { title: "Tarjeta madre", component: "B550-M" },
        { title: "RAM", component: "8GB DDR4 - 3000GHz" },
        { title: "Tarjeta gráfica", component: "AMD RX580 8GB GDDR5" },
        { title: "Almacenamiento", component: "480GB SATA SSD" },
        { title: "Fuente de poder", component: "600W 80+ Gold" }
      ]
    },
    {
      title: "Gama Alta",
      components: [
        { title: "CPU", component: "Ryzen 7 5800X" },
        { title: "Tarjeta madre", component: "B550" },
        { title: "RAM", component: "16GB DDR4 - 3600GHz" },
        { title: "Tarjeta gráfica", component: "NVIDIA RTX 3080 10GB" },
        { title: "Almacenamiento", component: "2TB M.2 NVME SSD" },
        { title: "Fuente de poder", component: "850W 80+ Gold" }
      ]
    }
  ]

  return (
    <section id="catalogo" className="w-full p-4 bg-gradient-to-bl from-blue-700 to-purple-700">
      <div className="container mx-auto space-y-6 mt-6 mb-12">
        <div className="text-center">
          <h2 className="font-bold text-4xl">Catálogo</h2>
          <p className="text-lg ">¿No sabes que PC armar? Nuestras opciones predeterminadas son la solución.</p>
        </div>

        <div id="cards" className="flex flex-col lg:flex-row gap-4 pt-4">
          <CatalogCard pc={pcs[0]} />
          <CatalogCard pc={pcs[1]} highlighted />
          <CatalogCard pc={pcs[2]} />
        </div>
      </div>
    </section>
  )
}
