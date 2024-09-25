import React from 'react'

const Mapping = ({ items }) => {
  return (
    <div>
      <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.price > 20 ? "Expensive" : "Affordable"}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Mapping
