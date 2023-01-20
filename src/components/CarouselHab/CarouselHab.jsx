import { useEffect, useState } from 'react'
import './CarouselHab.css'
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

  return(
    <div className='carrousel-container-hab'>
      <img className={`carrousel-image-hab ${loaded ?'loaded':''}`} src={selectedImage} alt="foto de la habitacion" onLoad={()=>setLoaded(true)}/>
    </div>
  )
}

export default Carousel