import React from 'react';

import blog1 from './image/industry.jpg'; // Import the initial background image
import Footer from './Footer';
import Project from './project';

const PortfolioPage = () => {
  return (
    <div className="portfoliopage-page">
        <div className="image-container">
        <img src={blog1} alt="Industry" className="background-image" />
        <div className="centered-text">
          <h1>Industries We Serve</h1>
          <h3>Transforming Challenges into Opportunities with AI</h3>
          <p>At System Heuristics, we harness the transformative power of artificial intelligence to propel innovation and accelerate growth across a variety of sectors. Our tailored AI solutions are crafted to meet the distinctive needs of each industry, empowering businesses to not only succeed but also set new benchmarks of excellence. Discover how our state-of-the-art AI technologies are revolutionizing industries by enhancing precision, optimizing efficiency, and providing an unparalleled competitive edge. Join us as we redefine what's possible and turn today’s challenges into tomorrow's opportunities.</p>
         
        </div>
      </div>
       
        <Project/>
        
       
      
   
      <Footer />
    </div>
  );
}

export default PortfolioPage;
