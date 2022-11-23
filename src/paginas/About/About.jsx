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
      Como lo indica nuestro nombre, Ffarm Taid (en galés "granja del abuelo"), somos una hosteria de tradición galesa con un enorme sentido de pertenencia a la cultura que tanto caracteriza la zona del valle chubutense.
      </p>
      <img className='page-imagen2' src={fotoHosteria2} alt="Foto de hosteria Ffarm Taid" />
      <p className="page-texto">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
        <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
      </svg> Ubicado en el km 1453 de la ruta 3. Trelew, Chubut. Patagonia Argentina<br></br>
      </p>
      <p className="page-texto">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fuel-pump-fill" viewBox="0 0 16 16">
        <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z"/>
      </svg> A escasos metros de una estación de servicio.<br></br>
      </p>
      <Mapa />
    </div>
    
  )
}

export default About