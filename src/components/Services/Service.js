import React from "react"
import * as style from "./service.module.css" 
import ServiceBox from "./ServiceBox"
import Button from "../buttons/Button"
import sevicebgshap1 from "../../images/sevicebgshap1.png"
import sevicebgshap2 from "../../images/sevicebgshap2.png"
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
    ,btnlink,
    eap
  } = props

  return (
    <section className="position-relative">
      <div className="position-absolute start-0 d-none d-xl-block"> 
        <img src={sevicebgshap1} alt=" " className= {` ${grayshape ? style.grayshape : ""}`}  />
      </div>
      <div className="position-absolute end-0 d-none d-xl-block">
      
      <img src={sevicebgshap2} alt=" " className= {` ${grayshape ? style.grayshape : ""}`} />
      </div>
      <div className="container px-4 px-lg-3">
        <div className={`position-relative ${style.services} ${style.py84}`}>
          <div className={`text-center `}>
          <div className={`${style.servicetitle} ${style.servicemxwidth}`}>
              
                <h4 className={` text_primary fw-semibold ${style.subtitleclr}`}>{subtitle}</h4>
                <h2 className="mt-4 fw-bold">{title}</h2>
                <p className={style.servicesconatin}> {description} </p>
              
            </div>
          </div>
          {/* Service box */}

          <ServiceBox
            boxData={serviceBoxData}
            lg4={lg4}
            eap={eap}
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
