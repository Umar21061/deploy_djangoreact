import React from 'react';
import './Premium.css';

const Premium = () => {
  return (
    <div className="page-wrapper">
      <div className="premium-container">
        <div className="premium-header">
          <h2>CHECK OUT MORE PREMIUM RESOURCES FROM OUR TEAM:</h2>
        </div>
        <div className="premium-row">
          <div className="premium-item">
            <h3>Create a perfect startup pitch deck</h3>
            <p>+ Templates included</p>
            <div className="outside-text">
              <p>Learn how to create an investor-ready pitch deck. We combined best practices from companies like Sequoia and YCombinator in three ready-to-use pitch deck templates.</p>
            </div>
          </div>
          <div className="premium-item">
            <h3>Developer Handbook</h3>
            <p>For modern frontend, backend, and mobile developers.</p>
            <div className="outside-text">
              <p>Hungry for knowledge? We've gathered an extensive list of technologies, programming concepts we use to create state-of-the-art web applications.</p>
            </div>
          </div>
          <div className="premium-item">
            <h3>Boilerplate for AWS</h3>
            <p>Opinionated full stack web app’s to be deployed on AWS.</p>
            <div className="outside-text">
              <p> Boilerplate for AWS : Deploy your next web application to AWS quicker, with our seamless boilerplate setup.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
