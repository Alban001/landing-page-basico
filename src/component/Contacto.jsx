import React from 'react'
import CardOjects from '../assets/CardOjects'
import '../styles/contact.css'

// Destructuracion de arrays con objetos, se traen las propiedades con values de tipo png
const inst = CardOjects[0].insta
const face = CardOjects[1].wats
const wats = CardOjects[2].face

const Contacto = () => {
  return (
    <div id='contact' className='contacto-container'>
            <img src={inst} alt="" />
            <img src={wats} alt="" />
            <img src={face} alt="" />
          
    </div>
  )
}

export default Contacto