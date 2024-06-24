// src/IndustryPage.js
import React from 'react';
import './IndustryPage.css'; // Import the CSS file for styling
import blog1 from './image/industry.jpg'; // Import the initial background image

// Example imports for industry images
import healthcareImage from './image/a2.jpg';
import fintechImage from './image/a2.jpg';
import legalImage from './image/a2.jpg';
import educationImage from './image/a2.jpg';
import realEstateImage from './image/a2.jpg';
import logisticsImage from './image/a2.jpg';

const IndustryPage = () => {
  return (
    <div className="industry-page">
      <div className="image-container">
        <img src={blog1} alt="Industry" className="background-image" />
        <div className="centered-text">
          <h1>Industries We Serve</h1>
          <h3>Transforming Challenges into Opportunities with AI</h3>
          <p>At System Heuristics, we harness the transformative power of artificial intelligence to propel innovation and accelerate growth across a variety of sectors. Our tailored AI solutions are crafted to meet the distinctive needs of each industry, empowering businesses to not only succeed but also set new benchmarks of excellence. Discover how our state-of-the-art AI technologies are revolutionizing industries by enhancing precision, optimizing efficiency, and providing an unparalleled competitive edge. Join us as we redefine what's possible and turn today’s challenges into tomorrow's opportunities.</p>
        </div>
      </div>

      {/* Healthcare Section */}
      <div className="industry-container left-layout Healthcare">
        <div className="content">
          <div className="text-container">
            <h1 className="industry-heading">Healthcare</h1>
            <p className="industry-description">AI is revolutionizing healthcare by improving diagnostic accuracy, optimizing treatment plans, and personalizing patient care. Our AI solutions facilitate early disease detection, streamline clinical workflows, and enable healthcare providers to deliver both preventive and predictive care, significantly improving patient outcomes and operational efficiencies.</p>
          </div>
        </div>
        <div className="image">
          <img src={healthcareImage} alt="Healthcare" />
        </div>
      </div>

      {/* FinTech Section */}
      <div className="industry-container left-layout FinTech">
        <div className="image">
          <img src={fintechImage} alt="FinTech" />
        </div>
        <div className="content">
          <div className="text-container">
            <h1 className="industry-heading">FinTech</h1>
            <p className="industry-description">In the fintech sector, our AI-driven solutions are transforming traditional banking and financial services. From risk assessment and fraud detection to personalized financial advice and automated customer service, AI helps financial institutions increase security, improve customer satisfaction, and drive smarter financial decision-making.</p>
          </div>
        </div>
      </div>

      {/* Legal Section */}
      <div className="industry-container left-layout Legal">
        <div className="content">
          <div className="text-container">
            <h1 className="industry-heading">Legal</h1>
            <p className="industry-description">AI in the legal field automates routine tasks, enhances document management, and provides advanced tools for legal research and litigation support. Our AI technologies help law firms and legal departments improve their operational efficiency, reduce human error, and deliver faster, more accurate legal services.</p>
          </div>
        </div>
        <div className="image">
          <img src={legalImage} alt="Legal" />
        </div>
      </div>

      {/* Education Section */}
      <div className="industry-container left-layout Education">
        <div className="image">
          <img src={educationImage} alt="Education" />
        </div>
        <div className="content">
          <div className="text-container">
            <h1 className="industry-heading">Education</h1>
            <p className="industry-description">Our AI solutions in education tailor learning experiences to individual student needs. AI-driven platforms provide real-time insights into student performance, automate administrative tasks, and facilitate personalized and adaptive learning strategies that enhance engagement and improve educational outcomes.</p>
          </div>
        </div>
      </div>

      {/* Real Estate Section */}
      <div className="industry-container left-layout RealEstate">
        <div className="content">
          <div className="text-container">
            <h1 className="industry-heading">Real Estate</h1>
            <p className="industry-description">AI is reshaping the real estate industry by providing deeper insights into market trends, property valuations, and investment opportunities. Our AI tools assist in virtual property tours, predictive analysis for investment, and streamlined transaction processes, enhancing the buying, selling, and leasing experience for all parties.</p>
          </div>
        </div>
        <div className="image">
          <img src={realEstateImage} alt="Real Estate" />
        </div>
      </div>

      {/* Logistics Section */}
      <div className="industry-container left-layout Logistics">
        <div className="image">
          <img src={logisticsImage} alt="Logistic" />
        </div>
        <div className="content">
          <div className="text-container">
            <h1 className="industry-heading">Logistics</h1>
            <p className="industry-description">In logistics, AI enhances operational efficiency through optimized route planning, predictive maintenance of vehicles, and automated inventory management. Our solutions help logistics companies reduce delivery times, minimize costs, and improve service quality by predicting demand and automating critical supply chain processes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryPage;
