import React, {useEffect} from 'react'
import "./services.css"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

const Services = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");
    
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
          <section className="panel panel1"></section>
          <section className="panel panel2"></section>
          <section className="panel panel3"></section>
          <section className="panel panel4"></section>
      </div>
  )
}

export default Services