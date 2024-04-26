import React from 'react';
import './Banner.css';
import t33 from './image/t1.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <img src={t33} alt="Background" className="banner-background" />
      <div className="banner-content">
        <h1>People remain our DNA</h1>
        
      </div>
      
    </div>
  );
};

export default Banner;
