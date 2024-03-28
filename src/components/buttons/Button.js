import React from "react"
import * as style from "./button.module.css"
function Button({ children, bgwhite,btnlink }) {
  return (
    <a href={btnlink} target="blank" className={`${bgwhite} ${style.btn}`}>
      {children}
    </a>
  )
}

export default Button
