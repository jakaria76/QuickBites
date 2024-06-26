import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt="" />
               <p>i am studying at ahsanullah university of science and technology</p>
               <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>
            <div className="footer-content-center">
                 <h2>COMPANAY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul> 
            </div>
            <div className="footer-content-right">
                  <h2>GET IN TOUCH</h2>
                  <ul>
                    <li>+8801317536550</li>
                    <li>contact@quickbites.com</li>
                  </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 quickbites.com -All Right Reserved</p>
      
    </div>
  )
}

export default Footer

