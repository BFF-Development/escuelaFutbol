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

/*     
    tl.to( ".lineIz-about",{
      width: "50%",
      duration: .5,
      x: -300,
    })
 */
    
    tl.from( ".about_title",{
      opacity:0,
      y: 50,
      stagger:.12,
    })


    tl.to( ".about_title",{
      duration: .4,
      color:"rgb(125, 186, 255)",
      stagger: .1
    })


    tl.to( ".about_title",{
      duration: .5,
      color:"rgb(255, 255, 255)",
      stagger: .1
    })

    tl.from( ".p_text_about",{
      duration: .5,
      opacity: 0,
      stagger: .1,
      y: 100
    })

    
    tl.from( ".aca_str",{
      duration: .4,
      opacity:0,
      stagger: .1
    })
  }, [])


  return (
    <div className="about" id='about'>
      <div className="about_animation_full"></div>
      <div className="containerAbout">
        <div className="lineIz-about aboutEffect"></div>

        <div className="box_title_about">
          <h2 className='about_title'>Q</h2>
          <h2 className='about_title'>u </h2>
          <h2 className='about_title'>i</h2>
          <h2 className='about_title'>e</h2>
          <h2 className='about_title'>n</h2>
          <h2 className='about_title'>e</h2>
          <h2 className='about_title'>s</h2>
          <h2 className='about_title'>&nbsp;</h2>
          <h2 className='about_title'>s</h2>
          <h2 className='about_title'>o</h2>
          <h2 className='about_title'>m</h2>
          <h2 className='about_title'>o</h2>
          <h2 className='about_title'>s</h2>
          <h2 className='about_title'>&nbsp;</h2>
          <h2 className='about_title'>?</h2>
        </div>

        <div className="lineDer-about aboutEffect"></div>

        <div className="text_about">
          <p className='p_text_about'>
           En ARCO queremos que sus hijos vengan a aprender, practicar y mejorar sus aptitudes en el deporte más lindo del mundo, el que iguala a todos los estratos sociales, ese en el que, cuando la pelota rueda, no distingue entre clases sociales sino que sólo harán diferencias en aquellos que mas pasión y entrega puedan darle a la redonda.
          </p>
          <p className='p_text_about'>
            Para nosotros los que conformamos ARCO son fundamentales y nos encargamos de transmitir en todo momento a los jugadores, los valores del ser humano ante todo, los pilares conceptuales de la academia serán trabajo individual y en equipo, perseverancia, sacrificio, compañerismo, cuidado de su salud, buena alimentación, entre otros.
          </p>

          <p className='p_text_about'>
            Los jugadores tendrán entre sus conceptos la mezcla de ideologías futbolísticas Argentinas y Colombianas para poder desenvolverse dentro  y  fuera de la cancha.
          </p>

        </div>
      </div>

      <div className="academia_vertical">
        <div className="aca_str">A</div>
        <div className="aca_str">C</div>
        <div className="aca_str">A</div>
        <div className="aca_str">D</div>
        <div className="aca_str">E</div>
        <div className="aca_str">M</div>
        <div className="aca_str">I</div>
        <div className="aca_str">A</div>
        <div className="aca_str">&nbsp;</div>
        <div className="aca_str">D</div>
        <div className="aca_str">E</div>
        <div className="aca_str">&nbsp;</div>
        <div className="aca_str">F</div>
        <div className="aca_str">U</div>
        <div className="aca_str">T</div>
        <div className="aca_str">B</div>
        <div className="aca_str">O</div>
        <div className="aca_str">L</div>
      </div>
    </div>
  )
}

export default About