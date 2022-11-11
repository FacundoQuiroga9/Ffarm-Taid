import './Navbar.css'
import Logo from '../Logo/Logo'
import { useState } from 'react'

const Navbar = ()=>{
  const [menu, setMenu]= useState(false)
  const [classSpan, setClassSpan] = useState(false)
  const openMenu = ()=>{
    setMenu(!menu)
    setClassSpan(!classSpan)
  }
  
  return(
    <header className="header">      
        <Logo />
        <button className='header-button' onClick={openMenu}>
          <span className={`top-line-${classSpan ? "clicked": "unclicked"}`}></span>
          <span className={`middle-line-${classSpan ? "clicked": "unclicked"}`}></span>
          <span className={`bottom-line-${classSpan ? "clicked": "unclicked"}`}></span>
        </button>
        <nav className={`header-nav ${menu ? "active": ""}`}>
          <ul className="header-ul">
            <li className="header-li" onClick={openMenu}><a href='#about-me' className='header-a'>Donde estamos?</a></li>
            <li className="header-li" onClick={openMenu}><a href='#skills' className='header-a'>Hosteria</a></li>
            <li className="header-li" onClick={openMenu}><a href='#projects' className='header-a'>Restaurante</a></li>
            <li className="header-li" onClick={openMenu}><a href='#contacts' className='header-a'>Contacto</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Navbar