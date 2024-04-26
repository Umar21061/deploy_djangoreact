import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Career.css'; // Import the Career CSS file
import video from './video/v6.mp4'; // Import the video
import Reward from './reward.js'; // Import Reward component
import Cons from './Cons.js'; // Import Cons component
import Footer from './Footer.js'; // Import Footer component

const Career = () => {
  return (
    <>
    <div className="career-container">
      {/* Video */}
      <video autoPlay loop muted className="career-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Text Overlay */}
      <div className="career-text-overlay">
        <h1 className="career-heading">Can you feel IT?</h1>
        <h5>Hi there - Why don’t you explore what your future is going to be, check out our company vibe!</h5>
      </div>
      {/* Career Opportunities */}
      <div className='container' id='career-opportunities-container'>
        <h6 className="career-heading2">OUR CAREER OPPORTUNITIES</h6>
        <div className="button-row-career ">
          <button className="button-career">All</button>
          <button className="button-career">Sale</button>
        </div>
        {/* Job Row */}
        <div className="job-row">
          <div className="job-info">
            <p className="job-title">Business Development Manager</p>
            <p>Remote or Poznan HQ</p>
          </div>
          <div className="job-info">
            <p className="job-salary">CoE: 12500 - 15700 PLN gross<br />B2B: 15000 - 19000 PLN net + VAT</p>
          </div>
          <div className="job-apply">
            {/* Link to Apply.js */}
            <Link to="/apply" className="button-apply">Apply</Link>
          </div>
        </div>
        <div className="job-row2">
          <div className="job-info2">
            <p className="job-title2">If you didn't find the right job for you, you can still apply with our general form</p>
            <p>Remote or Poznan HQ</p>
          </div>
          <div className="job-apply2">
            {/* Link to Apply.js */}
            <Link to="/apply" className="button-apply2">Apply</Link>
          </div>
        </div>
      </div>
      
    </div>
    <Reward/>
    <Cons/>
    <Footer/>
    </>
  );
};

export default Career;

