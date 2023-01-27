import React, {useState} from 'react'
import "./nav.css"


const Nav = () => {


  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };


  return (
    <>

          <header>
            <div className={isActive ? "nav_active_mobile" : "nav"}>
              <a href="#home "> <p className={isActive ? "titleNav_mobile-active" : "titleNav_mobile"}><strong className='ar'>AR</strong><strong className='co'>CO</strong> </p> </a>

              <div className="toggle" onClick={handleToggle}>
                  <div className={ isActive ? "line line1_active" : "line line1"}></div>
                  <div className={ isActive ? "line line2_active" : "line line2"}></div>
                  <div className={ isActive ? "line line3_active" : "line line3"}></div>
              </div>
              
              {isActive && 
                <ul className='list_nav_mobile' >
                 <li className='list_mobile' onClick={() => handleToggle()}>  <a href="#home ">      Inicio         </a>  </li>
                 <li className='list_mobile' onClick={() => handleToggle()}>  <a href="#about ">     Quienes somos  </a>  </li>
                 <li className='list_mobile' onClick={() => handleToggle()}>  <a href="#servicios "> Servicios      </a>  </li>
                 <li className='list_mobile' onClick={() => handleToggle()}>  <a href="#contact ">    Contacto      </a>  </li>

             {/*     <li className='list_mobile' onClick={() => handleToggle()}> <a href="# " >           Blog            </a> </li> */}

                </ul>
              }

            </div>
          </header>

   </>
  )
}

export default Nav