import React, { useEffect  } from 'react'
import "./about.css"
import gsap from 'gsap'
import { Power4  } from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'


const About = () => {


  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      duration:.5,

      ease: Power4.easeInOut,
      scrollTrigger:{
          trigger:".about",
          pinSpacing: true, 
          pin:true,
          start:"-1px top",
          end:"+=1000",
        }
    })

    
    tl.to( ".lineIz-about",{
      width: "50%",
      duration: .5,
      x: -300,
    })

    
    tl.from( ".aboutEffect_title",{
      opacity:0,
      x: -200,
    })




  }, [])


  return (
    <div className="about" id='about'>
      <div className="about_animation_full"></div>
      <div className="containerAbout">
        <div className="lineIz-about aboutEffect"></div>
        <h2 className='about_title aboutEffect_title'>Quienes somos ?</h2>
        <div className="lineDer-about aboutEffect"></div>

{/*         <div className="text_about">
          <p>
            En ARCO queremos que sus hijos vengan a aprender, practicar y mejorar sus aptitudes en el deporte más lindo del mundo, el que iguala a todos los estratos sociales, ese en el que, cuando la pelota rueda, no distingue entre clases sociales sino que sólo harán diferencias en aquellos que mas pasión y entrega puedan darle a la redonda.
          </p>
          <br />
          <p>
            Para nosotros los que conformamos ARCO son fundamentales y nos encargamos de transmitir en todo momento a los jugadores, los valores del ser humano ante todo, los pilares conceptuales de la academia serán trabajo individual y en equipo, perseverancia, sacrificio, compañerismo, cuidado de su salud, buena alimentación, entre otros.
          </p>
          <br />

          <p>
            Los jugadores tendrán entre sus conceptos la mezcla de ideologías futbolísticas Argentinas y Colombianas para poder desenvolverse dentro  y  fuera de la cancha.
          </p>

        </div> */}
      </div>
    </div>
  )
}

export default About