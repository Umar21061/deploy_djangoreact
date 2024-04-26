// ServicesPage.js

import React from 'react';
import './ServicesPage.css';
import video from './video/v4.mp4';
import productImage1 from './image/w1.jpg';
import productImage2 from './image/w2.avif';
import productImage3 from './image/w3.avif';
import productImage4 from './image/w4.avif';
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
      <div className="text-overlay">
        <h1 className="servicespage-heading">Services developed to make your business thrive</h1>
      </div>
      <div>
      <Service2/>
      <Cons />
      <Footer />
    </div>
    </div>
  );
};

export default ServicesPage;
