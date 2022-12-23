import React from 'react'

export default function Cuadrado(props) {

  const color = props.on ? '#222222' : 'transparent'

  return (
    <div style={{ backgroundColor: color }} className="cuadrado"></div>
  )
}