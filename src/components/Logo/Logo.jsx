import './Logo.css'
import logo from '../../img/logo para encabezado.png'

const Logo = ()=>{
  return(
    <a href="#home" className="logo-container">
      <img src={logo} alt="Logo de Ffarm Taid" />
   </a>
  )
}

export default Logo