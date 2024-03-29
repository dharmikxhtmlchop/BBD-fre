import React from "react"
import * as styles from './card.module.css'
function Card({ img, title, description, noImage ,img_width}) {
  return (
    <div className={`  ${styles.boxcontain}   `}>
      {noImage &&<div>
     <img src={img} alt="boxicon" className={` img-fluid ${img_width}`} />
    </div>}
      <h5 className="mb-0 mt-3 mt-lg-4 ">{title}</h5>
      <p className={` mt-4 ${styles.serviceboxcontain}`}>{description}</p>
    </div>
  )
}

export default Card
