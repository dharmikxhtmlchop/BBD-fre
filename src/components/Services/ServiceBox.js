import React from "react"
import * as style from "./service.module.css"
import { Col, Row } from "react-bootstrap"
import Card from "../Servicecard/Card"
function ServiceBox({
  boxData,
  lg4,
  divided,
  businessowners,
  noImage,
  rowgap,
 
}) {
  return (
    <React.Fragment>
      <Row
        className={`row-gap-3 ps-0 ps-lg-3   ${
          rowgap ? "row-gap-md-5" : "row-gap-md-0"
        }   flex-wrap ${
          divided ?  `justify-content-between ${style.servicebuisnessbox}`  :  `justify-content-center ${style.servicesBox}`}
        `}
      >
        {divided && (
          <div
            className={`d-flex  d-lg-flex align-items-center justify-content-between ${style.buisnessboxtitle}`}
          >
            <p className={`fw-bold ${style.heading_supportemp} ${style.primaryclr}`}>
            Soutien aux employés
            </p>
            <div
              className={`     ${style.border}  ${style.bgprimaryclr}`}
            ></div>
          </div>
        )}
        {boxData &&
          boxData.map((ele, index) => {
            
            return (
              <Col md={4}  lg={lg4} className={ ` mx-xl-0   p-0 ${
          divided ?  `  ${style.boxsize}`  :  ` ${style.boxsizeeap}`}`}  key={index}>
                <Card
                  noImage={noImage}
                  img_width='img_width' 
                  img={ele.img}
                  title={ele.title}
                  description={ele.description}
                />
              </Col>
            )
          })}
      </Row>
      {divided && (
        <Row
          className={`row-gap-4 row-gap-md-0 ps-0 ps-lg-3  justify-content-between flex-wrap  ${style.servicebuisnessbox}`}
        >
          <div
            className={`d-block  d-lg-flex align-items-center justify-content-between ${style.buisnessboxtitle}`}
          >
            <p className={`fw-bold ${style.heading_supportemp} ${style.primaryclr}`}>
            Soutien aux propriétaires d’entreprise
            </p>
            <div
              className={`  d-none d-lg-block ${style.border}  ${style.bgprimaryclr}`}
            ></div>
          </div>
          {businessowners &&
            businessowners.map((ele, index) => {
              
              return (
              <Col md={4}  lg={4} className={` ${style.boxsize}  mx-xl-0    p-0 text-lg-start`}  key={index}>
                <Card
                  noImage={noImage}
                  img_width='img_width' 
                  img={ele.img}
                  title={ele.title}
                  description={ele.description}
                />
              </Col>
            )
            })}
        </Row>
      )}
    </React.Fragment>
  )
}

export default ServiceBox
