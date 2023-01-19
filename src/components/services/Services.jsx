import React, {useEffect} from 'react'
import "./services.css"
import ServicesScroll from './ServicesScroll'
import ServicesTitle from './ServicesTitle'

const Services = () => {


  return (
    <div className="service_back">
      <div className="services">
        <ServicesTitle/>
        <ServicesScroll/>
      </div>
    </div>

  )
}

export default Services