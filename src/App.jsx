import { useState } from 'react'
import './styles/container.css'
import Header from './component/Header'
import Entrada from './component/Entrada'

function App() {
  

  return (
    <div className='container'>
        <Header />
        <Entrada />
    </div>
  )
}

export default App
