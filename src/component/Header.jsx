import React from 'react'
import '../styles/headerContainer.css'

const Header = () => {
  return (
    <header className='header-container'>
      <h1>TU LOGO</h1>
        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
    <nav className='stroke' id='nav-id'>
      <ul className='menu'>
      <li><a href="#home">Home</a></li>
      <li><a href="#arte">Trabajo & Arte</a></li>
      <li><a href="#aboutMe">Sobre mi</a></li>
      <li><a href="#contact">Contactos</a></li></ul>
    </nav>
  </header>
  )
}

export default Header