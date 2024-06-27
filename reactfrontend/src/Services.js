import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'; // Import CSS styles for the Services component
import i1 from './image/service1.png'; // Import image for the first service item
import i2 from './image/service3.png'; // Import image for the second service item
import i4 from './image/service2.png'; // Import image for the fourth service item
import i5 from './image/service4.png'; // Import image for the fifth service item
import i6 from './image/service5.png'; // Import image for the sixth service item
import i7 from './image/service6.png'; // Import image for the seventh service item

const Services = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className='container-services'>
            <section className="services-section">
                <h1 className='heading display-5 fw-bold lh-1 mb-5 slice-left-to-right' style={{ marginBottom: '130px' }}>Our Services</h1>
                <div className="service-container">
                    {/* First row */}
                    <div className="service-row">
                        <div className="service-item">
                            <Link to="/machinelearning">
                                <img src={i1} alt="Machine Learning Service Icon" />
                                <h3>Machine Learning</h3>
                            </Link> 
                        </div>
                        <div className="service-item">
                            <Link to="/generative-ai">
                                <img src={i2} alt="Generative AI Service Icon" />
                                <h3>Generative AI</h3>
                            </Link>
                        </div>
                        <div className="service-item">
                            <Link to="/languageprocessing">
                                <img src={i4} alt="Language Processing Service Icon" />
                                <h3>Language Processing</h3>
                            </Link>
                        </div>
                        <div className="service-item">
                            <Link to="/computervision">
                                <img src={i5} alt="Computer Vision Service Icon" />
                                <h3>Computer Vision</h3>
                            </Link>
                        </div>
                        <div className="service-item">
                            <Link to="/dataanalytics">
                                <img src={i6} alt="Data Analytics Service Icon" />
                                <h3>Data Analytics</h3>
                            </Link>
                        </div>
                        <div className="service-item">
                            <Link to="/aisecurity">
                                <img src={i7} alt="AI-Driven Security Service Icon" />
                                <h3>AI-Driven Security</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Button to see all services */}
                <div>
                    <Link to="/services">
                        <button className="btn btn-primary2">See all services</button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Services;
