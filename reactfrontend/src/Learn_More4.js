import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LearnMore.css';

const Learn_More4 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/computer_vision/');
        setData(response.data);
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

  return (
    <div>
      <div className="learnmore-div1">
        <div className="left-column">
          <h2>The World of Language Processing</h2>
          <p style={{ color: 'black' }}>As a leading service provider in the realm of Machine Learning (ML), we specialize in delivering tailored solutions to meet your business needs. Our expertise spans across a myriad of ML techniques including supervised learning, unsupervised learning, and reinforcement learning, allowing us to develop predictive models, automate processes, and extract valuable insights from your data. Whether you aim to optimize operations, enhance customer experience, or drive innovation, our team of seasoned ML experts is dedicated to crafting bespoke solutions that drive tangible results. From data preprocessing to model deployment, we guide you through every step of the ML lifecycle, ensuring seamless integration and maximum impact. Partner with us to harness the power of ML and stay ahead in today's rapidly evolving digital landscape.</p>
        </div>
        <div className="right-column">
          <img src={data['learnmore-div1']['right-column']['image_url']} alt="Velocity+" />
        </div>
      </div>
      <div className="learnmore-div2">
        <h3 className="heading2">{data['learnmore-div2']['heading2']}</h3>
        <p className="heading2-text">{data['learnmore-div2']['heading2-text']}</p>
        <ul>
          {data['learnmore-div2']['rows'].map((item, index) => (
            <li key={index} className="numbered-row">
              {item}
            </li>
          ))}
        </ul>
        <div className="image-row">
          {data['div3'].map((item, index) => (
            <div key={index} className="learnmore-image">
              <img src={item['image_url']} alt={item['title']} />
              <h4 className="image-title">{item['title']}</h4>
              <p className="image-text">{item['text']}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn_More4;
