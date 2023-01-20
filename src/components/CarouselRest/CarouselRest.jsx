import { useEffect, useState } from 'react'
import './CarouselRest.css'
import comida1 from '../../img/comida1.jpg'
import comida2 from '../../img/comida2.jpg'
import comida3 from '../../img/comida3.jpg'
import comida4 from '../../img/comida4.jpg'
import comida5 from '../../img/comida5.jpeg'


 const Carousel = ()=> {
  const images = [comida1, comida2, comida3, comida4, comida5]
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
    <div className='carrousel-container-rest'>
      <img className={`carrousel-image-rest ${loaded ?'loaded':''}`} src={selectedImage} alt="foto de la habitacion" onLoad={()=>setLoaded(true)}/>
    </div>
  )
}

export default Carousel