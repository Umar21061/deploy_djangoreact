import React from 'react';
import './Footer.css';
import instaIcon from './image/gmail2.png';

import gmailIcon from './image/gmail.png';
import fbIcon from './image/fb.webp';
import logo from './image/nlogo.jpg';
import linkdin2 from './image/linkdin.webp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="column">
          <img src={logo} alt="System Heuristics Logo" className="logo" />
          <span className="logo-text2">System Heuristics</span>
          <div className="social-icons">
            <a href="https://www.instagram.com/system.heuristics?igsh=MXYyanl0b24xMTJ5ag==" target="_blank" rel="noopener noreferrer">
              <img src={gmailIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/system-heuristics-bbaa61256/" target="_blank" rel="noopener noreferrer">
              <img src={linkdin2} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="mailto:info@systemheuristics.com" target="_blank" rel="noopener noreferrer">
              <img src={instaIcon} alt="Gmail" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/share/gGTgpAxUmNpv7bU1/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
              <img src={fbIcon} alt="Facebook" className="social-icon" />
            </a>
           
          </div>
        </div>
        <div className="column">
          <h3>Services</h3>
          <p>Service 1</p>
          <p>Service 2</p>
          <p>Service 3</p>
          <p>Service 4</p>
        </div>
        <div className="column">
          <button className="btn-primary3">Get in Touch</button>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@systemheuristics.com</p>
          <p>1234 Street Address, City, State, ZIP</p>
          <button className="btn-primary3">Get Free Consultation</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
