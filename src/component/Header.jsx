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
    <div className='logo'><h1>tu logo</h1></div>
    <header className={click ? "is-open" : ""}>
      <nav className="stroke"> 
         <ul >
             <li><a href="#home">Home</a></li>
             <li><a href="#arte">Trabajo & Arte</a> </li>
             <li><a href="#aboutMe">Sobre mi</a></li>
             <li><a href="#contact">Contactos</a></li>
         </ul>
     </nav>
  
  </header>
  <li className='trigger' onClick={handleClick}>Menu</li>
    </div>
    
  )
}

export default Header