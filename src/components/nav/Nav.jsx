import React, {useEffect, useState} from 'react'
import "./nav.css"

const Nav = () => {

  function isMobileOrTablet() {
    // Verificamos si el tamaño de la pantalla es menor a 800px (teléfono móvil) o mayor a 800px (tableta)
    const mobileOrTabletRegex = /(iphone|ipod|ipad|android|iemobile|blackberry|bada|nokia|samsung|webos|palm|windows ce)/i;
    return window.matchMedia("(max-width: 800px)").matches || mobileOrTabletRegex.test(navigator.userAgent);
  }

  const [isActive, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    
    setIsMobile(isMobileOrTablet());

    
    function handleResize() {
      setIsMobile(isMobileOrTablet());
    }
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    }


  },[])


  return (
    <>

      {
        !isMobile ? 
          <header>
            <div className={isActive ? "nav_active" : "nav"}>
              <a href="/"> <p className='titleNav_desktop'>NAME</p> </a>

              <ul className='list_nav_desktop'>
                <a href="# " > <li >Inicio         </li> </a>
                <a href="# " > <li >Quienes somos  </li> </a>
                <a href="# " > <li >Servicios      </li> </a>
                <a href="# " > <li >Blog           </li> </a>
                <a href="#contact " > <li >Contacto </li> </a>
              </ul>

              <div className="nav_degree"></div>
            </div>

          </header>
          
          : 

          <header>
            <div className={isActive ? "nav_active_mobile" : "nav"}>
              <a href="/"> <p className='titleNav_mobile'>NAME</p> </a>

              <div className="toggle" onClick={handleToggle}>
                  <div className={ isActive ? "line line1_active" : "line line1"}></div>
                  <div className={ isActive ? "line line2_active" : "line line2"}></div>
                  <div className={ isActive ? "line line3_active" : "line line3"}></div>
              </div>

              {isActive && 
                <ul className='list_nav_mobile' >
                  <a href="# " >  <li onClick={() => handleToggle()}>Inicio         </li> </a>
                  <a href="# " >  <li onClick={() => handleToggle()}>Quienes somos  </li> </a>
                  <a href="# " >  <li onClick={() => handleToggle()}>Servicios      </li> </a>
                  <a href="# " >  <li onClick={() => handleToggle()}>Blog           </li> </a>
                  <a href="#contact " >  <li onClick={() => handleToggle()}>Contacto       </li> </a>
                </ul>
              }

              <div className="nav_degree"></div>
            </div>
          </header>
      }

   </>
  )
}

export default Nav