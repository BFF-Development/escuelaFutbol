import React, { useEffect } from 'react'
import "./home.css"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import Scene from './scene/Scene'
import backPrincipal from "../../assets/src/backgrounds/backPrincipal.jpg"
import { Power4 } from 'gsap/src/all'

const Home = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const homeEffect = () => {
      
      if (window.innerWidth > 900) {
        gsap.to( ".home",{
          opacity:0,
          duration: .1,
          filter:"blur(20px)",
          scrollTrigger:{
            trigger:".containerHome",
            start: "center center",
            scrub:true,
            snap: 3,
          }
        },)
      }
    }


    homeEffect()

    const movementHome = () => {
      const image = document.querySelector('.backgroundPrincipal');
      const anda = document.querySelector('.anda');


      document.addEventListener('mousemove', (event) => {
        const x = event.clientX / window.innerWidth - 0.2;
        const y = -event.clientY / window.innerHeight - 0.2;
        
        image.style.transform = `translate(${x * 11}px, ${y * 11}px)`;
        anda.style.transform = `translate(${-x * 5}px, ${-y * 5}px)`;
      });


      gsap.from(".boxText_home",{
        delay:1,
        duration: 2, 
        opacity:0,
        scale:.9,
        ease: Power4.easeInOut
      })

      gsap.from(".backgroundPrincipal",{
        delay:1.2,
        duration: 2.5, 
        opacity:0,
        y: "100px",
        ease: Power4.easeInOut
      })
    }

    movementHome()

   return () => {
    homeEffect()
    movementHome()
   }
   
  },[])
  
  return (
    <div className="home" id="home" >
        <Scene/>

      <div className="containerHome">
        <img className='backgroundPrincipal' src={backPrincipal} alt="background principal" />
        <div className="boxText_home">
          <h1 className="titleHome " >
            Academia de Futbol 
          </h1>
          <h2 className='subtitle_home'>
            Formamos deportistas con disciplina, dedicación y pasión.
          </h2>

          <p className='description_hero'>
              Enseñamos a nuestros estudiantes a jugar al fútbol con pasión y a desarrollar valores fundamentales que los ayudarán a tener éxito tanto en lo deportivo como en la vida.  
              <span> ¡Ven y descubre cómo podemos ayudar a tu hijo a alcanzar sus sueños!</span> 
          </p>
        </div>
      </div>

      <div className="anda">
        <p>ANDÁ PA ALLÁ</p>
        <svg width="893" height="46" viewBox="0 0 893 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 29.6443C290.5 13.311 865.5 -9.55565 881.5 29.6443" stroke="#00B2FF" stroke-width="20"/>
        </svg>


      </div>

    </div>
  )
}


export default Home


