import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LearnMore.css';

const LearnMore8 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/robotic_process_automation/');
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
          <h2>The World of Robotic Process Automation</h2>
          <p style={{ color: 'black' }}>Experience the revolution in business process automation with our robotic process automation (RPA) solutions. Our RPA tools and technologies streamline repetitive tasks, improve accuracy, and enhance operational efficiency across your organization. From data entry to customer support, we empower businesses to automate manual processes and focus on innovation and growth. Partner with us to unlock the full potential of RPA and transform your business operations.</p>
        </div>
        <div className="right-column">
          <img src={data['learnmore-div1']['right-column']['image_url']} alt="Robotic Process Automation" />
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

export default LearnMore8;
