import React from 'react';
import Portfolio from './Portfolio';
import PortfolioProject from './PortfolioProject';
import Cons from './Cons';
import Footer from './Footer';
import Crew from './crew';

const PortfolioPage = () => {
  return (
    <div className="portfoliopage-page">
        <Portfolio/>
        
        <Crew/>
      
      <Cons />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
