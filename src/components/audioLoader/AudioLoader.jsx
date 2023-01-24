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


    const [soundOff, setSoundOff] = useState(true)

    const handlerSound = () => {
      setSoundOff(!soundOff)
    }



  return (
    <div className="loader" onClick={handlerActiveSound}>
      <div className="loaderBox">
          <div className="circleBlur"></div>
          <svg className='circle' xmlns="http://www.w3.org/2000/svg" xmlLang="en" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" onClick={handlerSound}>
            <defs>
              <path id="textcircle" d="M250,400
                          a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
            </defs>
            {
              soundOff ?
                <g className="textcircle">
                  <text className='textCircle' textLength="942">
                    <textPath 
                              xlinkHref="#textcircle" 
                              aria-label="SOUND ON" 
                              textLength="942">  • ARCO • SOUND ON • ARCO • SOUND ON  &nbsp;
                    </textPath>
                  </text>
                </g>

              :

              <g className="textcircle">
                <text className='textCircle' textLength="942">
                  <textPath 
                            xlinkHref="#textcircle" 
                            aria-label="SOUND ON" 
                            textLength="942">  • ARCO • SOUND OFF • ARCO • SOUND OFF  &nbsp;
                  </textPath>
                </text>
              </g>

            }

          </svg>


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
     
    </div>
  )
}

export default AudioLoader