import './Navbar.css'
import Logo from '../Logo/Logo'
import Select from '../Select/Select'
import { useState } from 'react'
import {useTranslation} from 'react-i18next'

const Navbar = ()=>{
  const [menu, setMenu]= useState(false)
  const [classSpan, setClassSpan] = useState(false)
  const openMenu = ()=>{
    setMenu(!menu)
    setClassSpan(!classSpan)
  }
  const [t, i18n]= useTranslation("global")

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
            <li className="header-li" onClick={openMenu}><a href='#hosteria' className='header-a'>{t("navbar.rooms")}</a></li>
            <li className="header-li" onClick={openMenu}><a href='#restaurante' className='header-a'>{t("navbar.restaurant")}</a></li>
            <li className="header-li" onClick={openMenu}><a href='#nosotros' className='header-a'>{t("navbar.about-us")}</a></li>
            <li className="header-li" onClick={openMenu}><a href='#contacto' className='header-a'>{t("navbar.bookings")}</a></li>
            <Select />
          </ul>
        </nav>
    </header>
  )
}

export default Navbar