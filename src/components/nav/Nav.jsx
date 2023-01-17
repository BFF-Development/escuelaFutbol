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


    let sectionPosition = document.getElementById("about").offsetTop;
    let navbar = document.querySelector(".nav");
    
    // Agrega un escuchador de eventos "scroll" al documento
    document.addEventListener("scroll", function() {
      // Obtén la posición actual del scroll
      var scrollPosition = window.pageYOffset;
      
      // Comprueba si el usuario ha desplazado hasta la sección específica
      if (scrollPosition >= sectionPosition) {
        // Añade la clase "navbar-changed" a la barra de navegación
        navbar.classList.add("nav_active");
      } else {
        // Elimina la clase "navbar-changed" de la barra de navegación
        navbar.classList.remove("nav_active");
      }
    });







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
            <div className= "nav" >
              <a href="/"> <p className='titleNav_desktop'><strong className='ar'>AR</strong><strong className='co'>CO</strong> </p> </a>

              <ul className='list_nav_desktop'>
                <a href="# " > <li >Inicio         </li> </a>
                <a href="#about " > <li >Quienes somos  </li> </a>
                <a href="#servicios " > <li >Servicios      </li> </a>
                <a href="# " > <li >Blog           </li> </a>
                <a href="#contact " > <li >Contacto </li> </a>
              </ul>

             {/*  <div className="nav_degree"></div> */}
            </div>

          </header>
          
          : 

          <header>
            <div className={isActive ? "nav_active_mobile" : "nav"}>
              <a href="/"> <p className={isActive ? "titleNav_mobile-active" : "titleNav_mobile"}>ARCO</p> </a>

              <div className="toggle" onClick={handleToggle}>
                  <div className={ isActive ? "line line1_active" : "line line1"}></div>
                  <div className={ isActive ? "line line2_active" : "line line2"}></div>
                  <div className={ isActive ? "line line3_active" : "line line3"}></div>
              </div>
              
              {isActive && 
                <ul className='list_nav_mobile' >
                  <a href="# " >  <li className='list_mobile' onClick={() => handleToggle()}>Inicio         </li> </a>
                  <a href="#about " >  <li className='list_mobile' onClick={() => handleToggle()}>Quienes somos  </li> </a>
                  <a href="#servicios " >  <li className='list_mobile' onClick={() => handleToggle()}>Servicios      </li> </a>
                  <a href="# " >  <li className='list_mobile' onClick={() => handleToggle()}>Blog           </li> </a>
                  <a href="#contact " > <li className='list_mobile' onClick={() => handleToggle()}>Contacto </li> </a>
                </ul>
              }

            </div>
          </header>
      }

   </>
  )
}

export default Nav