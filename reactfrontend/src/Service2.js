import React, { useState } from 'react';
import './Service2.css';
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
                  <h2 className='headingto'>Startups</h2>
                </div>
                <div className="col-md-8 text-md-right">
                  <p>From web and mobile app development to product discovery and building MVPs, we aim to meet the unique needs of startups, fuel innovation, and take your business to the next level.</p>
                </div>
              </div>
              <div className="row">
                {/* Brain Hive */}
                <div className="col-md-4">
                  <h3>Brain Hive</h3>
                  <p>A business idea validation to give you customer feedback, a polished PoC, and all necessary materials for increased chances of securing funding and attracting customers.</p>
                  <button className="btn btn learn-btn">
                    Learn more 
                    <span className="arrow">⇨</span>
                    <div className="line2"></div>
                  </button>
                </div>
                {/* MVP Forge */}
                <div className="col-md-4">
                  <h3>MVP Forge</h3>
                  <p>A swift way to develop an MVP solution, regardless of how far your product is in the discovery phase, the particularities of your industry, and individual requirements.</p>
                  <button className="btn btn learn-btn">
                    Learn more 
                    <span className="arrow">⇨</span>
                    <div className="line2"></div>
                  </button>
                </div>
                {/* Launchpad */}
                <div className="col-md-4">
                  <h3>Launchpad</h3>
                  <p>Full suite of premium development services to scale your MVP to a high-quality product – from product design and branding to E2E development and ongoing support.</p>
                  <button className="btn btn learn-btn">
                    Learn more 
                    <span className="arrow">⇒</span>
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
                  <h2 className='headingto'>Enterprise</h2>
                </div>
                <div className="col-md-8 text-md-right">
                  <p>Accelerate your progress, validate ideas, and disrupt the market with a new product. Our goal is to drive growth and innovation and help make you a leader in the industry.</p>
                </div>
              </div>
              <div className="row">
                {/* Velocity+ */}
                <div className="col-md-4">
                  <h3>Velocity+</h3>
                  <p>Supercharge your organization's development with our hands-on workshops and training courses designed to meet your team's skill level and desired topics.</p>
                  <button className="btn btn learn-btn">
                    Learn more 
                    <span className="arrow">⇒</span>
                    <div className="line2"></div>
                  </button>
                </div>
                {/* Innovation Lab */}
                <div className="col-md-4">
                  <h3>Innovation Lab</h3>
                  <p>Embark on a journey of in-depth discovery, user-centric design, tech validation, and strategic foresight together with an all-rounded team of industry pioneers.</p>
                  <button className="btn btn learn-btn">
                    Learn more 
                    <span className="arrow">⇒</span>
                    <div className="line2"></div>
                  </button>
                </div>
                {/* Digital Disruption */}
                <div className="col-md-4">
                  <h3>Digital Disruption</h3>
                  <p>A fusion of premium services with business understanding and hands-on experience – from discovery and product design to E2E development and maintenance.</p>
                  <button className="btn btn learn-btn">
                    Learn more 
                    <span className="arrow">⇒</span>
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
                  <h2 className='headingto'>Agencies</h2>
                </div>
                <div className="col-md-8 text-md-right">
                  <p>Win over prospects effortlessly, boost brand engagement, and elevate your agency's game. Use our team’s expertise and knowledge to achieve remarkable results.</p>
                </div>
              </div>
              <div className="row">
                {/* Co-pitching */}
                <div className="col-md-4">
                  <h3>Co-pitching</h3>
                  <p>The ultimate key to refining your pitch idea or leveraging tech and design expertise. Enhance your agency's proposal, increase its impact and the likelihood of winning over potential prospects.</p>
                  <button className="btn btn learn-btn">
                    Learn more 
                    <span className="arrow">⇒</span>
                    <div className="line2"></div>
                  </button>
                </div>
                {/* Digital Campaigns */}
                <div className="col-md-8">
                  <h3>Digital Campaigns</h3>
                  <p>Take your events and digital campaigns to the next level with immersive experiences that span from mobile and web to AR&VR – from ideation through full development to on-site support.</p>
                  <button className="btn btn learn-btn">
                    Learn more 
                    <span className="arrow">⇒</span>
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
                  <p>Successful digital products should not only be visually appealing but also deeply aligned with user requirements. We designed a handful of our own apps, and using that experience, we can employ UserTesting, Empathy Maps, and Customer Journey Mapping to help you identify, examine, and validate the problem your product addresses. Then, use Figma and Adobe XD to prototype and design the precise solution.</p>
                  <div className="row">
                    <div className="col-md-12 text-left">
                      <button className="btn btn learn-btn">
                        Learn more 
                        <span className="arrow">⇒</span>
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
                  <p>Scalable, user-friendly, and efficient digital solutions ease achieving business goals. We understand it, and having created dozens of successful projects, we know how to utilize Python’s modularity to deliver web apps that are easy to maintain and expand, use React to craft dynamic user interfaces that adapt in real time, and leverage Vue.js to create lightweight yet powerful solutions.</p>
                  <div className="row">
                    <div className="col-md-12 text-left">
                      <button className="btn btn learn-btn">
                        Learn more 
                        <span className="arrow">⇒</span>
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
                  <p>Modern mobile apps must be fast, stable, and compatible with multiple platforms to stand out. We can help you achieve that using React Native to provide all the values your customers might seek. And with our practical experience in the lifestyle, eCommerce, management and entertainment industries, we know how to hit your targets with high-performant, feature-packed, and user-friendly mobile applications. </p>
                  <div className="row">
                    <div className="col-md-12 text-left">
                      <button className="btn btn learn-btn">
                        Learn more 
                        <span className="arrow">⇒</span>
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
