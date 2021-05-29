export default function ServiceCard(props) {
  return (
    <div
      className={
        props.reverse
          ? `py-4 flex flex-col lg:flex-row-reverse items-center justify-around space-y-2 lg:space-y-0`
          : `py-4 flex flex-col lg:flex-row items-center justify-around space-y-2 lg:space-y-0`
      }
    >
      <div className="w-screen lg:w-1/2">
        <div
          className="w-full h-96"
          style={{
            backgroundImage: props.bg,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="mx-4 p-4 space-y-2">
        <h3 className="text-3xl lg:text-5xl font-mono font-bold text-center">{props.title}</h3>
        <p className="max-w-md text-base lg:text-lg">{props.content}</p>
      </div>
    </div>
  )
}
