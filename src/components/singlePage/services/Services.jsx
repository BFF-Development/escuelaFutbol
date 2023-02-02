import React, {useEffect} from 'react'
import "./services.css"
import ServicesScroll from './ServicesScroll'
import ServicesTitle from './ServicesTitle'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

const Services = () => {




    useEffect(() => {
      const animateMobile = () =>{ 
        gsap.registerPlugin(ScrollTrigger);  

        const line = document.querySelectorAll(".line")
        const circle_nav = document.querySelector(".circle_nav")


        gsap.to(circle_nav , {
          background: "#fffb29",
          scrollTrigger: {
            trigger: ".services",
            start: "top top",
            end: "+=250",
            scrub: .5,

          }
        });
    
        gsap.to(line , {
          background: "black",
          scrollTrigger: {
            trigger: ".services",
            start: "top top",
            end: "+=250",
            scrub: .5,
          }
        });
    
        gsap.to(".list_link_nav", {
          color: "black",
          scrollTrigger: {
            trigger: ".services",
            start: "top top",
            end: "+=250",
            scrub: .5,
          }
      });
    }

    animateMobile()

    return (() => {
      animateMobile()
    })

    },[])
    
 



  return (
      <div className="services" id='servicios'>
        <ServicesTitle/>
        <ServicesScroll/>
      </div>

  )
}

export default Services