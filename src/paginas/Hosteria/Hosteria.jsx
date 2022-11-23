import './Hosteria.css'
import BotonContacto from '../../components/BotonContacto/BotonContacto'

const Hosteria = () =>{
  return (
    <div className="page-container">
      <div className='contacto-hosteria'>
        <p className='texto-contacto-hosteria'>Contáctenos para reservar:</p>
        <BotonContacto />
      </div>
      <div className='item-container'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 118" xmlSpace="preserve">
    <path fill="black" d="M102 103V4H23v99H3v13h119v-13h-20zM89 69c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
  </svg>
      <p className='texto-contacto-hosteria'>Contamos con 18 habitaciones</p>
      </div>
      <div className='item-container'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z"/>
      </svg>
      <p className='texto-contacto-hosteria'>Wifi en todas las habitaciones</p>
      </div>
      <div className='item-container'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/>
      </svg>
      <p className='texto-contacto-hosteria'>Camaras de vigilancia</p>
      </div>
    </div>
    
  )
}

export default Hosteria