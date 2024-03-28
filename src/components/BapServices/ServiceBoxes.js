import React from 'react'
import { Col } from 'react-bootstrap'
import * as style from './bapservices.module.css'


function ServiceBoxes(props) {
  return (
        <Col lg={3} key={props.index} className={`px-0 ${style.boxsize}  rounded-2  ${style.border_box }`}>
          <div className={`${style.box_bapservice}    `} >
            <h4 className={style.box_contain}>{props.content}</h4>
          </div>
        </Col>
  )
}

export default ServiceBoxes
