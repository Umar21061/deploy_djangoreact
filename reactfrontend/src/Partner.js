import React from 'react';
import './Partner.css';

const Partner = () => {
  return (
    <React.Fragment>
      <h2 className="partner-heading">WHY PARTNERS CHOOSE US?</h2>
      <div className="partner-row">
        <div className="partner-column">
          <h3>Award-winning design</h3>
          <p>We’re quality-oriented with great attention to detail and design accuracy, which helps win new clients and awards.</p>
        </div>
        <div className="partner-column">
          <h3>Crystal clear processes</h3>
          <p>We’re like an open book, so our partners always know what is going on at our end and what’s coming next.</p>
        </div>
        <div className="partner-column">
          <h3>Effective communication</h3>
          <p>We’re always in the loop with our partners and projects, ready to think through the best solutions.</p>
        </div>
      </div>
      <div className="partner-row">
        <div className="partner-column">
          <h3>Operate internationally</h3>
          <p>We’re well managing both the time zone difference and the cultural fit, so our partners don’t feel the distance.</p>
        </div>
        <div className="partner-column">
          <h3>Flexible cooperation</h3>
          <p>We’re adjustable to individual needs and can handle the dynamically changing scope and technology.</p>
        </div>
        <div className="partner-column">
          <h3>Technical excellence</h3>
          <p>We use modern, scalable tools to deliver cutting-edge solutions and finish projects without technical debt.</p>
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
