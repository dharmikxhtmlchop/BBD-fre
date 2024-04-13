import React from "react"
import * as styles from './card.module.css'
function Card({ img, title, description, noImage ,eap}) {
  return (
    <div className={`  ${styles.boxcontain}   `}>
      {noImage &&<div className={styles.img_width}>
     <img src={img} alt="boxicon" className={` img-fluid  `} />
    </div>}
      <h5 className={`${eap ? "mt-0" : "mb-0 mt-3 mt-lg-0"}   ${eap ? styles.titlestyle : styles.paptitle}`}>{title}</h5>
      <p className={` mt-3 ${styles.serviceboxcontain}`}>{description}</p>
    </div>
  )
}

export default Card
