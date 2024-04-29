import React from 'react';
import Portfolio from './Portfolio';
import PortfolioProject from './PortfolioProject';
import Cons from './Cons';
import Footer from './Footer';
import Crew from './Crew';

const PortfolioPage = () => {
  return (
    <div className="portfoliopage-page">
        <Portfolio/>
        <PortfolioProject/>
        <Crew/>
      
      <Cons />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
