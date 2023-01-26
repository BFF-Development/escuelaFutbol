import React from 'react'
import About from './about/About'
import Arco from './arco/Arco'
import Contact from './contact/Contact'
import Faqs from './faqs/Faqs'
import Footer from './footer/Footer'
import { Home } from './home/Home'
import Services from './services/Services'

const SinglePage = () => {
  return (
    <>
        <Home/>
        <About/>
        <Services/>
        <Contact/>
        <Faqs/>
        <Arco/>
        <Footer/>
    </>
  )
}

export default SinglePage