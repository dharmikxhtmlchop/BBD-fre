 
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import * as style from "./video.module.css"
import Vimeo from "@u-wave/react-vimeo"
import Modal from "react-modal"
import playbtn from "../../images/playbtn.png"
import  btn from '../../images/playbtn.png'
import closebtn from '../../images/btnclose.png'


const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [paused, setPaused] = useState(true)
  const [bgimg, setbgimg] = useState(true)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [playbtnicon, setplaybtnicon] = useState(true)
  
  const handleTogglePause = () => {
    setPaused(!paused)
    // setbgimg(false)
  } 
const handleinlinePlay =() =>{
  setPaused(false) 
  setIsPlaying(false)
  setbgimg(false)

}
const handleinlinePause = () =>{
  setPaused(true) 

    setIsPlaying(true)

}
  function openModal() {
    setIsOpen(true) 
    setplaybtnicon(false)
  }

  function afterOpenModal() {
    document.body.style.backgroundColor = '#0505051f';  
  }

  function closeModal() {
    setIsOpen(false)
    setplaybtnicon(true) 
  }
  const customStyles = {
    content: {
      width: "50%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflow: "inherit"
      
    },
  }
  return (
    <>
    
       
    <div className={ ` d-block d-lg-none ${style.videoframesize}`} >

        <label htmlFor="paused" className="w-100">
       
          <input
            type="checkbox"
            id="paused"
            checked={paused}
            onChange={handleTogglePause}
            style={{ opacity:"0" }}
          /> 
          <div
            className={`ms-auto ${style.plycontainerStyle}`}
            role="button"
            tabIndex={0}
          >
            <div className={`${isPlaying ? "d-block" : "d-none"} ${style.plybuttonStyle}`}>  
              <img src={btn} alt="" className="w-100" />
            </div>
            <div className={`${style.bgvideo} overflow-hidden ${bgimg ? "d-block" : "d-none"}`}>
              <StaticImage src="../../images/videoframe.png" alt="placeholder-video" />
            </div>

            <Vimeo
              video={738967866} // Sample video ID
              responsive={true}
              width={762}
              showTitle={false}
              playsInline={true}
              background={ false}
              className={`   ${style.videoframe}`}
              paused={paused}
              onPlay={handleinlinePlay}
              onPause={handleinlinePause}
            />
          </div>
        </label>
      </div>


<div className="d-none d-lg-block">

      <div className={` position-relative  ms-auto ${style.videoframesize} `}>
      <StaticImage src="../../images/videoframe.png" alt="placeholder-video" />
      <div className={`${playbtnicon ? "d-block" : "d-none"} ${style.plybuttonStyle}`}>
      <a href="#/" className="d-inline-block" onClick={openModal}>
      <img src={playbtn} alt="playbtn"  className="img-fluid"/> 
      </a>
      </div>
    </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >
      <a href="#/" className={style.modalclose_btn} onClick={closeModal}>
      <img src={closebtn} alt="fermer" className="img-fluid"  /> 
      </a>
        <div> 
          <Vimeo
            video={738967866} // Sample video ID
            responsive={true}
            width={762}
            showTitle={false}
            playsInline={true}
            background={false}
            className={`${style.videoframe}`} 
            autoplay={true} 
          />
        </div>
       
      </Modal>
</div>
    </>
  )
}

export default VideoPlayer
