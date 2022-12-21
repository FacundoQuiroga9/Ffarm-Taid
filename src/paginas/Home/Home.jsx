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


const Home = ()=>{
  return(
    <>
    <video autoPlay muted loop>
        <source src={video} />
    </video>
    <h2 id='hosteria' className='title'>LA HOSTERIA</h2>
    <section className="section_hosteria">
    <CarouselHab imagen1={baño} imagen2={television} imagen3={garageimg} imagen4={camaimg}/>
    <div className='info-container'>
      <h3 className="servicios">SERVICIOS</h3>
      <div className="items-container">
      <Item imagen={cama} texto="Habitaciones hasta para 6 personas"/>
      <Item imagen={toallas} texto="Ropa de cama y blancos incluida"/>
      <Item imagen={tv} texto="TV con DirecTv"/>
      <Item imagen={wifi} texto="Wifi en todas las habitaciones"/>
      <Item imagen={aire} texto="Aire acondicionado"/>
      <Item imagen={calefaccion} texto="Calefaccion central"/>
      <Item imagen={camara} texto="Cámaras de vigilancia"/>
      <Item imagen={seguridad} texto="Seguridad 24hs"/>
      <Item imagen={garage} texto="Estacionamiento en predio cerrado"/>
      <Item imagen={mascota} texto="Aceptamos mascotas"/>
      </div>
    </div>
    </section>
    <div className='contacto-container'>
      <h3 className='contact-title'>CONTÁCTESE PARA RESERVAR!</h3>
      <BtnContacto />
    </div>
    <h2 id='restaurante' className='title'>EL RESTAURANTE</h2>
    <section className="section_restaurante">
      <CarouselRest />
      <CarouselCarta />
    </section>
    </>
    
  )
}

export default Home