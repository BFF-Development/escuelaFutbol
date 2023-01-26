import React from 'react'
import "./preloader.css"
import logo from "../assets/src/backgrounds/logo.png"
import gsap from 'gsap'
import { useEffect } from 'react'


const PreLoader = () => {
  
    useEffect(() => {

        const tl = gsap.timeline()

        tl.to(".preloader",{
            delay: 3,
            duration: .5, 
            z: -1,
            opacity:0,
        })

        tl.to(".preloader",{
            visibility:"hidden"
        })


    },[])
  
    return (
    <div className="preloader">
        <img src={logo} alt="logo" />
    </div>
  )
}

export default PreLoader