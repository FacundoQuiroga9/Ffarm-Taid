import './Item.css'

const Item = ({imagen, texto})=>{
  return (
    <div className="item-container">
        <img src={imagen} alt="" className='item-icon'/>
        <p className="item-text">{texto}</p>
    </div>
  )
}

export default Item
