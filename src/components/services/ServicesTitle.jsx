import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Power4 } from 'gsap'

const ServicesTitle = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const titleService_effect = () => {
  

    }

    titleService_effect()

    return () => {
      titleService_effect()
    }

  },[])

  
  let title_que = "Que"
  let title_ofrecemos = "Ofrecemos ?"

  const arrayPalabras = (texto) => {
    const cadena = []

    for(let i = 0 ; i < texto.length ; i++){

      if( texto[i] == " "){
        cadena.push( <span> &nbsp;</span> )
      }
      else{
        cadena.push(texto[i])
      }
    }

    return cadena
  }

  let cadena1 = arrayPalabras(title_que)
  let cadena2 = arrayPalabras(title_ofrecemos)


  return (
    <div className="containerTitle_service">

      <div className="container_titulo_line_service">
          <div className="line_title_service"></div>
          <div className="box_title_service">
            <div className="que">
              {
                cadena1.map((index, key) => {
                  return <p key={key} className='service_title'>{index} </p>
                })
              }
            </div>
            <div className="ofrecemos">
              {
                cadena2.map((index, key) => {
                  return <p key={key} className='service_title'>{index} </p>
                })
              }
            </div>
        </div>
      </div>
  </div>
  )
}

export default ServicesTitle