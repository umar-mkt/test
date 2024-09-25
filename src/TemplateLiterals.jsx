import React from 'react'

const TemplateLiterals = ({ firstName, lastName }) => {
  return (
    <div>
      {`Welcome, ${firstName} ${lastName}!`}
    </div>
  )
}

export default TemplateLiterals
