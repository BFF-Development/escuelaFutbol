import React, {useEffect, useState, useRef} from 'react'
import "./audioLoader.css"
import muchachosAudio from "../assets/audio/muchachos.mp3"

const AudioLoader = () => {
    const [activeSound , setActiveSound] = useState(false)


    const handlerActiveSound = () => {
        setActiveSound(!activeSound)
    }


    const audioAmbiente = useRef(null)


    useEffect(() => {
        const playAudio = () => {
            if (activeSound){
                audioAmbiente.current.play()
                audioAmbiente.current.volume= 0.08
              }else{
                audioAmbiente.current.pause()
              }
          }
    
          
          playAudio()
    },[activeSound])






  return (
    <div className="loader" onClick={handlerActiveSound}>
          <audio ref={audioAmbiente} src={muchachosAudio}  autoPlay loop ></audio>
        {
            activeSound ? 
              <div id="bars">
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
              </div>
            :

            <div id="bar_line">
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
            </div>
        }


    </div>
  )
}

export default AudioLoader