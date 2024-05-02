import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LearnMore.css';

const LearnMore9 = ({ uniqueClassName }) => {
  const [learnMoreData, setLearnMoreData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/get_web_app_development_data/');
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
          <p style={{ color: 'black' }}>{div1['left-column']['text']}Our team of seasoned developers, designers, and strategists works collaboratively with you to understand your business objectives, target audience, and market dynamics. With a keen focus on user experience (UX) and user interface (UI) design, we ensure that every interaction with your website is intuitive, seamless, and memorable.</p>
        </div>
        <div className="right-column">
          <img src={div1['right-column']['image_url']} alt="Replace with your alt text" />
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

export default LearnMore9;
