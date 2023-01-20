import './Select.css'
import arg from '../../img/arg.png'
import gb from '../../img/gb.png'
import { useState } from 'react'

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
                        <img src={arg} alt="Bandera de Argentina" />
                        </div>
                        <i class="fa-sharp fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={`options ${isSelect ? 'active': ''}`} id='options' onClick={openSelect}>  
                        <a className='option' href="#" >
                            <div className="contenido-option">
                                <img src={arg} alt="Bandera de Argentina" />
                            </div>
                        </a>
                        <a className='option' href="#" >
                            <div className="contenido-option">
                                <img src={gb} alt="Bandera de Gran Betaña" />
                            </div>
                        </a>
                        
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default Select