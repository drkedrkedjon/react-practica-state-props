import React from 'react'
import data from './assets/data'

import Cuadrado from './componentes/Cuadrado'

function App() {

  const html = data.map( box => {
    return <Cuadrado 
        key={box.id}
        id={box.id}
        on={box.on}
      />
  })

  return (
    <div>
      {html}
    </div>
  )
}

export default App
