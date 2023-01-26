import React from 'react'
import "./preloader.css"
import logo from "../assets/src/backgrounds/logo.png"
import gsap from 'gsap'
import { useEffect } from 'react'


const PreLoader = () => {
  
    useEffect(() => {

        gsap.to(".preloader",{
            delay: 3,
            duration: .5, 
            z: -1,
            opacity:0,
        })

    },[])
  
    return (
    <div className="preloader">
        <img src={logo} alt="logo" />
    </div>
  )
}

export default PreLoader