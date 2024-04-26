// ContactContainer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Cons.css'; // Import your CSS file

function ContactContainer() {
  return (
    <div className="contact-container">
      <div className="row justify-content-center"> {/* Center the columns */}
        <div className="col-md-4"> {/* Each column takes up one-third of the row's width on medium-sized screens and above */}
        <div className="contact-detail">
            <Link to="/contact">
                <button className="get-in-touch-button">Get in Touch</button>
            </Link>
            <br /><br />
            <h5 style={{ border: '1px solid white', display: 'inline-block', padding: '5px' }}>Phone: +1234567890</h5><br />
            <h5 style={{ border: '1px solid white', display: 'inline-block', padding: '5px' }}>Email: example@example.com</h5>
        </div>
        </div>
        <div className="col-md-4"> {/* Second column */}
          <div className="contact-detail">
            <h3 >Lahore</h3><br />
            <h6 >Office No 7</h6><br />
            <h6 >A 5/9 H-block, Valencia Town</h6>
          </div>
        </div>
        <div className="col-md-4"> 
        <div className="contact-detail">
            <h3 >system Heuristics</h3><br />
            <h6 >Since 2020</h6><br />
            <h6 >Lahore Pakistan</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
