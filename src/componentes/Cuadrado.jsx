import React from 'react'

export default function Cuadrado(props) {

  const color = props.on ? '#333333' : 'transparent'

  return (
    <div onClick={ () => props.toggle(props.id) } style={{ backgroundColor: color }} className="cuadrado">
      <p>{props.id}</p>
    </div>
  )
}