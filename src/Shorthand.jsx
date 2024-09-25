import React from 'react'

const Shorthand = ({ title, content }) => {

    const store = { title, content };

  return (
    <div>
      <h2>{store.title}</h2>
      <p>{store.content}</p>
    </div>
  )
}

export default Shorthand
