import React from 'react'
import { Col, Row } from 'react-bootstrap'
import * as style from './footer.module.css' 
function FooterComponent({bgcolor,boderclr,fontcolor}) {
  return (
    <section className= {`  ${style.pySpace} border-top  ${boderclr} ${bgcolor}`} >
    <div className='container  '>
    <div className='text-white text-center bg'>
    <Row className={` justify-content-between row-gap-3  `} >
        <Col md={6} xl={5}>
        <div className='d-md-flex  gap_6'>
                <a href="https://peoplevousconnecte.com/privacy" target="blank" className={`${fontcolor ? `${fontcolor} ${style.fs_14 }` :  `text-white ${style.fs_11}` } cursor-pointer  d-block d-md-inline-block mb-3 mb-md-0`}>PRIVACY POLICY</a>
                <a href="https://peoplevousconnecte.com/conditions" target="blank" className= {`${fontcolor ? `${fontcolor} ${style.fs_14 }` :  `text-white ${style.fs_11}` } cursor-pointer `}>TERMS & CONDITIONS</a>
            </div>
        </Col>
        <Col md={5} xl={3}>
            <p className={`${fontcolor ? `${fontcolor} ${style.fs_14 }` :  `text-white ${style.fs_11}` }`}>PC People Connect & BBD © 2023-2024</p>
        </Col>
      </Row>
    </div>
    </div>
    </section>
  )
}

export default FooterComponent
