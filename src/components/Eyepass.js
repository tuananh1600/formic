import React from 'react'

const Eyepass = (props) => {
  return (
    <i
      className="fa-solid fa-eye"
      style={{
        position: "relative",
        top: "-32px",
        right: "-100px",
        cursor: "pointer",
      }}
      onClick={props.onClick}
    ></i>
  )
}

export default Eyepass