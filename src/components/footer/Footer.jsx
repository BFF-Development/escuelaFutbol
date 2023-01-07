import React  from 'react'
import "./footer.css"
import telIcon from "../assets/src/icons/tel.png"
import emailIcon from "../assets/src/icons/email.png"
import ubiIcon from "../assets/src/icons/ubi.png"


const Footer = () => {

  const submitHandler= e =>{
    e.preventDefault()
  }

  return (
    <div className="footer">
      <div className="box_contains_footer">

        <div className="box_list_footer">
          <div className="title_footer"> <p>Name</p> </div>

          <ul className="list_Footer">
              <a href="# " > <li >Inicio         </li> </a>
              <a href="# " > <li >Quienes somos  </li> </a>
              <a href="# " > <li >Servicios      </li> </a>
              <a href="# " > <li >Blog           </li> </a>
              <a href="#contact " > <li >Contacto       </li> </a>
              <a href="#faqs " > <li >FAQ's       </li> </a>

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
            <input type="email" placeholder='Email' required/>
            <button type='submit'>
                Suscribete
            </button>
          </form>
        </div>
      </div>

      <div className="box_copyRight">
        <hr className='hr_footer' />
        <div className="copyright">
          <p>@Copyright NAME. All rights reserved.</p>
        </div>
      </div>

    </div>
  )
}

export default Footer