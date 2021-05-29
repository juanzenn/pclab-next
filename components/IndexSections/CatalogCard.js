export default function CatalogCard({ highlighted, pc }) {
  const valueKing = (
    <div className="absolute top-0 -right-2 transform rotate-6  shadow-2xl">
      <p
        className="p-1 text-2xl font-black tracking-wide text-red-100 bg-blue-600"
        style={{ textShadow: "-2px 2px black" }}
      >
        Recomendada
      </p>
    </div>
  )

  return (
    <div
      className={
        highlighted
          ? "w-full lg:w-1/3 p-4 bg-gray-900 shadow-2xl transform lg:-translate-y-6"
          : "w-full lg:w-1/3 p-4 bg-gray-900"
      }
    >
      {highlighted ? valueKing : undefined}
      <div className="card_header">
        <h3 className="text-3xl text-blue-200 mb-2 font-bold font-mono">
          {pc.title}
        </h3>
      </div>
      <div className="card_body">
        <ul className=" space-y-1">
          {pc.components.map((component) => (
            <li>
              <h4 className="font-bold text-lg">{component.title}</h4>
              <p className="font-light text-base pl-2">{component.component}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="card_footer3">
        <div className="buttons flex justify-end gap-4">
          <div className="p-2 font-bold text-lg tracking-wide">
            Precio: <span className="font-normal">$400,96</span>
          </div>
          <button className="px-4 py-2 font-ligt tracking-wide text-sm text-gray-100 border border-blue-500 bg-blue-600 hover:bg-blue-500 transition-colors">
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}
