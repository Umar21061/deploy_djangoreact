import React from 'react';
import './Partner.css';

const Partner = () => {
  return (
    <React.Fragment>
      <h2 className="partner-heading">WHY PARTNERS CHOOSE US?</h2>
      <div className="partner-row">
        <div className="partner-column">
          <h3>Cutting-Edge Technology</h3>
          <p className="partner-text">Access to the latest advancements in AI and machine learning technologies, ensuring solutions are innovative and competitive</p>
        </div>
        <div className="partner-column">
          <h3>Expertise and Experience</h3>
          <p className="partner-text">A team of highly skilled AI professionals with deep industry knowledge and a proven track record of successful implementations.</p>
        </div>
        <div className="partner-column">
          <h3>Customized Solutions</h3>
          <p className="partner-text">Tailored AI solutions that fit specific business needs, helping partners to achieve their unique goals effectively.</p>
        </div>
      </div>
      <div className="partner-row">
        <div className="partner-column">
          <h3>Scalability</h3>
          <p className="partner-text">Ability to scale solutions to meet growing business demands, ensuring long-term reliability and performance.</p>
        </div>
        <div className="partner-column">
          <h3>Data Security and Compliance</h3>
          <p className="partner-text">Rigorous standards for data security and adherence to regulatory requirements, building trust and safeguarding partner interests.</p>
        </div>
        <div className="partner-column">
          <h3>Continuous Support and Development</h3>
          <p className="partner-text">Ongoing support and iterative improvements to AI solutions, keeping systems at the forefront of technology and business needs.</p>
        </div>
      </div>
    </React.Fragment>
  );
}

const PartnerContainer = () => {
  return (
    <div className="partner-container">
      <Partner />
    </div>
  );
}

export default PartnerContainer;
