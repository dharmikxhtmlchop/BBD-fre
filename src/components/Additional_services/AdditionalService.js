import React from "react"
import * as style from "./additional.module.css"
import { Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import rightbuuterfly from "../../images/yellow_butterfly_right.svg"

function AdditionalService() {
  return (
    <section
      className={`position-relative ${style.backgroundclr} ${style.pySpace}`}
    >
      <div className="container">
        <Row className={` align-items-center row-gap-5 justify-content-between ${style.mainBox}`}>
          <Col lg={6} className={`px-lg-0  ${style.additional_conatainbox}`}>
            <div className="text-center text-lg-start">
              <h4>Services supplémentaires</h4>
              <p className="mt-3  ">
              Des événements inattendus se produisent et, lorsque cela se produit, BBD offre des services de soutien en cas d’incident critique au besoin.
              </p>
            </div>
          </Col>
          <Col lg={6} className= {`px-lg-0 ${style.additional_warningbox}`}>
            <div
              className={`d-flex flex-column flex-md-row align-items-center gap-4  text-center text-md-start ${style.warning_box} rounded-4 ${style.warningboxbg}`}
            >
              <div className="flex-shrink-0">
                <StaticImage src="../../images/warninghand.svg" />
              </div>
              <div>
                <h5 className="text-white">
                Services de soutien en cas d’incident critique
                </h5>
                <p className="text-warning mt-4">
                Non inclus. Frais pour le service.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={`d-none d-lg-block position-absolute ${style.butterflyright}`}>
        <img src={rightbuuterfly} alt="" />
      </div>
    </section>
  )
}

export default AdditionalService
