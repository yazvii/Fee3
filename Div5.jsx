import React from 'react';
import '../Css/Div5.css';

const Div5 = () => {
  return (
    <>
       <div className="container-2">
    <div className="outer-container">
      <div>
        <img
          src="Images/fifth-page-leaf.png"
          className="fifth-page-left-leaf"
        />
      </div>
      <div>
        <img src="Images/fifth-page-title.png" className="fifth-page-title" />
        <p className="fifth-page-para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <img
          src="Images/fifth-page-rectangle.png"
          className="fifth-page-rectangle"
        />
      </div>
      <div>
        <img
          src="Images/fifth-page-leaf-right.png"
          className="fifth-page-leaf-right"
        />
      </div>
    </div>
    <img src="Images/big-pizza.png" className="big-pizza" />
    <img src="Images/small-pizza.png" className="small-pizza" />
  </div>
    </>
  );
};

export default Div5;
