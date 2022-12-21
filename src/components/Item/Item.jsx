import './Item.css'

const Item = ({imagen, texto})=>{
  return (
    <div className="item-container">
      <div className="item-icon-container">
        <img src={imagen} alt="" className='item-imagen'/>
      </div>
      <div className="item-text-container">
        <p className="item-text">{texto}</p>
      </div>
    </div>
  )
}

export default Item