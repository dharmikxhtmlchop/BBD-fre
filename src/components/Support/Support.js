import React from "react"
import * as style from "./support.module.css"
import { Col, Row } from "react-bootstrap"
import Button from "../buttons/Button" 
import buuterfly from "../../images/left_butterfly.svg"
import leftbutterfly from "../../images/leftsupportbutterfly.svg"
import rightbutterfly from "../../images/supportbutterfly.svg"
function Support(props) {
 
  const { subcontain, btnbg, supportbg, rightpng, leftpng,buuterflyleft ,title,btn,fontcolor ,btnlink} = props
  return (
    <section className={`position-relative   ${supportbg} ${style.pySpace}`}>
      <div
        className={` d-none  position-absolute  ${leftpng}  ${style.butterflyright}`}
      > 
        <img src={rightbutterfly} className="img-fluid" alt=" " />
      </div>
      <div className={`position-absolute  ${style.buuterflyleft} ${buuterflyleft}`}>
        <img src={buuterfly} alt=" " className={``} />
      </div>
      <div
        className={`  d-lg-none  text-center ${rightpng} mx-auto mb-4 ${style.butterflyleft}`}
      >
        <img src={leftbutterfly} alt=" " className="img-fluid" />
      </div>
      <div className="container">
        
          <div className={`mx-auto ${style.mx_box}`}>
            <div className={`  text-center ${style.support_contain} text-white position-relative`} >
              <h2 className={` mb-3  fs_35  ${fontcolor}`}>{title}</h2>
              <p className={fontcolor}>{subcontain}</p>
              <div className={style.mt_27}>
                <Button btnlink={btnlink} bgwhite={btnbg}>{btn}</Button>
              </div>
            </div>
          </div>
        
      </div>
    </section>
  )
}

export default Support
