import './Contacto.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import BotonContacto from '../../components/BotonContacto/BotonContacto'

const Contacto = () =>{
  const validarFormulario = (nombre, email,mensaje)=>{
    const regex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if(!(nombre.trim().length > 3)){
      return'name'
    }if(!(regex.test(email))){
      return "e-mail"
    }if(mensaje.length< 50){
     return "message"
    }
  }
  const [nombre, setNombre]= useState('')
  const [email, setEmail]= useState('')
  const [mensaje, setMensaje]= useState('')
  const error = validarFormulario(nombre, email,mensaje)
  const modal = document.querySelector('.contacto-modal-desactivado')

  const ocultarModal =()=>{
    modal.classList.remove('contacto-modal-contenedor')
  }
  return (
    <div class='page-container'>

    <div className='contacto-hosteria'>
        <p className='texto-contacto-hosteria'>Reservas únicamente por whats app!</p>
        <BotonContacto />
        <h6 className='celular-title'>Teléfono:</h6>
        <p className="celular-texto">+54 9 280 4355276</p>
    </div>
    <div className='contacto-hosteria-otros'>
        <p className='texto-otros-contacto-hosteria'>Para realizar consultas también podés hacerlo por estos medios de contacto:</p>
        <div className="contacto-logos">
        <a href="https://www.instagram.com/hosteriaffarmtaid" target='_blanck'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/FfarmTaid" target='_blanck'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
          </svg>
        </a>
        <a href="mailto:hosteriaffarmtaid@gmail.com" target='_blanck'>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="contacto-logo" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
          </svg>
        </a>
      </div>
    </div>
    
      <div className="formulario-contenedor">
      <form action='' className='formulario' id='formulario'
          onSubmit={e=>{
            e.preventDefault();
            if(!error){
              emailjs.sendForm('service_pjc9e5i','template_blsf4ww', e.target,'eyhRaGuc2ZMqOOaax')
            .then(modal.classList.add('contacto-modal-contenedor'))
            .catch(error => console.log(error))
            setNombre('')
            setEmail('')
            setMensaje('')
            }            
            }}>
        <label className='label' htmlFor='nombre'>Nombre <span>*</span></label>
        <input  name="nombre" type="text" className="formulario-nombre" value={nombre} onChange={e =>setNombre(e.target.value)} required/>
        <label className='label' htmlFor='mail'>E-mail <span>*</span></label>
        <input placeholder='ejemplo@ejemplo.com' name="mail" type="text" className="formulario-mail" onChange={e =>setEmail(e.target.value)} value={email} required/>
        <label className='label' htmlFor='mensaje'>Mensaje <span>*</span></label>
        <textarea name="mensaje" type="textarea" className="formulario-mensaje" onChange={e =>setMensaje(e.target.value)} value={mensaje} required/>
        <p>{error}</p>
        <button type="submit" disabled={error} className="formulario-boton">Enviar</button>
      </form>
      </div>
      <div className="contacto-modal-desactivado">
      <div className="contacto-modal">
        <p className="contacto-modal-agradecimiento">Muchas gracias por su mensaje!</p>
        <button onClick={ocultarModal} className='formulario-boton'>Continue</button>
      </div>
      </div>
    </div>

    
  )
}

export default Contacto