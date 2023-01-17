import React, {useEffect, useState} from 'react'
import "./nav.css"


const Nav = () => {

  function isMobileOrTablet() {
    // Verificamos si el tamaño de la pantalla es menor a 800px (teléfono móvil) o mayor a 800px (tableta)
    const mobileOrTabletRegex = /(iphone|ipod|ipad|android|iemobile|blackberry|bada|nokia|samsung|webos|palm|windows ce)/i;
    return window.matchMedia("(max-width: 800px)").matches || mobileOrTabletRegex.test(navigator.userAgent);
  }

  const [isActive, setActive] = useState(false);
  const [navDesk , setNavDesk] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handlerDeskt = () => {
    setNavDesk(!navDesk)
  }




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
      window.addEventListener("scroll", handlerDeskt)

    }


  },[])

  if(navDesk){
    window.addEventListener("scroll", () => {
      setNavDesk(false)
    })
  }


  return (
    <>

      {
        !isMobile ? 
          <header>
            <div className= "nav" >
              <a href="/"> <p className='titleNav_desktop'><strong className='ar'>AR</strong><strong className='co'>CO</strong> </p> </a>

              <div className="listEffectNav">
                    <div>
                        {navDesk ? 
                          <ul className='list_nav_desktop' >
                              <li><a href="# ">Inicio</a> </li>
                              <li><a href="#about ">Quienes somos</a> </li>
                              <li><a href="#servicios ">Servicios</a> </li>
                              <li><a href="# ">Blog </a> </li>
                              <li><a href="#contact ">Contacto</a> </li>
                          </ul>
      
                          : 
                          <ul className='toggleDeskt' onClick={handlerDeskt}> 
                              <li className="lineD line1D"></li>
                              <li className="lineD line2D"></li>
                              <li className="lineD line3D"></li>
                          </ul>
  
                        }
               
                    </div>
              </div>

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