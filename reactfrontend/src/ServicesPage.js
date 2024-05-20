// ServicesPage.js

import React from 'react';
import './ServicesPage.css';
import video from './video/v4.mp4';

import Cons from './Cons';
import Footer from './Footer';
import Service2 from './Service2';

const ServicesPage = () => {
  return (
    <div className="servicespage-container">
      <video autoPlay loop muted className="servicespage-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="service-videotext2">
      We deliver excellence in every project, offering a wide array of services that meet the highest standards of quality.
      </div>
      <>
      <div>
        <Service2 />
        <Cons />
        <Footer />
      </div>
      </>
    </div>
  );
};

export default ServicesPage;
