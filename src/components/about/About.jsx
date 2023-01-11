import React, { useEffect } from 'react'
import "./about.css"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

const About = () => {

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const animateAbout = () => {


      gsap.from(".about_title",{
        opacity:0,
        y: 100,
          scrollTrigger:{
            trigger:".about",
            start:"-50px",
            end: "50px",
            scrub: 1
          }
      })

      const tl = gsap.timeline({
        duration:2,
        scrollTrigger:{
          trigger:".about",
          pin:true,
          scrub:2,
          end:"+=1000"
        }
      })
  
 /*      tl.to(".about",{
        background:"black",
      })

      tl.to(".about_title",{
        color:"white",
      }) */
  
 
    }

    animateAbout()

  return () => {
    animateAbout()

  }


  }, [])


  return (
    <div className="about">
        <h2 className='about_title'>Quienes somos?</h2>
    </div>
  )
}

export default About