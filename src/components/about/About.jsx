import React, { useEffect  } from 'react'
import "./about.css"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import logo from "../assets/src/backgrounds/logo.png"

const About = () => {


  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);



    const handleResize = () => {



      if (window.innerWidth > 900) {
        const tl = gsap.timeline()
        
        tl.to( ".about",{
          scrollTrigger:{
            trigger:".about",
            pin:true,
            start:"-1px top",
            scrub: 2,
            end:"+=2400"
          }
        })
  

        
        tl.to( ".p_text_about",{
          color: "white",
          stagger: .01,
          duration: .01,
          scrollTrigger:{
            trigger: ".containerAbout" ,
            start: "10% top",
            end: "+=1000",
            scrub: 3,
          }
        })

        gsap.to(".box_text_about",{
          duration:2,
          ease: "none",
          color: "white",
          stagger: .01,
          y: "-122%",
          scrollTrigger:{
            trigger:".containerAbout",
            start:"top top",
            scrub: 2,
          }
        })

        const tl_logo = gsap.timeline({
          scrollTrigger:{
            trigger:".containerAbout",
            start:"top top",
            end: "+=1600",
            scrub: 5,
          }
        })
  

        tl_logo.to(".logo_about_top",{
          duration: 4,
          opacity:0,
          delay: 1
        })

        
        tl_logo.from(".logo_about_bottom",{
          duration:4,
          opacity:0,
          rotateZ:360,
          x: -800
        })


        const tl_title = gsap.timeline({
          scrollTrigger:{
            trigger:".containerAbout",
            start:"top top",
            end: "+=2000",
          }
        })


        tl_title.to( ".about_title",{
          duration: .4,
          color:"rgb(125, 186, 255)",
          stagger: .1
        })


        tl_title.to( ".about_title",{
          duration: .5,
          color:"rgb(255, 255, 255)",
          stagger: .1
        })

      }else{

        const tl = gsap.timeline()
        
        tl.to( ".about",{
          scrollTrigger:{
            trigger:".about",
            pin:true,
            start:"-1px top",
            scrub: 2,
          }
        })
  
   

        const tl_logo = gsap.timeline({
          scrollTrigger:{
            trigger:".containerAbout",
            start:"top top",
            end: "+=800",
            scrub: 5,
          }
        })
  
        
        tl_logo.from(".logo_about_bottom",{
          duration:4,
          opacity:0,
          rotateZ:360,
          x: -800
        })

        tl_logo.to(".box_text_about",{
          duration:2,
          opacity:1
   
        })

        tl_logo.to( ".p_text_about",{
          duration: 1,
          opacity:1
        
        })


      }
      

  }


  handleResize();

  return () => {
    handleResize();
  };

}, [])

  


  let texto = "En ARCO queremos que sus hijos vengan a aprender, practicar y mejorar sus aptitudes en el deporte más lindo del mundo, el que iguala a todos los estratos sociales, ese en el que, cuando la pelota rueda, no distingue entre clases sociales sino que sólo harán diferencias en aquellos que mas pasión y entrega puedan darle a la redonda."

  let texto1 = "Para nosotros los que conformamos ARCO son fundamentales y nos encargamos de transmitir en todo momento a los jugadores, los valores del ser humano ante todo, los pilares conceptuales de la academia serán trabajo individual y en equipo, perseverancia, sacrificio, compañerismo, cuidado de su salud, buena alimentación, entre otros."

  let texto2 = "Los jugadores tendrán entre sus conceptos la mezcla de ideologías futbolísticas Argentinas y Colombianas para poder desenvolverse dentro  y  fuera de la cancha."

  let title_quienes = "Quienes"
  let title_somos = "Somos ?"
/*   let textoAcademia = "Academia de Futbol" */


  const arrayPalabras = (texto) => {
    const cadena = []

    for(let i = 0 ; i < texto.length ; i++){

      if( texto[i] == " "){
        cadena.push( <span> &nbsp;</span> )
      }
      else{
        cadena.push(texto[i])
      }
    }

    return cadena
  }

  let cadena1 = arrayPalabras(texto)
  let cadena2 = arrayPalabras(texto1)
  let cadena3 = arrayPalabras(texto2)
  let cadenaTitle_quienes = arrayPalabras(title_quienes)
  let cadenaTitle_somos = arrayPalabras(title_somos)
/*   let cadenaAcademia = arrayPalabras(textoAcademia) */




  return (
    <div className="about" id='about'>
      <div className="containerAbout">

        <div className="containerTitle_about">

          <div className="container_titulo_line">
              <div className="line_title_abut"></div>

              <div className="box_title_about">
                <div className="quienes">
                {
                  cadenaTitle_quienes.map((index, key) => {
                    return <p key={key} className='about_title'>{index} </p>
                  })
                }
                </div>

                <div className="somos">
                {
                  cadenaTitle_somos.map((index, key) => {
                    return <p key={key} className='about_title'>{index} </p>
                  })
                }
                </div>

              </div>
          </div>
            <div className="logo_about">
                <img className='logo_about_bottom' src={logo} alt="logo" />
            </div>
        </div>
        

    {/*     <div className="lineDer-about aboutEffect"></div>
 */}
        <div className="text_about">
          <div className="logo_about">
              <img className='logo_about_top' src={logo} alt="logo" />
          </div>
          <div className="box_text_about">

            <div className="cadenaAbout cadena1_about">
              {
                cadena1.map((index, key) => {
                  return <p key={key} className='p_text_about'>{index} </p>
                })
              }
            </div>

            <div className="cadenaAbout cadena2_about">
              {
                cadena2.map((index, key) => {
                  return <p key={key} className='p_text_about'>{index} </p>
                })
              }
            </div>

            <div className="cadenaAbout cadena3_about">
              {
                cadena3.map((index, key) => {
                  return <p key={key} className='p_text_about'>{index} </p>
                })
              }
            </div>

          </div>
        </div>
        
      </div>

 {/*      <div className="academia_vertical">
          {
            cadenaAcademia.map((index, key) => {
              return <p key={key} className='aca_str'>{index} </p>
            })
          }
      </div> */}
    </div>
  )
}

export default About