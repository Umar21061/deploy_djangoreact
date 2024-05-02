import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LearnMore.css';

const LearnMore3 = () => {
  const [learnMoreData, setLearnMoreData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/language_processing/');
        setLearnMoreData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="learnmore-div1">Loading...</div>;
  }

  if (error) {
    return <div className="learnmore-div1">Error: {error}</div>;
  }

  const { 'learnmore-div1': div1, 'learnmore-div2': div2, div3 } = learnMoreData;

  return (
    <div className="container">
      <div className="section learnmore-div1">
        <div className="left-column">
          <h2>The World of Language Processing</h2>
          <p style={{ color: 'black' }}>As a leading service provider in the realm of Machine Learning (ML), we specialize in delivering tailored solutions to meet your business needs. Our expertise spans across a myriad of ML techniques including supervised learning, unsupervised learning, and reinforcement learning, allowing us to develop predictive models, automate processes, and extract valuable insights from your data. Whether you aim to optimize operations, enhance customer experience, or drive innovation, our team of seasoned ML experts is dedicated to crafting bespoke solutions that drive tangible results. From data preprocessing to model deployment, we guide you through every step of the ML lifecycle, ensuring seamless integration and maximum impact. Partner with us to harness the power of ML and stay ahead in today's rapidly evolving digital landscape.</p>
        </div>
        <div className="right-column">
          <img src={div1['right-column']['image_url']} alt="Velocity+" />
        </div>
      </div>
      <div className="section learnmore-div2">
        <h3>{div2['heading2']}</h3>
        <p>{div2['heading2-text']}</p>
        <h2>{div2['heading2-heading']}</h2>  
        <ul>
          {div2['rows'].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="image-row">
          {div3.map((item, index) => (
            <div key={index} className="learnmore-image">
              <img src={item['image_url']} alt={item['title']} />
              <h4>{item['title']}</h4>
              <p>{item['text']}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnMore3;
