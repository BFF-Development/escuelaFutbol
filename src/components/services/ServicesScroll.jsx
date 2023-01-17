import React, {useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { Power4 } from 'gsap'

const ServicesScroll = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        let sections = gsap.utils.toArray(".panel");
    
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".container_services",
             start:"top top",
             end:"100% 100%",
          }
        })


        tl.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".container_services",
            pin: true,
            scrub:2,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(".container_services").offsetWidth 
          }
        });

            
        const tl_titles = gsap.timeline({
          scrollTrigger: {
            trigger: ".container_services",
             start:"-350px top",
             end:"+=500",
          }
        })

        tl_titles.from(".strong_title-panel1",{
          opacity: -1,
          x: -300,
          duration: .5,
          stagger: .5,
          delay:1
        })

        const tl_punt = gsap.timeline({
          scrollTrigger: {
            trigger: ".contact",
             start:"-900px top",
             end:"+=1000",
             scrub:2
          }
        })

        tl_punt.from(".circle-wrapper", { duration: 1,  height: "0vh", width: "0vw", opacity:1, border:0});

    },[])


  return (
    <div className="container_services" >
      
        <section className="panel panel1">
            <div className="titlePanel1">
              <div className="boxCuadro"></div>

              <strong className='strong_title-panel1'>Metodos </strong>
              <strong className='strong_title-panel1'> de </strong>
              <strong className='strong_title-panel1'> entrenamiento</strong>

              <div className="boxCuadro2"></div>

            </div>

        </section>

        <section className="panel panel2">
          <div className="titlePanel1">
              <div className="boxCuadro"></div>

              <strong className='strong_title-panel1'>Futbol </strong>
              <strong className='strong_title-panel1'>Mixto</strong>
              
              <div className="boxCuadro2"></div>

            </div>
        </section>

        <section className="panel panel3">
          <div className="titlePanel1">
              <div className="boxCuadro"></div>

              <strong className='strong_title-panel1'>Posibilidad </strong>
              <strong className='strong_title-panel1'>de </strong>
              <strong className='strong_title-panel1'>Realizar </strong>
              <strong className='strong_title-panel1'>Viajes</strong>

              <div className="boxCuadro2"></div>

            </div>
        </section>

        <section className="panel panel4">
            <div className="titlePanel1">
              <div className="boxCuadro"></div>
              <strong className='strong_title-panel1'>Valores</strong>
              <div className="boxCuadro2"></div>

            </div>

            <div className="circle-wrapper">
              <div className="punt1"></div>
            </div>

        </section>
    </div>
  )
}

export default ServicesScroll