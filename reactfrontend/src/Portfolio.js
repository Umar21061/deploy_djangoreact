import React, { useState, useEffect } from 'react';
import './Portfolio.css'; // Import CSS styles for the Portfolio component
import video from './video/v4.mp4'; // Update the path to the video file


const Portfolio = () => {
    const [yearsOnMarket, setYearsOnMarket] = useState(0);
    const [expertsOnBoard, setExpertsOnBoard] = useState(0);
    const [completedProjects, setCompletedProjects] = useState(0);
    const [targetYears, setTargetYears] = useState(0);
    const [targetExperts, setTargetExperts] = useState(0);
    const [targetProjects, setTargetProjects] = useState(0);

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

    return (
        <div className="portfolio-section">
            <video autoPlay muted loop className="video-background">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="portfolio-content">
                <h1>We craft cutting-edge solutions powered by data science, driving digital transformation and innovation for businesses worldwide</h1>
                {/* Add your portfolio items and content here */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="portfolio-info">
                            <h2>{yearsOnMarket}</h2>
                            <div className="line"></div>
                            <h4>Years on the market</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="portfolio-info">
                            <h2>{expertsOnBoard}</h2>
                            <div className="line"></div>
                            <h4>Experts on board</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="portfolio-info">
                            <h2>{completedProjects}</h2>
                            <div className="line"></div>
                            <h4>Completed projects</h4>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    );
}

export default Portfolio;
