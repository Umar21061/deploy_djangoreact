import React from 'react';
import Portfolio from './Portfolio';
import Project from './Project';
import Cons from './Cons';
import Footer from './Footer';
import Crew from './Crew';

const PortfolioPage = () => {
  return (
    <div className="portfoliopage-page">
        <Portfolio/>
        <Project/>
        <Crew/>
      
      <Cons />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
