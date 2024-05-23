import { useState } from 'react'
import "../Css/Div1.css"
const Div1 = ({ images, sections }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
    <div className="first-page">
    <div className="nav flex">
      {/* Navbar links */}
      <div className={`navbar-div ${isOpen ? 'open' : ''}`} id="menus">
        <ul className="flex">
          <li><a href="#home">HOME</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><a href="#stry">OUR STORY</a></li>
          <li><a href="#contact">CONTACT</a></li>
          {/* Search input and icon */}
          <li>
            <div>
              <input type="text" className="nav-btn" />
              <img src="Images/magnifying_glass.png" className="search-icon" alt="Search" />
            </div>
          </li>
        </ul>
      </div>
      {/* Hamburger menu */}
      <span className="toggle-btn" onClick={toggleMenu}>
        ☰
      </span>
    </div>
    <div className="banner inner flex">
      <div className="left">
        <img src="Images/logo.png" className="logo" />
        <img src="Images/Title.png" className="title" />
        <h2>Loremipsum dolor</h2>
        <button className="btn">Read More</button>
        <p className="first-page-para">
          Lorem ipsum dolor sit amet, consectetur adipi- sicing elit, sed do
          iusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>
      <div className="right">
        <img src="Images/pasta.png" className="big" />
        <img src="Images/dip.png" className="small" />
        <img src="Images/leaves.png" className="leaf" />
      </div>
    </div>
  </div>

    </>
  )
}

export default Div1
