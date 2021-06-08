import React, {useState} from "react"

export default function GroupItem({ title, price, index }) {
  let card
  const [selected, setSelected] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    console.log(index)
    setSelected(!selected)
  }

  if (selected) {
    card = (
      <div className="flex flex-col gap-1 w-full border border-red-900 cursor-pointer" onClick={handleClick}>
        <div className="w-full h-48 bg-red-400"></div>

        <h4>{title}</h4>
        <p>{"$" + price}</p>
      </div>
    )
  } else {
    card = (
      <div className="flex flex-col gap-1 w-full cursor-pointer" onClick={handleClick}>
        <div className="w-full h-48 bg-red-400"></div>

        <h4>{title}</h4>
        <p>{"$" + price}</p>
      </div>
    )
  }

  return card
}
