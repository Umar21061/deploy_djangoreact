import React from 'react';
import {  Link } from 'react-router-dom';
import './Services.css'; // Import CSS styles for the Services component
import i1 from './image/service1.png'; // Import image for the first service item
import i2 from './image/service3.png'; // Import image for the second service item
import i4 from './image/service2.png'; // Import image for the fourth service item
import i5 from './image/service4.png'; // Import image for the fifth service item
import i6 from './image/service5.png'; // Import image for the sixth service item
import i7 from './image/service6.png'; // Import image for the seventh service item

const Services = () => {
    return (
        <div className='container'>
            <div className="services-section">
                <h1 className='services-heading'>Our Services</h1>
                <div className="service-container">
                    {/* First row */}
                    <div className="service-row">
                        <div className="service-item">
                        <Link to="/machinelearning"> <img src={i1} alt="Service Icon" /></Link>
                            <h3>Machine Learning</h3>
                        </div>
                        <div className="service-item">
                        <Link to="/generative_ai">  <img src={i2} alt="Service Icon" /></Link>
                            <h3>Generative AI</h3>
                        </div>
                        <div className="service-item">
                        <Link to="/languageprocessing">  <img src={i4} alt="Service Icon" /></Link>
                            <h3>Language Processing</h3>
                        </div>
                        <div className="service-item">
                        <Link to="/computervision">  <img src={i5} alt="Service Icon" /></Link>
                            <h3>Computer Vision</h3>
                        </div>
                        <div className="service-item">
                        <Link to="/dataanalytics">   <img src={i6} alt="Service Icon" /></Link>
                            <h3>Data Analytics</h3>
                        </div>
                        <div className="service-item">
                        <Link to="/aisecurity"> <img src={i7} alt="Service Icon" /></Link>
                            <h3>AI-Driven Security</h3>
                        </div>
                    </div>
                </div>
                
                {/* Button to see all services */}
                <div >
                <Link to="/services">
                            <button className="see-all-button">See all services</button>
                        </Link>
                </div>
            </div>
        </div>
        
    );
}

export default Services;
