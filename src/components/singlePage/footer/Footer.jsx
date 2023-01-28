import React  from 'react'
import "./footer.css"
import telIcon from "../../assets/src/icons/tel.png"
import emailIcon from "../../assets/src/icons/email.png"
import ubiIcon from "../../assets/src/icons/ubi.png"
import axios from 'axios'
import { useEffect } from 'react'

const Footer = () => {

  const submitHandler= e =>{
    e.preventDefault()

    const email = e.target.email.value
    console.log(email)

    axios
        .post(`api/guardarEmail.php`, { email: email })
        .then(res => {            
            console.log(res.data)
        })
        .catch(error => {
          console.log(error)
        })
  }


  return (
    <div className="footer">
      <div className="box_contains_footer">

        <div className="box_list_footer">
          <div className="title_footer"> <p><strong className='ar'>AR</strong><strong className='co'>CO</strong> </p> </div>

          <ul className="list_Footer">
              <li ><a href="#home " > Inicio </a> </li> 
              <li ><a href="#about " >Quienes somos </a> </li> 
              <li ><a href="#servicios " > Servicios</a> </li> 
              {/* <li ><a href="# " >Blog </a></li>  */}
              <li ><a href="#contact "> Contacto  </a></li> 
              <li ><a href="#faqs "> FAQ's </a></li> 
          </ul>     
        </div>
   

        <div className="list_contact">
          <p>Contacto</p>

          <ul>
            <li><img className='icon_footer' src={telIcon} alt="tel icon" />:  000-000-000</li>
            <li><img className='icon_footer' src={emailIcon} alt="email icon" />: emailExample@gmail.com</li>
            <li><img className='icon_footer' src={ubiIcon} alt="ubicacion icon" />: ubicacion example</li>
          </ul>

        </div>


        <div className="box_email">
          <p>Suscribete </p>

          <form onSubmit={(submitHandler)}>
            <input id='email' name='email' type="email" placeholder='Email' required/>
            <button type='submit'>
                Suscribete
            </button>
          </form>
          
        </div>
      </div>

      <div className="box_copyRight">
        <hr className='hr_footer' />
        <div className="copyright">
          <p>@Copyright ARCO. All rights reserved.</p>
        </div>
      </div>

    </div>
  )
}

export default Footer