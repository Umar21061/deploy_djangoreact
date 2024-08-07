import React from 'react';
import './About.css'; // Importing custom CSS for About component
import logo1 from './image/lg1.jpg'; // Importing logo image for div1
import logo2 from './image/lg2.jpg'; // Importing logo image for div2
import logo3 from './image/lg3.jpg'; // Importing logo image for div3
import logo4 from './image/lg4.jpg'; // Importing logo image for div4
import logo5 from './image/lg5.jpg'; // Importing logo image for div5
import logo6 from './image/lg6.jpg'; // Importing logo image for div6

const About = () => {
    return (
        <div className="about-section">
            <h1 className="large-text">WE’RE PARTNERING UP WITH LIKE-MINDED FOUNDERS AND BRANDS SINCE 2018</h1>
            <div className="about-container">
                <div className="about-row">
                    {/* First Row */}
                    <div className="col-lg-4 col-md-6 about-content">
                        <div className="div1 white-text">
                            <img src={logo1} alt="Logo 1" className="logo-img" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 about-content">
                        <div className="div2 white-text">
                            <img src={logo2} alt="Logo 2" className="logo-img" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 about-content">
                        <div className="div3 white-text">
                            <img src={logo3} alt="Logo 3" className="logo-img" />
                        </div>
                    </div>
                </div>
                <div className="about-row">
                    {/* Second Row */}
                    <div className="col-lg-4 col-md-6 about-content">
                        <div className="div4 white-text">
                            <img src={logo4} alt="Logo 4" className="logo-img" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 about-content">
                        <div className="div5 white-text">
                            <img src={logo5} alt="Logo 5" className="logo-img" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 about-content">
                        <div className="div6 white-text">
                            <img src={logo6} alt="Logo 6" className="logo-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
