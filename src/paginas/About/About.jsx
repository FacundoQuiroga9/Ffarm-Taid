import './About.css'
import fotoHosteria from '../../img/ffarmtaid152.jpeg'
import fotoHosteria2 from '../../img/ffarmtaid18.jpeg'
import Mapa from '../../components/Mapa/Mapa'

const About = () =>{
  return (
    <div className="page-container">
      <h1 className='page-titulo'>Ffarm Taid</h1>
      <h2 className='page-subtitulo'>La granja del abuelo</h2>
      <p className='page-texto'>Un 17 de diciembre de 2008 comenzaba nuestro sueño, el de fundar una hosteria en la granja de nuestro abuelo.
      </p>
      <img className='page-imagen' src={fotoHosteria} alt="Foto de hosteria Ffarm Taid" />
      <p className="page-texto">
      Como lo indica el nombre, Ffarm Taid (en galés "granja del abuelo"), somos una hosteria de tradición galesa con un enorme sentido de pertenencia a la cultura que tanto caracteriza la zona del valle chubutense.
      </p>
      <img className='page-imagen2' src={fotoHosteria2} alt="Foto de hosteria Ffarm Taid" />     
      
    </div>
  )
}

export default About