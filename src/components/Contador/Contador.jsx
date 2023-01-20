import './Contador.css'

const Contador = ({imagen, numero, nombre})=>{
    return(
        <div className="contador">
            <img className='img-contador' src={imagen} alt="" />
            <h3 className='numero-contador'>{numero}</h3>
            <p className='nombre-contador'>{nombre}</p>
          </div>
    )
}
export default Contador