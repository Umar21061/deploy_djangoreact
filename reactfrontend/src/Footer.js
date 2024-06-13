import React from 'react';
import './Footer.css';
import instaIcon from './image/gmail2.png';
import linkedinIcon from './image/linkedin.webp';
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
            <img src={instaIcon} alt="Instagram" className="social-icon" />
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            <img src={gmailIcon} alt="Gmail" className="social-icon" />
            <img src={fbIcon} alt="Facebook" className="social-icon" />
            <img src={linkdin2} alt="linkdin2" className="social-icon" />
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
          <button className="get-in-touch-button">Get in Touch</button>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@systemheuristics.com</p>
          <p>1234 Street Address, City, State, ZIP</p>
          <button className="free-consultation-button">Get Free Consultation</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
