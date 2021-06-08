import React from 'react'

export default function ListIItem() {
  return (
    <div className="w-full h-24 p-2 flex gap-2">
      <div className="bg-red-400 w-1/4 h-full"></div>
      <div>
        <h4>Group Item Name</h4>
        <p>Group Item Price</p>
      </div>
    </div>
  )
}
