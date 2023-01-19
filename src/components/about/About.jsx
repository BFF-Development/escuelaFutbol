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
          start:"center center",
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
      <div className="containerAbout">
        <div className="lineIz-about aboutEffect"></div>
        <h2 className='about_title aboutEffect_title'>Quienes somos ?</h2>
        <div className="lineDer-about aboutEffect"></div>
      </div>
    </div>
  )
}

export default About