import React, {useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { Power4 } from 'gsap'

const ServicesScroll = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);


        let sections = gsap.utils.toArray(".panel");

        /* section antimation */
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
            scrub:1.5,
            snap: 1 / (sections.length - 1) ,
            end: () => "+=" + document.querySelector(".container_services").offsetWidth 
          }
        });

        
        /* titles animation */

        const tl_titles = gsap.timeline({
          scrollTrigger: {
            trigger: ".container_services",
             start:"-350px top",
          }
        })


        tl_titles.from(".boxCuadro",{
          opacity: 0,
          x: -20,
          stagger: .2,
        })

        let titlesService = gsap.utils.toArray(".strong_title-panel1");


        tl_titles.from(titlesService,{
          opacity: 0,
          y: -20,
          stagger: .2,
        })


        /* circle animation */
        const tl_punt = gsap.timeline({
          scrollTrigger: {
            trigger: ".contact",
             start:"-900px top",
             end:"+=1000",
             scrub:2
          }
        })


        tl_punt.from(".circle-wrapper", {
           duration: 1,  
           height: "0vh", 
           width: "0vw", 
           opacity:1, 
           border:0,
        });



    },[])


  return (
    <div className="container_services" >

        <section className="panel panel1">
            <div className="titlePanel1">
              <div className="boxCuadro boxCuadro1"></div>
              <strong className='strong_title-panel1'>Entrenamientos Innovadores</strong>
              <div className="boxCuadro boxCuadro2"></div>
            </div>
        </section>

        <section className="panel panel2">
          <div className="titlePanel1">
              <div className="boxCuadro boxCuadro1"></div>
              <strong className='strong_title-panel1'>Futbol Mixto</strong>
              <div className="boxCuadro boxCuadro2"></div>
            </div>
        </section>

        <section className="panel panel3">
           <div className="titlePanel1">
              <div className="boxCuadro boxCuadro1"></div>
              <strong className='strong_title-panel1'>Informes Personalizados </strong>
              <div className="boxCuadro boxCuadro2"></div>
            </div>

            <div className="circle-wrapper">
              <div className="punt1"></div>
            </div>
        </section>
    </div>
  )
}

export default ServicesScroll