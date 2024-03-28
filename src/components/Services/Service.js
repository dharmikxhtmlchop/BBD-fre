import React from "react"
import * as style from "./service.module.css"
import { StaticImage } from "gatsby-plugin-image" 
import ServiceBox from "./ServiceBox"
import Button from "../buttons/Button"
function Service(props) {
  const {
  
    title,
    description,
    serviceBoxData,
    lg4,
    divided,
    businessowners,
    noImage,
    rowgap,
    subtitle,
    btn,
    eapboxsize,
    grayshape
    ,btnlink
  } = props

  return (
    <section className="position-relative">
      <div className="position-absolute start-0 d-none d-xl-block">
        <StaticImage src="../../images/sevicebgshap1.png" alt=" " className= {` ${grayshape ? style.grayshape : ""}`} />
      </div>
      <div className="position-absolute end-0 d-none d-xl-block">
        <StaticImage src="../../images/sevicebgshap2.png" alt=" " className= {` ${grayshape ? style.grayshape : ""}`} />
      </div>
      <div className="container px-4 px-lg-3">
        <div className={`position-relative ${style.services} ${style.py84}`}>
          <div className={`text-center `}>
          <div className={`${style.servicetitle} ${style.servicemxwidth}`}>
              
                <h4 className="text_primary">{subtitle}</h4>
                <h2 className="mt-4 fw-bold">{title}</h2>
                <p className={style.servicesconatin}> {description} </p>
              
            </div>
          </div>
          {/* Service box */}

          <ServiceBox
            boxData={serviceBoxData}
            lg4={lg4}
            divided={divided}
            rowgap={rowgap}
            noImage={noImage}
            businessowners={businessowners}
            eapboxsize={eapboxsize}
          />
          <div className={` text-center ${style.serviceBtn}`}>
            <Button btnlink={btnlink}>{btn}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
