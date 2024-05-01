import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LearnMore.css';

const LearnMore6 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/ai_driven_security/');
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
          <h2>The World of AI-Driven Security</h2>
          <p style={{ color: 'black' }}>As a leading provider of AI-driven security solutions, we leverage cutting-edge technologies to protect your digital assets and safeguard against emerging threats. Our comprehensive suite of security services utilizes advanced machine learning algorithms and behavioral analytics to detect and mitigate potential security risks in real-time. From threat intelligence to endpoint protection, we offer tailored solutions to address the unique security challenges faced by your organization. Partner with us to fortify your defenses and stay one step ahead of cyber adversaries in today's ever-evolving threat landscape.</p>
        </div>
        <div className="right-column">
          <img src={data['learnmore-div1']['right-column']['image_url']} alt="Security+" />
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

export default LearnMore6;
