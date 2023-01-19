import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Power4 } from 'gsap'

const ServicesTitle = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    const tl = gsap.timeline({
      duration:.5,
      ease: Power4.easeOut,
      scrollTrigger:{
          trigger:".serviceTitle",
          /* pin:true, */
          start:"-700px top",
          end:"-=500",
        }
    })

    tl.to( ".line_title_service",{
      width: "55%",
      duration: .5,
      x: -100,
    })

   
    tl.from( ".services_title",{
      opacity:0,
      duration: .8,
      x:200,
    })

  


  },[])


  return (
    <div className="serviceTitle" id='servicios'>
        <div className="line_title_service"></div>
        <h2 className='services_title'>Que ofrecemos ?</h2>
    </div>
  )
}

export default ServicesTitle