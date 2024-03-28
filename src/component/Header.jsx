import React from 'react'
import '../styles/headerContainer.css'

const Header = () => {
  return (
    <header className='header-container'>
      <h1>TU LOGO</h1>
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
    <nav className='stroke'>
      <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#arte">Trabajo & Arte</a></li>
      <li><a href="#aboutMe">Sobre mi</a></li>
      <li><a href="#contact">Contactos</a></li></ul>
    </nav>
  </header>
  )
}

export default Header