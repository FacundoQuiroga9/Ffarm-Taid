import './Home.css'
import video from '../../video/Ffarm Taid.mp4'
import CarouselHab from '../../components/CarouselHab/CarouselHab'
import CarouselCarta from '../../components/CarouselCarta/CarouselCarta'
import CarouselRest from '../../components/CarouselRest/CarouselRest'
import Item from '../../components/Item/Item'
import cama from '../../img/cama.png'
import camara from '../../img/camara.png'
import mascota from '../../img/mascota.png'
import tv from '../../img/tv.png'
import seguridad from '../../img/seguridad.png'
import toallas from '../../img/toallas.png'
import aire from '../../img/aire.png'
import wifi from '../../img/wifi.png'
import garage from '../../img/garage.png'
import calefaccion from '../../img/calefaccion.png'
import BtnContacto from '../../components/BotonContacto/BotonContacto'
import baño from '../../img/baño.jpeg'
import television from '../../img/television.jpeg'
import garageimg from '../../img/garage.jpeg'
import camaimg from '../../img/habitacion5.jpeg'
import Mapa from '../../components/Mapa/Mapa'
import img1 from '../../img/hosteria-noche.jpg'
import img2 from '../../img/recepcion.jpeg'
import img3 from '../../img/mesas.jpeg'
import img4 from '../../img/mesas-afuera.jpeg'
import Contador from '../../components/Contador/Contador'
import puerta from '../../img/Puerta.png'
import usuarios from '../../img/Usuarios.png'
import empleados from '../../img/Empleados.png'


const Home = ()=>{
  return(
    <>
    <video autoPlay muted loop>
        <source src={video} />
    </video>
    <div className="title-container">
      <h2 id='hosteria' className='title'>HABITACIONES</h2>
    </div>
    <section className="section_hosteria">
    <CarouselHab imagen1={baño} imagen2={television} imagen3={garageimg} imagen4={camaimg}/>
    <div className='info-container'>
      <h3 className="servicios">SERVICIOS</h3>
      <div className="items-container">
      <Item imagen={cama} texto="Habitaciones hasta para 6 personas"/>
      <Item imagen={toallas} texto="Ropa de cama y blancos"/>
      <Item imagen={tv} texto="DirecTv"/>
      <Item imagen={wifi} texto="Wifi"/>
      <Item imagen={aire} texto="Aire acondicionado"/>
      <Item imagen={calefaccion} texto="Calefacción central"/>
      <Item imagen={camara} texto="Cámaras de vigilancia"/>
      <Item imagen={seguridad} texto="Seguridad 24hs"/>
      <Item imagen={garage} texto="Estacionamiento"/>
      <Item imagen={mascota} texto="Aceptamos mascotas"/>
      </div>
    </div>
    </section>
    <div className="title-container">
      <h2 id='restaurante' className='title'>RESTAURANTE</h2>
    </div>
    <section className="section_restaurante">
      <CarouselCarta />
      <CarouselRest />
    </section>
    <div className="title-container">
      <h2 id='nosotros' className='title'>SOBRE NOSOTROS</h2>
    </div>
      <div className='nosotros-container'>
        <div className="nosotros-info-container">
          <h1 className="bienvenido">Bienvenido a <span>Ffarm Taid</span></h1>
          <p>En 2008 comenzó el sueño de construir una hosteria en la granja de nuestro abuelo. De ahi en más, no hemos dejado de crecer.</p>
        <div className="contadores">
          <Contador imagen={puerta} numero="18" nombre="HABITACIONES" />
          <Contador imagen={usuarios} numero="20 mil" nombre="HUESPEDES AL AÑO" />
          <Contador imagen={empleados} numero="12" nombre="STAFF"/>
        </div>
        </div>
        <div className="nosotros-imgs-container">
            <img className='img1' src={img1} alt="Foto de la recepcion" />
            <img className='img2' src={img2} alt="Foto de la hosteria de noche" />
            <img className='img3' src={img3} alt="Fotos de las mesas del restaurante" />
            <img className='img4' src={img4} alt="Fotos de las mesas del restaurante" />
        </div>

      </div>
      <div className="title-container">
        <h2 id='contacto' className='title'>RESERVAS</h2>
      </div>
    <div className="section-contacto-container">
    <h3 className='contact-title'>PARA RESERVAR CONTÁCTESE POR WHATS APP!</h3>
    <BtnContacto />
    <h3 className='contact-title'>PARA MAS INFORMACIÓN, SEGUINOS EN NUESTRAS REDES SOCIALES</h3>
    <div className='social-media'>
      <a className='media-link' href="https://www.facebook.com/FfarmTaid" target="_blanck">
      <svg className='media' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" fill='white'/></svg>
      </a>
      <a className='media-link' href="https://www.instagram.com/hosteriaffarmtaid/?theme=dark" target="_blanck">
        <svg className='media2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-instagram" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill='white'/>
        </svg>
      </a>
    </div>    
    </div>
    </>
    
  )
}

export default Home