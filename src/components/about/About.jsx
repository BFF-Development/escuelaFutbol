import React, { useEffect  } from 'react'
import "./about.css"
import gsap from 'gsap'
import { Power4  } from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'


const About = () => {


  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);


  /*   const tl = gsap.timeline({
      duration:.5,
      ease: Power4.easeInOut,
      scrollTrigger:{
          trigger:".box_title_about",
          pinSpacing: true, 
          pin:true,
          start:"-1px top",
          end:"+=1000",
        }
    }) */

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:".about",
        pin:true,
        start:"top top",
        scrub: 2,
        end: () => "+=" + document.querySelector(".about").offsetWidth 
      }
    })



    tl.to(".box_text_about",{
      duration:5,
      ease: "none",
      y: "-200%",
    })


    tl.to( ".p_text_about",{
      color: "white",
      stagger: 10,
      duration: 2,
      scrollTrigger:{
        trigger: ".containerAbout" ,
        start: "10% top",
        end: "+=1600",
        scrub: 2,
      }
    })


  }, [])



  let texto = "En ARCO queremos que sus hijos vengan a aprender, practicar y mejorar sus aptitudes en el deporte más lindo del mundo, el que iguala a todos los estratos sociales, ese en el que, cuando la pelota rueda, no distingue entre clases sociales sino que sólo harán diferencias en aquellos que mas pasión y entrega puedan darle a la redonda."

  let texto1 = "Para nosotros los que conformamos ARCO son fundamentales y nos encargamos de transmitir en todo momento a los jugadores, los valores del ser humano ante todo, los pilares conceptuales de la academia serán trabajo individual y en equipo, perseverancia, sacrificio, compañerismo, cuidado de su salud, buena alimentación, entre otros."

  let texto2 = "Los jugadores tendrán entre sus conceptos la mezcla de ideologías futbolísticas Argentinas y Colombianas para poder desenvolverse dentro  y  fuera de la cancha."


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



  return (
    <div className="about" id='about'>
      <div className="containerAbout">

        <div className="containerTitle_about">

          <div className="container_titulo_line">
            <div className="line_title_abut"></div>

              <div className="box_title_about">
                <div className="quienes">
                  <h2 className='about_title'>Q</h2>
                  <h2 className='about_title'>u </h2>
                  <h2 className='about_title'>i</h2>
                  <h2 className='about_title'>e</h2>
                  <h2 className='about_title'>n</h2>
                  <h2 className='about_title'>e</h2>
                  <h2 className='about_title'>s</h2>
                </div>

                <div className="somos">
                  <h2 className='about_title'>s</h2>
                  <h2 className='about_title'>o</h2>
                  <h2 className='about_title'>m</h2>
                  <h2 className='about_title'>o</h2>
                  <h2 className='about_title'>s</h2>
                  <h2 className='about_title'>&nbsp;</h2>
                  <h2 className='about_title'>?</h2>
                </div>

              </div>
          </div>
       
        </div>
        

    {/*     <div className="lineDer-about aboutEffect"></div>
 */}
        <div className="text_about">
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

      <div className="academia_vertical">
        <div className="aca_str">A</div>
        <div className="aca_str">C</div>
        <div className="aca_str">A</div>
        <div className="aca_str">D</div>
        <div className="aca_str">E</div>
        <div className="aca_str">M</div>
        <div className="aca_str">I</div>
        <div className="aca_str">A</div>
        <div className="aca_str">&nbsp;</div>
        <div className="aca_str">D</div>
        <div className="aca_str">E</div>
        <div className="aca_str">&nbsp;</div>
        <div className="aca_str">F</div>
        <div className="aca_str">U</div>
        <div className="aca_str">T</div>
        <div className="aca_str">B</div>
        <div className="aca_str">O</div>
        <div className="aca_str">L</div>
      </div>
    </div>
  )
}

export default About