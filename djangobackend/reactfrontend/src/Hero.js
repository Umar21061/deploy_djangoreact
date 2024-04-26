import React from 'react';
import './Hero.css';
import rightImage from './image/d25.png';

const Hero = () => {
  return (
    <div className="bg-black auto-height"> {/* Apply the auto-height class */}
      <div className="container col-xxl-8 px-4 py-5 text-white">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={rightImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 slice-left-to-right">We elevate businesses with our Data Science prowess, turning raw data into actionable insights.</h1>
            <h6 className="lead slice-left-to-right">We harness the power of data to fuel innovation and drive strategic growth for businesses.</h6>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 slice-left-to-right">Get in touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
