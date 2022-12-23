import React from 'react'
import data from './assets/data'

import Cuadrado from './componentes/Cuadrado'

function App() {

  const [ datos, setDatos ] = React.useState( data )

  function interuptor(id) {

    setDatos( oldDatos => oldDatos.map( cuadrado => cuadrado.id === id ? { ...cuadrado, on: !cuadrado.on } : cuadrado ) )
  }

  const html = datos.map( box => {
    return <Cuadrado 
        key={box.id}
        id={box.id}
        on={box.on}
        toggle={interuptor}
      />
  })

  return (
    <div className='container'>
      {html}
    </div>
  )
}

export default App
