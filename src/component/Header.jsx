import React, { useState } from 'react'
import '../styles/headerContainer.css'

const Header = () => {
  const [click, setClick] = useState(false)

  const handleClick =()=>{
    setClick(!click)
    console.log(click)
  }
  return (
    <div className='header-container'>
    <div id='logo' className='logo'><h1>tu logo</h1></div>
    <header className={click ? "is-open" : ""}>
      <nav className="stroke"> 
         <ul >
             <li><a href="#logo" onClick={handleClick}>Home</a></li>
             <li><a href="#arte" onClick={handleClick}>Trabajo & Arte</a> </li>
             <li><a href="#aboutMe" onClick={handleClick}>Sobre mi</a></li>
             <li><a href="#contact" onClick={handleClick}>Contactos</a></li>
         </ul>
     </nav>
  
  </header>
  <li className='trigger' onClick={handleClick}>Menu</li>
    </div>
    
  )
}

export default Header