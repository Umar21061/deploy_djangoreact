import React from 'react';
import Portfolio from './Portfolio';

import Footer from './Footer';

import Project from './project';

const PortfolioPage = () => {
  return (
    <div className="portfoliopage-page">
        <Portfolio/>
        <Project/>
       
      <Footer />
    </div>
  );
}

export default PortfolioPage;
