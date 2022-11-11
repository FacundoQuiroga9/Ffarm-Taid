import './Logo.css'
import logo from '../../img/logo para encabezado.png'
import { Link } from 'react-router-dom'

const Logo = ()=>{
  return(
    <Link to="/" className="logo-container">
      <img src={logo} alt="Logo de Ffarm Taid" />
   </Link>
  )
}

export default Logo