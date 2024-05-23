import { useState } from 'react'
import '../Css/Footer.css'
const Footer = () => {
  return (
    <>
 <footer id='contact' className="footer">
    <div className="container-last">
      <div className="row">
        <div className="footer-col" id="first-column">
          <h4>Title Here</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            dignissim nunc, id maximus ex. Etiam nec dignissim elit, at
            dignissim enim.{" "}
          </p>
          <div className="social-links">
      <div className="div-icons-last">
        <a href="#" aria-label="Instagram">
          <i className="bx bxl-instagram" id="insta"></i>
        </a>
      </div>
      <div className="div-icons-last">
        <a href="#" aria-label="Facebook">
          <i className="bx bxl-facebook" id="fb"></i>
        </a>
      </div>
      <div className="div-icons-last">
        <a href="#" aria-label="Twitter">
          <i className="bx bxl-twitter" id="twi"></i>
        </a>
      </div>
      <div className="div-icons-last">
        <a href="#" aria-label="WhatsApp">
          <i className="bx bxl-whatsapp" id="wsp"></i>
        </a>
      </div>
    </div>
        </div>
        <div className="footer-col">
          <h4 className="about-last">About</h4>
          <ul className="first-ul">
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Brand Guidelines</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-col" id="third-column">
          <h4 className="services-last">Services</h4>
          <ul className="second-ul">
            <li>
              <a href="#">How to Order</a>
            </li>
            <li>
              <a href="#">Our Product</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Promo</a>
            </li>
            <li>
              <a href="#">Payment Method</a>
            </li>
          </ul>
        </div>
        <div className="footer-col" id="fourth-column">
          <h4 className="others-last">Other</h4>
          <ul className="third-ul">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

    </>
  )
}

export default Footer
