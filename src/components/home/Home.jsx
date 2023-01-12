import React, { useEffect } from 'react'
import "./home.css"
import scene from './scene/scene'

export const Home = () => {
  useEffect(() => {
    scene()

  /*   return () => {
      scene()
    } */
  },[])
  
  return (
    <div className="home">
      <canvas className='ballWebGl'></canvas>

    </div>
  )
}
