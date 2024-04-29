import React from 'react';
import './Footer.css';
import instaIcon from './image/gmail.png';
import linkedinIcon from './image/linkedin.webp';
import gmailIcon from './image/mail.webp';
import fbIcon from './image/fb.webp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left">
          <button className="privacy-policy-button">Privacy Policy</button>
        </div>
        <div className="center">
          <img src={instaIcon} alt="Instagram" className="social-icon" />
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          <img src={gmailIcon} alt="Gmail" className="social-icon" />
          <img src={fbIcon} alt="Fb" className="social-icon" />
        </div>
        <div className="right">
          <p>All rights reserved by SystemHeuristics.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
