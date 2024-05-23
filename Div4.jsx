import React from 'react'
import { useState } from 'react'
import '../Css/Div4.css'
const Div4 = ({ imageUrl, title, description }) => {
  return (
    <>
    <div id='stry' className="fourth-page">
    <div className='image'>
      <img src="Images/page-4 pasta.png" className="page-4-pasta-1" />
    </div>
    <div className="page-4-title-div">
      Discount up to 50% All Excursions
      <div className="page-4-para">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        </p>
      </div>
      <div className="fourth-page-btn-div">
        <button className="fourth-page-btn">READ MORE</button>
      </div>
    </div>
  </div>
  <div className="fourth-page-two">
    <div className="page-4-title-div-2">
      January's Promo: Buy 1 Get 1 Free!
      <div className="page-4-para-2">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        </p>
      </div>
      <div className="fourth-page-btn-div-2">
        <button className="fourth-page-btn-2">READ MORE</button>
      </div>
    </div>
    <div className="img-div-fourth-page">
      <img src="Images/page-4 pasta-2.png" className="page-4-pasta-2" />
    </div>
  </div>
  </>

  );
};

export default Div4;
