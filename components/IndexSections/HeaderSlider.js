import { useState, useEffect } from "react"

export default function HeaderSlider() {
  const [windowSize, setWindowSize] = useState(0)
  const [current, setCurrent] = useState(1)

  useEffect( () => {
    setWindowSize(window.innerWidth)
  })

  useEffect(() => {
    let next = (current + 1)
    if (next > 5) {
      next = 1
    }
    const id = setTimeout(() => setCurrent(next), 3000)
    return () => clearTimeout(id)
  }, [current])

  const images = [
    {
      key: "1",
      url: "url(/images/slide1.jpg)",
    },
    {
      key: "2",
      url: "url(/images/slide2.jpg)",
    },
    {
      key: "3",
      url: "url(/images/slide3.jpg)",
    },
    {
      key: "4",
      url: "url(/images/slide4.jpg)",
    },
    {
      key: "5",
      url: "url(/images/slide5.jpg)",
    },
  ]
  
  return (
    <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
      <div className="h-full w-full">
        {images.map((image) => (
          <div
            className="w-screen h-full absolute"
            style={{
              backgroundImage: image.url,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundColor: "rgba(0, 0, 0, 0.70)",
              backgroundBlendMode: "soft-light",
              top: 0,
              left: (image.key * windowSize) - (current * windowSize),
              transition: 'all 1s ease-in-out'
            }}
            key={image.key}
          ></div>
        ))}
      </div>
    </div>
  )
}
