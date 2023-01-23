import React, {useEffect} from 'react'
import "./services.css"
import ServicesScroll from './ServicesScroll'
import ServicesTitle from './ServicesTitle'

const Services = () => {


  return (
      <div className="services" id='servicios'>
        <ServicesTitle/>
        <ServicesScroll/>
      </div>

  )
}

export default Services