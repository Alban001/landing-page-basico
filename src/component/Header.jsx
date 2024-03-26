import React from 'react'
import '../styles/headerContainer.css'

const Header = () => {
  return (
    <header className='header-container'>
      <h1>TU LOGO</h1>
    <nav className='shift'>
      <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#arte">Trabajo & Arte</a></li>
      <li><a href="#aboutMe">Sobre mi</a></li>
      <li><a href="#contact">Contactos</a></li></ul>
    </nav>
  </header>
  )
}

export default Header