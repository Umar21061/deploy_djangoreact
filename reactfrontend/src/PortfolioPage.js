import React from 'react';
import Portfolio from './Portfolio';
import Cons from './Cons';
import Footer from './Footer';

import Project from './project';

const PortfolioPage = () => {
  return (
    <div className="portfoliopage-page">
        <Portfolio/>
        <Project/>
        
       
      
      <Cons />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
