import React from 'react'
import { useState } from 'react'
import '../Css/Div3.css'
const Div3 = ({ paragraphs }) => {
  return (
    <>
   <div className="third-page">
    <div className="third-page-title">
      <img src="Images/ThirdPageTitle.png" className="third-page-image" />
      <div>
      {paragraphs.map((paragraph, index) => (
        <div className={`para${index + 1}`} key={index}>
          {paragraph}
        </div>
      ))}
    </div>
    </div>
    <div className="third-page-btn-div">
      <button className="third-page-btn">MORE INFO</button>
    </div>
  </div>

    </>
  )
}

export default Div3
