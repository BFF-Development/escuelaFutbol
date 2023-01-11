import React, {useEffect} from 'react'
import "./services.css"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

const Services = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");

    
/*     gsap.to(".backPanel1",{
      background:" linear-gradient(90deg, rgba(255,214,3,1) 0%, rgba(29,63,253,1) 53%, rgba(252,69,69,1) 100%)",
      duration:1,
      scrollTrigger:{
        trigger:".panel",
        scrub:1
      }
    })

 */


    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container_services",
        pin: true,
        scrub:1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container_services").offsetWidth
      }
    });


 

  },[])

  return (
        
      <div className="container_services" >
          <section className="panel panel1">
            <div className="backPanel1">

            </div>
          </section>
          <section className="panel panel2"></section>
          <section className="panel panel3"></section>
          <section className="panel panel4"></section>
      </div>
  )
}

export default Services