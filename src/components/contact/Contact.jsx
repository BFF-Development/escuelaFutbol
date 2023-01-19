import React, {useEffect} from 'react'
import "./contact.css"
import telIcon from "../assets/src/icons/contact.svg"
import emailIcon from "../assets/src/icons/email.svg"
import ubiIcon from "../assets/src/icons/ubi.svg"
import followIcon from "../assets/src/icons/follow.svg"
import instaIcon from "../assets/src/icons/insta.svg"


import gsap from 'gsap'
import { Power4 } from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'


const Contact = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
    

          const tl = gsap.timeline({
            ease: Power4.easeOut,
            scrollTrigger:{
                trigger:".container_contact",
                start:"-200px top",
              }
          })
      
          tl.to( ".line_title_contact",{
            width: "35%",
            x: -100,
          })
      
         
          tl.from( ".contactTitle",{
            opacity:0,
            duration: .5,
            y:20,
          })

          tl.from( ".cont",{
            opacity:0,
            duration: .5,
            stagger: .4,
            y:20,
          })
      
          tl.from( ".map",{
            opacity:0,
            duration: .5,
            y:20,
          })
      

    },[])


  return (
    <div className="contact" id='contact'>  

        <div className="container_contact">
            <div className="line_title_contact"></div>
            <h2 className="contactTitle">Contacto</h2>

            <div className="box_contact">

                <div className="cont tel">
                    <hr className="hr_contact"/>

                    <div className="iconContac">
                      <img className='iconContact' src={telIcon} alt="icon Telefono" />
                    </div>
                    <div className="boxTitleContact">
                      <h2>Telefono</h2>
                      <p>000-000-000</p>
                    </div>
                </div>

                <div className="cont email">
                    <hr className="hr_contact"/>

                    <div className="iconContac">
                      <img className='emailIcon' src={emailIcon} alt="icon Email" />
                    </div>
                    <div className="boxTitleContact">
                      <h2>Email</h2>
                      <p>emailExample@gmail.com</p>
                    </div>
                </div>

                <div className="cont ubi">
                    <hr className="hr_contact"/>

                    <div className="iconContac">
                      <img className='iconContact' src={ubiIcon} alt="icon Ubicacion" />
                    </div>
                    <div className="boxTitleContact">
                      <h2>Ubicacion</h2>
                      <p>ubi example</p>
                    </div>
                </div>

                <div className="cont follow">
                  <hr className="hr_contact"/>

                    <div className="iconContac">
                      <img className='iconFollow' src={followIcon} alt="icon Follow" />
                    </div>
                    <div className="boxTitleContact">
                      <h2>Seguinos en</h2>
                      <a href="http://" target="_blank" rel="noopener noreferrer">
                        <div className="boxiconInstagram">
                            <img className='iconInsta' src={instaIcon} alt="icon insta" />
                        </div>
                      </a>
                    </div>
                    <hr className="hr_contact"/>

                </div>

            </div>

            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63458.359608653605!2d-75.61623098680522!3d6.244287615728209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses-419!2sar!4v1673103712439!5m2!1ses-419!2sar"  referrerPolicy="no-referrer-when-downgrade" loading="lazy" allowFullScreen ></iframe>
            </div>
        </div>

       
    </div>
  )
}

export default Contact