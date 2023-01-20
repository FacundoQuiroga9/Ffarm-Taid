import './Select.css'
import es from '../../img/es.png'
import en from '../../img/en.png'
import { useState } from 'react'
import {useTranslation} from 'react-i18next'
import { use } from 'i18next'

const Select = ()=>{

    const select = document.querySelector(".select-container")
    const options = document.querySelector(".options")
    const contenidoSelect = document.querySelector('.contenido-select')
    const hiddenInput = document.querySelector('.inputselect')
    const option = document.querySelectorAll('.option')

        option.forEach((option) => {
            option.addEventListener('click', (e)=>{
                e.preventDefault()
                contenidoSelect.innerHTML = e.currentTarget.innerHTML
                
            })
        });
    
    const [t, i18n]= useTranslation("global")

    const changeLng=(lng)=>{
       i18n.changeLanguage(lng)
    }

    const [isSelect, setIsSelect] = useState(false)
    const openSelect = ()=>{
        setIsSelect(!isSelect)
      }

   
      

    
    return(
        <div  className='select-container'>
            <form action="">
                <div className="selectbox">
                    <div onClick={openSelect} className="select" id='select'>
                        <div className="contenido-select">
                        <img src={es} alt="Bandera de Argentina" />
                        </div>
                        <i class="fa-sharp fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={`options ${isSelect ? 'active': ''}`} id='options' onClick={openSelect}>  
                        <a onClick={()=>changeLng("es")} className='option' href="#" >
                            <div className="contenido-option">
                                <img src={es} alt="Bandera de Argentina" />
                            </div>
                        </a>
                        <a onClick={()=>changeLng("en")} className='option' href="#" >
                            <div className="contenido-option">
                                <img src={en} alt="Bandera de Gran Betaña" />
                            </div>
                        </a>
                        
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default Select