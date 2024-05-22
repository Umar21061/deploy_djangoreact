import React from 'react';
import './AboutBanner.css';
import team from './image/team.jpg';

const AboutBanner = () => {
  return (
    <div className="about-banner-container">
      <img src={team} alt="Team" className="about-banner-image" />
      <div className="about-banner-text">
        <h1 className="about-banner-heading">
          Where passion meets purpose, and every journey is a chapter in the narrative of our collective vision.
        </h1>
      </div>
    </div>
  );
};

export default AboutBanner;
