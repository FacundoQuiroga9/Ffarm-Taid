import './Hosteria.css'
import BotonContacto from '../../components/BotonContacto/BotonContacto'
import Carousel from '../../components/Carousel/Carousel'

const Hosteria = () =>{
  return (
    <div className="page-container">
      <div className='contacto-hosteria'>
        <p className='texto-contacto-hosteria'>Contáctenos para reservar!</p>
        <BotonContacto />
      </div>
      <div className="carouseleitems-container">
      <Carousel />
      <div className='items-container'>
      <div className='item-container'>
      <div className='icon-container'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.4 46.8" xmlSpace="preserve">
          <path d="M27.7 21.2H2.6V46h5.8l.2-6.7h38.1l.2 6.7h5.8V21.2zM27.7 2.6H5.6v15.3h4.2v-6.1h16.1v6.1h3.6v-6.1h16.1v6.1h4.1V2.6z" />
        </svg>
      </div>
      <p>Habitaciones con cama matrimonial hasta para 6 personas</p>
      </div>
      <div className='item-container'>
      <div className='icon-container'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.2 93.6" xmlSpace="preserve">
          <path fill="black" d="M58.8 5.6c-37 0-57 23-57 23l8 8c28-23 49-19 49-19s21-4 49 19l8-8s-20-23-57-23z"/>
            <path fill="black" d="M59.1 35.3s-20.7-.6-34.9 13.6l7.8 8.8s7-9 27.1-10.6c20.1 1.6 27.1 10.6 27.1 10.6l7.8-8.8C79.8 34.7 59.1 35.3 59.1 35.3z"/>
            <circle fill="black" cx={59.8} cy={77.8} r={12} />
        </svg>
      </div>
      <p>Wifi en todas las habitaciones</p>
      </div>
      <div className='item-container'>
      <div className='icon-container'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.4 81.2" xmlSpace="preserve">
       <path d="M18.9 70.4H87v9H18.9zM53 2.3H4.4v62.4h97.1V2.3H53zm38.9 53.3H14.1V11.3h77.8v44.3z" />
     </svg>
      </div>
      <p>Television con DirecTV</p>
      </div>
      <div className='item-container'>
      <div className='icon-container'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 67.6" xmlSpace="preserve">
          <path d="M3.9 29.5 20.6 1.1l56.7 22.5-32.4 22.3-10.8-4.3-6.8 18.8H11.8v5.8H3.9V46.4h7.8v5.7h9.6l5.5-13.3zM54.1 45.1 70.7 52l6.6-16.9-5.5-2.2z" />
        </svg>
      </div>
      <p>Camaras de vigilancia</p>
      </div>
      <div className='item-container'>
      <div className='icon-container'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.5 61.6" xmlSpace="preserve">
          <path d="M37.8 2.3 1.9 16.6v42.9h10.6V23.8H63v35.7h10.6V16.6z" />
          <path d="M48.9 29.2H25.2l-5.5 14.1v16.2h7.1V54h20.5v5.5h7.1V43.3l-5.5-14.1zM29 49.7c-1.3 0-2.4-1.1-2.4-2.4S27.7 45 29 45c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.3-2.4 2.3zm-2.3-9.8 2-5.5h16.6l2 5.5H26.7zm18.8 9.8c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z" />
        </svg>
      </div>
      <p>Estacionamiento frente a la habitacion en predio cerrado</p>
      </div>
      <div className='item-container'>
      <div className='icon-container'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.2 52.8" xmlSpace="preserve">
          <path d="M22.9 2.7 6.4 7.3v2.8L9.2 12l.1 2.7s3.2 3.2 13.5 3.2 13.5-3.2 13.5-3.2l.1-2.7 2.8-1.9V7.3L22.9 2.7zm0 12.2s-3.9-1.3-3.6-6.3c0 0 2-.6 3.6-1.4 1.6.9 3.6 1.4 3.6 1.4.2 5-3.6 6.3-3.6 6.3zM34.8 18.8s-4.7 2.4-11.9 2.2c-7.3.2-11.9-2.2-11.9-2.2-.9 14.3 11.9 14.4 11.9 14.4s12.8-.1 11.9-14.4zM39.6 36.4h-7.8L25.5 47l-1.3-4.4 3-6H19l3 6-1.4 4.4-6.2-10.6H6.5L2.1 51.5h42z" />
        </svg>
      </div>
      <p>Seguridad 24hs</p>
      </div>
      <div className='item-container'>
      <div className='icon-container'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 32.5" xmlSpace="preserve">
          <path d="M17 1.1H1.5v30.7h30.7v-4H5.8v-8.9h22.1v1.9H8v4.5h24.2V1.1z" />
        </svg>
      </div>
      <p>Ropa de cama y blancos incluida</p>
      </div>
      <div className='item-container'>
      <div className='icon-container'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.9 23.1" xmlSpace="preserve">
          <path d="M11.3 9.4H4.7s-1.2 0-1.2-3l-2.9.2s.2 4.1 2.6 4.8v11.4h4.2v-6.2s1.9 1 3.9.8v-8zM12 8.7 4.8 2l.9-.8 7 6.6zM12.9 17v-7l5.3 2.3v10.5h-3.9v-6.2zM21.7 3.9l-1.2-1.4h-3.1l-1.1-1.3H15l-1.3 7.6 4.7 1.9.3-1.5h3.2c2.4 0 3.1-2.7 3.1-2.7V3.9h-3.3zm-2 1.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7c.4 0 .7.3.7.7s-.3.7-.7.7z" />
        </svg>
      </div>
      <p>Aceptamos mascotas</p>
      </div>
      </div>      
      </div>
    </div>
    
  )
}

export default Hosteria