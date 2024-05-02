import React, { useState } from 'react';
import './Service2.css';
import { Link } from 'react-router-dom';
import x1Image from './image/x1.png';
import x2Image from './image/x2.png';
import x3Image from './image/x3.png';

const Service2 = () => {
  const [displayCustomerContent, setDisplayCustomerContent] = useState(true);

  return (
    <div className="container-service2">
      <div className="row-servce">
        <div className="col-12 text-center">
          <button className="btn btn-primary mr-2" onClick={() => setDisplayCustomerContent(true)}>Customer Bundles</button>
          <button className="btn btn-primary" onClick={() => setDisplayCustomerContent(false)}>Expertise Based</button>
        </div>
      </div>

      {displayCustomerContent ? (
        <>
          <div className="content-wrapper1">
            <div className="border-around">
              <div className="row">
                {/* Customer Bundles Content */}
                <div className="col-md-4">
                  <h2 className='headingto'>AI Solutions</h2>
                </div>
                <div className="col-md-8 text-md-right">
                  <p className="service-text">Our comprehensive suite of AI services spans from idea inception to market domination, ensuring your startup stays at the forefront of technological advancement. Let's embark on this transformative journey together.</p>
                </div>
              </div>
              <div className="row">
                {/* Brain Hive */}
                <div className="col-md-4">
                  <h3>Machine Learning</h3>
                  <p className="service-text">Empower your business with cutting-edge AI services. Unlock insights, drive efficiency, and innovate like never before with our machine learning solutions.</p>
                  <button className="btn btn learn-btn">
                    <Link to="/machinelearning" style={{ textDecoration: 'none', color: '#443d68' }}>LearnMore</Link>
                    <span className="arrow">⇨</span>
                    <div className="line2"></div>
                  </button>
                </div>
                {/* MVP Forge */}
                <div className="col-md-4">
                  <h3>Generative AI</h3>
                  <p className="service-text">Unleash the power of creativity with our Generative AI services. From art and music to storytelling and design, explore endless possibilities and redefine what's possible.</p>
                  <button className="btn btn learn-btn">
                    <Link to="/generative_ai" style={{ textDecoration: 'none', color: '#443d68' }}>LearnMore</Link>
                    <span className="arrow">⇨</span>
                    <div className="line2"></div>
                  </button>
                </div>
                {/* Launchpad */}
                <div className="col-md-4">
                  <h3>Language Processing</h3>
                  <p className="service-text">Empower your applications with advanced Language Processing AI. Unlock the full potential of text data for deeper insights and seamless user interactions.</p>
                  <button className="btn btn learn-btn">
                    <Link to="/languageprocessing" style={{ textDecoration: 'none', color: '#443d68' }}>LearnMore</Link>
                    <span className="arrow">⇨</span>
                    <div className="line2"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Enterprise Content */}
          <div className="content-wrapper1">
            <div className="border-around">
              <div className="row">
                <div className="col-md-4">
                  <h2 className='headingto'>Data Security</h2>
                </div>
                <div className="col-md-8 text-md-right">
                  <p className="service-text">Unlocking the power of computer vision and data analytics while safeguarding your assets with AI-driven security measures. Elevate your business operations with cutting-edge technology solutions.</p>
                </div>
              </div>
              <div className="row">
                {/* Velocity+ */}
                <div className="col-md-4">
                  <h3>Computer Vision</h3>
                  <p className="service-text">Experience the future of perception with our Computer Vision solutions. From object detection to image classification, revolutionize your business with AI-powered visual intelligence.</p>
                  <button className="btn btn learn-btn">
                    <Link to="/computervision" style={{ textDecoration: 'none', color: '#443d68' }}>LearnMore</Link>
                    <span className="arrow">⇨</span>
                    <div className="line2"></div>
                  </button>
                </div>
                {/* Innovation Lab */}
                <div className="col-md-4">
                  <h3>Data Analytics</h3>
                  <p className="service-text">Elevate your decision-making with our Data Analytics services. Turn raw data into actionable insights, driving strategic growth and staying ahead of the curve in today's data-driven world.</p>
                  <button className="btn btn learn-btn">
                    <Link to="/dataanalytics" style={{ textDecoration: 'none', color: '#443d68' }}>LearnMore</Link>
                    <span className="arrow">⇨</span>
                    <div className="line2"></div>
                  </button>
                </div>
                {/* Digital Disruption */}
                <div className="col-md-4">
                  <h3>AI-Driven Security</h3>
                  <p className="service-text">Safeguard your assets with our AI-Driven Security solutions. Detect threats, anticipate risks, and fortify your defenses with cutting-edge technology, ensuring peace of mind in an ever-evolving digital landscape.</p>
                  <button className="btn btn learn-btn">
                    <Link to="/aisecurity" style={{ textDecoration: 'none', color: '#443d68' }}>LearnMore</Link>
                    <span className="arrow">⇨</span>
                    <div className="line2"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Agencies Content */}
          <div className="content-wrapper1">
            <div className="border-around">
              <div className="row">
                <div className="col-md-4">
                  <h2 className='headingto'>Automation Solutions</h2>
                </div>
                <div className="col-md-8 text-md-right">
                  <p className="service-text">Harness the power of data-driven foresight with predictive analytics and streamline operations through robotic process automation. Drive efficiency and strategic decision-making with these innovative solutions.</p>
                </div>
              </div>
              <div className="row">
                {/* Co-pitching */}
                <div className="col-md-4">
                  <h3>Predictive Analytics</h3>
                  <p className="service-text">Stay ahead of the game with our Predictive Analytics solutions. Anticipate trends, forecast outcomes, and make informed decisions with confidence, leveraging the power of data-driven insights to drive your success.</p>
                  <button className="btn btn learn-btn">
                    <Link to="/predictiveanalysis" style={{ textDecoration: 'none', color: '#443d68' }}>LearnMore</Link>
                    <span className="arrow">⇨</span>
                    <div className="line2"></div>
                  </button>
                </div>
                {/* Digital Campaigns */}
                <div className="col-md-8">
                  <h3>Robotic Process Automation</h3>
                  <p className="service-text">Automate repetitive tasks and streamline workflows with our Robotic Process Automation solutions. Boost productivity, reduce errors, and free up valuable time for your team to focus on high-value activities, driving efficiency and innovation.</p>
                  <button className="btn btn learn-btn">
                    <Link to="/reboticautomation" style={{ textDecoration: 'none', color: '#443d68' }}>LearnMore</Link>
                    <span className="arrow">⇨</span>
                    <div className="line2"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Product Design Content */}
          <div className="content-wrapper1">
            <div className="border-around">
              <div className="row">
                <div className="col-md-12">
                  <div className="scrolling-header">
                    Product Design 
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <p className="service-text">Successful digital products should not only be visually appealing but also deeply aligned with user requirements. We designed a handful of our own apps, and using that experience, we can employ UserTesting, Empathy Maps, and Customer Journey Mapping to help you identify, examine, and validate the problem your product addresses. Then, use Figma and Adobe XD to prototype and design the precise solution.</p>
                  <div className="row">
                    <div className="col-md-12 text-left">
                      <button className="btn btn learn-btn">
                        <Link to="/productdesign" style={{ textDecoration: 'none', color: '#443d68' }}>LearnMore</Link>
                        <span className="arrow">⇨</span>
                        <div className="line2"></div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src={x1Image} alt="x1" className="x1-image" />
                </div>
              </div>
            </div>
          </div>
          {/* Web App Development Content */}
          <div className="content-wrapper1">
            <div className="border-around">
              <div className="row">
                <div className="col-md-12">
                  <div className="scrolling-header">
                    Web App Development
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <p className="service-text">Scalable, user-friendly, and efficient digital solutions ease achieving business goals. We understand it, and having created dozens of successful projects, we know how to utilize Python’s modularity to deliver web apps that are easy to maintain and expand, use React to craft dynamic user interfaces that adapt in real time, and leverage Vue.js to create lightweight yet powerful solutions.</p>
                  <div className="row">
                    <div className="col-md-12 text-left">
                      <button className="btn btn learn-btn">
                        <Link to="/webdevelopment" style={{ textDecoration: 'none', color: '#443d68' }}>LearnMore</Link>
                        <span className="arrow">⇨</span>
                        <div className="line2"></div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src={x2Image} alt="x2" className="x2-image" />
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Development Content */}
          <div className="content-wrapper1">
            <div className="border-around">
              <div className="row">
                <div className="col-md-12">
                  <div className="scrolling-header">
                    Mobile Development
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <p className="service-text">Modern mobile apps must be fast, stable, and compatible with multiple platforms to stand out. We can help you achieve that using React Native to provide all the values your customers might seek. And with our practical experience in the lifestyle, eCommerce, management and entertainment industries, we know how to hit your targets with high-performant, feature-packed, and user-friendly mobile applications. </p>
                  <div className="row">
                    <div className="col-md-12 text-left">
                      <button className="btn btn learn-btn">
                        <Link to="/mobiledevelopment" style={{ textDecoration: 'none', color: '#443d68' }}>LearnMore</Link>
                        <span className="arrow">⇨</span>
                        <div className="line2"></div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src={x3Image} alt="x3" className="x3-image" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Service2;
