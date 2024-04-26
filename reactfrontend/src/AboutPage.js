import React, { useEffect, useState } from 'react';
import './Aboutpage.css';
import About from './About';
import Cons from './Cons';
import Footer from './Footer';
import Banner from './Banner';
import Crew from './crew';
import Value from './Value';

const Aboutpage = () => {
  const [yearsOnMarket, setYearsOnMarket] = useState(0);
  const [expertsOnBoard, setExpertsOnBoard] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [timeToHire, setTimeToHire] = useState(0); 
  const [targetYears, setTargetYears] = useState(0);
  const [targetExperts, setTargetExperts] = useState(0);
  const [targetProjects, setTargetProjects] = useState(0);
  const [targetTime, setTargetTime] = useState(0);

  useEffect(() => {
      fetchMarketData();
  }, []);

  const fetchMarketData = async () => {
      try {
          const response = await fetch('/api/get_market_data/');
          const data = await response.json();
          setTargetYears(data['Years on the market']);
          setTargetExperts(data['Experts on board']);
          setTargetProjects(data['Completed projects']);
          setTargetTime(data['Time to hire']);
      } catch (error) {
          console.error('Error fetching market data:', error);
      }
  };

  useEffect(() => {
      const interval = setInterval(() => {
          setYearsOnMarket(prevYears => {
              if (prevYears < targetYears) return prevYears + 1;
              return prevYears;
          });
      }, 1000); // Change the delay as needed

      return () => clearInterval(interval);
  }, [targetYears]);

  useEffect(() => {
      const interval = setInterval(() => {
          setExpertsOnBoard(prevExperts => {
              if (prevExperts < targetExperts) return prevExperts + 1;
              return prevExperts;
          });
      }, 50); // Change the delay as needed

      return () => clearInterval(interval);
  }, [targetExperts]);

  useEffect(() => {
      const interval = setInterval(() => {
          setCompletedProjects(prevProjects => {
              if (prevProjects < targetProjects) return prevProjects + 1;
              return prevProjects;
          });
      }, 50); // Change the delay as needed

      return () => clearInterval(interval);
  }, [targetProjects]);

  useEffect(() => {
      const interval = setInterval(() => {
          setTimeToHire(prevTime => {
              if (prevTime < targetTime) return prevTime + 1;
              return prevTime;
          });
      }, 1000); // Change the delay as needed

      return () => clearInterval(interval);
  }, [targetTime]);

  const handleHover = (number) => {
      console.log(`Hovered on ${number}`);
      // Add logic to update the text or perform other actions
  };

  return (
    <div className="about-page">
      <Banner /> {/* Add Banner component on top */}
      
      <div className="aboutpage-container">
        <div className="aboutpage-section">
          <div className="container">
            <div className="aboutpage-row">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="aboutpage-info" onMouseEnter={() => handleHover(14)}>
                  <h1>{yearsOnMarket}</h1>
                  <div className="line"></div>
                  <h4>Years on the market</h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="aboutpage-info" onMouseEnter={() => handleHover(60)}>
                  <h1>{expertsOnBoard}</h1>
                  <div className="line"></div>
                  <h4>Experts on board</h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="aboutpage-info" onMouseEnter={() => handleHover(400)}>
                  <h1>{completedProjects}</h1>
                  <div className="line"></div>
                  <h4>Completed projects</h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="aboutpage-info" onMouseEnter={() => handleHover(timeToHire)}>
                  <h1>{timeToHire}</h1>
                  <div className="line"></div>
                  <h4>Time to hire (days)</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <Crew />
      <Value />
      <Cons />
      <Footer />
    </div>
  );
}

export default Aboutpage;
