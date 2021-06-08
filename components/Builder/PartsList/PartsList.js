import React from 'react'
import ListItem from './ListIItem'

export default function PartsList() {
  return (
    <div className="bg-gray-400 w-4/12 h-full flex flex-col py-2 px-4 gap-2">
      <h2>Lista de componentes</h2>
      <ListItem />
      <ListItem />
    </div>
  )
}
