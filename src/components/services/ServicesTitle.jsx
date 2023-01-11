import React, { useEffect } from 'react'
import gsap from 'gsap'

const ServicesTitle = () => {

  useEffect(() => {
/*     gsap.from(".services_title",{
      opacity:0,
      y: 100,
        scrollTrigger:{
          trigger:".serviceTitle",
          scrub: 1,
          pin:true
        }
    })
 */

  },[])


  return (
    <div className="serviceTitle" id='servicios'>
        <h2 className='services_title'>Servicios</h2>
    </div>
  )
}

export default ServicesTitle