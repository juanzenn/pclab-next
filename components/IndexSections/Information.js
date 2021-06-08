export default function Information() {
  return (
    <section id="information" className="py-6 px-4 container mx-auto flex flex-col lg:flex-row justify-around">
      <div className="max-w-lg space-y-4">
        <div>
          <h2 className="p-2 font-mono font-bold text-2xl lg:text-4xl bg-blue-600 max-w-max">¿A que nos dedicamos?</h2>
          <p className="p-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ullam veniam possimus aut alias fugit dolores quam, aperiam,
            voluptate nemo officia excepturi at, incidunt doloribus magnam neque
            pariatur sunt eius.
          </p>
        </div>
        <div>
        <h2 className="p-2 font-mono font-bold text-2xl lg:text-4xl bg-blue-600 max-w-max">Pagos</h2>
          <p className="p-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ullam veniam possimus aut alias fugit dolores quam, aperiam,
            voluptate nemo officia excepturi at, incidunt doloribus magnam neque
            pariatur sunt eius.
          </p>
        </div>
      </div>
      <div>
        <h2 className="p-2 font-bold text-2xl lg:text-4xl text-center">Tutorial</h2>        
        <iframe src="https://www.youtube.com/embed/3ARVIkbbf3o" className="w-full lg:w-96 h-64"></iframe>
      </div>
    </section>
  )
}
