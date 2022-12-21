import { useEffect, useState } from 'react'
import './CarouselRest.css'
import comida1 from '../../img/comida1.jpeg'
import comida2 from '../../img/comida2.jpeg'
import comida3 from '../../img/comida3.jpeg'
import comida4 from '../../img/comida4.jpeg'
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
    <div className='carrousel-container'>
      <img className={`carrousel-image ${loaded ?'loaded':''}`} src={selectedImage} alt="foto de la habitacion" onLoad={()=>setLoaded(true)}/>
    </div>
  )
}

export default Carousel