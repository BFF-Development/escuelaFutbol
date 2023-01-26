import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SvgLine from '../svgLine/SvgLine'

const ServicesTitle = () => {

  useEffect(() => {

    const titleService_effect = () => {

      gsap.registerPlugin(ScrollTrigger);
      const tl_service = gsap.timeline({
        scrollTrigger:{
          trigger:".containerTitle_service",
          pin:true,
          start:"top top",
          end:"+=800"
        }
      })
        
      
      tl_service.to(".p_text_service",{
        opacity:1,
        stagger: .007,
        y: -10,
        duration:1.5,
      })
   
      
  
      const tl_title = gsap.timeline({
        scrollTrigger:{
          trigger:".container_titulo_line_service",
          start:"top top",
        }
      })


      tl_title.to( ".service_title",{
        duration: .4,
        color:"rgb(125, 186, 255)",
        stagger: .1
      })


      tl_title.to( ".service_title",{
        duration: .5,
        color:"rgb(255, 255, 255)",
        stagger: .1
      })



    }

    titleService_effect()

    return () => {
      titleService_effect()
    }

  },[])

  
  let title_que = "Que"
  let title_ofrecemos = "Ofrecemos ?"
  let textAbout = "En nuestra academia de fútbol ofrecemos diversión y compañerismo mientras los niños aprenden técnicas de juego y desarrollan un compromiso con el deporte. Ofrecemos charlas personalizadas con niños y padres para mejorar el aprendizaje y adaptación al fútbol, así como metodologías de entrenamiento especializadas. Además, contamos con visitas recurrentes de personalidades del fútbol para inspirar a los jóvenes y brindar una experiencia única. Nuestro objetivo es mejorar el desempeño de los jóvenes en aspectos tácticos, físicos y mentales relacionados con el juego del fútbol."

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
  let cadena3 = arrayPalabras(textAbout)



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

      <div className="text_service">
          <div className="box_text_service">
        
              <p className='p_text_service'>
                En nuestra academia de fútbol ofrecemos diversión y compañerismo mientras los niños aprenden técnicas de juego y desarrollan un compromiso con el deporte. Ofrecemos charlas personalizadas con niños y padres para mejorar el aprendizaje y adaptación al fútbol, así como metodologías de entrenamiento especializadas. Además, contamos con visitas anuales de personalidades del fútbol para inspirar a los jóvenes y brindar una experiencia única. Nuestro objetivo es mejorar el desempeño de los jóvenes en aspectos tácticos, físicos y mentales relacionados con el juego del fútbol.
              </p>

          </div>
      </div>
  </div>
  )
}

export default ServicesTitle