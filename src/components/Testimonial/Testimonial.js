import React from "react"
import { Col, Row } from "react-bootstrap"
import * as style from "./testimonial.module.css"
import { StaticImage } from "gatsby-plugin-image"
import flower from "../../images/flower.png"
 
import freleftquotes from "../../images/fre_qutes.png"
import frerighttquotes from "../../images/fre_qutes_right.png"

function Testimonial(props) {
  const { written, conatin, background, flowerimg, shapeimg, msauto  } = props
  return (
    <section className={` position-relative ${background}`}>
      <div className="position-absolute  bottom-0 w-100">
        <img className="w-100" src={shapeimg} alt=" " />
      </div>
      <div className={` position-absolute ${flowerimg}  ${style.flower}`}>
        {/* <StaticImage src="../../images/flower.png" alt="flower" /> */}
        <img src={flower} alt="flower" />
      </div>
      <div className="container position-relative">
        <Row className={style.pySpace}>
          <Col>
            <div
              className={`position-relative ${msauto ? "  ms-lg-auto" : " "} ${
                style.conatinBox
              }`}
            >
              <span className={` ${style.leftquotes}`}>
              <img src={  freleftquotes } alt="leftquotes" className={` ${style.leftquotes_img}`} />

              </span>
              <span className={` ${style.rightquotes}`}>
              <img src={  frerighttquotes } alt="rightquotes" className={` ${style.rightquotes_img}`}/>

              </span>
              <div className={style.pxSpace}>
                <p className={style.contain}> {conatin} </p>
                <p  className={`mt-4  ${style.content_writer}`}>{written}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Testimonial
