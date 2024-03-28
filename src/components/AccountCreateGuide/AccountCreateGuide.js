import React from "react"
import * as style from "./accountcreateguide.module.css"
import { Col, Row } from "react-bootstrap"
 
function AccountCreateGuide({guidedata}) {
  return (
    <section className={style.pySpace}>
      <div className="container px-4  px-lg-2">
        <Row>
          <Col>
            <div className="text-center">
              <h2 className="fw-bold">Il est facile de vous lancer</h2>
            </div>
          </Col>
        </Row>
        <Row
          className={`  ${style.cardtopspace} justify-content-between  ${style.rowgap} ${style.mainbox}`}
        >
        {
          guidedata && guidedata.map((ele,index)=>{
            return(
              <Col lg={4} key={index} className={`${style.card_size} border position-relative   rounded-2 px-0 `}>
            <div
              className={`   text-center ${style.cardstyle}`}
            >
              <div className={style.cardnumber}>{ele.number} </div>
              <div className={style.spaceheading}>
                <h5 className={` fw-semibold mx-auto ${style.mx_contain}`} >{ele.contain}</h5>
              </div>
              <div>
                <img
                  className="w-100"
                  src={require(`../../images/${ele.img}`).default }
                  alt="card1"
                />
              </div>
            </div>
          </Col>
            )
          })
        }
          
        </Row>
        <div className={` text-center ${style.mt_76}   d-lg-block`} >
          <p className="fs-5">Vous avez de la difficulté à vous inscrire?  <a href="#/" className="fw-bold text-decoration-underline">Obtenez du soutien</a> </p>
        </div>
      </div>
    </section>
  )
}

export default AccountCreateGuide
