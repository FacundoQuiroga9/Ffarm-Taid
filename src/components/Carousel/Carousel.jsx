import { useEffect, useState } from 'react'
import './Carousel.css'
import baño from '../../img/baño.jpeg'
import television from '../../img/television.jpeg'
import garage from '../../img/garage.jpeg'
import cama from '../../img/habitacion5.jpeg'


 const Carousel = ()=> {
  const images = [baño, garage, television, cama]
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(()=>{
    const interval = setInterval(()=>{
      selectNewImage(selectedIndex, images)
    },5000)
    return()=>clearInterval(interval)
  })

  const selectNewImage = (index, images, next=true)=>{
    setLoaded(false)
    setTimeout(()=>{
    const condition = next? selectedIndex < images.length-1 : selectedIndex > 0
    const nextIndex =  next ? (condition ? selectedIndex + 1:0) : condition ? selectedIndex -1 : images.length -1
    setSelectedImage(images[nextIndex])
    setSelectedIndex(nextIndex)
    },600)
  }

  const previous = ()=>{
    selectNewImage(selectedIndex, images, false)
  }
  const next = ()=>{
    selectNewImage(selectedIndex, images)
  }

  return(
    <div className='carrousel-container'>
      <img className={`carrousel-image ${loaded ?'loaded':''}`} src={selectedImage} alt="foto de la habitacion" onLoad={()=>setLoaded(true)}/>
      <div className='buttons-container'>
        <button onClick={previous}>{'<'}</button>
        <button onClick={next}>{'>'}</button>
      </div>
    </div>
  )
}

export default Carousel