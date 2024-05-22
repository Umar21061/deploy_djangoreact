import React from 'react';
import team from './image/team.jpg';

const AboutBanner = () => {
  return (
    <div style={{ height: '60vh', position: 'relative' }}>
      <img src={team} alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '1.2' }}>
          Where passion meets purpose, and every journey is a chapter in the narrative of our collective vision.
        </h1>
      </div>
    </div>
  );
};

export default AboutBanner;
