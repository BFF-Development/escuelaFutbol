import React, { useEffect } from 'react'
import "./home.css"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

export const Home = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.to( ".containerHome",{
      opacity:0,
      filter:"blur(20px)",
      yPercent: -50 ,
      scrollTrigger:{
        trigger:".about",
        start: "-70% top",
        scrub:2,
        snap: .5,
      }
    },)

   



   
  },[])
  
  return (
    <div className="home">
      <div className="containerHome">
        <div className="boxText_home">
          <h1 className="titleHome">
            Academia de Futbol <strong className='ar'>AR</strong><strong className='co'>CO</strong> 
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

    </div>
  )
}
