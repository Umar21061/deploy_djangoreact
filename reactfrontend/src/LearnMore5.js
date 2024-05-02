import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LearnMore.css';

const LearnMore5 = ({ uniqueClassName }) => {
  const [learnMoreData, setLearnMoreData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data_analytics/');
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
    <div className={`container ${uniqueClassName}`}>
      <div className="learnmore-div1">
        <div className="left-column">
          <h2>{div1['left-column']['heading1']}</h2>
          <p style={{ color: 'black' }}>{div1['left-column']['text']}Our data analytics services empower businesses to unlock the full potential of their data. Leveraging cutting-edge tools and methodologies, we transform raw data into valuable insights, enabling informed decision-making and driving strategic growth. From data collection and cleansing to advanced analytics and visualization, our comprehensive solutions cater to diverse business needs. Whether it's uncovering hidden trends, optimizing processes, or identifying growth opportunities, our team is dedicated to delivering actionable intelligence that drives measurable results. Partner with us to harness the power of data and propel your business forward in today's competitive landscape.</p>
        </div>
        <div className="right-column">
          <img src={div1['right-column']['image_url']} alt="Velocity+" />
        </div>
      </div>
      <div className="learnmore-div2">
        <h3 className="heading2">{div2['heading2']}</h3>
        <p className="heading2-text">{div2['heading2-text']}</p>
        <h2 className="heading2-heading">{div2['heading2-heading']}</h2>
        
        <ul>
          {div2['rows'].map((item, index) => (
            <li key={index} className="numbered-row">
              {item}
            </li>
          ))}
        </ul>
        <div className="image-row">
          {div3.map((item, index) => (
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

export default LearnMore5;
