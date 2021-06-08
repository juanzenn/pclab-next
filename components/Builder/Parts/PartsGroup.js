import React from 'react'
import GroupItem from './GroupItem'

export default function PartsGroup({title}) {
  const itemList = [
    {
      key: 1,
      title: "Ryzen 3",
      price: "300.00"
    },
    {
      key: 2,
      title: "Ryzen 3",
      price: "300.00"
    },
    {
      key: 3,
      title: "Ryzen 3",
      price: "300.00"
    },
    {
      key: 4,
      title: "Ryzen 3",
      price: "300.00"
    },
    {
      key: 5,
      title: "Ryzen 3",
      price: "300.00"
    }    
  ]

  return (
    <div className="w-full bg-gray-500">
      <h1>{title}</h1>
      <div className="py-2 px-4 grid grid-cols-4 justify-items-center gap-4">
        {itemList.map( item => (
          <GroupItem key={item.key} index={item.key} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  )
}
