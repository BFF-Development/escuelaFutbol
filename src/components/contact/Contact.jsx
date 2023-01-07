import React from 'react'
import "./contact.css"
import telIcon from "../assets/src/icons/tel.png"
import emailIcon from "../assets/src/icons/email.png"
import ubiIcon from "../assets/src/icons/ubi.png"



const Contact = () => {
  return (
    <div className="contact" id='contact'>
        <div className="box_contact">

            <div className="cont tel">
                <img className='iconContact' src={telIcon} alt="icon Telefono" />
                <p>000-000-000</p>
            </div>

            <div className="cont email">
                <img className='emailIcon' src={emailIcon} alt="icon Email" />
                <p>emailExample@gmail.com</p>
            </div>

            <div className="cont ubi">
                <img className='iconContact' src={ubiIcon} alt="icon Ubicacion" />
                <p>ubi example</p>
            </div>

        </div>
    </div>
  )
}

export default Contact