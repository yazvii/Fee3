import React from 'react'
import { useState } from 'react'
import '../Css/Div2.css'
const Div2 = ({ items }) => {
  return (
    <>
    <div id='menu' className="second-page">
    <div className="heading">
      <img src="Images/second-title.png" className="second-title" />
      <p>
        Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Vivamus
        lacinia odio vitae vestibulum vestibulum.
      </p>
    </div>
    <div className="three-box inner flex">
      {items.map((item, index) => (
        <div className="small-div" key={index}>
          <img src={item.imgSrc} className="img1" id={`image${index + 1}`} alt={item.title} />
          <h2 id={`title-${index + 1}-small`}>{item.title}</h2>
          <p id={`para-${index + 1}-small`}>{item.description}</p>
        </div>
      ))}
    </div>
    <div className="bottom-button-div">
      <button className="bottom-button">Show More</button>
    </div>
  </div>


    </>
  )
}

export default Div2
