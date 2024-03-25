import React from 'react'
import '../styles/headerContainer.css'

const Header = () => {
  return (
    <header className='header-container'>
      <h1>TU MARCA, TU LOGO</h1>
    <nav className='shift'>
      <ul>
      <li><a href="">Home</a></li>
      <li><a href="">Acerca de mi trabajo</a></li>
      <li><a href="">Fotografias</a></li>
      <li><a href="">Contactos</a></li></ul>
    </nav>
  </header>
  )
}

export default Header