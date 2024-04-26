import React from 'react';
import './Services.css'; // Import CSS styles for the Services component
import i1 from './image/i1.jpg'; // Import image for the first service item
import i2 from './image/i2.jpg'; // Import image for the second service item
import i4 from './image/i3.png'; // Import image for the fourth service item
import i5 from './image/i4.webp'; // Import image for the fifth service item
import i6 from './image/i5.png'; // Import image for the sixth service item
import i7 from './image/i7.png'; // Import image for the seventh service item

const Services = () => {
    return (
        <div className='container'>
            <div className="services-section">
                <h1>Our Services</h1>
                <div className="service-container">
                    {/* First row */}
                    <div className="service-row">
                        <div className="service-item">
                            <img src={i1} alt="Service Icon" />
                            <h2>Data Analysis</h2>
                        </div>
                        <div className="service-item">
                            <img src={i2} alt="Service Icon" />
                            <h2>Predictive Analytics</h2>
                        </div>
                        <div className="service-item">
                            <img src={i4} alt="Service Icon" />
                            <h2>Language Processing</h2>
                        </div>
                        <div className="service-item">
                            <img src={i5} alt="Service Icon" />
                            <h2>Image Recognition</h2>
                        </div>
                        <div className="service-item">
                            <img src={i6} alt="Service Icon" />
                            <h2>Machine Learning</h2>
                        </div>
                        <div className="service-item">
                            <img src={i7} alt="Service Icon" />
                            <h2>Data Visualization</h2>
                        </div>
                    </div>
                </div>
                
                {/* Button to see all services */}
                <button className="see-all-button">See all services</button>
            </div>
        </div>
    );
}

export default Services;
