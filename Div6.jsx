import React from 'react'
import { useState } from 'react'
import '../Css/Div6.css'
const Div6 = ({ data }) => {
  return (
    <>
    <div className="sixth-page">
    <div className="container-sixth">
      {data.map((item, index) => (
        <div className={`div-${index + 1}`} key={index}>
          <img src={item.imgSrc} className="six-image1" alt={`Image ${index + 1}`} />
          <p className="sixth-para">{item.text}</p>
        </div>
      ))}
    </div>
    <div>
      <p className="sixth-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis
      </p>
      <p className="sixth-text-small">Lorem Ipsum</p>
    </div>
  </div>


    </>
  )
}

export default Div6
